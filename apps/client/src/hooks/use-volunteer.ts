import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import type { VolunteerModel } from "../services/volunteer/volunteer";
import {
  createVolunteer,
  deleteVolunteer,
  fetchVolunteers,
  updateVolunteer,
} from "../services/volunteer/volunteer";
import { useResumeStore } from "../stores/resume";

export type Volunteer = {
  id: string;
  organization: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  url: { label: string; href: string };
  summary: string;
  visible: boolean;
};

const toVolunteer = (v: VolunteerModel): Volunteer => ({
  id: v.id,
  organization: v.organization,
  position: v.position ?? "",
  startDate: v.startDate?.split("T")[0] ?? "",
  endDate: v.endDate?.split("T")[0] ?? "",
  location: v.location ?? "",
  url: { label: v.url ?? "", href: v.url ?? "" },
  summary: v.summary ?? "",
  visible: true,
});

export function useVolunteers() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore.getState().setValue;

  const query = useQuery({
    queryKey: ["volunteers"],
    queryFn: fetchVolunteers,
  });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue(
        "volunteer",
        query.data.map((v) => toVolunteer(v)),
      );
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const create = useMutation<VolunteerModel, Error, Omit<VolunteerModel, "id">>({
    mutationFn: createVolunteer,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["volunteers"] }),
  });

  const update = useMutation<
    VolunteerModel,
    Error,
    { id: string; payload: Partial<VolunteerModel> }
  >({
    mutationFn: ({ id, payload }) => updateVolunteer(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["volunteers"] }),
  });

  const remove = useMutation<unknown, Error, string>({
    mutationFn: deleteVolunteer,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["volunteers"] }),
  });

  const data: Volunteer[] = query.data ? query.data.map((v) => toVolunteer(v)) : [];

  return {
    ...query,
    data,
    create,
    update,
    remove,
  };
}
