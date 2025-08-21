import { Injectable } from "@nestjs/common";

import { CreateApplicationDto } from "../../dto/create-application.dto";
import { CreateResumeDto } from "../../dto/create-resume.dto";
import { BuildProfileSummary } from "../../types";
import { ArtboardTemplate, ArtboardTemplateService } from "../resume/artboard-template.service";
import { CreateResumeService } from "../resume/create-resume.service";
import { CreateApplicationService } from "./create-application.service";

@Injectable()
export class ApplicationService {
  constructor(
    private readonly createApplication: CreateApplicationService,
    private readonly createResumeService: CreateResumeService,
    private readonly artboardTemplateService: ArtboardTemplateService,
  ) {}

  public async create(userId: string, dto: CreateApplicationDto) {
    return this.createApplication.execute(userId, dto);
  }

  public async createResume(userId: string, dto: CreateResumeDto) {
    return this.createResumeService.execute(userId, dto);
  }

  public async applyTemplate(
    userId: string,
    dto: { resumeContent: string; template: string; profile: BuildProfileSummary },
  ) {
    const pdfBuffer = await this.artboardTemplateService.generateResumePDF(
      dto.resumeContent,
      dto.profile,
      dto.template as ArtboardTemplate,
    );

    return {
      message: "Template aplicado com sucesso",
      pdfBuffer: pdfBuffer.toString("base64"),
      template: dto.template,
      html: "HTML gerado pelo template",
    };
  }
}
