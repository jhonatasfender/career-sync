import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import Language from './language.entity';

@Entity()
export default class AcademicExperience {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'institution_name' })
  public institutionName: string;

  @Column({ name: 'course_name' })
  public courseName: string;

  @Column('text')
  public description: string;

  @ManyToOne(() => Language, (lang) => lang.academicExperiences)
  public language: Language;
}
