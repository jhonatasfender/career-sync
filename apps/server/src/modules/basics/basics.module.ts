import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { BasicsController } from "./controllers/basics.controller";
import { BasicsService } from "./service/basics.service";

@Module({
  imports: [],
  controllers: [BasicsController],
  providers: [BasicsService, PrismaService],
  exports: [BasicsService],
})
export class BasicsModule {}
