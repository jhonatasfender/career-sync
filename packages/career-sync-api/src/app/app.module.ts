import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import migrations from '../migrations';
import AcademicExperience from './entities/academic-experience.entity';
import CareerPortfolio from './entities/career-portfolio.entity';
import Competency from './entities/competency.entity';
import Experience from './entities/experience.entity';
import Language from './entities/language.entity';
import { CareerPortfolioModule } from './modules/career-portfolio/career-portfolio.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `packages/career-sync-api/src/app/entities/database.db`,
      entities: [
        CareerPortfolio,
        Competency,
        Experience,
        AcademicExperience,
        Language,
      ],
      migrations: [...migrations],
      migrationsRun: true,
      synchronize: false,
    }),
    CareerPortfolioModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        validationError: {
          target: false,
        },
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    },
  ],
})
export class AppModule {}
