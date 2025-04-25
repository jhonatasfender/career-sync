/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { t } from "@lingui/macro";
import { Calendar, FileText, Globe, PencilSimple, Plus, Trash } from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import type { Publication } from "@career-sync/client/hooks/use-publications";
import { usePublications } from "@career-sync/client/hooks/use-publications";
import { useDialog } from "@career-sync/client/stores/dialog";

const PublicationGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Publication[];
  handleEdit: (publication: Publication) => void;
  handleDelete: (publication: Publication) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {data.map((publication) => (
      <div
        key={publication.id}
        className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
      >
        <div className="flex items-start gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
            <FileText className="size-6" weight="duotone" />
          </div>

          <div className="flex-1">
            <h3 className="font-semibold">{publication.name}</h3>
            {publication.publisher && (
              <p className="text-sm text-gray-500">{publication.publisher}</p>
            )}
          </div>

          <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
              title={t`Edit Publication`}
              onClick={() => handleEdit(publication)}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Publication`}
              onClick={() => handleDelete(publication)}
            >
              <Trash className="size-4" weight="duotone" />
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          {publication.summary && <p className="text-sm text-gray-600">{publication.summary}</p>}

          <div className="flex items-center gap-4 text-sm text-gray-500">
            {publication.date && (
              <div className="flex items-center gap-1">
                <Calendar className="size-4" weight="duotone" />
                <span>{publication.date}</span>
              </div>
            )}

            {publication.url.href && (
              <a
                href={publication.url.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                <Globe className="size-4" weight="duotone" />
                <span>{t`Website`}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const PublicationListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Publication[];
  handleEdit: (publication: Publication) => void;
  handleDelete: (publication: Publication) => void;
}) => (
  <div className="space-y-4">
    {data.map((publication) => (
      <div
        key={publication.id}
        className="flex items-center justify-between rounded-lg border bg-background p-4"
      >
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
            <FileText className="size-6" weight="duotone" />
          </div>

          <div className="flex-1">
            <h3 className="font-semibold">{publication.name}</h3>
            {publication.publisher && (
              <p className="text-sm text-gray-500">{publication.publisher}</p>
            )}
            {publication.summary && (
              <p className="mt-2 text-sm text-gray-600">{publication.summary}</p>
            )}

            <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
              {publication.date && (
                <div className="flex items-center gap-1">
                  <Calendar className="size-4" weight="duotone" />
                  <span>{publication.date}</span>
                </div>
              )}

              {publication.url.href && (
                <a
                  href={publication.url.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <Globe className="size-4" weight="duotone" />
                  <span>{t`Website`}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
            title={t`Edit Publication`}
            onClick={() => handleEdit(publication)}
          >
            <PencilSimple className="size-4" weight="duotone" />
          </button>
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
            title={t`Delete Publication`}
            onClick={() => handleDelete(publication)}
          >
            <Trash className="size-4" weight="duotone" />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export const PublicationsPage = () => {
  const { open } = useDialog("publications");
  const { data: publications = [], isLoading, isError } = usePublications();

  const handleCreate = () => open("create", { id: "publications" });
  const handleEdit = (p: Publication) => open("update", { id: "publications", item: p });
  const handleDelete = (p: Publication) => open("delete", { id: "publications", item: p });

  if (isLoading) return <p>{t`Loading publications ...`}</p>;
  if (isError) return <p>{t`Could not load publications.`}</p>;

  return (
    <>
      <Helmet>
        <title>
          {t`Publications`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <div className="w-full space-y-6">
        <PageLayout
          title={t`Publications`}
          gridView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Publication`}</span>
                </Button>
              </div>
              <PublicationGridView
                data={publications}
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
                  <span>{t`Add Publication`}</span>
                </Button>
              </div>
              <PublicationListView
                data={publications}
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
