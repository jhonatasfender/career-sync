import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CareerPortfolio } from './CareerPortfolio';

@Entity()
export class Competency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(
    () => CareerPortfolio,
    (careerPortfolio) => careerPortfolio.competencies
  )
  careerPortfolio: CareerPortfolio;

  @ManyToOne(() => Competency, (competency) => competency.subcategories)
  parentCategory: Competency;

  @ManyToMany(() => Competency, (competency) => competency.parentCategory)
  @JoinTable()
  subcategories: Competency[];
}
