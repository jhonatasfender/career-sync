import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { BuildProfileSummary } from "../types";

@Injectable()
export class ApplicationRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async userExists(userId: string): Promise<boolean> {
    const exists = await this.prisma.user.count({ where: { id: userId } });
    return exists > 0;
  }

  public async getUserProfileSummary(userId: string): Promise<BuildProfileSummary | null> {
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

    if (!user) return null;

    const build: BuildProfileSummary = {
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
    };

    return build;
  }
}
