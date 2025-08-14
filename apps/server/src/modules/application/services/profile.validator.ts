import { Injectable, NotFoundException } from "@nestjs/common";

import { BuildProfileSummary } from "../types";

@Injectable()
export class ProfileValidator {
  public validateOrThrow(userProfile: BuildProfileSummary): void {
    const hasAnyBasicFieldFilled = Boolean(
      userProfile.basics &&
        [
          userProfile.basics.name,
          userProfile.basics.email,
          userProfile.basics.headline,
          userProfile.basics.summary,
        ].some((field) => field && field.trim() !== ""),
    );

    const hasProfileSummary = Boolean(userProfile.summary?.content?.trim() !== "");
    const hasAtLeastOneExperience = userProfile.experiences.length > 0;
    const hasAtLeastOneSkill = userProfile.skills.length > 0;
    const hasAtLeastOneEducation = userProfile.educations.length > 0;

    if (!hasAnyBasicFieldFilled) {
      throw new NotFoundException(
        "É necessário preencher as informações básicas (nome, email, headline ou resumo).",
      );
    }

    if (!hasProfileSummary) {
      throw new NotFoundException("É necessário preencher o resumo do perfil.");
    }

    if (!hasAtLeastOneExperience) {
      throw new NotFoundException("É necessário ter pelo menos uma experiência profissional.");
    }

    if (!hasAtLeastOneSkill) {
      throw new NotFoundException("É necessário ter pelo menos uma skill.");
    }

    void hasAtLeastOneEducation;
  }
}
