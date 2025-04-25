import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

export const publicationSchema = itemSchema.extend({
  name: z.string().min(1),
  publisher: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema,
});

export type Publication = z.infer<typeof publicationSchema>;

export const defaultPublication: Publication = {
  ...defaultItem,
  name: "",
  publisher: "",
  date: "",
  summary: "",
  url: defaultUrl,
};
