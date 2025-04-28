import { UserService } from "@career-sync/server/modules/user/user.service";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy, StrategyOptionsWithRequest } from "passport-jwt";

import { Payload } from "../utils/payload";

@Injectable()
export class TwoFactorStrategy extends PassportStrategy(Strategy, "two-factor") {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    const extractors = [(request: Request) => request.cookies.Authentication];
    const secret = configService.get<string>("ACCESS_TOKEN_SECRET");

    if (!secret) {
      throw new Error("ACCESS_TOKEN_SECRET is not defined");
    }

    const options: StrategyOptionsWithRequest = {
      secretOrKey: secret,
      jwtFromRequest: ExtractJwt.fromExtractors(extractors),
      ignoreExpiration: false,
      passReqToCallback: true,
    };

    super(options);
  }

  public async validate(request: Request, payload: Payload) {
    const user = await this.userService.findOneById(payload.id);

    // If the user has 2FA disabled, this will follow the same route as JWT Strategy
    if (!user.twoFactorEnabled) return user;

    if (payload.isTwoFactorAuth) return user;
  }
}
