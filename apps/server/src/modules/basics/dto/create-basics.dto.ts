import { Type } from "class-transformer";
import { IsArray, IsEmail, IsOptional, IsString, ValidateNested } from "class-validator";

export class PictureDto {
  @IsOptional()
  @IsString()
  public url?: string;

  @IsOptional()
  public size?: number;

  @IsOptional()
  public aspectRatio?: number;

  @IsOptional()
  public borderRadius?: number;

  @IsOptional()
  public effects?: { hidden?: boolean; border?: boolean; grayscale?: boolean };
}

export class CustomFieldDto {
  @IsString()
  public id: string;

  @IsString()
  public icon: string;

  @IsString()
  public name: string;

  @IsString()
  public value: string;
}

export class CreateBasicsDto {
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public label?: string;

  @IsOptional()
  public picture?: PictureDto;

  @IsOptional()
  @IsEmail()
  public email?: string;

  @IsOptional()
  @IsString()
  public phone?: string;

  @IsOptional()
  @IsString()
  public url?: string;

  @IsOptional()
  @IsString()
  public summary?: string;

  @IsOptional()
  @IsString()
  public location?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CustomFieldDto)
  public customFields?: CustomFieldDto[];
}
