import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { TwoFactorGuard } from "../../auth/guards/two-factor.guard";
import { User } from "../../user/decorators/user.decorator";
import { CreateInterestDto } from "../dto/create-interest.dto";
import { UpdateInterestDto } from "../dto/update-interest.dto";
import { InterestService } from "../service/interest.service";

@ApiTags("Interest")
@Controller("interest")
@UseGuards(TwoFactorGuard)
export class InterestController {
  constructor(private readonly service: InterestService) {}

  @Get()
  public findAll(@User("id") userId: string) {
    return this.service.findAllByUserId(userId);
  }

  @Get(":id")
  public findOne(@User("id") userId: string, @Param("id") id: string) {
    return this.service.findOneById(userId, id);
  }

  @Post()
  public create(@User("id") userId: string, @Body() dto: CreateInterestDto) {
    return this.service.create(userId, dto);
  }

  @Patch(":id")
  public update(
    @User("id") userId: string,
    @Param("id") id: string,
    @Body() dto: UpdateInterestDto,
  ) {
    return this.service.update(userId, id, dto);
  }

  @Delete(":id")
  public delete(@User("id") userId: string, @Param("id") id: string) {
    return this.service.delete(userId, id);
  }
}
