import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

import { DEFAULT_LLM_CONFIG } from "../config/llm.config";

@Injectable()
export class LlmChatClient {
  constructor(private readonly http: HttpService) {}

  private buildChatCompletionsUrl(baseUrl: string): string {
    const trimmed = baseUrl.replace(/\/$/, "");
    if (trimmed.endsWith("/v1")) return `${trimmed}/chat/completions`;
    if (trimmed.endsWith("/v1/")) return `${trimmed}chat/completions`;
    return `${trimmed}/v1/chat/completions`;
  }

  public async createCompletion(prompt: string): Promise<string> {
    const url = this.buildChatCompletionsUrl(DEFAULT_LLM_CONFIG.baseUrl);

    const { data } = await this.http.axiosRef.post<{
      choices?: {
        message?: { content?: string; [key: string]: unknown };
        finish_reason?: string;
      }[];
    }>(
      url,
      {
        model: DEFAULT_LLM_CONFIG.modelName,
        messages: [
          {
            role: "system",
            content: DEFAULT_LLM_CONFIG.systemPrompt,
          },
          { role: "user", content: prompt },
        ],
        temperature: DEFAULT_LLM_CONFIG.temperature,
        max_tokens: DEFAULT_LLM_CONFIG.maxTokens,
      },
      {
        headers: {
          "Content-Type": "application/json",
          ...(DEFAULT_LLM_CONFIG.apiKey
            ? { Authorization: `Bearer ${DEFAULT_LLM_CONFIG.apiKey}` }
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
          model: DEFAULT_LLM_CONFIG.modelName,
          messages: [
            { role: "system", content: DEFAULT_LLM_CONFIG.systemPrompt },
            { role: "user", content: prompt },
            { role: "assistant", content },
            {
              role: "user",
              content:
                "Continue from where you left off. Do not repeat previous text. Return only the continuation. No code fences.",
            },
          ],
          temperature: DEFAULT_LLM_CONFIG.temperature,
          max_tokens: Math.min(DEFAULT_LLM_CONFIG.maxTokens, 1200),
        },
        {
          headers: {
            "Content-Type": "application/json",
            ...(DEFAULT_LLM_CONFIG.apiKey
              ? { Authorization: `Bearer ${DEFAULT_LLM_CONFIG.apiKey}` }
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
        .replace(/(^|\n)```[A-Za-z]*\s*\n/g, "$")
        .replace(/\n```(\s*\n|$)/g, "\n");

      if (tail && tail.trim().length > 0) {
        content = `${content}${tail}`;
      }
    }

    if (!content || content.trim().length === 0) {
      throw new Error("LLM did not return any content");
    }
    return content;
  }
}
