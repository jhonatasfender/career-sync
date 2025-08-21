import { Injectable } from "@nestjs/common";

import { TONE_MAP } from "../../config/llm.config";
import { ExpressionType, ResumeType } from "../../types";

type BuildResumePromptParams = {
  jobDescription?: string;
  expression: ExpressionType;
  baseProfile: string;
  userMessage: string;
  targetLanguage: string;
  resumeType?: ResumeType;
};

@Injectable()
export class ResumePromptBuilder {
  private getResumeTypeInstruction(resumeType?: ResumeType): string {
    switch (resumeType) {
      case "comprehensive": {
        return "currículo abrangente com todas as experiências relevantes";
      }
      case "targeted": {
        return "currículo direcionado e focado na vaga específica";
      }
      case "executive": {
        return "currículo executivo com foco em liderança e resultados estratégicos";
      }
      default: {
        return "currículo direcionado e focado na vaga específica";
      }
    }
  }

  public build(params: BuildResumePromptParams): string {
    const toneInstruction = TONE_MAP[params.expression] ?? TONE_MAP.professional;
    const resumeTypeInstruction = this.getResumeTypeInstruction(params.resumeType);

    const parts: string[] = [
      "Context: job-specific resume generation.",
      "Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).",
      "Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.",
      "Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.",
      "If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.",
      "Do not copy or paraphrase the job description; reference it only to align the candidate's fit.",
      "Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.",
      "Return only the resume content in a structured format. Do not fabricate recruiter names or company details.",
      "Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.",
      "Avoid clichés or overly eager wording. Maintain a confident, professional tone.",
      "Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.",
      "Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').",
      "If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).",
      "Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).",
      "CRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.",
      "CRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.",
    ];

    if (params.jobDescription) parts.push("Job Description:", params.jobDescription);
    else parts.push("Job Description:", "[empty]");
    parts.push("Candidate Profile (facts only, no fabrication):", params.baseProfile);
    if (params.userMessage) parts.push("User note (additional instructions):", params.userMessage);
    parts.push(
      "Task:",
      `Generate a ${resumeTypeInstruction} in ${toneInstruction}, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).`,
      "",
      "Follow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):",
      "",
      "**INFORMAÇÕES PESSOAIS**",
      "Nome completo, email, telefone, localização, website (se disponível)",
      "",
      "**RESUMO PROFISSIONAL**",
      "Parágrafo detalhado (4-6 frases) destacando:",
      "- Anos totais de experiência profissional",
      "- Especialização principal e áreas de expertise",
      "- Principais conquistas e resultados alcançados",
      "- Soft skills e competências comportamentais",
      "- Objetivo profissional e fit com a vaga",
      "- Diferenciais competitivos do candidato",
      "- Visão de futuro e aspirações profissionais",
      "",
      "**EXPERIÊNCIA PROFISSIONAL**",
      "Listar experiências mais relevantes à vaga (máximo 4-5), com:",
      "- Cargo, empresa, período (duração calculada)",
      "- 2-3 conquistas mensuráveis por experiência",
      "- Tecnologias e ferramentas utilizadas",
      "- Impacto nos resultados da empresa",
      "",
      "**EDUCAÇÃO**",
      "Formação acadêmica relevante (instituição, curso, período)",
      "",
      "**COMPETÊNCIAS TÉCNICAS**",
      "Skills mais relevantes à vaga, agrupadas por categoria",
      "",
      "**PROJETOS DESTACADOS**",
      "Projetos mais relevantes (máximo 3) com descrição e tecnologias",
      "",
      "**CERTIFICAÇÕES**",
      "Certificações relevantes (máximo 5) com emissor e data",
      "",
      "**IDIOMAS**",
      "Idiomas com nível de proficiência",
      "",
      "**PRÊMIOS E RECONHECIMENTOS**",
      "Prêmios relevantes (máximo 3) com contexto",
      "",
      "**VOLUNTARIADO**",
      "Experiências voluntárias relevantes (se houver)",
      "",
      "**PERFIS PROFISSIONAIS**",
      "Links para LinkedIn, GitHub, portfolio (se disponíveis)",
      "",
      "Instruções específicas:",
      "- Priorizar experiências e skills mais relevantes à vaga",
      "- Usar linguagem ativa e orientada a resultados",
      "- Incluir métricas e números quando disponíveis no perfil",
      "- Adaptar tom ao tipo de expressão solicitado",
      "- Manter formato limpo e profissional",
      "- Não inventar dados, datas ou experiências",
      "- Focar na relevância para a posição específica",
      "- NUNCA duplicar ou repetir informações entre seções",
      "- Cada experiência deve ser descrita apenas uma vez",
      "- Ser DESCRITIVO e VERBOSO: expandir detalhes relevantes",
      "- Incluir contexto, desafios e soluções implementadas",
      "- Explicar o 'porquê' e 'como' das conquistas",
      "- Detalhar soft skills e competências comportamentais",
      "- Conectar experiências com objetivos da vaga",
      "- Usar exemplos específicos e situações reais",
      "- Demonstrar crescimento profissional e evolução",
      "- Incluir reflexões sobre aprendizado e desenvolvimento",
    );

    return parts.join("\n\n");
  }
}
