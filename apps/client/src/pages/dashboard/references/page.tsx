/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import { t } from "@lingui/core/macro";
import { Globe, PencilSimple, Plus, Trash, User } from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import type { Reference } from "@career-sync/client/hooks/use-reference";
import { useReferences } from "@career-sync/client/hooks/use-reference";
import { useDialog } from "@career-sync/client/stores/dialog";

const avatarFor = (name: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
    name,
  )}&backgroundColor=b6e3f4`;

const ReferenceGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Reference[];
  handleEdit: (reference: Reference) => void;
  handleDelete: (reference: Reference) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {data.map((reference) => (
      <div
        key={reference.id}
        className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
      >
        <div className="flex items-start gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
            {reference.name ? (
              <img
                src={avatarFor(reference.name)}
                alt={reference.name}
                className="size-12 rounded-full object-cover"
              />
            ) : (
              <User className="size-6" weight="duotone" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{reference.name}</h3>
            {reference.description && (
              <p className="text-sm text-gray-500">{reference.description}</p>
            )}
          </div>
          <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
              title={t`Edit Reference`}
              onClick={() => handleEdit(reference)}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Reference`}
              onClick={() => handleDelete(reference)}
            >
              <Trash className="size-4" weight="duotone" />
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          {reference.summary && <p className="text-sm text-gray-600">{reference.summary}</p>}
          {reference.url.href && (
            <a
              href={reference.url.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-1 text-primary hover:bg-secondary/70"
            >
              <Globe className="size-3.5" weight="duotone" />
              <span>{t`Website`}</span>
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
);

const ReferenceListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Reference[];
  handleEdit: (reference: Reference) => void;
  handleDelete: (reference: Reference) => void;
}) => (
  <div className="space-y-4">
    {data.map((reference) => (
      <div
        key={reference.id}
        className="flex items-center justify-between rounded-lg border bg-background p-4"
      >
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
            {reference.name ? (
              <img
                src={avatarFor(reference.name)}
                alt={reference.name}
                className="size-12 rounded-full object-cover"
              />
            ) : (
              <User className="size-6" weight="duotone" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{reference.name}</h3>
            {reference.description && (
              <p className="text-sm text-gray-500">{reference.description}</p>
            )}
            {reference.summary && <p className="mt-2 text-sm text-gray-600">{reference.summary}</p>}
            {reference.url.href && (
              <a
                href={reference.url.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-1 text-primary hover:bg-secondary/70"
              >
                <Globe className="size-3.5" weight="duotone" />
                <span>{t`Website`}</span>
              </a>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
            title={t`Edit Reference`}
            onClick={() => handleEdit(reference)}
          >
            <PencilSimple className="size-4" weight="duotone" />
          </button>
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
            title={t`Delete Reference`}
            onClick={() => handleDelete(reference)}
          >
            <Trash className="size-4" weight="duotone" />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export const ReferencesPage = () => {
  const { open } = useDialog("references");
  const { data = [], isLoading, isError } = useReferences();

  const handleCreate = () => open("create", { id: "references" });
  const handleEdit = (reference: Reference) =>
    open("update", { id: "references", item: reference });
  const handleDelete = (reference: Reference) =>
    open("delete", { id: "references", item: reference });

  if (isLoading) return <p>{t`Loading references …`}</p>;
  if (isError) return <p>{t`Could not load references.`}</p>;

  return (
    <>
      <Helmet>
        <title>
          {t`References`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <div className="w-full space-y-6">
        <PageLayout
          title={t`References`}
          gridView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Reference`}</span>
                </Button>
              </div>
              <ReferenceGridView data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
          listView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Reference`}</span>
                </Button>
              </div>
              <ReferenceListView data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
        />
      </div>
    </>
  );
};
