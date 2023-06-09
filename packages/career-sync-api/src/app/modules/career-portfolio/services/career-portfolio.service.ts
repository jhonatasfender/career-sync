import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import CareerPortfolio from '../../../entities/career-portfolio.entity';
import {
  CreateCareerPortfolioDto,
  UpdateCareerPortfolioDto,
} from '../controllers/career-portfolio.dto';

@Injectable()
export class CareerPortfolioService {
  private readonly relations = [
    'languages',
    'languages.competencies',
    'languages.experiences',
    'languages.academicExperiences',
  ];

  constructor(
    @InjectRepository(CareerPortfolio)
    private readonly careerPortfolioRepository: Repository<CareerPortfolio>
  ) {}

  public async findAll(): Promise<CareerPortfolio[]> {
    return await this.careerPortfolioRepository.find({
      relations: this.relations,
    });
  }

  public async findOne(id: number): Promise<CareerPortfolio> {
    return await this.careerPortfolioRepository.findOne({
      where: { id },
      relations: this.relations,
    });
  }

  public async create(
    createDto: CreateCareerPortfolioDto
  ): Promise<CareerPortfolio> {
    const savedCareerPortfolio = this.careerPortfolioRepository.create({
      ...createDto,
      portfolioLink: createDto.portfolio,
      githubLink: createDto.github,
    });

    return await this.careerPortfolioRepository.save(savedCareerPortfolio);
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
