import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
  controllers: [],
  providers: [],
})
export class AppModule {}
