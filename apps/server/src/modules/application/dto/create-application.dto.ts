import { IsArray, IsIn, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateApplicationDto {
  @IsString()
  @MaxLength(2000)
  public message: string;

  @IsString()
  @IsIn(["formal", "informal", "professional", "casual"])
  public expression: string;

  @IsArray()
  @IsString({ each: true })
  public channels: string[]; // e.g., ["email", "whatsapp", "linkedin"]

  @IsOptional()
  @IsString()
  public jobDescription?: string;
}
