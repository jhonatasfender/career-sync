import { axios } from "../../libs/axios";

export type CreateResumePayload = {
  message: string;
  expression: "formal" | "informal" | "professional" | "casual";
  jobDescription?: string;
  resumeType?: "comprehensive" | "targeted" | "executive";
};

export type CreateResumeResponse = {
  message: string;
  userId: string;
  data: CreateResumePayload;
  prompt: string;
  resume: string | null;
  pdfBuffer: string | null;
  profile: {
    basics: {
      name?: string;
      email?: string;
      phone?: string;
      location?: string;
    } | null;
    summary: {
      content?: string;
    } | null;
    experiences: {
      company: string;
      position: string;
      startDate: Date;
      endDate?: Date | null;
      summary?: string | null;
    }[];
    educations: {
      institution: string;
      area: string;
      startDate: Date;
      endDate?: Date | null;
    }[];
    skills: {
      name: string;
      level?: number | null;
    }[];
    languages: {
      name: string;
      level?: number | null;
    }[];
    projects: {
      name: string;
      description?: string | null;
    }[];
    certifications: {
      name: string;
      issuer: string;
      date?: Date | null;
    }[];
    awards: {
      title: string;
      awarder?: string | null;
    }[];
    volunteer: {
      organization: string;
      position: string;
    }[];
    profiles: {
      network: string;
      url: string;
    }[];
  };
};

export async function createResume(payload: CreateResumePayload) {
  const { data } = await axios.post<CreateResumeResponse>("/application/resume", payload);
  return data;
}
