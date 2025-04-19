import { axios } from "@career-sync/client/libs/axios";

export type ExperienceModel = {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string | null;
  endDate: string | null;
  summary?: string;
  highlights?: string[];
  website?: string;
};

export async function fetchExperiences(): Promise<ExperienceModel[]> {
  const { data } = await axios.get<ExperienceModel[]>("/experience");
  return data;
}

export async function createExperience(payload: Omit<ExperienceModel, "id">) {
  const { data } = await axios.post<ExperienceModel>("/experience", payload);
  return data;
}

export async function updateExperience(id: string, payload: Partial<ExperienceModel>) {
  const { data } = await axios.patch<ExperienceModel>(`/experience/${id}`, payload);
  return data;
}

export async function deleteExperience(id: string) {
  await axios.delete(`/experience/${id}`);
}
