import { Injectable } from "@nestjs/common";

import { TONE_MAP } from "../config/llm.config";
import { ChannelType, ExpressionType } from "../types";

type BuildPromptParams = {
  jobDescription?: string;
  expression: ExpressionType;
  baseProfile: string;
  userMessage: string;
  targetLanguage: string;
  channels: ChannelType[];
};

@Injectable()
export class CoverLetterPromptBuilder {
  public build(params: BuildPromptParams): string {
    const toneInstruction = TONE_MAP[params.expression] ?? TONE_MAP.professional;

    const parts: string[] = [
      "Context: job-specific cover letter generation.",
      "Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).",
      "Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.",
      "Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.",
      "If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.",
      "Do not copy or paraphrase the job description; reference it only to align the candidate's fit.",
      "Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.",
      "Return only the letter body (no headings like 'Cover Letter' and no quotes). Do not fabricate recruiter names; only greet personally if the recruiter's name is explicitly provided.",
      `Planned delivery channels: ${params.channels.join(", ")}. Optimize tone/length to be usable when sent via these channels. Do not mention the channels explicitly in the letter.`,
      "Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.",
      "Avoid clichés or overly eager wording (e.g., avoid repeating 'excited'/'ansioso'). Maintain a confident, professional tone.",
      "Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.",
      "Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years'). When supported by the profile, distinguish between overall experience and specific time with Java; if not confidently supported, avoid fabricating and prefer 'over X years' or omit the per‑stack figure.",
      "If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).",
      "Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).",
    ];

    if (params.jobDescription) parts.push("Job Description:", params.jobDescription);
    else parts.push("Job Description:", "[empty]");
    parts.push("Candidate Profile (facts only, no fabrication):", params.baseProfile);
    if (params.userMessage) parts.push("User note (additional instructions):", params.userMessage);
    parts.push(
      "Task:",
      `Write a cover letter (~280-360 words) in ${toneInstruction}, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty). Follow this structure (no lists or subtitles):`,
      "Assunto: <título alinhado à vaga>",
      "",
      "Parágrafo 1: 2-3 frases apresentando quem sou, anos totais de experiência e o motivo do match com a vaga.",
      "",
      "Parágrafo 2: um parágrafo corrido explicando por que posso contribuir (match com os requisitos), integrando 3-5 pontos relevantes sem usar bullets.",
      "",
      "Parágrafo 3: um parágrafo corrido com diferenciais e pontos a evoluir com plano claro (sem promessas vagas), sem listas.",
      "",
      "Parágrafo 4: encerramento curto com call-to-action discreto. Assinar com nome. Incluir contatos (telefone/email/links) apenas se constarem no perfil fornecido. Se existir nome do recrutador explicitamente, iniciar com saudação personalizada.",
      "",
      "Não usar tópicos/listas e não incluir subtítulos como 'Posso contribuir' ou 'Diferenciais'.",
    );

    return parts.join("\n\n");
  }
}
