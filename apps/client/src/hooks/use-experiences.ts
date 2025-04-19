/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import type { ExperienceModel } from "../services/experience/experience";
import {
  createExperience,
  deleteExperience,
  fetchExperiences,
  updateExperience,
} from "../services/experience/experience";
import { useResumeStore } from "../stores/resume";

export type Experience = {
  id: string;
  company: string;
  position: string;
  startDate: string | null;
  endDate: string | null;
  description: string;
  technologies: string[];
  website: string;
  visible: boolean;
};

const toExperience = (e: ExperienceModel): Experience => ({
  id: e.id,
  company: e.company,
  position: e.position,
  startDate: e.startDate,
  endDate: e.endDate ?? null,
  description: e.summary ?? "",
  technologies: e.highlights ?? [],
  website: e.website ?? "",
  visible: true,
});

export function useExperiences() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore.getState().setValue;

  const query = useQuery({
    queryKey: ["experiences"],
    queryFn: fetchExperiences,
  });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue(
        "experiences",
        query.data.map((e) => toExperience(e)),
      );
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const create = useMutation<ExperienceModel, Error, Omit<ExperienceModel, "id">>({
    mutationFn: createExperience,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["experiences"] }),
  });

  const update = useMutation<
    ExperienceModel,
    Error,
    { id: string; payload: Partial<ExperienceModel> }
  >({
    mutationFn: ({ id, payload }) => updateExperience(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["experiences"] }),
  });

  const remove = useMutation<unknown, Error, string>({
    mutationFn: deleteExperience,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["experiences"] }),
  });

  const data: Experience[] = query.data ? query.data.map((e) => toExperience(e)) : [];

  return { ...query, data, create, update, remove };
}
