import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Language from './language.entity';

@Entity()
export default class CareerPortfolio {
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

  @OneToMany(() => Language, (lang) => lang.careerPortfolio, {
    cascade: true,
  })
  public languages: Language[];
}
