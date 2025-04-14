import { Module } from "@nestjs/common";

import { SummaryController } from "./controllers/summary.controller";
import { SummaryService } from "./service/summary.service";

@Module({
  controllers: [SummaryController],
  providers: [SummaryService],
  exports: [SummaryService],
})
export class SummaryModule {}
