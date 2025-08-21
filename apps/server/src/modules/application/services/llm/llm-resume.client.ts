import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

import { RESUME_LLM_CONFIG } from "../../config/llm.config";

@Injectable()
export class ResumeLlmClient {
  constructor(private readonly http: HttpService) {}

  private buildChatCompletionsUrl(baseUrl: string): string {
    const trimmed = baseUrl.replace(/\/$/, "");
    if (trimmed.endsWith("/v1")) return `${trimmed}/chat/completions`;
    if (trimmed.endsWith("/v1/")) return `${trimmed}chat/completions`;
    return `${trimmed}/v1/chat/completions`;
  }

  private removeDuplicatedContent(content: string): string {
    const paragraphs = content.split(/\n\n+/).filter((p) => p.trim().length > 0);

    if (paragraphs.length <= 1) return content;

    const cleanedParagraphs: string[] = [];
    const seenContent = new Set<string>();

    for (const paragraph of paragraphs) {
      const trimmed = paragraph.trim();
      if (trimmed.length === 0) continue;

      const normalized = trimmed
        .replace(/\s+/g, " ")
        .replace(/[^\s\w.@-]/g, "")
        .toLowerCase();

      if (seenContent.has(normalized)) {
        continue;
      }

      let isDuplicate = false;
      for (const seen of seenContent) {
        const similarity = this.calculateSimilarity(normalized, seen);
        if (similarity > 0.7) {
          isDuplicate = true;
          break;
        }
      }

      if (!isDuplicate) {
        cleanedParagraphs.push(trimmed);
        seenContent.add(normalized);
      }
    }

    return cleanedParagraphs.join("\n\n");
  }

  private calculateSimilarity(str1: string, str2: string): number {
    if (str1 === str2) return 1;
    if (str1.length === 0 || str2.length === 0) return 0;

    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;

    if (longer.length === 0) return 1;

    const words1 = new Set(longer.split(" "));
    const words2 = new Set(shorter.split(" "));

    const intersection = new Set([...words1].filter((x) => words2.has(x)));
    const union = new Set([...words1, ...words2]);

    return intersection.size / union.size;
  }

  public async createCompletion(prompt: string): Promise<string> {
    const url = this.buildChatCompletionsUrl(RESUME_LLM_CONFIG.baseUrl);

    const { data } = await this.http.axiosRef.post<{
      choices?: {
        message?: { content?: string; [key: string]: unknown };
        finish_reason?: string;
      }[];
    }>(
      url,
      {
        model: RESUME_LLM_CONFIG.modelName,
        messages: [
          {
            role: "system",
            content: RESUME_LLM_CONFIG.systemPrompt,
          },
          { role: "user", content: prompt },
        ],
        temperature: RESUME_LLM_CONFIG.temperature,
        max_tokens: RESUME_LLM_CONFIG.maxTokens,
      },
      {
        headers: {
          "Content-Type": "application/json",
          ...(RESUME_LLM_CONFIG.apiKey
            ? { Authorization: `Bearer ${RESUME_LLM_CONFIG.apiKey}` }
            : {}),
        },
      },
    );

    let content = data.choices?.[0]?.message?.content ?? "";
    if (content && typeof content !== "string") content = String(content);

    content = content.replace(/<think>[\S\s]*?<\/think>/gi, "");
    content = content.replace(/```think[\S\s]*?```/gi, "");
    content = content.replace(/\[thinking][\S\s]*?\[\/thinking]/gi, "");

    content = content.replace(/(^|\n)```[A-Za-z]*\s*\n/g, "$1").replace(/\n```(\s*\n|$)/g, "\n");

    if (!content || content.trim().length === 0) {
      const fromOtherChoice = data.choices
        ?.map((c) => c.message?.content)
        .find((t): t is string => typeof t === "string" && t.trim().length > 0);
      if (fromOtherChoice) {
        content = fromOtherChoice
          .replace(/<think>[\S\s]*?<\/think>/gi, "")
          .replace(/```think[\S\s]*?```/gi, "")
          .replace(/\[thinking][\S\s]*?\[\/thinking]/gi, "")
          .replace(/(^|\n)```[A-Za-z]*\s*\n/g, "$1")
          .replace(/\n```(\s*\n|$)/g, "\n");
      }
    }

    const finishReason: string | undefined = data.choices?.[0]?.finish_reason;

    if (finishReason === "length") {
      const { data: cont } = await this.http.axiosRef.post<{
        choices?: { message?: { content?: string }; finish_reason?: string }[];
      }>(
        url,
        {
          model: RESUME_LLM_CONFIG.modelName,
          messages: [
            { role: "system", content: RESUME_LLM_CONFIG.systemPrompt },
            { role: "user", content: prompt },
            { role: "assistant", content },
            {
              role: "user",
              content:
                "Continue from where you left off. Do not repeat previous text. Return only the continuation. No code fences.",
            },
          ],
          temperature: RESUME_LLM_CONFIG.temperature,
          max_tokens: Math.min(RESUME_LLM_CONFIG.maxTokens, 1200),
        },
        {
          headers: {
            "Content-Type": "application/json",
            ...(RESUME_LLM_CONFIG.apiKey
              ? { Authorization: `Bearer ${RESUME_LLM_CONFIG.apiKey}` }
              : {}),
          },
        },
      );

      let tail = cont.choices?.[0]?.message?.content ?? "";
      if (tail && typeof tail !== "string") tail = String(tail);
      tail = tail
        .replace(/<think>[\S\s]*?<\/think>/gi, "")
        .replace(/```think[\S\s]*?```/gi, "")
        .replace(/\[thinking][\S\s]*?\[\/thinking]/gi, "")
        .replace(/(^|\n)```[A-Za-z]*\s*\n/g, "$1")
        .replace(/\n```(\s*\n|$)/g, "\n");

      if (tail && tail.trim().length > 0) {
        content = `${content}${tail}`;
      }
    }

    content = this.removeDuplicatedContent(content);

    if (!content || content.trim().length === 0) {
      throw new Error("LLM did not return any content");
    }
    return content;
  }
}
