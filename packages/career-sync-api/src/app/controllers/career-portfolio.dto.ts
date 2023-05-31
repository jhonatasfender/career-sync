import { IsEmail, IsUrl, IsPhoneNumber, ArrayNotEmpty } from 'class-validator';

export class CreateCareerPortfolioDto {
  @IsEmail()
  public email: string;

  @IsPhoneNumber('BR')
  public whatsapp: string;

  @IsUrl()
  public portfolio: string;

  @IsUrl()
  public github: string;

  @ArrayNotEmpty()
  public competencies: CreateCompetencyDto[];

  @ArrayNotEmpty()
  public experiences: CreateExperienceDto[];

  @ArrayNotEmpty()
  public academicExperiences: CreateAcademicExperienceDto[];

  public name: string;

  public introduction: string;
}

export class UpdateCareerPortfolioDto {
  @IsEmail()
  public email?: string;

  @IsPhoneNumber('BR')
  public whatsapp?: string;

  @IsUrl()
  public portfolio?: string;

  @IsUrl()
  public github?: string;

  @ArrayNotEmpty()
  public competencies?: UpdateCompetencyDto[];

  @ArrayNotEmpty()
  public experiences?: UpdateExperienceDto[];

  @ArrayNotEmpty()
  public academicExperiences?: UpdateAcademicExperienceDto[];

  public name?: string;

  public introduction?: string;
}

export class CreateCompetencyDto {
  public title: string;
  public parentId?: number;
}

export class CreateExperienceDto {
  public companyName: string;
  public position: string;
  public startDate: Date;
  public endDate?: Date;
  public description: string;
  public careerPortfolioId: number;
}

export class CreateAcademicExperienceDto {
  public institutionName: string;
  public course: string;
  public description: string;
}

export class UpdateCompetencyDto {
  public title?: string;
  public parentId?: number;
}

export class UpdateExperienceDto {
  public companyName?: string;
  public position?: string;
  public startDate?: Date;
  public endDate?: Date;
  public description?: string;
}

export class UpdateAcademicExperienceDto {
  public institutionName?: string;
  public course?: string;
  public description?: string;
}
