import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import {
  CreateCareerPortfolioDto,
  UpdateCareerPortfolioDto,
} from '../controllers/career-portfolio.dto';
import { CareerPortfolio } from '../entities/CareerPortfolio';

@Injectable()
export class CareerPortfolioService {
  constructor(
    @InjectRepository(CareerPortfolio)
    private readonly careerPortfolioRepository: Repository<CareerPortfolio>
  ) {}

  public async findAll(): Promise<CareerPortfolio[]> {
    return await this.careerPortfolioRepository.find();
  }

  public async findOne(id: number): Promise<CareerPortfolio> {
    return await this.careerPortfolioRepository.findOne({ where: { id } });
  }

  public async create(
    createDto: CreateCareerPortfolioDto
  ): Promise<CareerPortfolio> {
    const careerPortfolio = this.careerPortfolioRepository.create(createDto);
    return await this.careerPortfolioRepository.save(careerPortfolio);
  }

  public async update(
    id: string,
    updateDto: UpdateCareerPortfolioDto
  ): Promise<UpdateResult> {
    return await this.careerPortfolioRepository.update(id, updateDto);
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.careerPortfolioRepository.delete(id);
  }
}
