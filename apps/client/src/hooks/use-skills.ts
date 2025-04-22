import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import type { SkillModel } from "../services/skills/skills";
import { createSkill, deleteSkill, fetchSkills, updateSkill } from "../services/skills/skills";
import { useResumeStore } from "../stores/resume";

export type Skill = {
  id: string;
  name: string;
  description: string;
  level: number;
  keywords: string[];
  visible: boolean;
};

const toSkill = (s: SkillModel): Skill => ({
  id: s.id,
  name: s.name,
  description: s.description ?? "",
  level: s.level ?? 1,
  keywords: s.keywords ?? [],
  visible: true,
});

export function useSkills() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore.getState().setValue;

  const query = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue(
        "skills",
        query.data.map((s) => toSkill(s)),
      );
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const create = useMutation<SkillModel, Error, Omit<SkillModel, "id">>({
    mutationFn: createSkill,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["skills"] }),
  });

  const update = useMutation<SkillModel, Error, { id: string; payload: Partial<SkillModel> }>({
    mutationFn: ({ id, payload }) => updateSkill(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["skills"] }),
  });

  const remove = useMutation<unknown, Error, string>({
    mutationFn: deleteSkill,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["skills"] }),
  });

  const data: Skill[] = query.data ? query.data.map((s) => toSkill(s)) : [];

  return { ...query, data, create, update, remove };
}
