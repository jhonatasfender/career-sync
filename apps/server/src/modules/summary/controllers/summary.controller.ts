import { Body, Controller, Delete, Get, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { TwoFactorGuard } from "../../auth/guards/two-factor.guard";
import { User } from "../../user/decorators/user.decorator";
import { CreateSummaryDto } from "../dto/create-summary.dto";
import { UpdateSummaryDto } from "../dto/update-summary.dto";
import { SummaryService } from "../service/summary.service";

@ApiTags("Summary")
@Controller("summary")
@UseGuards(TwoFactorGuard)
export class SummaryController {
  constructor(private readonly service: SummaryService) {}

  @Get()
  public findOne(@User("id") userId: string) {
    return this.service.findOneByUserId(userId);
  }

  @Post()
  public create(@User("id") userId: string, @Body() dto: CreateSummaryDto) {
    return this.service.save(userId, dto);
  }

  @Patch()
  public update(@User("id") userId: string, @Body() dto: UpdateSummaryDto) {
    return this.service.update(userId, dto);
  }

  @Delete()
  public delete(@User("id") userId: string) {
    return this.service.delete(userId);
  }
}
