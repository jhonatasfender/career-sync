/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { t } from "@lingui/core/macro";
import { Globe, PencilSimple, Plus, Trash } from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import type { Language } from "@career-sync/client/hooks/use-languages";
import { useLanguages } from "@career-sync/client/hooks/use-languages";
import { useDialog } from "@career-sync/client/stores/dialog";

const GenericIcon = () => <Globe className="size-6" weight="duotone" />;

const LanguageGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Language[];
  handleEdit: (language: Language) => void;
  handleDelete: (language: Language) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {data.map((language) => (
      <div
        key={language.id}
        className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
              <GenericIcon />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{language.name}</h3>
              {language.description && (
                <p className="text-sm text-gray-500">{language.description}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
              title={t`Edit Language`}
              onClick={() => handleEdit(language)}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Language`}
              onClick={() => handleDelete(language)}
            >
              <Trash className="size-4" weight="duotone" />
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{t`Proficiency`}</span>
              <span className="text-sm font-medium text-gray-700">{language.level * 20}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/50">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{ width: `${language.level * 20}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const LanguageListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Language[];
  handleEdit: (language: Language) => void;
  handleDelete: (language: Language) => void;
}) => (
  <div className="space-y-4">
    {data.map((language) => (
      <div
        key={language.id}
        className="flex items-center justify-between rounded-lg border bg-background p-4"
      >
        <div className="flex items-center gap-4">
          <GenericIcon />
          <div className="flex-1">
            <h3 className="font-semibold">{language.name}</h3>
            {language.description && (
              <p className="text-sm text-gray-500">{language.description}</p>
            )}

            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{t`Proficiency`}</span>
                <span className="text-sm font-medium text-gray-700">{language.level * 20}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/50">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${language.level * 20}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
            title={t`Edit Language`}
            onClick={() => handleEdit(language)}
          >
            <PencilSimple className="size-4" weight="duotone" />
          </button>
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
            title={t`Delete Language`}
            onClick={() => handleDelete(language)}
          >
            <Trash className="size-4" weight="duotone" />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export const LanguagesPage = () => {
  const { open } = useDialog("languages");
  const { data: languages = [], isLoading, isError } = useLanguages();

  const handleCreate = () => open("create", { id: "languages" });
  const handleEdit = (language: Language) => open("update", { id: "languages", item: language });
  const handleDelete = (language: Language) => open("delete", { id: "languages", item: language });

  if (isLoading) return <p>{t`Loading languages ...`}</p>;
  if (isError) return <p>{t`Could not load languages.`}</p>;

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
              <LanguageGridView
                data={languages}
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
                  <span>{t`Add Language`}</span>
                </Button>
              </div>
              <LanguageListView
                data={languages}
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
