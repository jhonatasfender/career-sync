import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { ExperienceController } from "./controllers/experience.controller";
import { ExperienceService } from "./service/experience.service";

@Module({
  imports: [],
  controllers: [ExperienceController],
  providers: [ExperienceService, PrismaService],
  exports: [ExperienceService],
})
export class ExperienceModule {}
