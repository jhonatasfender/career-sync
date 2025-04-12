import { PartialType } from "@nestjs/mapped-types";

import { CreateBasicsDto } from "./create-basics.dto";

export class UpdateBasicsDto extends PartialType(CreateBasicsDto) {}
