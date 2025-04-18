import { AuthModule } from "@career-sync/server/modules/auth/auth.module";
import { PrinterModule } from "@career-sync/server/printer/printer.module";
import { StorageModule } from "@career-sync/server/storage/storage.module";
import { Module } from "@nestjs/common";

import { ResumeController } from "./resume.controller";
import { ResumeService } from "./resume.service";

@Module({
  imports: [AuthModule, PrinterModule, StorageModule],
  controllers: [ResumeController],
  providers: [ResumeService],
  exports: [ResumeService],
})
export class ResumeModule {}
