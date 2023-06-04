import { Type } from 'class-transformer';
import {
  IsEmail,
  IsUrl,
  IsPhoneNumber,
  ArrayNotEmpty,
  IsNotEmpty,
  IsDateString,
  IsOptional,
  ValidateIf,
  ValidateNested,
  ArrayUnique,
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
  public portfolio?: string;

  @IsUrl()
  public github?: string;

  @ValidateNested({ each: true })
  public languages?: UpdateLanguageDTO[];
}

export class CreateLanguageDTO {
  @IsNotEmpty()
  public presentation: string;

  @ValidateNested({ each: true })
  public competencies: CreateCompetencyDto[];

  @ValidateNested({ each: true })
  public experiences: CreateExperienceDto[];

  @ValidateNested({ each: true })
  public academicExperiences: CreateAcademicExperienceDto[];
}

export class UpdateLanguageDTO {
  @ValidateNested({ each: true })
  public competencies?: UpdateCompetencyDto[];

  @ValidateNested({ each: true })
  public experiences?: UpdateExperienceDto[];

  @ValidateNested({ each: true })
  public academicExperiences?: UpdateAcademicExperienceDto[];

  @IsOptional()
  public presentation?: string;
}

export class CreateCompetencyDto {
  @IsNotEmpty()
  public title: string;

  @ArrayUnique()
  @IsOptional()
  @ValidateNested({ each: true })
  public parent?: CreateCompetencyDto[];
}

export class UpdateCompetencyDto {
  @IsOptional()
  public title?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @ArrayUnique()
  public parent?: UpdateCompetencyDto[];
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
  public companyName?: string;

  @IsOptional()
  public position?: string;

  @IsOptional()
  @IsDateString()
  public startDate?: Date;

  @IsOptional()
  @IsDateString()
  @ValidateIf((_, value) => value !== undefined)
  public endDate?: Date;

  @IsOptional()
  public description?: string;
}

export class CreateAcademicExperienceDto {
  @IsNotEmpty()
  public institutionName: string;

  @IsNotEmpty()
  public course: string;

  public description: string;
}

export class UpdateAcademicExperienceDto {
  public institutionName?: string;
  public course?: string;
  public description?: string;
}
