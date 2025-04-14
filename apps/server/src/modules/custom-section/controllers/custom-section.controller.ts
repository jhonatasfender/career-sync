import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { TwoFactorGuard } from "../../auth/guards/two-factor.guard";
import { User } from "../../user/decorators/user.decorator";
import { CreateCustomSectionDto } from "../dto/create-custom-section.dto";
import { UpdateCustomSectionDto } from "../dto/update-custom-section.dto";
import { CustomSectionService } from "../service/custom-section.service";

@ApiTags("CustomSection")
@Controller("custom-section")
@UseGuards(TwoFactorGuard)
export class CustomSectionController {
  constructor(private readonly service: CustomSectionService) {}

  @Get()
  public findAll(@User("id") userId: string) {
    return this.service.findAllByUserId(userId);
  }

  @Get(":id")
  public findOne(@User("id") userId: string, @Param("id") id: string) {
    return this.service.findOneById(userId, id);
  }

  @Post()
  public create(@User("id") userId: string, @Body() dto: CreateCustomSectionDto) {
    return this.service.create(userId, dto);
  }

  @Patch(":id")
  public update(
    @User("id") userId: string,
    @Param("id") id: string,
    @Body() dto: UpdateCustomSectionDto,
  ) {
    return this.service.update(userId, id, dto);
  }

  @Delete(":id")
  public delete(@User("id") userId: string, @Param("id") id: string) {
    return this.service.delete(userId, id);
  }
}
