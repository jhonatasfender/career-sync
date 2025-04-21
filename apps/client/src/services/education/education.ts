import { axios } from "@career-sync/client/libs/axios";

export type EducationModel = {
  id: string;
  institution: string;
  area: string;
  studyType?: string;
  startDate: string | null;
  endDate: string | null;
  gpa?: number | null;
  website?: string;
  summary?: string;
};

export async function fetchEducations(): Promise<EducationModel[]> {
  const { data } = await axios.get<EducationModel[]>("/education");
  return data;
}

export async function createEducation(payload: Omit<EducationModel, "id">) {
  const { data } = await axios.post<EducationModel>("/education", payload);
  return data;
}

export async function updateEducation(id: string, payload: Partial<EducationModel>) {
  const { data } = await axios.patch<EducationModel>(`/education/${id}`, payload);
  return data;
}

export async function deleteEducation(id: string) {
  await axios.delete(`/education/${id}`);
}
