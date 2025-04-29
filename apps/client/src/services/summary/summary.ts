/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { axios } from "@career-sync/client/libs/axios";

export type SummaryModel = {
  content: string;
};

export async function fetchSummary(): Promise<SummaryModel | Record<string, never>> {
  const { data } = await axios.get<SummaryModel>("/summary");
  return data ?? {};
}

export async function saveSummary(payload: SummaryModel) {
  const { data } = await axios.post<SummaryModel>("/summary", payload);
  return data;
}

export async function updateSummary(payload: Partial<SummaryModel>) {
  const { data } = await axios.patch<SummaryModel>("/summary", payload);
  return data;
}

export async function deleteSummary() {
  await axios.delete("/summary");
}
