import { axios } from "@career-sync/client/libs/axios";

export type LanguageModel = {
  id: string;
  name: string;
  description?: string | null;
  level?: number | null;
};

export async function fetchLanguages(): Promise<LanguageModel[]> {
  const { data } = await axios.get<LanguageModel[]>("/language");
  return data;
}

export async function createLanguage(payload: Omit<LanguageModel, "id">) {
  const { data } = await axios.post<LanguageModel>("/language", payload);
  return data;
}

export async function updateLanguage(id: string, payload: Partial<LanguageModel>) {
  const { data } = await axios.patch<LanguageModel>(`/language/${id}`, payload);
  return data;
}

export async function deleteLanguage(id: string) {
  await axios.delete(`/language/${id}`);
}
