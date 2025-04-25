import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import type { LanguageModel } from "../services/languages/languages";
import {
  createLanguage,
  deleteLanguage,
  fetchLanguages,
  updateLanguage,
} from "../services/languages/languages";
import { useResumeStore } from "../stores/resume";

export type Language = {
  id: string;
  name: string;
  description: string;
  level: number;
  visible: boolean;
};

const toLanguage = (l: LanguageModel): Language => ({
  id: l.id,
  name: l.name,
  description: l.description ?? "",
  level: l.level ?? 1,
  visible: true,
});

export function useLanguages() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore.getState().setValue;

  const query = useQuery({
    queryKey: ["languages"],
    queryFn: fetchLanguages,
  });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue(
        "languages",
        query.data.map((l) => toLanguage(l)),
      );
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const create = useMutation<LanguageModel, Error, Omit<LanguageModel, "id">>({
    mutationFn: createLanguage,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["languages"] }),
  });

  const update = useMutation<LanguageModel, Error, { id: string; payload: Partial<LanguageModel> }>(
    {
      mutationFn: ({ id, payload }) => updateLanguage(id, payload),
      onSuccess: () => qc.invalidateQueries({ queryKey: ["languages"] }),
    },
  );

  const remove = useMutation<unknown, Error, string>({
    mutationFn: deleteLanguage,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["languages"] }),
  });

  const data: Language[] = query.data ? query.data.map((l) => toLanguage(l)) : [];

  return { ...query, data, create, update, remove };
}
