import { TwoFactorGuard } from "@career-sync/server/modules/auth/guards/two-factor.guard";
import { User } from "@career-sync/server/modules/user/decorators/user.decorator";
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { CreateApplicationDto } from "../dto/create-application.dto";
import { ApplicationService } from "../service/application.service";

@ApiTags("Application")
@Controller("application")
@UseGuards(TwoFactorGuard)
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post()
  public create(@User("id") userId: string, @Body() dto: CreateApplicationDto) {
    return this.applicationService.create(userId, dto);
  }
}
