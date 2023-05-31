import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AcademicExperience } from './AcademicExperience';
import { Competency } from './Competency';
import { Experience } from './Experience';

@Entity()
export class CareerPortfolio {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public username: string;

  @Column()
  public email: string;

  @Column()
  public phone: string;

  @Column()
  public portfolioLink: string;

  @Column()
  public githubLink: string;

  @Column('text')
  public presentation: string;

  @OneToMany(() => Competency, (competency) => competency.careerPortfolio)
  public competencies: Competency[];

  @OneToMany(() => Experience, (experience) => experience.careerPortfolio)
  public experiences: Experience[];

  @OneToMany(
    () => AcademicExperience,
    (academicExperience) => academicExperience.careerPortfolio
  )
  public academicExperiences: AcademicExperience[];
}
