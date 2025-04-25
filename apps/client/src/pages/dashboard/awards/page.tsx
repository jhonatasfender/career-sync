/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { t } from "@lingui/macro";
import { PencilSimple, Plus, Trash, Trophy } from "@phosphor-icons/react";
import type { Award } from "@reactive-resume/schema";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import { useAwards } from "@career-sync/client/hooks/use-award";
import { useDialog } from "@career-sync/client/stores/dialog";

const AwardGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Award[];
  handleEdit: (award: Award) => void;
  handleDelete: (award: Award) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {data.map((award) => (
      <div
        key={award.id}
        className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
              <Trophy className="size-6" weight="duotone" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">{award.title}</h3>
              {award.awarder && <p className="text-sm text-gray-500">{award.awarder}</p>}
              {award.date && <p className="text-sm text-gray-500">{award.date}</p>}
            </div>
          </div>

          <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
              title={t`Edit Award`}
              onClick={() => handleEdit(award)}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Award`}
              onClick={() => handleDelete(award)}
            >
              <Trash className="size-4" weight="duotone" />
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {award.website.href && (
            <a
              href={award.website.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              {t`Visit Website`}
            </a>
          )}

          {award.summary && (
            <div
              dangerouslySetInnerHTML={{ __html: award.summary }}
              className="text-sm text-gray-600"
            />
          )}
        </div>
      </div>
    ))}
  </div>
);

const AwardListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Award[];
  handleEdit: (award: Award) => void;
  handleDelete: (award: Award) => void;
}) => (
  <div className="space-y-4">
    {data.map((award) => (
      <div
        key={award.id}
        className="flex items-center justify-between rounded-lg border bg-background p-4"
      >
        <div className="flex items-start gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
            <Trophy className="size-6" weight="duotone" />
          </div>

          <div className="flex-1">
            <h3 className="font-semibold">{award.title}</h3>
            {award.awarder && <p className="text-sm text-gray-500">{award.awarder}</p>}
            {award.date && <p className="text-sm text-gray-500">{award.date}</p>}
            {award.website.href && (
              <a
                href={award.website.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                {t`Visit Website`}
              </a>
            )}
            {award.summary && (
              <p
                dangerouslySetInnerHTML={{ __html: award.summary }}
                className="mt-2 text-sm text-gray-600"
              />
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
            title={t`Edit Award`}
            onClick={() => handleEdit(award)}
          >
            <PencilSimple className="size-4" weight="duotone" />
          </button>
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
            title={t`Delete Award`}
            onClick={() => handleDelete(award)}
          >
            <Trash className="size-4" weight="duotone" />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export const AwardsPage = () => {
  const { open } = useDialog("awards");
  const { data: awards = [], isLoading, isError } = useAwards();

  const handleCreate = () => open("create", { id: "awards" });
  const handleEdit = (award: Award) => open("update", { id: "awards", item: award });
  const handleDelete = (award: Award) => open("delete", { id: "awards", item: award });

  if (isLoading) return <p>{t`Loading awards ...`}</p>;
  if (isError) return <p>{t`Could not load awards.`}</p>;

  return (
    <>
      <Helmet>
        <title>
          {t`Awards`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <div className="w-full space-y-6">
        <PageLayout
          title={t`Awards`}
          gridView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Award`}</span>
                </Button>
              </div>
              <AwardGridView data={awards} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
          listView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Award`}</span>
                </Button>
              </div>
              <AwardListView data={awards} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
        />
      </div>
    </>
  );
};
