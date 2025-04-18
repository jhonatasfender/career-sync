import { Config } from "@career-sync/server/config/schema";
import { Logger, Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {
  loggingMiddleware,
  PrismaModule,
  PrismaService,
  providePrismaClientExceptionFilter,
} from "nestjs-prisma";

@Module({
  imports: [
    PrismaModule.forRootAsync({
      isGlobal: true,
      inject: [ConfigService],
      useFactory: (configService: ConfigService<Config>) => ({
        prismaOptions: { datasourceUrl: configService.get("DATABASE_URL") },
        middlewares: [
          loggingMiddleware({
            logLevel: "debug", // only in development
            logger: new Logger(PrismaService.name),
            logMessage: (query) =>
              `[Query] ${query.model}.${query.action} - ${query.executionTime}ms`,
          }),
        ],
      }),
    }),
  ],
  providers: [providePrismaClientExceptionFilter()],
})
export class DatabaseModule {}
