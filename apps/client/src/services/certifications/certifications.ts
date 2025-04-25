import { axios } from "@career-sync/client/libs/axios";

export type CertificationModel = {
  id: string;
  name: string;
  issuer?: string | null;
  date?: string | null;
  summary?: string | null;
  website?: string | null;
};

export async function fetchCertifications() {
  const { data } = await axios.get<CertificationModel[]>("/certification");
  return data;
}

export async function createCertification(payload: Omit<CertificationModel, "id">) {
  const { data } = await axios.post<CertificationModel>("/certification", payload);
  return data;
}

export async function updateCertification(id: string, payload: Partial<CertificationModel>) {
  const { data } = await axios.patch<CertificationModel>(`/certification/${id}`, payload);
  return data;
}

export async function deleteCertification(id: string) {
  await axios.delete(`/certification/${id}`);
}
