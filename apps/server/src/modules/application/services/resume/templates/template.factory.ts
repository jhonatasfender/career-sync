import type { BuildProfileSummary } from "../../../types";
import { dittoTemplate } from "./ditto.template";
import { onyxTemplate } from "./onyx.template";
import { pikachuTemplate } from "./pikachu.template";

export type TemplateFunction = (resumeContent: string, profile: BuildProfileSummary) => string;

export class TemplateFactory {
  private static templates = new Map<string, TemplateFunction>([
    ["onyx", onyxTemplate],
    ["pikachu", pikachuTemplate],
    ["ditto", dittoTemplate],
    // Templates que ainda usam o Onyx como base
    ["azurill", onyxTemplate],
    ["bronzor", onyxTemplate],
    ["chikorita", onyxTemplate],
    ["gengar", onyxTemplate],
    ["glalie", onyxTemplate],
    ["kakuna", onyxTemplate],
    ["leafish", onyxTemplate],
    ["nosepass", onyxTemplate],
    ["rhyhorn", onyxTemplate],
  ]);

  public static create(templateName: string): TemplateFunction {
    const template = this.templates.get(templateName);
    if (!template) {
      throw new Error(`Template '${templateName}' não encontrado`);
    }
    return template;
  }

  public static getAvailableTemplates(): string[] {
    return [...this.templates.keys()];
  }

  public static hasTemplate(templateName: string): boolean {
    return this.templates.has(templateName);
  }

  public static getTemplateCount(): number {
    return this.templates.size;
  }
}
