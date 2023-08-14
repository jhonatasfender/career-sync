import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  ArrayUnique,
  IsArray,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsUrl,
  Length,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

export class CreateCareerPortfolioDto {
  @IsNotEmpty()
  public username: string;

  @IsEmail()
  public email: string;

  @IsPhoneNumber('BR')
  public phone: string;

  @IsUrl()
  public portfolio: string;

  @IsUrl()
  public github: string;

  @IsArray()
  @ArrayMinSize(1)
  @Type(() => CreateLanguageDTO)
  @ValidateNested({ each: true })
  public languages: CreateLanguageDTO[];
}

export class UpdateCareerPortfolioDto {
  @IsNotEmpty()
  public username?: string;

  @IsEmail()
  public email?: string;

  @IsPhoneNumber('BR')
  public phone?: string;

  @IsUrl()
  public portfolioLink?: string;

  @IsUrl()
  public githubLink?: string;

  @IsArray()
  @ArrayMinSize(1)
  @Type(() => UpdateLanguageDTO)
  @ValidateNested({ each: true })
  public languages?: UpdateLanguageDTO[];

  @IsNotEmpty()
  public id: number;
}

export class CreateLanguageDTO {
  @Length(2, 5)
  @IsNotEmpty()
  public lang: string;

  @IsNotEmpty()
  public presentation: string;

  @IsNotEmpty()
  public city: string;

  @IsNotEmpty()
  public country: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  public competencies: CreateCompetencyDto[];

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  public experiences: CreateExperienceDto[];

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  public academicExperiences: CreateAcademicExperienceDto[];
}

export class UpdateLanguageDTO {
  @IsNotEmpty()
  public id: number;

  @Length(2, 5)
  @IsOptional()
  public lang?: string;

  @IsOptional()
  public presentation?: string;

  @IsNotEmpty()
  public city: string;

  @IsNotEmpty()
  public country: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  public competencies?: UpdateCompetencyDto[];

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  public experiences?: UpdateExperienceDto[];

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  public academicExperiences?: UpdateAcademicExperienceDto[];
}

export class CreateCompetencyDto {
  @IsNotEmpty()
  public title: string;

  @ArrayUnique()
  @IsOptional()
  public parent?: CreateCompetencyDto[];
}

export class UpdateCompetencyDto {
  @IsOptional()
  public id?: number;

  @IsNotEmpty()
  public title: string;

  @IsOptional()
  @ArrayUnique()
  public parentCategory?: UpdateCompetencyDto[];
}

export class CreateExperienceDto {
  @IsNotEmpty()
  public companyName: string;

  @IsNotEmpty()
  public position: string;

  @IsNotEmpty()
  @IsDateString()
  public startDate: Date;

  @IsOptional()
  @IsDateString()
  @ValidateIf((_, value) => value !== undefined)
  public endDate?: Date;

  @IsNotEmpty()
  public description: string;

  @IsNotEmpty()
  public careerPortfolioId: number;
}

export class UpdateExperienceDto {
  @IsOptional()
  public id: number;

  @IsNotEmpty()
  public companyName: string;

  @IsNotEmpty()
  public position: string;

  @IsNotEmpty()
  @IsDateString()
  public startDate: Date;

  @IsNotEmpty()
  @IsDateString()
  @ValidateIf((_, value) => value !== undefined)
  public endDate: Date;

  @IsNotEmpty()
  public description: string;
}

export class CreateAcademicExperienceDto {
  @IsNotEmpty()
  public institutionName: string;

  @IsNotEmpty()
  public courseName: string;

  @IsNotEmpty()
  public description: string;
}

export class UpdateAcademicExperienceDto {
  @IsOptional()
  public id?: number;

  @IsNotEmpty()
  public institutionName: string;

  @IsNotEmpty()
  public courseName: string;

  @IsNotEmpty()
  public description: string;
}
