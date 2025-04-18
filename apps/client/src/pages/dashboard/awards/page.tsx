import { t } from "@lingui/macro";
import { Calendar, Globe, PencilSimple, Plus, Trash, Trophy } from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import { useDialog } from "@career-sync/client/stores/dialog";

type Award = {
  title: string;
  awarder: string;
  date: string;
  website: string;
  summary: string;
};

const AwardGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Award[];
  handleEdit: (award: Award) => void;
  handleDelete: (award: Award) => void;
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((award) => (
        <div
          key={award.title}
          className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
              <Trophy className="size-6" weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{award.title}</h3>
              <p className="text-sm text-gray-500">{award.awarder}</p>
            </div>
            <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              <button
                className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
                title={t`Edit Award`}
                onClick={() => {
                  handleEdit(award);
                }}
              >
                <PencilSimple className="size-4" weight="duotone" />
              </button>
              <button
                className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                title={t`Delete Award`}
                onClick={() => {
                  handleDelete(award);
                }}
              >
                <Trash className="size-4" weight="duotone" />
              </button>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-sm text-gray-600">{award.summary}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="size-4" weight="duotone" />
                <span>{award.date}</span>
              </div>
              {award.website && (
                <a
                  href={award.website}
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
};

const AwardListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Award[];
  handleEdit: (award: Award) => void;
  handleDelete: (award: Award) => void;
}) => {
  return (
    <div className="space-y-4">
      {data.map((award) => (
        <div
          key={award.title}
          className="flex items-center justify-between rounded-lg border bg-background p-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
              <Trophy className="size-6" weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{award.title}</h3>
              <p className="text-sm text-gray-500">{award.awarder}</p>
              <p className="mt-2 text-sm text-gray-600">{award.summary}</p>
              <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="size-4" weight="duotone" />
                  <span>{award.date}</span>
                </div>
                {award.website && (
                  <a
                    href={award.website}
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
              title={t`Edit Award`}
              onClick={() => {
                handleEdit(award);
              }}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Award`}
              onClick={() => {
                handleDelete(award);
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

export const AwardsPage = () => {
  const { open } = useDialog("awards");

  const handleCreate = () => {
    open("create", { id: "awards" });
  };

  const handleEdit = (award: Award) => {
    open("update", { id: "awards", item: award });
  };

  const handleDelete = (award: Award) => {
    open("delete", { id: "awards", item: award });
  };

  const data: Award[] = [
    {
      title: t`Best Innovator Award`,
      awarder: t`Tech Leaders Association`,
      date: "2023-09-15",
      website: "https://techleadersawards.com",
      summary: t`Reconhecimento por contribuições inovadoras no setor de tecnologia.`,
    },
    {
      title: t`Outstanding Researcher`,
      awarder: t`Global Science Foundation`,
      date: "2022-06-10",
      website: "https://globalsciencefoundation.org",
      summary: t`Prêmio concedido por pesquisas impactantes em inteligência artificial.`,
    },
    {
      title: t`Community Impact Award`,
      awarder: t`Social Good Network`,
      date: "2024-04-20",
      website: "https://socialgoodnetwork.org",
      summary: t`Honraria por projetos que geraram mudanças significativas na comunidade.`,
    },
  ];

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
              <AwardGridView data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
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
              <AwardListView data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
        />
      </div>
    </>
  );
};
