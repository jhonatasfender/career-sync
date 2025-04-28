import { Body, Controller, Delete, Get, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { TwoFactorGuard } from "../../auth/guards/two-factor.guard";
import { User } from "../../user/decorators/user.decorator";
import { CreateBasicsDto } from "../dto/create-basics.dto";
import { UpdateBasicsDto } from "../dto/update-basics.dto";
import { BasicsService } from "../service/basics.service";

@ApiTags("Basics")
@Controller("basics")
@UseGuards(TwoFactorGuard)
export class BasicsController {
  constructor(private readonly basicsService: BasicsService) {}

  @Get()
  public async findOne(@User("id") userId: string) {
    return (await this.basicsService.findOneByUserId(userId)) ?? {};
  }

  @Post()
  public async save(@User("id") userId: string, @Body() dto: CreateBasicsDto) {
    return this.basicsService.save(userId, dto);
  }

  @Patch()
  public async update(@User("id") userId: string, @Body() dto: UpdateBasicsDto) {
    return this.basicsService.update(userId, dto);
  }

  @Delete()
  public async delete(@User("id") userId: string) {
    await this.basicsService.delete(userId);
  }
}
