import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { EducationController } from "./controllers/education.controller";
import { EducationService } from "./service/education.service";

@Module({
  imports: [],
  controllers: [EducationController],
  providers: [EducationService, PrismaService],
  exports: [EducationService],
})
export class EducationModule {}
