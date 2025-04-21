import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

// Schema
export const educationSchema = itemSchema.extend({
  institution: z.string().min(1),
  studyType: z.string(),
  area: z.string(),
  gpa: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  summary: z.string(),
  website: urlSchema,
});

// Type
export type Education = z.infer<typeof educationSchema>;

// Defaults
export const defaultEducation: Education = {
  ...defaultItem,
  id: "",
  institution: "",
  studyType: "",
  area: "",
  gpa: "",
  startDate: "",
  endDate: undefined,
  summary: "",
  website: defaultUrl,
};
