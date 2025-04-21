import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema } from "../shared";

// Schema
export const experienceSchema = itemSchema.extend({
  company: z.string().min(1),
  position: z.string(),
  summary: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  website: z.object({
    label: z.string(),
    href: z.string().url(),
  }),
});

// Type
export type Experience = z.infer<typeof experienceSchema>;

// Defaults
export const defaultExperience: Experience = {
  ...defaultItem,
  company: "",
  position: "",
  summary: "",
  startDate: "",
  endDate: undefined,
  website: defaultUrl,
};
