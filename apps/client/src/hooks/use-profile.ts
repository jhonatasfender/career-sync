/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import type { ProfileModel } from "../services/profile/profile";
import {
  createProfile,
  deleteProfile,
  fetchProfiles,
  updateProfile,
} from "../services/profile/profile";
import { useResumeStore } from "../stores/resume";

const toProfile = (p: ProfileModel) => ({
  ...p,
  url: { href: p.url, label: p.network },
  icon: p.icon ?? p.network.toLowerCase(),
  visible: true,
});

export function useProfiles() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore.getState().setValue;

  const query = useQuery({
    queryKey: ["profiles"],
    queryFn: fetchProfiles,
  });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue(
        "profiles",
        query.data.map((profile) => toProfile(profile)),
      );
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const create = useMutation<ProfileModel, Error, Omit<ProfileModel, "id">>({
    mutationFn: createProfile,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["profiles"] }),
  });

  const update = useMutation<ProfileModel, Error, { id: string; payload: Partial<ProfileModel> }>({
    mutationFn: ({ id, payload }) => updateProfile(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["profiles"] }),
  });

  const remove = useMutation<void, Error, string>({
    mutationFn: deleteProfile,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["profiles"] }),
  });

  return { ...query, create, update, remove };
}
