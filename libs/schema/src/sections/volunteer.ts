import { z } from "zod";

import { defaultItem, defaultUrl, itemSchema, urlSchema } from "../shared";

export const volunteerSchema = itemSchema.extend({
  organization: z.string(),
  position: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  summary: z.string(),
  url: urlSchema,
});

export type Volunteer = z.infer<typeof volunteerSchema>;

export const defaultVolunteer: Volunteer = {
  ...defaultItem,
  organization: "",
  position: "",
  location: "",
  startDate: "",
  endDate: "",
  summary: "",
  url: defaultUrl,
};
