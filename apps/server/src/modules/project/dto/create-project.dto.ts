import { Transform } from "class-transformer";
import { IsArray, IsDate, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateProjectDto {
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public description?: string;

  @IsOptional()
  @IsArray()
  public keywords?: string[];

  @IsOptional()
  @IsUrl()
  public website?: string;

  @IsOptional()
  @IsString()
  public summary?: string;

  @IsOptional()
  @Transform(({ value }) => (value ? new Date(value) : null))
  @IsDate()
  public startDate?: Date;

  @IsOptional()
  @Transform(({ value }) => (value ? new Date(value) : null))
  @IsDate()
  public endDate?: Date;
}
