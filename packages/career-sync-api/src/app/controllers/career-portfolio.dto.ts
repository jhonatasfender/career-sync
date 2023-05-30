import { IsEmail, IsUrl, IsPhoneNumber, ArrayNotEmpty } from "class-validator";

export class CreateCareerPortfolioDto {
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber('BR')
  whatsapp: string;

  @IsUrl()
  portfolio: string;

  @IsUrl()
  github: string;

  introduction: string;

  @ArrayNotEmpty()
  competencies: CreateCompetencyDto[];

  @ArrayNotEmpty()
  experiences: CreateExperienceDto[];

  @ArrayNotEmpty()
  academicExperiences: CreateAcademicExperienceDto[];
}

export class UpdateCareerPortfolioDto {
  name?: string;

  @IsEmail()
  email?: string;

  @IsPhoneNumber('BR')
  whatsapp?: string;

  @IsUrl()
  portfolio?: string;

  @IsUrl()
  github?: string;

  introduction?: string;

  @ArrayNotEmpty()
  competencies?: UpdateCompetencyDto[];

  @ArrayNotEmpty()
  experiences?: UpdateExperienceDto[];

  @ArrayNotEmpty()
  academicExperiences?: UpdateAcademicExperienceDto[];
}

export class CreateCompetencyDto {
  title: string;
  parentId?: number;
}

export class CreateExperienceDto {
  companyName: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  careerPortfolioId: number;
}

export class CreateAcademicExperienceDto {
  institutionName: string;
  course: string;
  description: string;
}

export class UpdateCompetencyDto {
  title?: string;
  parentId?: number;
}

export class UpdateExperienceDto {
  companyName?: string;
  position?: string;
  startDate?: Date;
  endDate?: Date;
  description?: string;
}

export class UpdateAcademicExperienceDto {
  institutionName?: string;
  course?: string;
  description?: string;
}
