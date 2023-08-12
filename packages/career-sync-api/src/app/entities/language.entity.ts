import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import AcademicExperience from './academic-experience.entity';
import CareerPortfolio from './career-portfolio.entity';
import Competency from './competency.entity';
import Experience from './experience.entity';

@Entity()
export default class Language {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('text')
  public presentation: string;

  @Column({ type: 'varchar', length: 5 })
  public lang: string;

  @Column()
  public city: string;

  @Column()
  public country: string;

  @OneToMany(() => Competency, (competency) => competency.language, {
    cascade: true,
  })
  public competencies: Competency[];

  @OneToMany(() => Experience, (experience) => experience.language, {
    cascade: true,
  })
  public experiences: Experience[];

  @OneToMany(
    () => AcademicExperience,
    (academicExperience) => academicExperience.language,
    {
      cascade: true,
    },
  )
  public academicExperiences: AcademicExperience[];

  @ManyToOne(
    () => CareerPortfolio,
    (careerPortfolio) => careerPortfolio.languages,
  )
  public careerPortfolio: CareerPortfolio;
}
