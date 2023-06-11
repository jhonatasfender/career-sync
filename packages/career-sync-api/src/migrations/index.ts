import { CreateCareerPortfolioInit20230610205728 } from './20230610205728-career-portfolio-init.migration';
import { CreateCompetencyInit20230610205728 } from './20230610205728-competency-init.migration';
import { CreateAcademicExperienceInit20230610205728 } from './20230610205728-create-academic-experience-init.migration';
import { CreateExperienceInit20230610205728 } from './20230610205728-experience-init.migration';
import { CreateLanguageInit20230610205728 } from './20230610205728-language-init-migration';

const migrations = [
  CreateCareerPortfolioInit20230610205728,
  CreateCompetencyInit20230610205728,
  CreateAcademicExperienceInit20230610205728,
  CreateLanguageInit20230610205728,
  CreateExperienceInit20230610205728,
];

export default migrations;
