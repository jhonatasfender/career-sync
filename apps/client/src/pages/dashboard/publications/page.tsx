import { t } from "@lingui/macro";
import { Calendar, FileText, Globe, PencilSimple, Plus, Trash } from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import { useDialog } from "@career-sync/client/stores/dialog";

type Publication = {
  name: string;
  publisher: string;
  date: string;
  website: string;
  summary: string;
};

const PublicationGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Publication[];
  handleEdit: (publication: Publication) => void;
  handleDelete: (publication: Publication) => void;
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((publication) => (
        <div
          key={publication.name}
          className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
              <FileText className="size-6" weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{publication.name}</h3>
              <p className="text-sm text-gray-500">{publication.publisher}</p>
            </div>
            <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              <button
                className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
                title={t`Edit Publication`}
                onClick={() => {
                  handleEdit(publication);
                }}
              >
                <PencilSimple className="size-4" weight="duotone" />
              </button>
              <button
                className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                title={t`Delete Publication`}
                onClick={() => {
                  handleDelete(publication);
                }}
              >
                <Trash className="size-4" weight="duotone" />
              </button>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-sm text-gray-600">{publication.summary}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="size-4" weight="duotone" />
                <span>{publication.date}</span>
              </div>
              {publication.website && (
                <a
                  href={publication.website}
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

const PublicationListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Publication[];
  handleEdit: (publication: Publication) => void;
  handleDelete: (publication: Publication) => void;
}) => {
  return (
    <div className="space-y-4">
      {data.map((publication) => (
        <div
          key={publication.name}
          className="flex items-center justify-between rounded-lg border bg-background p-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
              <FileText className="size-6" weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{publication.name}</h3>
              <p className="text-sm text-gray-500">{publication.publisher}</p>
              <p className="mt-2 text-sm text-gray-600">{publication.summary}</p>
              <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="size-4" weight="duotone" />
                  <span>{publication.date}</span>
                </div>
                {publication.website && (
                  <a
                    href={publication.website}
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
              onClick={() => {
                handleEdit(publication);
              }}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Publication`}
              onClick={() => {
                handleDelete(publication);
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

export const PublicationsPage = () => {
  const { open } = useDialog("publications");

  const handleCreate = () => {
    open("create", { id: "publications" });
  };

  const handleEdit = (publication: Publication) => {
    open("update", { id: "publications", item: publication });
  };

  const handleDelete = (publication: Publication) => {
    open("delete", { id: "publications", item: publication });
  };

  const data: Publication[] = [
    {
      name: t`Innovator of the Year`,
      publisher: t`Tech Excellence Awards`,
      date: "2023-10-05",
      website: "https://techexcellenceawards.com",
      summary: t`Reconhecimento por contribuições excepcionais na área de inovação tecnológica.`,
    },
    {
      name: t`Best Open-Source Contribution`,
      publisher: t`Global Dev Community`,
      date: "2022-08-15",
      website: "https://globaldevcommunity.org",
      summary: t`Prêmio concedido a desenvolvedores por impactos significativos em projetos open-source.`,
    },
    {
      name: t`Leadership in AI Research`,
      publisher: t`International AI Symposium`,
      date: "2024-03-12",
      website: "https://aisymposium.com",
      summary: t`Honraria por avanços significativos na pesquisa e desenvolvimento de inteligência artificial.`,
    },
  ];

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
                data={data}
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
                data={data}
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
