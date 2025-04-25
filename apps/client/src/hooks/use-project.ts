import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import type { ProjectModel } from "@career-sync/client/services/project/project";
import {
  createProject,
  deleteProject,
  fetchProjects,
  updateProject,
} from "@career-sync/client/services/project/project";
import { useResumeStore } from "@career-sync/client/stores/resume";

export type Project = {
  id: string;
  name: string;
  description: string;
  startDate: string | null; // YYYY-MM-DD
  endDate: string | null; // YYYY-MM-DD
  summary: string;
  keywords: string[];
  website: { label: string; href: string };
  visible: boolean;
};

const toProject = (p: ProjectModel): Project => ({
  id: p.id,
  name: p.name,
  description: p.description ?? "",
  startDate: p.startDate ? p.startDate.split("T")[0] : null,
  endDate: p.endDate ? p.endDate.split("T")[0] : null,
  summary: p.summary ?? "",
  keywords: p.keywords ?? [],
  website: { label: p.website ?? "", href: p.website ?? "" },
  visible: true,
});

export function useProjects() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore.getState().setValue;

  const query = useQuery({ queryKey: ["projects"], queryFn: fetchProjects });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue(
        "projects",
        query.data.map((p) => toProject(p)),
      );
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const create = useMutation<ProjectModel, Error, Omit<ProjectModel, "id">>({
    mutationFn: createProject,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  });

  const update = useMutation<ProjectModel, Error, { id: string; payload: Partial<ProjectModel> }>({
    mutationFn: ({ id, payload }) => updateProject(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  });

  const remove = useMutation<unknown, Error, string>({
    mutationFn: deleteProject,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  });

  const data: Project[] = query.data ? query.data.map((p) => toProject(p)) : [];

  return { ...query, data, create, update, remove };
}
