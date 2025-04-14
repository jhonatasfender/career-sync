import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { AwardController } from "./controllers/award.controller";
import { AwardService } from "./services/award.service";

@Module({
  controllers: [AwardController],
  providers: [AwardService, PrismaService],
  exports: [AwardService],
})
export class AwardModule {}
