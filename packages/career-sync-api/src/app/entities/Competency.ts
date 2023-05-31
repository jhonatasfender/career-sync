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
  public id: number;

  @Column()
  public title: string;

  @ManyToOne(
    () => CareerPortfolio,
    (careerPortfolio) => careerPortfolio.competencies
  )
  public careerPortfolio: CareerPortfolio;

  @ManyToOne(() => Competency, (competency) => competency.subcategories)
  public parentCategory: Competency;

  @ManyToMany(() => Competency, (competency) => competency.parentCategory)
  @JoinTable()
  public subcategories: Competency[];
}
