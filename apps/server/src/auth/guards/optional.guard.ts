import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserDto } from "@reactive-resume/dto";

@Injectable()
export class OptionalGuard extends AuthGuard("two-factor") {
  public handleRequest<TUser = UserDto>(error: Error, user: TUser): TUser {
    return user;
  }
}
