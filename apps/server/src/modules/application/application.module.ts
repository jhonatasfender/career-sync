import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

import { ApplicationController } from "./controllers/application.controller";
import { ApplicationLoggingService } from "./logging/application.logging.service";
import { ApplicationRepository } from "./repositories/application.repository";
import { ApplicationService } from "./services/application.service";
import { CoverLetterPromptBuilder } from "./services/cover-letter.prompt.builder";
import { CreateApplicationService } from "./services/create-application.service";
import { LlmChatClient } from "./services/llm.chat.client";
import { ProfileSummaryBuilder } from "./services/profile.summary.builder";
import { ProfileValidator } from "./services/profile.validator";

@Module({
  imports: [HttpModule],
  controllers: [ApplicationController],
  providers: [
    ApplicationService,
    CreateApplicationService,
    ApplicationRepository,
    ApplicationLoggingService,
    ProfileValidator,
    ProfileSummaryBuilder,
    CoverLetterPromptBuilder,
    LlmChatClient,
  ],
})
export class ApplicationModule {}
