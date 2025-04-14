import { IsOptional, IsString } from "class-validator";

export class CreateSkillDto {
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public level?: string;

  @IsOptional()
  @IsString()
  public description?: string;

  @IsOptional()
  public keywords?: string[];
}
