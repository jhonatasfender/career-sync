/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import { t } from "@lingui/core/macro";
import { Calendar, Code, Globe, PencilSimple, Plus, Tag, Trash } from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import type { Project } from "@career-sync/client/hooks/use-project";
import { useProjects } from "@career-sync/client/hooks/use-project";
import { useDialog } from "@career-sync/client/stores/dialog";

const ProjectGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Project[];
  handleEdit: (project: Project) => void;
  handleDelete: (project: Project) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {data.map((project) => (
      <div
        key={project.id}
        className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
      >
        <div className="flex items-start gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
            <Code className="size-6" weight="duotone" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{project.name}</h3>
            {project.description && <p className="text-sm text-gray-500">{project.description}</p>}
          </div>
          <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
              title={t`Edit Project`}
              onClick={() => handleEdit(project)}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Project`}
              onClick={() => handleDelete(project)}
            >
              <Trash className="size-4" weight="duotone" />
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          {project.summary && <p className="text-sm text-gray-600">{project.summary}</p>}
          {project.keywords.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex items-center gap-1 rounded-full bg-secondary/50 px-2 py-1 text-xs text-gray-600"
                >
                  <Tag className="size-3" weight="duotone" />
                  {keyword}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {(project.startDate ?? project.endDate) && (
              <div className="flex items-center gap-1">
                <Calendar className="size-4" weight="duotone" />
                <span>
                  {project.startDate ?? ""}
                  {project.startDate && " - "}
                  {project.endDate ?? t`Present`}
                </span>
              </div>
            )}
            {project.website.href && (
              <a
                href={project.website.href}
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

const ProjectListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Project[];
  handleEdit: (project: Project) => void;
  handleDelete: (project: Project) => void;
}) => (
  <div className="space-y-4">
    {data.map((project) => (
      <div
        key={project.id}
        className="flex items-center justify-between rounded-lg border bg-background p-4"
      >
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
            <Code className="size-6" weight="duotone" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{project.name}</h3>
            {project.description && <p className="text-sm text-gray-500">{project.description}</p>}
            {project.summary && <p className="mt-2 text-sm text-gray-600">{project.summary}</p>}
            {project.keywords.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {project.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="inline-flex items-center gap-1 rounded-full bg-secondary/50 px-2 py-1 text-xs text-gray-600"
                  >
                    <Tag className="size-3" weight="duotone" />
                    {keyword}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
              {(project.startDate ?? project.endDate) && (
                <div className="flex items-center gap-1">
                  <Calendar className="size-4" weight="duotone" />
                  <span>
                    {project.startDate ?? ""}
                    {project.startDate && " - "}
                    {project.endDate ?? t`Present`}
                  </span>
                </div>
              )}
              {project.website.href && (
                <a
                  href={project.website.href}
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
            title={t`Edit Project`}
            onClick={() => handleEdit(project)}
          >
            <PencilSimple className="size-4" weight="duotone" />
          </button>
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
            title={t`Delete Project`}
            onClick={() => handleDelete(project)}
          >
            <Trash className="size-4" weight="duotone" />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export const ProjectPage = () => {
  const { open } = useDialog("projects");
  const { data: projects = [], isLoading, isError } = useProjects();

  const handleCreate = () => open("create", { id: "projects" });
  const handleEdit = (p: Project) => open("update", { id: "projects", item: p });
  const handleDelete = (p: Project) => open("delete", { id: "projects", item: p });

  if (isLoading) return <p>{t`Loading projects ...`}</p>;
  if (isError) return <p>{t`Could not load projects.`}</p>;

  return (
    <>
      <Helmet>
        <title>
          {t`Projects`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <div className="w-full space-y-6">
        <PageLayout
          title={t`Projects`}
          gridView={
            <>
              <div className="mb-4 flex justify-end">
                <Button
                  variant="primary"
                  size="md"
                  className="gap-x-2"
                  data-cy="add-projects"
                  onClick={handleCreate}
                >
                  <Plus weight="bold" />
                  <span>{t`Add Project`}</span>
                </Button>
              </div>
              <ProjectGridView
                data={projects}
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
                  data-cy="add-projects"
                  onClick={handleCreate}
                >
                  <Plus weight="bold" />
                  <span>{t`Add Project`}</span>
                </Button>
              </div>
              <ProjectListView
                data={projects}
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
