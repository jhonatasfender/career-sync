import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { Injectable, Logger } from "@nestjs/common";

import { DEFAULT_LLM_CONFIG } from "../config/llm.config";

type PromptLogEvent = {
  type: "prompt_built" | "llm_response" | "error";
  timestamp: string;
  requestId?: string;
  userId: string;
  channels?: string[];
  expression?: string;
  jobDescriptionLength?: number | null;
  promptHash?: string;
  promptLength?: number;
  coverLetterHash?: string;
  coverLetterLength?: number;
  model?: string;
  prompt?: string;
  coverLetter?: string | null;
  errorMessage?: string;
};

@Injectable()
export class ApplicationLoggingService {
  private readonly logger = new Logger(ApplicationLoggingService.name);
  private readonly logsDir = process.env.LOG_DIR ?? "logs";
  private readonly logFilePath = path.join(this.logsDir, "application.log");
  private readonly allowPromptLog = process.env.ALLOW_PROMPT_LOG !== "false";

  private async appendJsonlLine(obj: PromptLogEvent): Promise<void> {
    try {
      await mkdir(path.dirname(this.logFilePath), { recursive: true });
      const line = JSON.stringify(obj) + "\n";
      await writeFile(this.logFilePath, line, { flag: "a" });
    } catch (error) {
      this.logger.warn("Failed to write application log line", error as Error);
    }
  }

  public computeSha256(input: string): string {
    return createHash("sha256").update(input, "utf8").digest("hex");
  }

  private redactPII(text: string): string {
    let result = text.replace(/[\w%+.-]+@[\d.a-z-]+\.[a-z]{2,}/gi, "[REDACTED_EMAIL]");
    result = result.replace(/\+?\d[\d\s().-]{7,}\d/g, "[REDACTED_PHONE]");
    return result;
  }

  public async logPromptBuilt(params: {
    userId: string;
    channels: string[];
    expression: string;
    jobDescription?: string | null;
    prompt: string;
    model?: string;
    requestId?: string;
  }): Promise<void> {
    const event: PromptLogEvent = {
      type: "prompt_built",
      timestamp: new Date().toISOString(),
      requestId: params.requestId,
      userId: params.userId,
      channels: params.channels,
      expression: params.expression,
      jobDescriptionLength: params.jobDescription ? params.jobDescription.length : null,
      promptHash: this.computeSha256(params.prompt),
      promptLength: params.prompt.length,
      model: params.model,
    };

    if (this.allowPromptLog) {
      event.prompt = this.redactPII(params.prompt);
    }

    await this.appendJsonlLine(event);
  }

  public async logLlmResponse(params: {
    userId: string;
    channels: string[];
    expression: string;
    prompt: string;
    coverLetter: string | null;
    model?: string;
    requestId?: string;
  }): Promise<void> {
    const event: PromptLogEvent = {
      type: "llm_response",
      timestamp: new Date().toISOString(),
      requestId: params.requestId,
      userId: params.userId,
      channels: params.channels,
      expression: params.expression,
      promptHash: this.computeSha256(params.prompt),
      promptLength: params.prompt.length,
      coverLetterHash: params.coverLetter ? this.computeSha256(params.coverLetter) : undefined,
      coverLetterLength: params.coverLetter ? params.coverLetter.length : undefined,
      model: params.model,
    };

    if (this.allowPromptLog) {
      event.prompt = this.redactPII(params.prompt);
      event.coverLetter = params.coverLetter ? this.redactPII(params.coverLetter) : null;
    }

    await this.appendJsonlLine(event);
  }

  public async logError(params: {
    userId: string;
    channels: string[];
    expression: string;
    prompt: string;
    error: unknown;
    requestId?: string;
  }): Promise<void> {
    const message = params.error instanceof Error ? params.error.message : String(params.error);
    const event: PromptLogEvent = {
      type: "error",
      timestamp: new Date().toISOString(),
      requestId: params.requestId,
      userId: params.userId,
      channels: params.channels,
      expression: params.expression,
      promptHash: this.computeSha256(params.prompt),
      promptLength: params.prompt.length,
      errorMessage: message,
    };
    await this.appendJsonlLine(event);
  }

  private buildChatCompletionsUrl(baseUrl: string): string {
    const trimmed = baseUrl.replace(/\/$/, "");
    if (trimmed.endsWith("/v1")) return `${trimmed}/chat/completions`;
    if (trimmed.endsWith("/v1/")) return `${trimmed}chat/completions`;
    return `${trimmed}/v1/chat/completions`;
  }

  private async appendMarkdown(content: string): Promise<void> {
    const mdPath = path.join(this.logsDir, "application.md");
    try {
      await mkdir(path.dirname(mdPath), { recursive: true });
      await writeFile(mdPath, content + "\n\n", { flag: "a" });
    } catch (error) {
      this.logger.warn("Failed to write application markdown log", error as Error);
    }
  }

