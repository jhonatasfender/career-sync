import { axios } from "@career-sync/client/libs/axios";

export type InterestModel = {
  id: string;
  name:string;
  keywords?: string[] | null;
}

export async function fetchInterest(): Promise<InterestModel[]>
{
  const {data } = await axios.get<InterestModel[]>("/insterest")
  return data;
}

export  async function createInterest(payload: Omit<InterestModel, "id" >) {
  const {data} = await axios.post<InterestModel>("/insterest", payload);
  return data
}

export async function updateInterest(id: string, payload: Partial<InterestModel> ) {
  const { data } = await axios.patch<InterestModel>(`/interest${id}`, payload);
  return data
}

export async function deleteInterest(id:string) {
  await axios.delete(`/interest${id}`)
}
