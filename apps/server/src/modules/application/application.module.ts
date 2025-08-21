import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

import { ApplicationController } from "./controllers/application.controller";
import { ApplicationLoggingService } from "./logging/application.logging.service";
import { ApplicationRepository } from "./repositories/application.repository";
import { ApplicationService } from "./services/application/application.service";
import { CreateApplicationService } from "./services/application/create-application.service";
import { ProfileValidator } from "./services/core/profile.validator";
import { CoverLetterPromptBuilder } from "./services/llm/cover-letter.prompt.builder";
import { LlmChatClient } from "./services/llm/llm.chat.client";
import { ResumeLlmClient } from "./services/llm/llm-resume.client";
import { ProfileSummaryBuilder } from "./services/llm/profile.summary.builder";
import { ResumePromptBuilder } from "./services/llm/resume.prompt.builder";
import { ArtboardTemplateService } from "./services/resume/artboard-template.service";
import { CreateResumeService } from "./services/resume/create-resume.service";

@Module({
  imports: [HttpModule],
  controllers: [ApplicationController],
  providers: [
    ApplicationService,
    CreateApplicationService,
    CreateResumeService,
    ApplicationRepository,
    ApplicationLoggingService,
    ProfileValidator,
    ProfileSummaryBuilder,
    CoverLetterPromptBuilder,
    ResumeLlmClient,
    ResumePromptBuilder,
    LlmChatClient,
    ArtboardTemplateService,
  ],
})
export class ApplicationModule {}
