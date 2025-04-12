import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { TwoFactorGuard } from "../../auth/guards/two-factor.guard";
import { User } from "../../user/decorators/user.decorator";
import { CreateExperienceDto } from "../dto/create-experience.dto";
import { UpdateExperienceDto } from "../dto/update-experience.dto";
import { ExperienceService } from "../service/experience.service";

@ApiTags("Experience")
@Controller("experience")
@UseGuards(TwoFactorGuard)
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  public findAll(@User("id") userId: string) {
    return this.experienceService.findAllByUserId(userId);
  }

  @Get(":id")
  public findOne(@User("id") userId: string, @Param("id") experienceId: string) {
    return this.experienceService.findOneById(userId, experienceId);
  }

  @Post()
  public create(@User("id") userId: string, @Body() dto: CreateExperienceDto) {
    return this.experienceService.create(userId, dto);
  }

  @Patch(":id")
  public update(
    @User("id") userId: string,
    @Param("id") experienceId: string,
    @Body() dto: UpdateExperienceDto,
  ) {
    return this.experienceService.update(userId, experienceId, dto);
  }

  @Delete(":id")
  public delete(@User("id") userId: string, @Param("id") experienceId: string) {
    return this.experienceService.delete(userId, experienceId);
  }
}
