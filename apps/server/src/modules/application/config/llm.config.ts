export type LLMConfig = {
  baseUrl: string;
  modelName: string;
  apiKey?: string;
  temperature: number;
  maxTokens: number;
  systemPrompt: string;
};

export const DEFAULT_LLM_CONFIG: LLMConfig = {
  baseUrl: process.env.OLLAMA_BASE_URL ?? "http://localhost:11434",
  modelName: process.env.OLLAMA_MODEL ?? "deepseek-r1:latest", //"llama3.2:latest",
  apiKey: process.env.OLLAMA_API_KEY,
  temperature: 0.5,
  maxTokens: 1200,
  systemPrompt:
    "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler.",
};

export const TONE_MAP: Record<string, string> = {
  formal: "tom formal, vocabulário elevado e sem contrações",
  informal: "tom informal, porém cortês e direto",
  professional: "tom profissional, claro e objetivo",
  casual: "tom casual, amigável e conciso",
};
