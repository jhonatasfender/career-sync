import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import Language from './language.entity';

@Entity()
export default class AcademicExperience {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public institutionName: string;

  @Column()
  public courseName: string;

  @Column('text')
  public description: string;

  @ManyToOne(() => Language, (lang) => lang.academicExperiences)
  public language: Language;
}
