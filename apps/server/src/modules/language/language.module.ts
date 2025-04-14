import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { LanguageController } from "./controllers/language.controller";
import { LanguageService } from "./service/language.service";

@Module({
  imports: [],
  controllers: [LanguageController],
  providers: [LanguageService, PrismaService],
  exports: [LanguageService],
})
export class LanguageModule {}
