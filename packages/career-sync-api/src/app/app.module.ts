import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CareerPortfolioController } from './controllers/career-portfolio.controller';
import { AcademicExperience } from './entities/AcademicExperience';
import { CareerPortfolio } from './entities/CareerPortfolio';
import { Competency } from './entities/Competency';
import { Experience } from './entities/Experience';
import { CareerPortfolioService } from './services/career-portfolio.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database.db',
      entities: [CareerPortfolio, Competency, Experience, AcademicExperience],
      synchronize: true,
    }),
  ],
  controllers: [CareerPortfolioController],
  providers: [CareerPortfolioService],
})
export class AppModule {}
