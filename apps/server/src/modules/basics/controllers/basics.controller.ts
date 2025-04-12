import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
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
    const basics = await this.basicsService.findOneByUserId(userId);
    if (!basics) {
      throw new NotFoundException("Não há Basics para este usuário");
    }
    return basics;
  }

  @Post()
  public async create(@User("id") userId: string, @Body() dto: CreateBasicsDto) {
    return this.basicsService.create(userId, dto);
  }

  @Patch()
  public async update(@User("id") userId: string, @Body() dto: UpdateBasicsDto) {
    return await this.basicsService.update(userId, dto);
  }

  @Delete()
  public async delete(@User("id") userId: string) {
    await this.basicsService.delete(userId);
    return { message: "Basics excluído com sucesso" };
  }
}
