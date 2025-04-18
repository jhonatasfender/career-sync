import { AuthModule } from "@career-sync/server/auth/auth.module";
import { PrinterModule } from "@career-sync/server/printer/printer.module";
import { Module } from "@nestjs/common";

import { StorageModule } from "../storage/storage.module";
import { ResumeController } from "./resume.controller";
import { ResumeService } from "./resume.service";

@Module({
  imports: [AuthModule, PrinterModule, StorageModule],
  controllers: [ResumeController],
  providers: [ResumeService],
  exports: [ResumeService],
})
export class ResumeModule {}
