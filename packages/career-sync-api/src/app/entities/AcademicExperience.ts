import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { CareerPortfolio } from './CareerPortfolio';

@Entity()
export class AcademicExperience {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public institutionName: string;

  @Column()
  public courseName: string;

  @Column('text')
  public description: string;

  @ManyToOne(
    () => CareerPortfolio,
    (careerPortfolio) => careerPortfolio.academicExperiences
  )
  public careerPortfolio: CareerPortfolio;
}
