import { axios } from "@/client/libs/axios";

export type ProfileModel = {
  id: string;
  network: string;
  username: string;
  url: string;
  icon?: string;
};

export async function fetchProfiles(): Promise<ProfileModel[]> {
  const response = await axios.get<ProfileModel[]>("/profile");
  return response.data;
}

export async function createProfile(payload: Omit<ProfileModel, "id">) {
  const response = await axios.post<ProfileModel>("/profile", payload);
  return response.data;
}

export async function updateProfile(
  id: string,
  payload: Partial<ProfileModel>,
): Promise<ProfileModel> {
  const response = await axios.patch<ProfileModel>(`/profile/${id}`, payload);
  return response.data;
}

export async function deleteProfile(id: string) {
  await axios.delete(`/profile/${id}`);
}
