import { axios } from "@career-sync/client/libs/axios";

export type SkillModel = {
  id: string;
  name: string;
  description?: string | null;
  level?: number | null;
  keywords?: string[] | null;
};

export async function fetchSkills(): Promise<SkillModel[]> {
  const { data } = await axios.get<SkillModel[]>("/skill");
  return data;
}

export async function createSkill(payload: Omit<SkillModel, "id">) {
  const { data } = await axios.post<SkillModel>("/skill", payload);
  return data;
}

export async function updateSkill(id: string, payload: Partial<SkillModel>) {
  const { data } = await axios.patch<SkillModel>(`/skill/${id}`, payload);
  return data;
}

export async function deleteSkill(id: string) {
  await axios.delete(`/skill/${id}`);
}
