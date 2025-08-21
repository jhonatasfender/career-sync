import { Injectable, Logger, NotFoundException } from "@nestjs/common";

import { CreateResumeDto } from "../../dto/create-resume.dto";
import { ApplicationLoggingService } from "../../logging/application.logging.service";
import { ApplicationRepository } from "../../repositories/application.repository";
import { BuildProfileSummary, ExpressionType, ResumeType } from "../../types";
import { ProfileValidator } from "../core/profile.validator";
import { ResumeLlmClient } from "../llm/llm-resume.client";
import { ProfileSummaryBuilder } from "../llm/profile.summary.builder";
import { ResumePromptBuilder } from "../llm/resume.prompt.builder";
import { ArtboardTemplateService } from "./artboard-template.service";

@Injectable()
export class CreateResumeService {
  private readonly logger = new Logger(CreateResumeService.name);

  constructor(
    private readonly repository: ApplicationRepository,
    private readonly profileValidator: ProfileValidator,
    private readonly profileSummaryBuilder: ProfileSummaryBuilder,
    private readonly resumePromptBuilder: ResumePromptBuilder,
    private readonly resumeLlmClient: ResumeLlmClient,
    private readonly appLogger: ApplicationLoggingService,
    private readonly artboardTemplateService: ArtboardTemplateService,
  ) {}

  private validateUserProfile(user: BuildProfileSummary): void {
    this.profileValidator.validateOrThrow(user);
  }

  private buildProfileSummary(payload: BuildProfileSummary): string {
    return this.profileSummaryBuilder.buildHumanReadableSummary(payload);
  }

  private buildResumePrompt(params: {
    jobDescription?: string;
    expression: ExpressionType;
    baseProfile: string;
    userMessage: string;
    targetLanguage: string;
    resumeType?: ResumeType;
  }): string {
    return this.resumePromptBuilder.build({
      jobDescription: params.jobDescription,
      expression: params.expression,
      baseProfile: params.baseProfile,
      userMessage: params.userMessage,
      targetLanguage: params.targetLanguage,
      resumeType: params.resumeType,
    });
  }

  private async generateResume(prompt: string): Promise<string> {
    return this.resumeLlmClient.createCompletion(prompt);
  }

  public async execute(userId: string, dto: CreateResumeDto) {
    const requestId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const exists = await this.repository.userExists(userId);
    if (!exists) throw new NotFoundException("Usuário não encontrado");

    const user = await this.repository.getUserProfileSummary(userId);
    if (!user) throw new NotFoundException("Usuário não encontrado");

    this.validateUserProfile(user);

    const baseProfile = this.buildProfileSummary(user);

    const prompt = this.buildResumePrompt({
      jobDescription: dto.jobDescription,
      expression: dto.expression as ExpressionType,
      baseProfile,
      userMessage: dto.message,
      targetLanguage: "auto",
      resumeType: dto.resumeType ?? undefined,
    });

    await this.appLogger.logPromptBuiltMarkdown({
      requestId,
      userId,
      channels: [],
      expression: dto.expression,
      jobDescription: dto.jobDescription ?? null,
      prompt,
    });

    let resume: string | null = null;
    try {
      resume = await this.generateResume(prompt);
    } catch (error) {
      this.logger.error("Erro ao gerar currículo:", error);
      this.logger.error("Prompt:", prompt);
      resume = null;
      await this.appLogger.logErrorMarkdown({
        requestId,
        userId,
        channels: [],
        expression: dto.expression,
        prompt,
        error,
      });
    }
    await this.appLogger.logLlmResponseMarkdown({
      requestId,
      userId,
      channels: [],
      expression: dto.expression,
      prompt,
      coverLetter: resume,
    });

    let pdfBuffer: string | null = null;
    if (resume) {
      try {
        const pdf = await this.artboardTemplateService.generateResumePDF(
          resume,
          {
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
          "onyx",
        );
        pdfBuffer = pdf.toString("base64");
      } catch (error) {
        this.logger.error("Erro ao gerar PDF:", error);
      }
    }

    return {
      message: "Resume content generated successfully",
      userId,
      data: {
        expression: dto.expression,
        jobDescription: dto.jobDescription ?? null,
      },
      prompt,
      resume,
      pdfBuffer,
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
