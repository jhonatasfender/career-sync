import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { TwoFactorGuard } from "../../auth/guards/two-factor.guard";
import { User } from "../../user/decorators/user.decorator";
import { CreateEducationDto } from "../dto/create-education.dto";
import { UpdateEducationDto } from "../dto/update-education.dto";
import { EducationService } from "../service/education.service";

@ApiTags("Education")
@Controller("education")
@UseGuards(TwoFactorGuard)
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Get()
  public findAll(@User("id") userId: string) {
    return this.educationService.findAllByUserId(userId);
  }

  @Get(":id")
  public findOne(@User("id") userId: string, @Param("id") educationId: string) {
    return this.educationService.findOneById(userId, educationId);
  }

  @Post()
  public create(@User("id") userId: string, @Body() dto: CreateEducationDto) {
    return this.educationService.create(userId, dto);
  }

  @Patch(":id")
  public update(
    @User("id") userId: string,
    @Param("id") educationId: string,
    @Body() dto: UpdateEducationDto,
  ) {
    return this.educationService.update(userId, educationId, dto);
  }

  @Delete(":id")
  public delete(@User("id") userId: string, @Param("id") educationId: string) {
    return this.educationService.delete(userId, educationId);
  }
}
