import { Module } from "@nestjs/common";

import { ReferenceController } from "./controllers/reference.controller";
import { ReferenceService } from "./service/reference.service";

@Module({
  controllers: [ReferenceController],
  providers: [ReferenceService],
  exports: [ReferenceService],
})
export class ReferenceModule {}
