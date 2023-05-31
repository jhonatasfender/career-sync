import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CareerPortfolio } from './CareerPortfolio';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public companyName: string;

  @Column()
  public position: string;

  @Column({ nullable: true })
  public startDate: Date;

  @Column({ nullable: true })
  public endDate: Date;

  @Column('text')
  public description: string;

  @ManyToOne(
    () => CareerPortfolio,
    (careerPortfolio) => careerPortfolio.experiences
  )
  public careerPortfolio: CareerPortfolio;
}
