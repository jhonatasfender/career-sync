import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

import { CareerPortfolio } from '../entities/CareerPortfolio';
import { CareerPortfolioService } from '../services/career-portfolio.service';
import {
  CreateCareerPortfolioDto,
  UpdateCareerPortfolioDto,
} from './career-portfolio.dto';

@Controller('career-portfolio')
export class CareerPortfolioController {
  constructor(
    private readonly careerPortfolioService: CareerPortfolioService
  ) {}

  @Get()
  public async findAll(): Promise<CareerPortfolio[]> {
    return await this.careerPortfolioService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: number): Promise<CareerPortfolio> {
    return await this.careerPortfolioService.findOne(id);
  }

  @Post()
  public async create(
    @Body() createDto: CreateCareerPortfolioDto
  ): Promise<CareerPortfolio> {
    return await this.careerPortfolioService.create(createDto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateCareerPortfolioDto
  ): Promise<UpdateResult> {
    return await this.careerPortfolioService.update(id, updateDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<DeleteResult> {
    return await this.careerPortfolioService.remove(id);
  }
}
