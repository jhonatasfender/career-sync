import path from "node:path";

import { HttpException, Module } from "@nestjs/common";
import { APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { ServeStaticModule } from "@nestjs/serve-static";
import { RavenInterceptor, RavenModule } from "nest-raven";
import { ZodValidationPipe } from "nestjs-zod";

import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "./config/config.module";
import { ContributorsModule } from "./contributors/contributors.module";
import { DatabaseModule } from "./database/database.module";
import { FeatureModule } from "./feature/feature.module";
import { HealthModule } from "./health/health.module";
import { MailModule } from "./mail/mail.module";
import { PrinterModule } from "./printer/printer.module";
import { ResumeModule } from "./resume/resume.module";
import { StorageModule } from "./storage/storage.module";
import { TranslationModule } from "./translation/translation.module";
import { UserModule } from "./user/user.module";

const imports = [
  // Core Modules
  ConfigModule,
  DatabaseModule,
  MailModule,
  RavenModule,
  HealthModule,

  // Feature Modules
  AuthModule.register(),
  UserModule,
  ResumeModule,
  StorageModule,
  PrinterModule,
  FeatureModule,
  TranslationModule,
  ContributorsModule,
];

if (process.env.NODE_ENV === "production") {
  imports.push(
    ServeStaticModule.forRoot({
      serveRoot: "/artboard",
      rootPath: path.resolve(process.cwd(), "dist/apps/artboard"),
    }),
    ServeStaticModule.forRoot({
      renderPath: "/*",
      rootPath: path.resolve(process.cwd(), "dist/apps/client"),
    }),
  );
}

@Module({
  imports,
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useValue: new RavenInterceptor({
        filters: [
          {
            type: HttpException,
            filter: (exception: HttpException) => exception.getStatus() < 500,
          },
        ],
      }),
    },
  ],
})
export class AppModule {}
