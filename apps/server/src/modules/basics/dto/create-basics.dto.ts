import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateBasicsDto {
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public label?: string;

  @IsOptional()
  @IsString()
  public image?: string;

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
}
