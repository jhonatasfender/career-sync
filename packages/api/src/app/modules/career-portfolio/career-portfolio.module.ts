import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import CareerPortfolio from '../../entities/career-portfolio.entity';
import { CareerPortfolioController } from './controllers/career-portfolio.controller';
import { CareerPortfolioService } from './services/career-portfolio.service';

@Module({
  imports: [TypeOrmModule.forFeature([CareerPortfolio])],
  controllers: [CareerPortfolioController],
  providers: [CareerPortfolioService],
})
export class CareerPortfolioModule {}
