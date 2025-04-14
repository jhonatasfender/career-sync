import { Module } from "@nestjs/common";

import { SkillController } from "./controllers/skill.controller";
import { SkillService } from "./service/skill.service";

@Module({
  imports: [],
  controllers: [SkillController],
  providers: [SkillService],
  exports: [SkillService],
})
export class SkillModule {}
