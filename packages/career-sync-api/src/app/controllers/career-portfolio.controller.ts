import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateCareerPortfolioDto, UpdateCareerPortfolioDto } from './dto';
import { CareerPortfolioService } from '../services/career-portfolio.service';

@Controller('career-portfolio')
export class CareerPortfolioController {
  constructor(private readonly careerPortfolioService: CareerPortfolioService) {}

  @Get()
  findAll() {
    return this.careerPortfolioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careerPortfolioService.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreateCareerPortfolioDto) {
    return this.careerPortfolioService.create(createDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateCareerPortfolioDto) {
    return this.careerPortfolioService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careerPortfolioService.remove(id);
  }
}
