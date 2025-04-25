import { axios } from "@career-sync/client/libs/axios";

export type ProjectModel = {
  id: string;
  name: string;
  description?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  summary?: string | null;
  keywords?: string[] | null;
  website?: string | null;
};

export async function fetchProjects() {
  const { data } = await axios.get<ProjectModel[]>("/project");
  return data;
}

export async function createProject(payload: Omit<ProjectModel, "id">) {
  const { data } = await axios.post<ProjectModel>("/project", payload);
  return data;
}

export async function updateProject(id: string, payload: Partial<ProjectModel>) {
  const { data } = await axios.patch<ProjectModel>(`/project/${id}`, payload);
  return data;
}

export async function deleteProject(id: string) {
  await axios.delete(`/project/${id}`);
}
