import { axios } from "@career-sync/client/libs/axios";

export type PublicationModel = {
  id: string;
  name: string;
  publisher: string;
  date?: string | null;
  url?: string | null;
  summary?: string | null;
};

export async function fetchPublications() {
  const { data } = await axios.get<PublicationModel[]>("/publication");
  return data;
}

export async function createPublication(payload: Omit<PublicationModel, "id">) {
  const { data } = await axios.post<PublicationModel>("/publication", payload);
  return data;
}

export async function updatePublication(id: string, payload: Partial<PublicationModel>) {
  const { data } = await axios.patch<PublicationModel>(`/publication/${id}`, payload);
  return data;
}

export async function deletePublication(id: string) {
  await axios.delete(`/publication/${id}`);
}
