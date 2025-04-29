/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useEffect } from "react";

import { useResumeStore } from "@career-sync/client/stores/resume";

import type { SummaryModel } from "../services/summary/summary";
import {
  deleteSummary,
  fetchSummary,
  saveSummary,
  updateSummary,
} from "../services/summary/summary";

const toContent = (s?: SummaryModel | Record<string, never>): string => s?.content ?? "";

const fromContent = (content: string): SummaryModel => ({ content });

export function useSummary() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore((s) => s.setValue);

  const query = useQuery({
    queryKey: ["summary"],
    queryFn: fetchSummary,
  });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue("sections.summary.content", toContent(query.data));
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const save = useMutation({
    mutationFn: (content: string) => saveSummary(fromContent(content)),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["summary"] }),
  });

  const patch = useMutation({
    mutationFn: (content: string) => updateSummary(fromContent(content)),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["summary"] }),
  });

  const remove = useMutation({
    mutationFn: () => deleteSummary(),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["summary"] }),
  });

  const exists = query.isSuccess && (query.data as SummaryModel).content !== undefined;

  return {
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error as AxiosError | null,
    exists,
    save,
    patch,
    remove,
  };
}
