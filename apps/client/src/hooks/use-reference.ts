import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import type { ReferenceModel } from "@career-sync/client/services/reference/reference";
import {
  createReference,
  deleteReference,
  fetchReferences,
  updateReference,
} from "@career-sync/client/services/reference/reference";
import { useResumeStore } from "@career-sync/client/stores/resume";

export type Reference = {
  id: string;
  name: string;
  description: string;
  url: { label: string; href: string };
  summary: string;
  visible: boolean;
};

const toReference = (r: ReferenceModel): Reference => ({
  id: r.id,
  name: r.name,
  description: r.description ?? "",
  url: { label: r.url ?? "", href: r.url ?? "" },
  summary: r.summary ?? "",
  visible: true,
});

export function useReferences() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore.getState().setValue;

  const query = useQuery({
    queryKey: ["reference"],
    queryFn: fetchReferences,
  });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue(
        "reference",
        query.data.map((r) => toReference(r)),
      );
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const create = useMutation<ReferenceModel, Error, Omit<ReferenceModel, "id">>({
    mutationFn: createReference,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["reference"] }),
  });

  const update = useMutation<
    ReferenceModel,
    Error,
    { id: string; payload: Partial<ReferenceModel> }
  >({
    mutationFn: ({ id, payload }) => updateReference(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["reference"] }),
  });

  const remove = useMutation<unknown, Error, string>({
    mutationFn: deleteReference,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["reference"] }),
  });

  const data: Reference[] = query.data ? query.data.map((r) => toReference(r)) : [];

  return {
    ...query,
    data,
    create,
    update,
    remove,
  };
}
