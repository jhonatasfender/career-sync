import type { Prisma } from "@prisma/client";

import type { CreateBasicsDto } from "../dto/create-basics.dto";
import type { UpdateBasicsDto } from "../dto/update-basics.dto";

export class BasicsMapper {
  public static toPrismaCreate(
    userId: string,
    dto: CreateBasicsDto,
  ): Prisma.BasicsUncheckedCreateInput {
    return {
      userId,
      ...this.clean(dto),
    } as Prisma.BasicsUncheckedCreateInput;
  }

  public static toPrismaUpdate(dto: UpdateBasicsDto): Prisma.BasicsUncheckedUpdateInput {
    return this.clean(dto) as Prisma.BasicsUncheckedUpdateInput;
  }

  private static clean(obj: unknown) {
    return Object.fromEntries(
      Object.entries(obj as Record<string, unknown>).filter(
        ([, v]) => v !== undefined && v !== null,
      ),
    );
  }
}
