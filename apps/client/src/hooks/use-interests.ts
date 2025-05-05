import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { useResumeStore } from "@career-sync/client/stores/resume";

import type { InterestModel } from "../services/interests/interests";
import {
  createInterest,
  deleteInterest,
  fetchInterests,
  updateInterest,
} from "../services/interests/interests";

export type Interest = {
  id: string;
  name: string;
  keywords: string[];
  visible: boolean;
};

const toInterest = (i: InterestModel): Interest => ({
  id: i.id,
  name: i.name,
  keywords: i.keywords ?? [],
  visible: true,
});

export function useInterests() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore.getState().setValue;

  const query = useQuery({ queryKey: ["interests"], queryFn: fetchInterests });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue(
        "interests",
        query.data.map((i) => toInterest(i)),
      );
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const create = useMutation<InterestModel, Error, Omit<InterestModel, "id">>({
    mutationFn: createInterest,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["interests"] }),
  });

  const update = useMutation<InterestModel, Error, { id: string; payload: Partial<InterestModel> }>(
    {
      mutationFn: ({ id, payload }) => updateInterest(id, payload),
      onSuccess: () => qc.invalidateQueries({ queryKey: ["interests"] }),
    },
  );

  const remove = useMutation<unknown, Error, string>({
    mutationFn: deleteInterest,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["interests"] }),
  });

  const data: Interest[] = query.data ? query.data.map((i) => toInterest(i)) : [];

  return { ...query, data, create, update, remove };
}
