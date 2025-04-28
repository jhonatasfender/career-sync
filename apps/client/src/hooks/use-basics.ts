/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import type { Basics } from "@reactive-resume/schema";
import { defaultBasics } from "@reactive-resume/schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useEffect } from "react";

import { useResumeStore } from "@career-sync/client/stores/resume";

import type { BasicsModel } from "../services/basics/basics";
import { createBasics, deleteBasics, fetchBasics, updateBasics } from "../services/basics/basics";

const toBasics = (b: BasicsModel | null): Basics => {
  if (!b) return defaultBasics;

  return {
    name: b.name,
    headline: b.headline ?? "",
    email: b.email ?? "",
    phone: b.phone ?? "",
    location: b.location ?? "",
    url: { label: b.url ?? "", href: b.url ?? "" },
    customFields: b.customFields ?? [],
    picture: {
      url: b.picture?.url ?? "",
      size: b.picture?.size ?? 64,
      aspectRatio: b.picture?.aspectRatio ?? 1,
      borderRadius: b.picture?.borderRadius ?? 0,
      effects: {
        hidden: b.picture?.effects?.hidden ?? false,
        border: b.picture?.effects?.border ?? false,
        grayscale: b.picture?.effects?.grayscale ?? false,
      },
    },
  };
};

const fromBasics = (b: Basics): BasicsModel => ({
  name: b.name,
  headline: b.headline,
  email: b.email,
  phone: b.phone,
  location: b.location,
  url: b.url.href,
  customFields: b.customFields,
  picture: {
    url: b.picture.url,
    size: b.picture.size,
    aspectRatio: b.picture.aspectRatio,
    borderRadius: b.picture.borderRadius,
    effects: b.picture.effects,
  },
});

export function useBasics() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore((s) => s.setValue);

  const query = useQuery({
    queryKey: ["basics"],
    queryFn: fetchBasics,
    retry: (failureCount, error) => {
      return (error as AxiosError).response?.status !== 404 && failureCount < 3;
    },
  });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue("basics", toBasics(query.data));
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const create = useMutation({
    mutationFn: (b: Basics) => createBasics(fromBasics(b)),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["basics"] }),
  });

  const update = useMutation({
    mutationFn: (b: Basics) => updateBasics(fromBasics(b)),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["basics"] }),
  });

  const remove = useMutation({
    mutationFn: () => deleteBasics(),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["basics"] }),
  });

  return {
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError && (query.error as AxiosError).response?.status !== 404,
    error: query.error as AxiosError | null,
    exists: query.data !== null,
    create,
    update,
    remove,
  };
}
