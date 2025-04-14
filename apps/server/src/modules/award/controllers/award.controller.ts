import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { TwoFactorGuard } from "../../auth/guards/two-factor.guard";
import { User } from "../../user/decorators/user.decorator";
import { CreateAwardDto } from "../dto/create-award.dto";
import { UpdateAwardDto } from "../dto/update-award.dto";
import { AwardService } from "../services/award.service";

@ApiTags("Award")
@Controller("award")
@UseGuards(TwoFactorGuard)
export class AwardController {
  constructor(private readonly service: AwardService) {}

  @Get()
  public findAll(@User("id") userId: string) {
    return this.service.findAllByUserId(userId);
  }

  @Get(":id")
  public findOne(@User("id") userId: string, @Param("id") id: string) {
    return this.service.findOneById(userId, id);
  }

  @Post()
  public create(@User("id") userId: string, @Body() dto: CreateAwardDto) {
    return this.service.create(userId, dto);
  }

  @Patch(":id")
  public update(@User("id") userId: string, @Param("id") id: string, @Body() dto: UpdateAwardDto) {
    return this.service.update(userId, id, dto);
  }

  @Delete(":id")
  public delete(@User("id") userId: string, @Param("id") id: string) {
    return this.service.delete(userId, id);
  }
}
