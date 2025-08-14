import { Injectable, Logger, NotFoundException } from "@nestjs/common";

import { CreateApplicationDto } from "../dto/create-application.dto";
import { ApplicationLoggingService } from "../logging/application.logging.service";
import { ApplicationRepository } from "../repositories/application.repository";
import { BuildProfileSummary, ChannelType, ExpressionType } from "../types";
import { CoverLetterPromptBuilder } from "./cover-letter.prompt.builder";
import { LlmChatClient } from "./llm.chat.client";
import { ProfileSummaryBuilder } from "./profile.summary.builder";
import { ProfileValidator } from "./profile.validator";

@Injectable()
export class CreateApplicationService {
  private readonly logger = new Logger(CreateApplicationService.name);

  constructor(
    private readonly repository: ApplicationRepository,
    private readonly profileValidator: ProfileValidator,
    private readonly profileSummaryBuilder: ProfileSummaryBuilder,
    private readonly coverLetterPromptBuilder: CoverLetterPromptBuilder,
    private readonly llmChatClient: LlmChatClient,
    private readonly appLogger: ApplicationLoggingService,
  ) {}

  private validateUserProfile(user: BuildProfileSummary): void {
    this.profileValidator.validateOrThrow(user);
  }

  private buildProfileSummary(payload: BuildProfileSummary): string {
    return this.profileSummaryBuilder.buildHumanReadableSummary(payload);
  }

  private buildCoverLetterPrompt(params: {
    jobDescription?: string;
    expression: ExpressionType;
    baseProfile: string;
    userMessage: string;
    targetLanguage: string;
    channels: ChannelType[];
  }): string {
    return this.coverLetterPromptBuilder.build({
      jobDescription: params.jobDescription,
      expression: params.expression,
      baseProfile: params.baseProfile,
      userMessage: params.userMessage,
      targetLanguage: params.targetLanguage,
      channels: params.channels,
    });
  }

  private async generateCoverLetter(prompt: string): Promise<string> {
    return this.llmChatClient.createCompletion(prompt);
  }

  public async execute(userId: string, dto: CreateApplicationDto) {
    const requestId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const exists = await this.repository.userExists(userId);
    if (!exists) throw new NotFoundException("Usuário não encontrado");

    const user = await this.repository.getUserProfileSummary(userId);
    if (!user) throw new NotFoundException("Usuário não encontrado");

    this.validateUserProfile(user);

    const baseProfile = this.buildProfileSummary(user);

    const prompt = this.buildCoverLetterPrompt({
      jobDescription: dto.jobDescription,
      expression: dto.expression as ExpressionType,
      baseProfile,
      userMessage: dto.message,
      targetLanguage: "auto",
      channels: dto.channels as ChannelType[],
    });

    await this.appLogger.logPromptBuiltMarkdown({
      requestId,
      userId,
      channels: dto.channels,
      expression: dto.expression,
      jobDescription: dto.jobDescription ?? null,
      prompt,
    });

    let coverLetter: string | null = null;
    try {
      coverLetter = await this.generateCoverLetter(prompt);
    } catch (error) {
      this.logger.error("Erro ao gerar carta de apresentação:", error);
      this.logger.error("Prompt:", prompt);
      coverLetter = null;
      await this.appLogger.logErrorMarkdown({
        requestId,
        userId,
        channels: dto.channels,
        expression: dto.expression,
        prompt,
        error,
      });
    }

    await this.appLogger.logLlmResponseMarkdown({
      requestId,
      userId,
      channels: dto.channels,
      expression: dto.expression,
      prompt,
      coverLetter,
    });

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
