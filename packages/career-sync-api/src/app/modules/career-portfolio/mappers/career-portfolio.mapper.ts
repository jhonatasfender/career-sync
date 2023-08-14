/* eslint-disable max-lines-per-function */
import AcademicExperience from '../../../entities/academic-experience.entity';
import CareerPortfolio from '../../../entities/career-portfolio.entity';
import Competency from '../../../entities/competency.entity';
import Experience from '../../../entities/experience.entity';
import {
  UpdateAcademicExperienceDto,
  UpdateCareerPortfolioDto,
  UpdateCompetencyDto,
  UpdateExperienceDto,
} from '../controllers/career-portfolio.dto';

export class CareerPortfolioMapper {
  public static toEntity(
    updateDto: UpdateCareerPortfolioDto,
    careerPortfolioEntity: CareerPortfolio,
  ): CareerPortfolio {
    const mappedLanguages = this.updateEntities(
      careerPortfolioEntity.languages,
      updateDto.languages,
      (language, dtoLanguage) => {
        const mappedAcademicExperiences = this.updateEntities(
          language.academicExperiences,
          dtoLanguage.academicExperiences,
          this.mapAcademicExperiences,
        );

        const mappedCompetencies = this.updateEntities(
          language.competencies,
          dtoLanguage.competencies,
          this.mapCompetencies,
        );

        const mappedExperiences = this.updateEntities(
          language.experiences,
          dtoLanguage.experiences,
          this.mapExperiences,
        );

        return {
          ...language,
          ...dtoLanguage,
          academicExperiences: mappedAcademicExperiences,
          competencies: mappedCompetencies,
          experiences: mappedExperiences,
        };
      },
    );

    return {
      ...careerPortfolioEntity,
      ...updateDto,
      languages: mappedLanguages,
    };
  }

  private static updateEntities<
    Entity extends { id?: number },
    DTO extends { id?: number },
  >(
    originalEntities: Entity[],
    updatedEntities: DTO[],
    updateFn: (original: Entity, updated: DTO) => Entity,
  ): Entity[] {
    const updatedEntityMap = new Map<string, Entity>();
    originalEntities.forEach((entity) => {
      updatedEntityMap.set(String(entity.id), entity);
    });

    return updatedEntities.map<Entity>((updatedEntity) => {
      const originalEntity = updatedEntityMap.get(String(updatedEntity.id));

      if (originalEntity) {
        return updateFn(originalEntity, updatedEntity);
      }

      return updatedEntity as unknown as Entity;
    });
  }

  private static mapAcademicExperiences(
    updated: AcademicExperience,
    dto: UpdateAcademicExperienceDto,
  ): AcademicExperience {
    return {
      ...updated,
      ...dto,
    };
  }

  private static mapCompetencies(
    updated: Competency,
    dto: UpdateCompetencyDto,
  ): Competency {
    return {
      ...updated,
      title: dto.title,
    };
  }

  private static mapExperiences(
    updated: Experience,
    dto: UpdateExperienceDto,
  ): Experience {
    return {
      ...updated,
      ...dto,
    };
  }
}
