import { axios } from "@career-sync/client/libs/axios";

export type AwardModel = {
  id: string;
  title: string;
  awarder?: string | null;
  date?: string | null;
  summary?: string | null;
  website?: string | null;
};

export async function fetchAwards() {
  const { data } = await axios.get<AwardModel[]>("/award");
  return data;
}

export async function createAward(payload: Omit<AwardModel, "id">) {
  const { data } = await axios.post<AwardModel>("/award", payload);
  return data;
}

export async function updateAward(id: string, payload: Partial<AwardModel>) {
  const { data } = await axios.patch<AwardModel>(`/award/${id}`, payload);
  return data;
}

export async function deleteAward(id: string) {
  await axios.delete(`/award/${id}`);
}
