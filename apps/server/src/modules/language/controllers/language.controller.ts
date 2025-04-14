import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { TwoFactorGuard } from "../../auth/guards/two-factor.guard";
import { User } from "../../user/decorators/user.decorator";
import { CreateLanguageDto } from "../dto/create-language.dto";
import { UpdateLanguageDto } from "../dto/update-language.dto";
import { LanguageService } from "../service/language.service";

@ApiTags("Language")
@Controller("language")
@UseGuards(TwoFactorGuard)
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get()
  public findAll(@User("id") userId: string) {
    return this.languageService.findAllByUserId(userId);
  }

  @Get(":id")
  public findOne(@User("id") userId: string, @Param("id") languageId: string) {
    return this.languageService.findOneById(userId, languageId);
  }

  @Post()
  public create(@User("id") userId: string, @Body() dto: CreateLanguageDto) {
    return this.languageService.create(userId, dto);
  }

  @Patch(":id")
  public update(
    @User("id") userId: string,
    @Param("id") languageId: string,
    @Body() dto: UpdateLanguageDto,
  ) {
    return this.languageService.update(userId, languageId, dto);
  }

  @Delete(":id")
  public delete(@User("id") userId: string, @Param("id") languageId: string) {
    return this.languageService.delete(userId, languageId);
  }
}
