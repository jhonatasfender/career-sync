import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { InterestController } from "./controllers/interest.controller";
import { InterestService } from "./service/interest.service";

@Module({
  controllers: [InterestController],
  providers: [InterestService, PrismaService],
  exports: [InterestService],
})
export class InterestModule {}
