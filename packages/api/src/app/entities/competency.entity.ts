import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Language from './language.entity';

@Entity()
export default class Competency {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public title: string;

  @ManyToOne(() => Language, (lang) => lang.competencies)
  public language?: Language;

  @ManyToOne(() => Competency, (competency) => competency.subcategories)
  public parentCategory?: Competency;

  @ManyToMany(() => Competency, (competency) => competency.parentCategory, {
    cascade: true,
  })
  @JoinTable()
  public subcategories?: Competency[];
}
