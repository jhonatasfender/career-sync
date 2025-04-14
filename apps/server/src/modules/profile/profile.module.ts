import { Module } from "@nestjs/common";

import { ProfileController } from "./controllers/profile.controller";
import { ProfileService } from "./service/profile.service";

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
