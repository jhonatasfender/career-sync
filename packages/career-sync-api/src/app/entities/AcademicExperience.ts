import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CareerPortfolio } from './CareerPortfolio';

@Entity()
export class AcademicExperience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  institutionName: string;

  @Column()
  courseName: string;

  @Column('text')
  description: string;

  @ManyToOne(() => CareerPortfolio, careerPortfolio => careerPortfolio.academicExperiences)
  careerPortfolio: CareerPortfolio;
}
