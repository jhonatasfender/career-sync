import { IsIn, IsOptional, IsString, MaxLength } from "class-validator";

import { ResumeType } from "../types";

export type ArtboardTemplate =
  | "azurill"
  | "bronzor"
  | "chikorita"
  | "ditto"
  | "gengar"
  | "glalie"
  | "kakuna"
  | "leafish"
  | "nosepass"
  | "onyx"
  | "pikachu"
  | "rhyhorn";

export class CreateResumeDto {
  @IsString()
  @MaxLength(2000)
  public message: string;

  @IsString()
  @IsIn(["formal", "informal", "professional", "casual"])
  public expression: string;

  @IsOptional()
  @IsString()
  public jobDescription?: string;

  @IsOptional()
  @IsString()
  @IsIn(["comprehensive", "targeted", "executive"])
  public resumeType?: ResumeType;

  @IsOptional()
  @IsString()
  @IsIn([
    "azurill",
    "bronzor",
    "chikorita",
    "ditto",
    "gengar",
    "glalie",
    "kakuna",
    "leafish",
    "nosepass",
    "onyx",
    "pikachu",
    "rhyhorn",
  ])
  public template?: ArtboardTemplate; // Template visual do Artboard
}
