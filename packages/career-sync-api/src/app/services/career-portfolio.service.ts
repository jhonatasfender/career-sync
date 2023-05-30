import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCareerPortfolioDto, UpdateCareerPortfolioDto } from './dto';
import { CareerPortfolio } from '../entities/CareerPortfolio';

@Injectable()
export class CareerPortfolioService {
  constructor(
    @InjectRepository(CareerPortfolio)
    private readonly careerPortfolioRepository: Repository<CareerPortfolio>,
  ) {}

  findAll() {
    return this.careerPortfolioRepository.find();
  }

  findOne(id: string) {
    return this.careerPortfolioRepository.findOne(id);
  }

  create(createDto: CreateCareerPortfolioDto) {
    const careerPortfolio = this.careerPortfolioRepository.create(createDto);
    return this.careerPortfolioRepository.save(careerPortfolio);
  }

  update(id: string, updateDto: UpdateCareerPortfolioDto) {
    return this.careerPortfolioRepository.update(id, updateDto);
  }

  remove(id: string) {
    return this.careerPortfolioRepository.delete(id);
  }
}
