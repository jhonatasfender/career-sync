import { Controller, Get } from "@nestjs/common";

import { TranslationService } from "./translation.service";

@Controller("translation")
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Get("/languages")
  public async languages() {
    return this.translationService.fetchLanguages();
  }
}
