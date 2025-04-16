import type { ResumeDto } from "@reactive-resume/dto";

import { axios } from "@/client/libs/axios";

export const findResumeById = async (data: { id: string }) => {
  const response = await axios.get<ResumeDto>(`/resume/${data.id}`);
  return response.data;
};

export const findResumeByUsernameSlug = async (data: { username: string; slug: string }) => {
  const response = await axios.get<ResumeDto>(`/resume/public/${data.username}/${data.slug}`);
  return response.data;
};

export const findFullResumeById = async (data: { id: string }) => {
  const response = await axios.get(`/resume/${data.id}/full`);
  const { resume, user } = response.data;

  const metadata = resume.data?.metadata ?? {};

  const transformed: ResumeDto = {
    ...resume,
    data: {
      basics: user.basics ?? null,
      summary: user.summary ?? null,
      experiences: user.experiences ?? [],
      educations: user.educations ?? [],
      skills: user.skills ?? [],
      languages: user.languages ?? [],
      awards: user.awards ?? [],
      certifications: user.certifications ?? [],
      interests: user.interests ?? [],
      projects: user.projects ?? [],
      publications: user.publications ?? [],
      volunteer: user.volunteer ?? [],
      references: user.references ?? [],
      customSections: user.customSections ?? [],
      profiles: user.profiles ?? [],
      metadata: {
        layout: metadata.layout ?? [[]],
        css: metadata.css ?? "",
        date: metadata.date ?? new Date().toISOString(),
        locale: metadata.locale ?? "en-US",
        theme: metadata.theme ?? "default",
        page: metadata.page ?? {
          format: "a4",
          margin: 24,
          options: {
            breakLine: true,
            pageNumbers: true,
          },
        },
      },
    },
  };

  return transformed;
};

