import { StorageModule } from "@career-sync/server/storage/storage.module";
import { forwardRef, Module } from "@nestjs/common";

import { AuthModule } from "../auth/auth.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [forwardRef(() => AuthModule.register()), StorageModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
