import { CreateCareerPortfolioInit } from './career-portfolio-init.migration';
import { CreateCompetencyInit } from './competency-init.migration';
import { CreateAcademicExperienceInit } from './create-academic-experience-init.migration';
import { CreateLanguageTableInit } from './create-language-table-init.migration';
import { CreateExperienceInit } from './experience-init.migration';
import { CreateLanguageInit } from './language-init-migration';

const migrations = [
  CreateCareerPortfolioInit,
  CreateCompetencyInit,
  CreateAcademicExperienceInit,
  CreateLanguageTableInit,
  CreateExperienceInit,
  CreateLanguageInit,
];

export default migrations;
