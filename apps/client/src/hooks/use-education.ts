import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import type { EducationModel } from "../services/education/education";
import {
  createEducation,
  deleteEducation,
  fetchEducations,
  updateEducation,
} from "../services/education/education";
import { useResumeStore } from "../stores/resume";

export type Education = {
  id: string;
  institution: string;
  area: string;
  studyType: string;
  startDate: string | null;
  endDate: string | null;
  gpa: string;
  website: { label: string; href: string };
  summary: string;
  visible: boolean;
};

const toEducation = (e: EducationModel): Education => ({
  id: e.id,
  institution: e.institution,
  area: e.area,
  studyType: e.studyType ?? "",
  startDate: e.startDate?.split("T")[0] ?? null,
  endDate: e.endDate?.split("T")[0] ?? null,
  gpa: e.gpa !== undefined && e.gpa !== null ? String(e.gpa) : "",
  summary: e.summary ?? "",
  website: { label: e.website ?? "", href: e.website ?? "" },
  visible: true,
});

export function useEducations() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore.getState().setValue;

  const query = useQuery({
    queryKey: ["educations"],
    queryFn: fetchEducations,
  });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue(
        "educations",
        query.data.map((e) => toEducation(e)),
      );
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const create = useMutation<EducationModel, Error, Omit<EducationModel, "id">>({
    mutationFn: createEducation,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["educations"] }),
  });

  const update = useMutation<
    EducationModel,
    Error,
    { id: string; payload: Partial<EducationModel> }
  >({
    mutationFn: ({ id, payload }) => updateEducation(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["educations"] }),
  });

  const remove = useMutation<unknown, Error, string>({
    mutationFn: deleteEducation,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["educations"] }),
  });

  const data: Education[] = query.data ? query.data.map((e) => toEducation(e)) : [];

  return { ...query, data, create, update, remove };
}
