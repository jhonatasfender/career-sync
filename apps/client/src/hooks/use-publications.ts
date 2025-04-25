import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { useResumeStore } from "@career-sync/client/stores/resume";

import type { PublicationModel } from "../services/publication/publication";
import {
  createPublication,
  deletePublication,
  fetchPublications,
  updatePublication,
} from "../services/publication/publication";

export type Publication = {
  id: string;
  name: string;
  publisher: string;
  date: string | null;
  summary: string;
  url: { label: string; href: string };
  visible: boolean;
};

const toPublication = (p: PublicationModel): Publication => ({
  id: p.id,
  name: p.name,
  publisher: p.publisher,
  date: p.date ? p.date.split("T")[0] : null,
  summary: p.summary ?? "",
  url: { label: p.url ?? "", href: p.url ?? "" },
  visible: true,
});

export function usePublications() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore.getState().setValue;

  const query = useQuery({ queryKey: ["publications"], queryFn: fetchPublications });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue(
        "publications",
        query.data.map((p) => toPublication(p)),
      );
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const create = useMutation<PublicationModel, Error, Omit<PublicationModel, "id">>({
    mutationFn: createPublication,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["publications"] }),
  });

  const update = useMutation<
    PublicationModel,
    Error,
    { id: string; payload: Partial<PublicationModel> }
  >({
    mutationFn: ({ id, payload }) => updatePublication(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["publications"] }),
  });

  const remove = useMutation<unknown, Error, string>({
    mutationFn: deletePublication,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["publications"] }),
  });

  const data: Publication[] = query.data ? query.data.map((p) => toPublication(p)) : [];

  return { ...query, data, create, update, remove };
}
