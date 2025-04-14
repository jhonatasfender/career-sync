import path from "node:path";

import { HttpException, Module } from "@nestjs/common";
import { APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { ServeStaticModule } from "@nestjs/serve-static";
import { RavenInterceptor, RavenModule } from "nest-raven";
import { ZodValidationPipe } from "nestjs-zod";

import { ConfigModule } from "./config/config.module";
import { DatabaseModule } from "./database/database.module";
import { HealthModule } from "./health/health.module";
import { MailModule } from "./mail/mail.module";
import { AuthModule } from "./modules/auth/auth.module";
import { AwardModule } from "./modules/award/award.module";
import { BasicsModule } from "./modules/basics/basics.module";
import { CertificationModule } from "./modules/certification/certification.module";
import { ContributorsModule } from "./modules/contributors/contributors.module";
import { CustomSectionModule } from "./modules/custom-section/custom-section.module";
import { EducationModule } from "./modules/education/education.module";
import { ExperienceModule } from "./modules/experience/experience.module";
import { FeatureModule } from "./modules/feature/feature.module";
import { InterestModule } from "./modules/interest/intereset.module";
import { LanguageModule } from "./modules/language/language.module";
import { ProfileModule } from "./modules/profile/profile.module";
import { ProjectModule } from "./modules/project/project.module";
import { PublicationModule } from "./modules/publication/publication.module";
import { ReferenceModule } from "./modules/reference/reference.module";
import { ResumeModule } from "./modules/resume/resume.module";
import { SkillModule } from "./modules/skill/skill.module";
import { SummaryModule } from "./modules/summary/summary.module";
import { UserModule } from "./modules/user/user.module";
import { VolunteerModule } from "./modules/volunteer/volunteer.module";
import { PrinterModule } from "./printer/printer.module";
import { StorageModule } from "./storage/storage.module";
import { TranslationModule } from "./translation/translation.module";

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

  // Resume Modules
  BasicsModule,
  EducationModule,
  ExperienceModule,
  AwardModule,
  InterestModule,
  SkillModule,
  LanguageModule,
  ProfileModule,
  ProjectModule,
  CertificationModule,
  CustomSectionModule,
  PublicationModule,
  ReferenceModule,
  VolunteerModule,
  SummaryModule,
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
