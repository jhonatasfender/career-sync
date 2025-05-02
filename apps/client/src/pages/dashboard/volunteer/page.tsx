/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import { t } from "@lingui/core/macro";
import {
  Calendar,
  Globe,
  Handshake,
  MapPin,
  PencilSimple,
  Plus,
  Trash,
} from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import type { Volunteer } from "@career-sync/client/hooks/use-volunteer";
import { useVolunteers } from "@career-sync/client/hooks/use-volunteer";
import { useDialog } from "@career-sync/client/stores/dialog";

const VolunteerGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Volunteer[];
  handleEdit: (v: Volunteer) => void;
  handleDelete: (v: Volunteer) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {data.map((v) => (
      <div
        key={v.id}
        className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
      >
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
            <Handshake className="size-6" weight="duotone" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{v.organization}</h3>
            {v.position && <p className="text-sm text-gray-500">{v.position}</p>}
          </div>
          <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
              title={t`Edit Volunteer`}
              onClick={() => handleEdit(v)}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Volunteer`}
              onClick={() => handleDelete(v)}
            >
              <Trash className="size-4" weight="duotone" />
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          {v.summary && <p className="text-sm text-gray-600">{v.summary}</p>}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            {v.startDate && (
              <div className="flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-1">
                <Calendar className="size-3.5" weight="duotone" />
                <span className="whitespace-nowrap">{v.startDate}</span>
              </div>
            )}
            {v.location && (
              <div className="flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-1">
                <MapPin className="size-3.5" weight="duotone" />
                <span className="whitespace-nowrap">{v.location}</span>
              </div>
            )}
            {v.url.href && (
              <a
                href={v.url.href}
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
      </div>
    ))}
  </div>
);

const VolunteerListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Volunteer[];
  handleEdit: (v: Volunteer) => void;
  handleDelete: (v: Volunteer) => void;
}) => (
  <div className="space-y-4">
    {data.map((v) => (
      <div
        key={v.id}
        className="flex items-center justify-between rounded-lg border bg-background p-4"
      >
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
            <Handshake className="size-6" weight="duotone" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{v.organization}</h3>
            {v.position && <p className="text-sm text-gray-500">{v.position}</p>}
            {v.summary && <p className="mt-2 text-sm text-gray-600">{v.summary}</p>}

            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              {v.startDate && (
                <div className="flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-1">
                  <Calendar className="size-3.5" weight="duotone" />
                  <span className="whitespace-nowrap">{v.startDate}</span>
                </div>
              )}
              {v.location && (
                <div className="flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-1">
                  <MapPin className="size-3.5" weight="duotone" />
                  <span className="whitespace-nowrap">{v.location}</span>
                </div>
              )}
              {v.url.href && (
                <a
                  href={v.url.href}
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
        </div>
        <div className="flex items-center gap-2">
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
            title={t`Edit Volunteer`}
            onClick={() => handleEdit(v)}
          >
            <PencilSimple className="size-4" weight="duotone" />
          </button>
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
            title={t`Delete Volunteer`}
            onClick={() => handleDelete(v)}
          >
            <Trash className="size-4" weight="duotone" />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export const VolunteerPage = () => {
  const { open } = useDialog("volunteer");
  const { data = [], isLoading, isError } = useVolunteers();

  const handleCreate = () => open("create", { id: "volunteer" });
  const handleEdit = (v: Volunteer) => open("update", { id: "volunteer", item: v });
  const handleDelete = (v: Volunteer) => open("delete", { id: "volunteer", item: v });

  if (isLoading) return <p>{t`Loading volunteer experiences …`}</p>;
  if (isError) return <p>{t`Could not load volunteer experiences.`}</p>;

  return (
    <>
      <Helmet>
        <title>
          {t`Volunteer`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <div className="w-full space-y-6">
        <PageLayout
          title={t`Volunteer`}
          gridView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Volunteer`}</span>
                </Button>
              </div>
              <VolunteerGridView data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
          listView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Volunteer`}</span>
                </Button>
              </div>
              <VolunteerListView data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
        />
      </div>
    </>
  );
};
