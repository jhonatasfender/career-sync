import { t } from "@lingui/macro";
import { Globe, PencilSimple, Plus, Trash } from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import { useDialog } from "@career-sync/client/stores/dialog";

type Language = {
  name: string;
  description: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  icon: string;
};

const getLevelPercentage = (level: string) => {
  switch (level) {
    case "A1": {
      return 20;
    }
    case "A2": {
      return 40;
    }
    case "B1": {
      return 60;
    }
    case "B2": {
      return 75;
    }
    case "C1": {
      return 90;
    }
    case "C2": {
      return 100;
    }
    default: {
      return 0;
    }
  }
};

const getLevelDescription = (level: string) => {
  switch (level) {
    case "A1": {
      return t`Iniciante`;
    }
    case "A2": {
      return t`Básico`;
    }
    case "B1": {
      return t`Intermediário`;
    }
    case "B2": {
      return t`Intermediário Superior`;
    }
    case "C1": {
      return t`Avançado`;
    }
    case "C2": {
      return t`Fluente`;
    }
    default: {
      return t`Não especificado`;
    }
  }
};

const LanguageGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Language[];
  handleEdit: (language: Language) => void;
  handleDelete: (language: Language) => void;
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((language) => (
        <div
          key={language.name}
          className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
              <Globe className="size-6" weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{language.name}</h3>
              <p className="text-sm text-gray-500">{language.description}</p>
            </div>
            <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              <button
                className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
                title={t`Edit Language`}
                onClick={() => {
                  handleEdit(language);
                }}
              >
                <PencilSimple className="size-4" weight="duotone" />
              </button>
              <button
                className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                title={t`Delete Language`}
                onClick={() => {
                  handleDelete(language);
                }}
              >
                <Trash className="size-4" weight="duotone" />
              </button>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{t`Proficiency Level`}</span>
                <span className="text-sm font-medium text-gray-700">
                  {language.level} - {getLevelDescription(language.level)}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/50">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${getLevelPercentage(language.level)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const LanguageListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Language[];
  handleEdit: (language: Language) => void;
  handleDelete: (language: Language) => void;
}) => {
  return (
    <div className="space-y-4">
      {data.map((language) => (
        <div
          key={language.name}
          className="flex items-center justify-between rounded-lg border bg-background p-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
              <Globe className="size-6" weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{language.name}</h3>
              <p className="text-sm text-gray-500">{language.description}</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{t`Proficiency Level`}</span>
                  <span className="text-sm font-medium text-gray-700">
                    {language.level} - {getLevelDescription(language.level)}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/50">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${getLevelPercentage(language.level)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
              title={t`Edit Language`}
              onClick={() => {
                handleEdit(language);
              }}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Language`}
              onClick={() => {
                handleDelete(language);
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

export const LanguagesPage = () => {
  const { open } = useDialog("languages");

  const handleCreate = () => {
    open("create", { id: "languages" });
  };

  const handleEdit = (language: Language) => {
    open("update", { id: "languages", item: language });
  };

  const handleDelete = (language: Language) => {
    open("delete", { id: "languages", item: language });
  };

  const data: Language[] = [
    {
      name: t`Inglês`,
      description: t`Língua estrangeira mais utilizada no mundo dos negócios.`,
      level: "C1",
      icon: "globe",
    },
    {
      name: t`Espanhol`,
      description: t`Segunda língua mais falada no mundo.`,
      level: "B2",
      icon: "globe",
    },
    {
      name: t`Francês`,
      description: t`Língua oficial em vários países e organizações internacionais.`,
      level: "B1",
      icon: "globe",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t`Languages`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <div className="w-full space-y-6">
        <PageLayout
          title={t`Languages`}
          gridView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Language`}</span>
                </Button>
              </div>
              <LanguageGridView data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
          listView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Language`}</span>
                </Button>
              </div>
              <LanguageListView data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
        />
      </div>
    </>
  );
};
