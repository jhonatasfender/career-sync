import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

export const referenceSchema = itemSchema.extend({
  name: z.string().min(1),
  description: z.string().optional().default(""),
  summary: z.string().optional().default(""),
  url: urlSchema,
});

export type Reference = z.infer<typeof referenceSchema>;

export const defaultReference: Reference = {
  ...defaultItem,
  name: "",
  description: "",
  summary: "",
  url: defaultUrl,
};
