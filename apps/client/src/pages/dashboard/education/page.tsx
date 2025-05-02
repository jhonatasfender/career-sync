import { t } from "@lingui/core/macro";
import { Building, GraduationCap, PencilSimple, Plus, Trash } from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import type { Education } from "@career-sync/client/hooks/use-education";
import { useEducations } from "@career-sync/client/hooks/use-education";
import { useDialog } from "@career-sync/client/stores/dialog";

const getIcon = (icon?: string) => {
  switch (icon?.toLowerCase()) {
    case "university": {
      return <Building className="size-6" weight="duotone" />;
    }
    default: {
      return <GraduationCap className="size-6" weight="duotone" />;
    }
  }
};

const EducationGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Education[];
  handleEdit: (edu: Education) => void;
  handleDelete: (edu: Education) => void;
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((education) => (
        <div
          key={education.id}
          className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
                {getIcon(education.area)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{education.institution}</h3>
                <p className="text-sm text-gray-500">{education.area}</p>
                <p className="text-sm text-gray-500">
                  {education.startDate} - {education.endDate ?? t`Present`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              <button
                className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
                title={t`Edit Education`}
                onClick={() => {
                  handleEdit(education);
                }}
              >
                <PencilSimple className="size-4" weight="duotone" />
              </button>
              <button
                className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                title={t`Delete Education`}
                onClick={() => {
                  handleDelete(education);
                }}
              >
                <Trash className="size-4" weight="duotone" />
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex flex-col gap-1">
              {education.gpa && (
                <span className="text-sm font-medium text-gray-700">{education.gpa}</span>
              )}
              {education.website.href && (
                <a
                  href={education.website.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {t`Visit Website`}
                </a>
              )}{" "}
            </div>
            {education.summary && (
              <div
                dangerouslySetInnerHTML={{ __html: education.summary }}
                className="text-sm text-gray-600"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const EducationListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Education[];
  handleEdit: (edu: Education) => void;
  handleDelete: (edu: Education) => void;
}) => (
  <div className="space-y-4">
    {data.map((education) => (
      <div
        key={education.id}
        className="flex items-center justify-between rounded-lg border bg-background p-4"
      >
        <div className="flex items-center gap-4">
          {getIcon(education.area)}
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <h3 className="font-semibold">{education.institution}</h3>
              <p className="text-sm text-gray-500">{education.area}</p>
              <p className="text-sm text-gray-500">
                {education.startDate} - {education.endDate ?? t`Present`}
              </p>
              {education.gpa && <p className="text-sm text-gray-600">{education.gpa}</p>}
              {education.website.href && (
                <a
                  href={education.website.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {t`Visit Website`}
                </a>
              )}{" "}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
            title={t`Edit Education`}
            onClick={() => {
              handleEdit(education);
            }}
          >
            <PencilSimple className="size-4" weight="duotone" />
          </button>
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
            title={t`Delete Education`}
            onClick={() => {
              handleDelete(education);
            }}
          >
            <Trash className="size-4" weight="duotone" />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export const EducationPage = () => {
  const { open } = useDialog("education");
  const { data: educations = [], isLoading, isError } = useEducations();

  const handleCreate = () => {
    open("create", { id: "education" });
  };
  const handleEdit = (edu: Education) => {
    open("update", { id: "education", item: edu });
  };
  const handleDelete = (edu: Education) => {
    open("delete", { id: "education", item: edu });
  };

  if (isLoading) return <p>{t`Loading education ...`}</p>;
  if (isError) return <p>{t`Could not load education.`}</p>;

  return (
    <>
      <Helmet>
        <title>
          {t`Education`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <div className="w-full space-y-6">
        <PageLayout
          title={t`Education`}
          gridView={
            <>
              <div className="mb-4 flex justify-end">
                <Button
                  variant="primary"
                  size="md"
                  className="gap-x-2"
                  data-cy="add-education"
                  onClick={handleCreate}
                >
                  <Plus weight="bold" />
                  <span>{t`Add Education`}</span>
                </Button>
              </div>
              <EducationGridView
                data={educations}
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
                  data-cy="add-education"
                  onClick={handleCreate}
                >
                  <Plus weight="bold" />
                  <span>{t`Add Education`}</span>
                </Button>
              </div>
              <EducationListView
                data={educations}
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
