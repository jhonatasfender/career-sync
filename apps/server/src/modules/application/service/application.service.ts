import { HttpService } from "@nestjs/axios";
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { CreateApplicationDto } from "../dto/create-application.dto";

type BuildProfileSummary = {
  basics: {
    name: string | null;
    email: string | null;
    phone: string | null;
    url: string | null;
    location: string | null;
    headline: string | null;
    summary: string | null;
  } | null;
  summary: { content: string | null } | null;
  experiences: {
    company: string;
    position: string;
    startDate: Date;
    endDate: Date | null;
    summary: string | null;
    website: string | null;
  }[];
  skills: {
    name: string;
    keywords: string[];
    level: number | null;
    description: string | null;
  }[];
  educations: {
    institution: string;
    area: string;
    studyType: string | null;
    startDate: Date;
    endDate: Date | null;
    gpa: number | null;
  }[];
  projects: {
    name: string;
    description: string | null;
    keywords: string[];
    summary: string | null;
    website: string | null;
  }[];
  certifications: {
    name: string;
    issuer: string;
    date: Date | null;
    summary: string | null;
    website: string | null;
  }[];
  languages: {
    name: string;
    level: number | null;
    description: string | null;
  }[];
  awards: {
    title: string;
    date: Date | null;
    awarder: string | null;
    summary: string | null;
    website: string | null;
  }[];
  volunteer: {
    organization: string;
    position: string;
    startDate: Date | null;
    endDate: Date | null;
    location: string | null;
    summary: string | null;
  }[];
  profiles: {
    network: string;
    username: string;
    url: string;
    icon: string | null;
  }[];
};

