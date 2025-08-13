export type LLMConfig = {
  baseUrl: string;
  modelName: string;
  apiKey?: string;
  temperature: number;
  maxTokens: number;
  systemPrompt: string;
}

export const DEFAULT_LLM_CONFIG: LLMConfig = {
  baseUrl: process.env.OLLAMA_BASE_URL ?? "http://localhost:11434",
  modelName: process.env.OLLAMA_MODEL ?? "llama3.2:latest",
  apiKey: process.env.OLLAMA_API_KEY,
  temperature: 0.5,
  maxTokens: 700,
  systemPrompt: "You generate concise, professional cover letters. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages).",
};

export const TONE_MAP: Record<string, string> = {
  formal: "tom formal, vocabulário elevado e sem contrações",
  informal: "tom informal, porém cortês e direto",
  professional: "tom profissional, claro e objetivo",
  casual: "tom casual, amigável e conciso",
};
