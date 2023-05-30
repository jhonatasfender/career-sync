import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcademicExperience } from './entities/AcademicExperience';
import { CareerPortfolio } from './entities/CareerPortfolio';
import { Competency } from './entities/Competency';
import { Experience } from './entities/Experience';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database.db',
      entities: [CareerPortfolio, Competency, Experience, AcademicExperience],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
