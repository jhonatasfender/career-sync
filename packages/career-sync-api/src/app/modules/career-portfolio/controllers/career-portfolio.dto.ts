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
  public portfolio?: string;

  @IsUrl()
  public github?: string;

  @IsArray()
  @ArrayMinSize(1)
  @Type(() => UpdateLanguageDTO)
  @ValidateNested({ each: true })
  public languages?: UpdateLanguageDTO[];
}

export class CreateLanguageDTO {
  @Length(2, 5)
  @IsNotEmpty()
  public lang: string;

  @IsNotEmpty()
  public presentation: string;

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
  @Length(2, 5)
  @IsOptional()
  public lang?: string;

  @IsOptional()
  public presentation?: string;

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
  public title?: string;

  @IsOptional()
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
  public courseNames: string;

  public description: string;
}

export class UpdateAcademicExperienceDto {
  @IsOptional()
  public institutionName?: string;

  @IsOptional()
  public course?: string;

  @IsOptional()
  public description?: string;
}
