import { TwoFactorGuard } from "@career-sync/server/modules/auth/guards/two-factor.guard";
import { User } from "@career-sync/server/modules/user/decorators/user.decorator";
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { CreateApplicationDto } from "../dto/create-application.dto";
import { CreateResumeDto } from "../dto/create-resume.dto";
import { ApplicationService } from "../services/application/application.service";
import { BuildProfileSummary } from "../types";

@ApiTags("Application")
@Controller("application")
@UseGuards(TwoFactorGuard)
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post()
  public create(@User("id") userId: string, @Body() dto: CreateApplicationDto) {
    return this.applicationService.create(userId, dto);
  }

  @Post("resume")
  public createResume(@User("id") userId: string, @Body() dto: CreateResumeDto) {
    return this.applicationService.createResume(userId, dto);
  }

  @Post("resume/template")
  public applyTemplate(
    @User("id") userId: string,
    @Body() dto: { resumeContent: string; template: string; profile: BuildProfileSummary },
  ) {
    return this.applicationService.applyTemplate(userId, dto);
  }
}
