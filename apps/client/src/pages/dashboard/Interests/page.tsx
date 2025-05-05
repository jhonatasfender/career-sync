/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { t } from "@lingui/core/macro";
import { Heart, PencilSimple, Plus, Tag, Trash } from "@phosphor-icons/react";
import type { Interest } from "@reactive-resume/schema";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import { useInterests } from "@career-sync/client/hooks/use-interests";
import { useDialog } from "@career-sync/client/stores/dialog";

const InterestGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Interest[];
  handleEdit: (interest: Interest) => void;
  handleDelete: (interest: Interest) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {data.map((interest) => (
      <div
        key={interest.id}
        className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
      >
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
            <Heart className="size-6" weight="duotone" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{interest.name}</h3>
          </div>
          <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
              title={t`Edit Interest`}
              onClick={() => handleEdit(interest)}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Interest`}
              onClick={() => handleDelete(interest)}
            >
              <Trash className="size-4" weight="duotone" />
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {interest.keywords.map((keyword) => (
            <span
              key={keyword}
              className="inline-flex items-center gap-1 rounded-full bg-secondary/50 px-2.5 py-1 text-xs text-gray-600"
            >
              <Tag className="size-3" weight="duotone" />
              {keyword}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const InterestListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Interest[];
  handleEdit: (interest: Interest) => void;
  handleDelete: (interest: Interest) => void;
}) => (
  <div className="space-y-4">
    {data.map((interest) => (
      <div
        key={interest.id}
        className="flex items-center justify-between rounded-lg border bg-background p-4"
      >
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
            <Heart className="size-6" weight="duotone" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{interest.name}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {interest.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex items-center gap-1 rounded-full bg-secondary/50 px-2.5 py-1 text-xs text-gray-600"
                >
                  <Tag className="size-3" weight="duotone" />
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
            title={t`Edit Interest`}
            onClick={() => handleEdit(interest)}
          >
            <PencilSimple className="size-4" weight="duotone" />
          </button>
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
            title={t`Delete Interest`}
            onClick={() => handleDelete(interest)}
          >
            <Trash className="size-4" weight="duotone" />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export const InterestsPage = () => {
  const { open } = useDialog("interests");
  const { data: interests = [], isLoading, isError } = useInterests();

  const handleCreate = () => open("create", { id: "interests" });
  const handleEdit = (i: Interest) => open("update", { id: "interests", item: i });
  const handleDelete = (i: Interest) => open("delete", { id: "interests", item: i });

  if (isLoading) return <p>{t`Loading interests ...`}</p>;
  if (isError) return <p>{t`Could not load interests.`}</p>;

  return (
    <>
      <Helmet>
        <title>
          {t`Interests`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <div className="w-full space-y-6">
        <PageLayout
          title={t`Interests`}
          gridView={
            <>
              <div className="mb-4 flex justify-end">
                <Button
                  variant="primary"
                  size="md"
                  className="gap-x-2"
                  data-cy="add-interests"
                  onClick={handleCreate}
                >
                  <Plus weight="bold" />
                  <span>{t`Add Interest`}</span>
                </Button>
              </div>
              <InterestGridView
                data={interests}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </>
          }
          listView={
            <>
              <div className="mb-4 flex justify-end">
                <Button
                  variant="primary"
                  size="md"
                  className="gap-x-2"
                  data-cy="add-interests"
                  onClick={handleCreate}
                >
                  <Plus weight="bold" />
                  <span>{t`Add Interest`}</span>
                </Button>
              </div>
              <InterestListView
                data={interests}
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
