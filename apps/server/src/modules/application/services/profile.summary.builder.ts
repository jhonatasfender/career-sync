import { Injectable } from "@nestjs/common";
import { differenceInMonths, formatDuration, intervalToDuration } from "date-fns";
import { ptBR } from "date-fns/locale";

import { BuildProfileSummary } from "../types";

@Injectable()
export class ProfileSummaryBuilder {
  private computeConservativeTotalMonths(
    experiences: { startDate: Date | null | undefined; endDate?: Date | null }[],
  ): number {
    const intervals = experiences
      .flatMap((e) => {
        if (!e.startDate) return [] as { start: Date; end: Date }[];
        const start = new Date(e.startDate);
        const end = e.endDate ? new Date(e.endDate) : new Date();
        return [start.getTime() <= end.getTime() ? { start, end } : { start: end, end: start }];
      })
      .sort((a, b) => a.start.getTime() - b.start.getTime());

    if (intervals.length === 0) return 0;

    const merged: { start: Date; end: Date }[] = [];
    for (const current of intervals) {
      const last = merged.at(-1);
      if (!last) {
        merged.push({ ...current });
        continue;
      }
      if (current.start.getTime() <= last.end.getTime()) {
        if (current.end.getTime() > last.end.getTime()) {
          last.end = current.end;
        }
      } else {
        merged.push({ ...current });
      }
    }

    let total = 0;
    for (const itv of merged) {
      const months: number = differenceInMonths(itv.end, itv.start);
      const safeMonths: number = months < 0 ? 0 : months;
      total += safeMonths;
    }
    return total < 0 ? 0 : total;
  }
  private calculateDurationInMonths(start?: Date | null, end?: Date | null): number {
    if (!start) return 0;
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    const total = differenceInMonths(endDate, startDate);
    return total < 0 ? 0 : total;
  }

  private formatDurationBetween(start?: Date | null, end?: Date | null): string {
    if (!start) return "menos de 1 mês";
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    const dur = intervalToDuration({ start: startDate, end: endDate });
    const text = formatDuration(dur, { locale: ptBR, format: ["years", "months"] });
    return text && text.trim().length > 0 ? text : "menos de 1 mês";
  }

  private formatDurationFromMonths(totalMonths: number): string {
    if (totalMonths <= 0) return "menos de 1 mês";
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const text = formatDuration({ years, months }, { locale: ptBR, format: ["years", "months"] });
    return text && text.trim().length > 0 ? text : "menos de 1 mês";
  }

  private toIsoDate(date?: Date | null): string | null {
    if (!date) return null;
    try {
      return new Date(date).toISOString().slice(0, 10);
    } catch {
      return null;
    }
  }

  public buildHumanReadableSummary(payload: BuildProfileSummary): string {
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
      if (basics.email) basicLines.push(`Email: ${basics.email}`);
      if (basics.phone) basicLines.push(`Telefone: ${basics.phone}`);
      if (basics.url) basicLines.push(`Website: ${basics.url}`);
      if (basicLines.length > 0) lines.push(...basicLines);
    }
    if (summary?.content) {
      lines.push("Resumo:", summary.content);
    } else if (basics?.summary) {
      lines.push("Resumo:", basics.summary);
    }

    if (experiences.length > 0) {
      lines.push("Experiências (mais recentes primeiro):");
      const sorted = [...experiences]
        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
        .reverse();

      const totalMonthsAll = this.computeConservativeTotalMonths(experiences);
      for (const exp of sorted) {
        const periodStart = this.toIsoDate(exp.startDate);
        const periodEnd = this.toIsoDate(exp.endDate) ?? "atual";
        const duration = this.formatDurationBetween(exp.startDate, exp.endDate);
        const entry = [
          `- ${exp.position} @ ${exp.company} (${periodStart} - ${periodEnd}, duração: ${duration})`,
        ];
        if (exp.summary) entry.push(`  ${exp.summary}`);
        lines.push(...entry);
      }

      const totalDuration = this.formatDurationFromMonths(totalMonthsAll);
      lines.push(`Tempo total de experiência (todas as experiências): ${totalDuration}`);
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
        const start = this.toIsoDate(e.startDate);
        const end = this.toIsoDate(e.endDate) ?? "em andamento";
        lines.push(
          `- ${e.studyType ?? "Curso"} em ${e.area} — ${e.institution} (${start} - ${end})`,
        );
      }
    }

    if (certifications.length > 0) {
      lines.push("Certificações:");
      for (const c of certifications.slice(0, 5)) {
        const dt = this.toIsoDate(c.date);
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
}
