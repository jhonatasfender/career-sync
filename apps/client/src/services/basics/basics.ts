import { axios } from "@career-sync/client/libs/axios";

export type BasicsModel = {
  name: string;
  headline?: string | null;
  email?: string | null;
  phone?: string | null;
  location?: string | null;
  url?: string | null;
  picture?: {
    url?: string | null;
    size?: number | null;
    aspectRatio?: number | null;
    borderRadius?: number | null;
    effects?: {
      hidden?: boolean | null;
      border?: boolean | null;
      grayscale?: boolean | null;
    } | null;
  } | null;
  customFields?:
    | {
        id: string;
        icon: string;
        name: string;
        value: string;
      }[]
    | null;
};

export async function fetchBasics(): Promise<BasicsModel> {
  const { data } = await axios.get<BasicsModel>("/basics");
  return data;
}

export async function saveBasics(payload: BasicsModel) {
  const { data } = await axios.post<BasicsModel>("/basics", payload);
  return data;
}

export async function updateBasics(payload: Partial<BasicsModel>) {
  const { data } = await axios.patch<BasicsModel>("/basics", payload);
  return data;
}

export async function deleteBasics() {
  await axios.delete("/basics");
}
