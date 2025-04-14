import { IsOptional, IsString } from "class-validator";

export class CreateLanguageDto {
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public level?: string;

  @IsOptional()
  @IsString()
  public description?: string;
}
