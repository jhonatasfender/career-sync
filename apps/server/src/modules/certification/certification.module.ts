import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { CertificationController } from "./controllers/certification.controller";
import { CertificationService } from "./service/certification.service";

@Module({
  controllers: [CertificationController],
  providers: [CertificationService, PrismaService],
  exports: [CertificationService],
})
export class CertificationModule {}
