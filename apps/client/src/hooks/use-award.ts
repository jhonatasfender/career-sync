// apps/client/src/hooks/use-awards.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import type { AwardModel } from "../services/award/award";
import { createAward, deleteAward, fetchAwards, updateAward } from "../services/award/award";
import { useResumeStore } from "../stores/resume";

export type Award = {
  id: string;
  title: string;
  awarder: string;
  date: string;
  website: { label: string; href: string };
  summary: string;
  visible: boolean;
};

const toAward = (a: AwardModel): Award => ({
  id: a.id,
  title: a.title,
  awarder: a.awarder ?? "",
  date: a.date ? a.date.split("T")[0] : "",
  summary: a.summary ?? "",
  website: { label: a.website ?? "", href: a.website ?? "" },
  visible: true,
});

export function useAwards() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore.getState().setValue;

  const query = useQuery({ queryKey: ["awards"], queryFn: fetchAwards });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue(
        "awards",
        query.data.map((a) => toAward(a)),
      );
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const create = useMutation<AwardModel, Error, Omit<AwardModel, "id">>({
    mutationFn: createAward,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["awards"] }),
  });

  const update = useMutation<AwardModel, Error, { id: string; payload: Partial<AwardModel> }>({
    mutationFn: ({ id, payload }) => updateAward(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["awards"] }),
  });

  const remove = useMutation<unknown, Error, string>({
    mutationFn: deleteAward,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["awards"] }),
  });

  const data: Award[] = query.data ? query.data.map((a) => toAward(a)) : [];

  return { ...query, data, create, update, remove };
}
