/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import { t } from "@lingui/core/macro";
import { Certificate, PencilSimple, Plus, Trash } from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import type { Certification } from "@career-sync/client/hooks/use-certifications";
import { useCertifications } from "@career-sync/client/hooks/use-certifications";
import { useDialog } from "@career-sync/client/stores/dialog";

const CertificationGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Certification[];
  handleEdit: (certification: Certification) => void;
  handleDelete: (certification: Certification) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {data.map((cert) => (
      <div
        key={cert.id}
        className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
              <Certificate className="size-6" weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{cert.name}</h3>
              {cert.issuer && <p className="text-sm text-gray-500">{cert.issuer}</p>}
              {cert.date && <p className="text-sm text-gray-500">{cert.date}</p>}
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
              title={t`Edit Certification`}
              onClick={() => handleEdit(cert)}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Certification`}
              onClick={() => handleDelete(cert)}
            >
              <Trash className="size-4" weight="duotone" />
            </button>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {cert.website.href && (
            <a
              href={cert.website.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              {t`Visit Website`}
            </a>
          )}
          {cert.summary && (
            <div
              dangerouslySetInnerHTML={{ __html: cert.summary }}
              className="text-sm text-gray-600"
            />
          )}
        </div>
      </div>
    ))}
  </div>
);

const CertificationListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Certification[];
  handleEdit: (certification: Certification) => void;
  handleDelete: (certification: Certification) => void;
}) => (
  <div className="space-y-4">
    {data.map((cert) => (
      <div
        key={cert.id}
        className="flex items-center justify-between rounded-lg border bg-background p-4"
      >
        <div className="flex items-start gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
            <Certificate className="size-6" weight="duotone" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{cert.name}</h3>
            {cert.issuer && <p className="text-sm text-gray-500">{cert.issuer}</p>}
            {cert.date && <p className="text-sm text-gray-500">{cert.date}</p>}
            {cert.website.href && (
              <a
                href={cert.website.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                {t`Visit Website`}
              </a>
            )}
            {cert.summary && (
              <p
                dangerouslySetInnerHTML={{ __html: cert.summary }}
                className="mt-2 text-sm text-gray-600"
              />
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
            title={t`Edit Certification`}
            onClick={() => handleEdit(cert)}
          >
            <PencilSimple className="size-4" weight="duotone" />
          </button>
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
            title={t`Delete Certification`}
            onClick={() => handleDelete(cert)}
          >
            <Trash className="size-4" weight="duotone" />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export const CertificationsPage = () => {
  const { open } = useDialog("certifications");
  const { data: certifications = [], isLoading, isError } = useCertifications();

  const handleCreate = () => open("create", { id: "certifications" });
  const handleEdit = (cert: Certification) => open("update", { id: "certifications", item: cert });
  const handleDelete = (cert: Certification) =>
    open("delete", { id: "certifications", item: cert });

  if (isLoading) return <p>{t`Loading certifications ...`}</p>;
  if (isError) return <p>{t`Could not load certifications.`}</p>;

  return (
    <>
      <Helmet>
        <title>
          {t`Certifications`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <div className="w-full space-y-6">
        <PageLayout
          title={t`Certifications`}
          gridView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Certification`}</span>
                </Button>
              </div>
              <CertificationGridView
                data={certifications}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </>
          }
          listView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Certification`}</span>
                </Button>
              </div>
              <CertificationListView
                data={certifications}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </>
          }
        />
      </div>
    </>
  );
};
