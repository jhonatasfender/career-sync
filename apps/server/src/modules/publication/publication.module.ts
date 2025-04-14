import { Module } from "@nestjs/common";

import { PublicationController } from "./controllers/publication.controller";
import { PublicationService } from "./service/publication.service";

@Module({
  controllers: [PublicationController],
  providers: [PublicationService],
  exports: [PublicationService],
})
export class PublicationModule {}
