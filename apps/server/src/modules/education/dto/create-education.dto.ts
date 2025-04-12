import { Transform } from "class-transformer";
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from "class-validator";

export class CreateEducationDto {
  @IsString()
  @IsNotEmpty()
  public institution: string;

  @IsString()
  @IsNotEmpty()
  public area: string;

  @IsOptional()
  @IsString()
  public studyType?: string;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  public startDate: Date;

  @ValidateIf((o) => o.endDate !== undefined)
  @Transform(({ value }) => (value ? new Date(value) : null))
  @IsDate()
  @IsOptional()
  public endDate?: Date;

  @IsOptional()
  @IsNumber()
  public gpa?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  public courses?: string[];
}
