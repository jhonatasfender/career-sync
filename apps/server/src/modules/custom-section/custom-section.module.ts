import { Module } from "@nestjs/common";

import { CustomSectionController } from "./controllers/custom-section.controller";
import { CustomSectionService } from "./service/custom-section.service";

@Module({
  controllers: [CustomSectionController],
  providers: [CustomSectionService],
  exports: [CustomSectionService],
})
export class CustomSectionModule {}
