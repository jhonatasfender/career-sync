import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { ProjectController } from "./controllers/project.controller";
import { ProjectService } from "./service/project.service";

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, PrismaService],
  exports: [ProjectService],
})
export class ProjectModule {}
