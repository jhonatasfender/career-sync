import { IsInt, IsOptional, IsString, Max, Min } from "class-validator";

export class CreateLanguageDto {
  @IsString()
  public name: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(5)
  public level?: number;

  @IsOptional()
  @IsString()
  public description?: string;
}
