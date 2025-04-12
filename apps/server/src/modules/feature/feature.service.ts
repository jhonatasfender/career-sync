import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { Config } from "@/server/config/schema";

@Injectable()
export class FeatureService {
  constructor(private readonly configService: ConfigService<Config>) {}

  public getFeatures() {
    const isSignupsDisabled = this.configService.getOrThrow<boolean>("DISABLE_SIGNUPS");
    const isEmailAuthDisabled = this.configService.getOrThrow<boolean>("DISABLE_EMAIL_AUTH");

    return {
      isSignupsDisabled,
      isEmailAuthDisabled,
    };
  }
}
