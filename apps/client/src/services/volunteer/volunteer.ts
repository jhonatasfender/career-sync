import { axios } from "@career-sync/client/libs/axios";

export type VolunteerModel = {
  id: string;
  organization: string;
  position?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  location?: string | null;
  url?: string | null;
  summary?: string | null;
};

export async function fetchVolunteers(): Promise<VolunteerModel[]> {
  const { data } = await axios.get<VolunteerModel[]>("/volunteer");
  return data;
}

export async function createVolunteer(payload: Omit<VolunteerModel, "id">) {
  const { data } = await axios.post<VolunteerModel>("/volunteer", payload);
  return data;
}

export async function updateVolunteer(id: string, payload: Partial<VolunteerModel>) {
  const { data } = await axios.patch<VolunteerModel>(`/volunteer/${id}`, payload);
  return data;
}

export async function deleteVolunteer(id: string) {
  await axios.delete(`/volunteer/${id}`);
}
