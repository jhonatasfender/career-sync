import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString, ValidateIf } from "class-validator";

export class CreateExperienceDto {
  @IsString()
  @IsNotEmpty()
  public company: string;

  @IsString()
  @IsNotEmpty()
  public position: string;

  @IsOptional()
  @IsString()
  public summary?: string;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  public startDate: Date;

  @ValidateIf((o) => o.endDate !== undefined)
  @Transform(({ value }) => (value ? new Date(value) : null))
  @IsDate()
  @IsOptional()
  public endDate?: Date;

  @IsOptional()
  @IsString()
  public website?: string;
}
