import { UserService } from "@career-sync/server/modules/user/user.service";
import { BadRequestException, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { createId } from "@paralleldrive/cuid2";
import { User } from "@prisma/client";
import { ErrorMessage, processUsername } from "@reactive-resume/utils";
import { Profile, Strategy, StrategyOptions } from "passport-github2";

@Injectable()
export class GitHubStrategy extends PassportStrategy(Strategy, "github") {
  constructor(
    public readonly clientID: string,
    public readonly clientSecret: string,
    public readonly callbackURL: string,
    private readonly userService: UserService,
  ) {
    super({ clientID, clientSecret, callbackURL, scope: ["user:email"] } as StrategyOptions);
  }

  public async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: (err?: string | Error | null, user?: Express.User, info?: unknown) => void,
  ) {
    const { displayName, emails, photos, username } = profile;

    const email = emails?.[0].value ?? `${username}@github.com`;
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
        provider: "github",
        name: displayName || createId(),
        emailVerified: true,
        username: processUsername(username ?? email.split("@")[0]),
        secrets: { create: {} },
      });

      done(null, user);
    }
  }
}
