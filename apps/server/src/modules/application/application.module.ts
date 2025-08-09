import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

import { ApplicationController } from "./controllers/application.controller";
import { ApplicationService } from "./service/application.service";

@Module({
  imports: [HttpModule],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
