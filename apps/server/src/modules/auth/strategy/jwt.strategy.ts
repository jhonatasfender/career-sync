import { Config } from "@career-sync/server/config/schema";
import { UserService } from "@career-sync/server/modules/user/user.service";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import type { Request } from "express";
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";

import { Payload } from "../utils/payload";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(
    private readonly configService: ConfigService<Config>,
    private readonly userService: UserService,
  ) {
    const extractors = [(request: Request) => request.cookies.Authentication];

    super({
      secretOrKey: configService.get<string>("ACCESS_TOKEN_SECRET"),
      jwtFromRequest: ExtractJwt.fromExtractors(extractors),
      ignoreExpiration: false,
    } as StrategyOptions);
  }

  public async validate(payload: Payload) {
    return await this.userService.findOneById(payload.id);
  }
}