  private sanitizeContent(text: string): string {
    let result = text
      .replace(/<think>[\S\s]*?<\/think>/gi, "")
      .replace(/```think[\S\s]*?```/gi, "")
      .replace(/\[thinking][\S\s]*?\[\/thinking]/gi, "")
      .replace(/(^|\n)```[A-Za-z]*\s*\n/g, "$1")
      .replace(/\n```(\s*\n|$)/g, "\n");

    result = result.replace(/\n{3,}/g, "\n\n");
    return result.trim();
  }

  public async logPromptBuiltMarkdown(params: {
    requestId: string;
    userId: string;
    channels: string[];
    expression: string;
    jobDescription?: string | null;
    prompt: string;
    model?: string;
  }): Promise<void> {
    const url = this.buildChatCompletionsUrl(DEFAULT_LLM_CONFIG.baseUrl);
    const systemPromptToShow = this.allowPromptLog
      ? this.redactPII(DEFAULT_LLM_CONFIG.systemPrompt)
      : "[hidden — enable ALLOW_PROMPT_LOG]";
    const promptToShow = this.allowPromptLog ? this.redactPII(params.prompt) : "[hidden]";
    const body = {
      model: params.model ?? DEFAULT_LLM_CONFIG.modelName,
      messages: [
        { role: "system", content: systemPromptToShow },
        { role: "user", content: promptToShow },
      ],
      temperature: DEFAULT_LLM_CONFIG.temperature,
      max_tokens: DEFAULT_LLM_CONFIG.maxTokens,
    };
    const headerLines: string[] = ["-H 'Content-Type: application/json'"];
    if (DEFAULT_LLM_CONFIG.apiKey) headerLines.push("-H 'Authorization: Bearer [redacted]'");
    const curl = `curl -sS -X POST '${url}' \\\n  ${headerLines.join(" \\\n  ")} \\\n  -d '${JSON.stringify(body).replace(/'/g, String.raw`'\\''`)}'`;

    const md = [
      `### Application Request ${params.requestId}`,
      `- Timestamp: ${new Date().toISOString()}`,
      `- User: ${params.userId}`,
      `- Channels: ${params.channels.join(", ")}`,
      `- Expression: ${params.expression}`,
      `- Job description length: ${params.jobDescription ? params.jobDescription.length : 0}`,
      `- Prompt length: ${params.prompt.length} • SHA256: ${this.computeSha256(params.prompt)}`,
      `- Model: ${params.model ?? DEFAULT_LLM_CONFIG.modelName}`,
      ``,
      `#### Prompt`,
      "```text",
      promptToShow,
      "```",
      `#### HTTP request (cURL)`,
      "```bash",
      curl,
      "```",
      `#### Request body (sanitized)`,
      "```json",
      JSON.stringify(body, null, 2),
      "```",
    ].join("\n");

    await this.appendMarkdown(md);
  }

  public async logLlmResponseMarkdown(params: {
    requestId: string;
    userId: string;
    channels: string[];
    expression: string;
    prompt: string;
    coverLetter: string | null;
    model?: string;
  }): Promise<void> {
    let coverToShow: string;
    if (this.allowPromptLog && params.coverLetter) {
      coverToShow = this.redactPII(this.sanitizeContent(params.coverLetter));
    } else if (params.coverLetter) {
      coverToShow = "[hidden]";
    } else {
      coverToShow = "[null]";
    }
    const md = [
      `#### LLM Response — ${params.requestId}`,
      `- Timestamp: ${new Date().toISOString()}`,
      `- Cover letter length: ${params.coverLetter ? params.coverLetter.length : 0} • SHA256: ${
        params.coverLetter ? this.computeSha256(params.coverLetter) : "n/a"
      }`,
      ``,
      "```text",
      coverToShow,
      "```",
      `---`,
    ].join("\n");
    await this.appendMarkdown(md);
  }

  public async logErrorMarkdown(params: {
    requestId: string;
    userId: string;
    channels: string[];
    expression: string;
    prompt: string;
    error: unknown;
  }): Promise<void> {
    const message = params.error instanceof Error ? params.error.message : String(params.error);
    const md = [
      `#### Error — ${params.requestId}`,
      `- Timestamp: ${new Date().toISOString()}`,
      `- User: ${params.userId}`,
      `- Channels: ${params.channels.join(", ")}`,
      `- Expression: ${params.expression}`,
      `- Prompt length: ${params.prompt.length} • SHA256: ${this.computeSha256(params.prompt)}`,
      `- Message: ${message}`,
      `---`,
    ].join("\n");
    await this.appendMarkdown(md);
  }
}
