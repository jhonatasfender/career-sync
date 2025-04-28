import { t } from "@lingui/core/macro";
import { Heart, PencilSimple, Plus, Tag, Trash } from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import { useDialog } from "@career-sync/client/stores/dialog";

type Interest = {
  name: string;
  keywords: string;
};

const InterestGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Interest[];
  handleEdit: (interest: Interest) => void;
  handleDelete: (interest: Interest) => void;
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((interest) => (
        <div
          key={interest.name}
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
                onClick={() => {
                  handleEdit(interest);
                }}
              >
                <PencilSimple className="size-4" weight="duotone" />
              </button>
              <button
                className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                title={t`Delete Interest`}
                onClick={() => {
                  handleDelete(interest);
                }}
              >
                <Trash className="size-4" weight="duotone" />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {interest.keywords.split(", ").map((keyword) => (
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
      ))}
    </div>
  );
};

const InterestListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Interest[];
  handleEdit: (interest: Interest) => void;
  handleDelete: (interest: Interest) => void;
}) => {
  return (
    <div className="space-y-4">
      {data.map((interest) => (
        <div
          key={interest.name}
          className="flex items-center justify-between rounded-lg border bg-background p-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
              <Heart className="size-6" weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{interest.name}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {interest.keywords.split(", ").map((keyword) => (
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
              onClick={() => {
                handleEdit(interest);
              }}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Interest`}
              onClick={() => {
                handleDelete(interest);
              }}
            >
              <Trash className="size-4" weight="duotone" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export const InterestsPage = () => {
  const { open } = useDialog("interests");

  const handleCreate = () => {
    open("create", { id: "interests" });
  };

  const handleEdit = (interest: Interest) => {
    open("update", { id: "interests", item: interest });
  };

  const handleDelete = (interest: Interest) => {
    open("delete", { id: "interests", item: interest });
  };

  const data: Interest[] = [
    {
      name: t`AI-Powered Recommendation System`,
      keywords: t`Machine Learning, AI, Personalization`,
    },
    {
      name: t`Blockchain-Based Voting Platform`,
      keywords: t`Blockchain, Security, Decentralization`,
    },
    {
      name: t`Real-Time Weather Forecasting App`,
      keywords: t`Meteorology, Data Analysis, IoT`,
    },
  ];

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
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Interest`}</span>
                </Button>
              </div>
              <InterestGridView data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
          listView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Interest`}</span>
                </Button>
              </div>
              <InterestListView data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
        />
      </div>
    </>
  );
};
