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
  constructor(private readonly interestService: InterestService) {}

  @Get()
  public findAll(@User("id") userId: string) {
    return this.interestService.findAllByUserId(userId);
  }

  @Get(":id")
  public findOne(@User("id") userId: string, @Param("id") id: string) {
    return this.interestService.findOneById(userId, id);
  }

  @Post()
  public create(@User("id") userId: string, @Body() dto: CreateInterestDto) {
    return this.interestService.create(userId, dto);
  }

  @Patch(":id")
  public update(
    @User("id") userId: string,
    @Param("id") interestId: string,
    @Body() dto: UpdateInterestDto,
  ) {
    return this.interestService.update(userId, interestId, dto);
  }

  @Delete(":id")
  public delete(@User("id") userId: string, @Param("id") interestId: string) {
    return this.interestService.delete(userId, interestId);
  }
}
