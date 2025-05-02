import { axios } from "@career-sync/client/libs/axios";

export type ReferenceModel = {
  id: string;
  name: string;
  description?: string | null;
  url?: string | null;
  summary?: string | null;
};

export async function fetchReferences(): Promise<ReferenceModel[]> {
  const { data } = await axios.get<ReferenceModel[]>("/reference");
  return data;
}

export async function createReference(payload: Omit<ReferenceModel, "id">) {
  const { data } = await axios.post<ReferenceModel>("/reference", payload);
  return data;
}

export async function updateReference(id: string, payload: Partial<ReferenceModel>) {
  const { data } = await axios.patch<ReferenceModel>(`/reference/${id}`, payload);
  return data;
}

export async function deleteReference(id: string) {
  await axios.delete(`/reference/${id}`);
}
