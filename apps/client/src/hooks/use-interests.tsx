import {
  createInterest,
  deleteInterest,
  fetchInterest,
  updateInterest,
} from "../services/interests/interests";
import type { InterestModel } from "../services/interests/interests";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useResumeStore } from "../stores/resume";
import { useEffect } from "react";

export type Interests = {
  id: string;
  name: string;
  keywords: string[];
  visible: boolean;
};

const toInterests = (i: InterestModel): Interests => ({
  id: i.id,
  name: i.name,
  keywords: i.keywords ?? [],
  visible: true,
});

export function useInterests() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore.getState().setValue;

  const query = useQuery({
    queryKey: ["interests"],
    queryFn: fetchInterest,
  });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue(
        "interests",
        query.data.map((i) => toInterests(i)),
      );
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const create = useMutation<InterestModel, Error, Omit<InterestModel, "id">>({
    mutationFn: createInterest,
    onSuccess: () =>
      qc.invalidateQueries({
        queryKey: ["interests"],
      }),
  });

  const update = useMutation<InterestModel, Error, { id: string; payload: Partial<InterestModel> }>(
    {
      mutationFn: ({ id, payload }) => updateInterest(id, payload),
      onSuccess: () => qc.invalidateQueries({ queryKey: ["interests"] }),
    },
  );

  const remove = useMutation<unknown, Error, string>({
    mutationFn: deleteInterest,
    onSuccess: () =>
      qc.invalidateQueries({
        queryKey: ["interests"],
      }),
  });

  const data: Interests[] = query.data ? query.data.map((i) => toInterests(i)) : [];

  return { ...query, data, create, update, remove };
}
