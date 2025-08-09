import { axios } from "../../libs/axios";

export type CreateApplicationPayload = {
  message: string;
  expression: "formal" | "informal" | "professional" | "casual";
  channels: ("email" | "whatsapp" | "linkedin")[];
  jobDescription?: string;
};

export type CreateApplicationResponse = {
  message: string;
  userId: string;
  data: CreateApplicationPayload;
  prompt: string;
  coverLetter: string | null;
};

export async function createApplication(payload: CreateApplicationPayload) {
  const { data } = await axios.post<CreateApplicationResponse>("/application", payload);
  return data;
}
