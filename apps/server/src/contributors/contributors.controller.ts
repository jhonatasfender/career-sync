import { Controller, Get } from "@nestjs/common";

import { ContributorsService } from "./contributors.service";

@Controller("contributors")
export class ContributorsController {
  constructor(private readonly contributorsService: ContributorsService) {}

  @Get("/github")
  public async githubContributors() {
    return this.contributorsService.fetchGitHubContributors();
  }

  @Get("/crowdin")
  public async crowdinContributors() {
    return this.contributorsService.fetchCrowdinContributors();
  }
}
