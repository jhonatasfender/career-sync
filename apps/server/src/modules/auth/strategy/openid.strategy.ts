import { UserService } from "@career-sync/server/modules/user/user.service";
import { BadRequestException, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "@prisma/client";
import { ErrorMessage, generateRandomName, processUsername } from "@reactive-resume/utils";
import { Profile, Strategy, StrategyOptions } from "passport-openidconnect";

@Injectable()
export class OpenIDStrategy extends PassportStrategy(Strategy, "openid") {
  constructor(
    public readonly authorizationURL: string,
    public readonly callbackURL: string,
    public readonly clientID: string,
    public readonly clientSecret: string,
    public readonly issuer: string,
    public readonly scope: string,
    public readonly tokenURL: string,
    public readonly userInfoURL: string,
    private readonly userService: UserService,
  ) {
    super({
      authorizationURL,
      callbackURL,
      clientID,
      clientSecret,
      issuer,
      scope,
      tokenURL,
      userInfoURL,
    } as StrategyOptions);
  }

  public async validate(
    _issuer: unknown,
    profile: Profile,
    done: (err?: string | Error | null, user?: Express.User, info?: unknown) => void,
  ) {
    const { displayName, emails, photos, username } = profile;

    const uniqueId = generateRandomName({ length: 2, style: "lowerCase", separator: "-" });
    const email = emails?.[0].value ?? `${username ?? uniqueId}@openid.com`;
    const picture = photos?.[0].value;

    let user: User | null = null;

    if (!email) throw new BadRequestException(ErrorMessage.InvalidCredentials);

    try {
      user =
        (await this.userService.findOneByIdentifier(email)) ??
        (username ? await this.userService.findOneByIdentifier(username) : null);

      if (!user) throw new BadRequestException(ErrorMessage.InvalidCredentials);

      done(null, user);
    } catch {
      user = await this.userService.create({
        email,
        picture,
        locale: "en-US",
        provider: "openid",
        name: displayName || uniqueId,
        emailVerified: true,
        username: processUsername(username ?? email.split("@")[0]),
        secrets: { create: {} },
      });

      done(null, user);
    }
  }
}
