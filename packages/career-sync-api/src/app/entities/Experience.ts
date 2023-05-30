import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CareerPortfolio } from './CareerPortfolio';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  position: string;

  @Column({ nullable: true })
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @Column('text')
  description: string;

  @ManyToOne(
    () => CareerPortfolio,
    (careerPortfolio) => careerPortfolio.experiences
  )
  careerPortfolio: CareerPortfolio;
}
