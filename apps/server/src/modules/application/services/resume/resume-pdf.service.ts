import { Injectable, Logger } from "@nestjs/common";
import puppeteer from "puppeteer";

import { BuildProfileSummary } from "../../types";
import { ResumeTemplate } from "./resume-template";

@Injectable()
export class ResumePdfService {
  private readonly logger = new Logger(ResumePdfService.name);

  public async generateResumePDF(
    resumeContent: string,
    profile: BuildProfileSummary,
  ): Promise<Buffer> {
    try {
      const html = ResumeTemplate.generateHTML(resumeContent, profile);
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
      this.logger.error("Erro ao gerar PDF:", error);
      throw new Error("Falha ao gerar PDF do currículo");
    }
  }
}
