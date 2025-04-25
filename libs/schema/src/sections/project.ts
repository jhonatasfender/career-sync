import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

// Schema
export const projectSchema = itemSchema.extend({
  name: z.string().min(1),
  description: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  summary: z.string(),
  keywords: z.array(z.string()).default([]),
  website: urlSchema,
});

// Type
export type Project = z.infer<typeof projectSchema>;

// Defaults
export const defaultProject: Project = {
  ...defaultItem,
  name: "",
  description: "",
  startDate: "",
  endDate: "",
  summary: "",
  keywords: [],
  website: defaultUrl,
};