@Injectable()
export class ApplicationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly http: HttpService,
  ) {}

  private async checkUser(userId: string) {
    const exists = await this.prisma.user.count({ where: { id: userId } });
    if (!exists) throw new NotFoundException("Usuário não encontrado");
  }

  private formatDate(date?: Date | null): string | null {
    if (!date) return null;
    try {
      return new Date(date).toISOString().slice(0, 10);
    } catch {
      return null;
    }
  }

  private buildProfileSummary(payload: BuildProfileSummary): string {
    const lines: string[] = [];

    const {
      basics,
      summary,
      experiences,
      skills,
      educations,
      projects,
      certifications,
      languages,
      awards,
      volunteer,
      profiles,
    } = payload;

    if (basics) {
      const basicLines: string[] = [];
      if (basics.name) basicLines.push(`Nome: ${basics.name}`);
      if (basics.headline) basicLines.push(`Headline: ${basics.headline}`);
      if (basics.location) basicLines.push(`Localização: ${basics.location}`);
      if (basics.url) basicLines.push(`Website: ${basics.url}`);
      if (basicLines.length > 0) lines.push(...basicLines);
    }
    if (summary?.content) {
      lines.push("Resumo:", summary.content);
    }

    if (experiences.length > 0) {
      lines.push("Experiências (mais recentes primeiro):");
      const sorted = [...experiences]
        .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
        .slice(0, 5);
      for (const exp of sorted) {
        const periodStart = this.formatDate(exp.startDate);
        const periodEnd = this.formatDate(exp.endDate) ?? "atual";
        const entry = [`- ${exp.position} @ ${exp.company} (${periodStart} - ${periodEnd})`];
        if (exp.summary) entry.push(`  ${exp.summary}`);
        lines.push(...entry);
      }
    }

    if (skills.length > 0) {
      const skillNames = skills.map((s) => s.name).slice(0, 20);
      lines.push(`Skills: ${skillNames.join(", ")}`);
    }

    if (projects.length > 0) {
      lines.push("Projetos relevantes:");
      for (const p of projects.slice(0, 3)) {
        const entry = [`- ${p.name}${p.website ? ` (${p.website})` : ""}`];
        if (p.summary || p.description) entry.push(`  ${p.summary ?? p.description}`);
        lines.push(...entry);
      }
    }

    if (educations.length > 0) {
      lines.push("Educação:");
      for (const e of educations.slice(0, 3)) {
        const start = this.formatDate(e.startDate);
        const end = this.formatDate(e.endDate) ?? "em andamento";
        lines.push(
          `- ${e.studyType ?? "Curso"} em ${e.area} — ${e.institution} (${start} - ${end})`,
        );
      }
    }

    if (certifications.length > 0) {
      lines.push("Certificações:");
      for (const c of certifications.slice(0, 5)) {
        const dt = this.formatDate(c.date);
        lines.push(`- ${c.name} (${c.issuer}${dt ? ", " + dt : ""})`);
      }
    }

    if (languages.length > 0) {
      lines.push("Idiomas: " + languages.map((l) => l.name).join(", "));
    }

    if (awards.length > 0) {
      lines.push("Prêmios:");
      for (const a of awards.slice(0, 3)) {
        lines.push(`- ${a.title}${a.awarder ? ` (${a.awarder})` : ""}`);
      }
    }

    if (volunteer.length > 0) {
      lines.push("Voluntariado:");
      for (const v of volunteer.slice(0, 2)) {
        lines.push(`- ${v.position} @ ${v.organization}`);
      }
    }

    if (profiles.length > 0) {
      lines.push("Perfis:");
      for (const p of profiles.slice(0, 3)) {
        lines.push(`- ${p.network}: ${p.url}`);
      }
    }

    return lines.join("\n");
  }

  private buildCoverLetterPrompt(params: {
    jobDescription?: string;
    expression: "formal" | "informal" | "professional" | "casual";
    baseProfile: string;
    userMessage: string;
    targetLanguage: string;
    channels: ("email" | "whatsapp" | "linkedin")[];
  }): string {
    const toneMap: Record<string, string> = {
      formal: "tom formal, vocabulário elevado e sem contrações",
      informal: "tom informal, porém cortês e direto",
      professional: "tom profissional, claro e objetivo",
      casual: "tom casual, amigável e conciso",
    };

    const toneInstruction = toneMap[params.expression] ?? toneMap.professional;

    const parts: string[] = [
      "Context: job-specific cover letter generation.",
      "Detect the predominant language of the job description and respond strictly in that language.",
      "Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.",
      "Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.",
      "Do not copy or paraphrase the job description; reference it only to align the candidate's fit.",
      "Prefer 2–3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.",
      "Return only the letter body (no headings like 'Cover Letter' and no quotes).",
      `Planned delivery channels: ${params.channels.join(", ")}. Optimize tone/length to be usable when sent via these channels. Do not mention the channels explicitly in the letter.`,
      "Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.",
      "Avoid clichés or overly eager wording (e.g., avoid repeating 'excited'/'ansioso'). Maintain a confident, professional tone.",
      "Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').",
    ];
    if (params.jobDescription) parts.push("Job Description:", params.jobDescription);
    parts.push("Candidate Profile (facts only, no fabrication):", params.baseProfile);
    if (params.userMessage) parts.push("User note (additional instructions):", params.userMessage);
    parts.push(
      "Task:",
      `Write a cover letter (~300–400 words) in ${toneInstruction}, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description.`,
    );

    return parts.join("\n\n");
  }

  private buildChatCompletionsUrl(baseUrl: string): string {
    const trimmed = baseUrl.replace(/\/$/, "");
    if (trimmed.endsWith("/v1")) return `${trimmed}/chat/completions`;
    if (trimmed.endsWith("/v1/")) return `${trimmed}chat/completions`;
    return `${trimmed}/v1/chat/completions`;
  }

  private async generateCoverLetterWithOllama(prompt: string): Promise<string> {
    const baseUrl = process.env.OLLAMA_BASE_URL ?? "http://localhost:11434/v1";
    const modelName = process.env.OLLAMA_MODEL ?? "llama3.2:latest";
    const apiKey = process.env.OLLAMA_API_KEY;

    const url = this.buildChatCompletionsUrl(baseUrl);

    const { data } = await this.http.axiosRef.post<{
      choices?: { message?: { content?: string } }[];
    }>(
      url,
      {
        model: modelName,
        messages: [
          {
            role: "system",
            content:
              "You generate concise, professional cover letters. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages).",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.5,
        max_tokens: 700,
      },
      {
        headers: {
          "Content-Type": "application/json",
          ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
        },
      },
    );

    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error("LLM did not return any content");
    }
    return content;
  }

  public async create(userId: string, dto: CreateApplicationDto) {
    await this.checkUser(userId);
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        basics: {
          select: {
            name: true,
            email: true,
            phone: true,
            url: true,
            location: true,
            headline: true,
            summary: true,
          },
        },
        summary: { select: { content: true } },
        experiences: {
          select: {
            company: true,
            position: true,
            startDate: true,
            endDate: true,
            summary: true,
            website: true,
          },
        },
        skills: { select: { name: true, keywords: true, level: true, description: true } },
        educations: {
          select: {
            institution: true,
            area: true,
            studyType: true,
            startDate: true,
            endDate: true,
            gpa: true,
          },
        },
        projects: {
          select: { name: true, description: true, keywords: true, summary: true, website: true },
        },
        certifications: {
          select: { name: true, issuer: true, date: true, summary: true, website: true },
        },
        languages: { select: { name: true, level: true, description: true } },
        awards: {
          select: { title: true, date: true, awarder: true, summary: true, website: true },
        },
        volunteer: {
          select: {
            organization: true,
            position: true,
            startDate: true,
            endDate: true,
            location: true,
            summary: true,
          },
        },
        profiles: { select: { network: true, username: true, url: true, icon: true } },
      },
    });

    if (!user) throw new NotFoundException("Usuário não encontrado");

    const baseProfile = this.buildProfileSummary({
      basics: user.basics
        ? {
            name: user.basics.name,
            email: user.basics.email ?? null,
            phone: user.basics.phone ?? null,
            url: user.basics.url ?? null,
            location: user.basics.location ?? null,
            headline: user.basics.headline ?? null,
            summary: user.basics.summary ?? null,
          }
        : null,
      summary: user.summary ? { content: user.summary.content } : null,
      experiences: user.experiences,
      skills: user.skills,
      educations: user.educations,
      projects: user.projects,
      certifications: user.certifications,
      languages: user.languages,
      awards: user.awards,
      volunteer: user.volunteer,
      profiles: user.profiles,
    });

    const prompt = this.buildCoverLetterPrompt({
      jobDescription: dto.jobDescription,
      expression: dto.expression as "formal" | "informal" | "professional" | "casual",
      baseProfile,
      userMessage: dto.message,
      targetLanguage: "auto",
      channels: dto.channels as ("email" | "whatsapp" | "linkedin")[],
    });

    let coverLetter: string | null = null;
    try {
      coverLetter = await this.generateCoverLetterWithOllama(prompt);
    } catch {
      coverLetter = null;
    }

    return {
      message: "Application context prepared",
      userId,
      data: {
        channels: dto.channels,
        expression: dto.expression,
        jobDescription: dto.jobDescription ?? null,
      },
      prompt,
      coverLetter,
      profile: {
        basics: user.basics,
        summary: user.summary,
        experiences: user.experiences,
        educations: user.educations,
        skills: user.skills,
        languages: user.languages,
        projects: user.projects,
        certifications: user.certifications,
        awards: user.awards,
        volunteer: user.volunteer,
        profiles: user.profiles,
      },
    };
  }
}
