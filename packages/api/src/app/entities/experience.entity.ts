import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import Language from './language.entity';

@Entity()
export default class Experience {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ name: 'company_name' })
  public companyName: string;

  @Column()
  public position: string;

  @Column({ nullable: true, name: 'start_date' })
  public startDate: Date;

  @Column({ nullable: true, name: 'end_date' })
  public endDate: Date;

  @Column('text')
  public description: string;

  @ManyToOne(() => Language, (lang) => lang.experiences)
  public language?: Language;
}
