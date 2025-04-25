import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import type { CertificationModel } from "@career-sync/client/services/certifications/certifications";
import {
  createCertification,
  deleteCertification,
  fetchCertifications,
  updateCertification,
} from "@career-sync/client/services/certifications/certifications";
import { useResumeStore } from "@career-sync/client/stores/resume";

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  website: { label: string; href: string };
  summary: string;
  visible: boolean;
};

const toCertification = (c: CertificationModel): Certification => ({
  id: c.id,
  name: c.name,
  issuer: c.issuer ?? "",
  date: c.date ? c.date.split("T")[0] : "",
  summary: c.summary ?? "",
  website: { label: c.website ?? "", href: c.website ?? "" },
  visible: true,
});

export function useCertifications() {
  const qc = useQueryClient();
  const setResumeValue = useResumeStore.getState().setValue;

  const query = useQuery({ queryKey: ["certifications"], queryFn: fetchCertifications });

  useEffect(() => {
    if (query.isSuccess) {
      setResumeValue(
        "certifications",
        query.data.map((c) => toCertification(c)),
      );
    }
  }, [query.isSuccess, query.data, setResumeValue]);

  const create = useMutation<CertificationModel, Error, Omit<CertificationModel, "id">>({
    mutationFn: createCertification,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["certifications"] }),
  });

  const update = useMutation<
    CertificationModel,
    Error,
    { id: string; payload: Partial<CertificationModel> }
  >({
    mutationFn: ({ id, payload }) => updateCertification(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["certifications"] }),
  });

  const remove = useMutation<unknown, Error, string>({
    mutationFn: deleteCertification,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["certifications"] }),
  });

  const data: Certification[] = query.data ? query.data.map((c) => toCertification(c)) : [];

  return { ...query, data, create, update, remove };
}
