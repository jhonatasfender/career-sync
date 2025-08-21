import { Injectable, Logger } from "@nestjs/common";
import puppeteer from "puppeteer";

import { BuildProfileSummary } from "../../types";
import { TemplateFactory } from "./templates/template.factory";

export type ArtboardTemplate =
  | "azurill"
  | "bronzor"
  | "chikorita"
  | "ditto"
  | "gengar"
  | "glalie"
  | "kakuna"
  | "leafish"
  | "nosepass"
  | "onyx"
  | "pikachu"
  | "rhyhorn";

@Injectable()
export class ArtboardTemplateService {
  private readonly logger = new Logger(ArtboardTemplateService.name);

  public async generateResumePDF(
    resumeContent: string,
    profile: BuildProfileSummary,
    templateName: ArtboardTemplate = "onyx",
  ): Promise<Buffer> {
    try {
      const html = this.generateArtboardHTML(resumeContent, profile, templateName);
      const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });

      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: "networkidle0" });
      const pdfBuffer = await page.pdf({
        format: "A4",
        margin: {
          top: "20mm",
          right: "20mm",
          bottom: "20mm",
          left: "20mm",
        },
        printBackground: true,
        preferCSSPageSize: true,
      });

      await browser.close();
      return Buffer.from(pdfBuffer);
    } catch (error) {
      this.logger.error("Erro ao gerar PDF com template do Artboard:", error);
      throw new Error(`Falha ao gerar PDF do currículo com template ${templateName}`);
    }
  }

  private generateArtboardHTML(
    resumeContent: string,
    profile: BuildProfileSummary,
    templateName: ArtboardTemplate,
  ): string {
    const template = TemplateFactory.create(templateName);
    return template(resumeContent, profile);
  }
}
