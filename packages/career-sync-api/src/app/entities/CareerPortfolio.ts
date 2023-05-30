import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AcademicExperience } from './AcademicExperience';
import { Competency } from './Competency';
import { Experience } from './Experience';

@Entity()
export class CareerPortfolio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  portfolioLink: string;

  @Column()
  githubLink: string;

  @Column('text')
  presentation: string;

  @OneToMany(() => Competency, competency => competency.careerPortfolio)
  competencies: Competency[];

  @OneToMany(() => Experience, experience => experience.careerPortfolio)
  experiences: Experience[];

  @OneToMany(() => AcademicExperience, academicExperience => academicExperience.careerPortfolio)
  academicExperiences: AcademicExperience[];
}
