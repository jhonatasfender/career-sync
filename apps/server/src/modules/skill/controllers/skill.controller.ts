import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { TwoFactorGuard } from "../../auth/guards/two-factor.guard";
import { User } from "../../user/decorators/user.decorator";
import { CreateSkillDto } from "../dto/create-skill.dto";
import { UpdateSkillDto } from "../dto/update-skill.dto";
import { SkillService } from "../service/skill.service";

@ApiTags("Skill")
@Controller("skill")
@UseGuards(TwoFactorGuard)
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Get()
  public findAll(@User("id") userId: string) {
    return this.skillService.findAllByUserId(userId);
  }

  @Get(":id")
  public findOne(@User("id") userId: string, @Param("id") skillId: string) {
    return this.skillService.findOneById(userId, skillId);
  }

  @Post()
  public create(@User("id") userId: string, @Body() dto: CreateSkillDto) {
    return this.skillService.create(userId, dto);
  }

  @Patch(":id")
  public update(
    @User("id") userId: string,
    @Param("id") skillId: string,
    @Body() dto: UpdateSkillDto,
  ) {
    return this.skillService.update(userId, skillId, dto);
  }

  @Delete(":id")
  public delete(@User("id") userId: string, @Param("id") skillId: string) {
    return this.skillService.delete(userId, skillId);
  }
}
