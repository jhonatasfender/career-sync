import { Module } from "@nestjs/common";

import { VolunteerController } from "./controllers/volunteer.controller";
import { VolunteerService } from "./service/volunteer.service";

@Module({
  controllers: [VolunteerController],
  providers: [VolunteerService],
  exports: [VolunteerService],
})
export class VolunteerModule {}
