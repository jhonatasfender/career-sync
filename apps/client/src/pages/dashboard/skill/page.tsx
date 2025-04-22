/* eslint-disable @typescript-eslint/no-confusing-void-expression */
// File: apps/client/src/pages/SkillsPage.tsx
import { t } from "@lingui/macro";
import { Code, PencilSimple, Plus, Trash } from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import type { Skill } from "@career-sync/client/hooks/use-skills";
import { useSkills } from "@career-sync/client/hooks/use-skills";
import { useDialog } from "@career-sync/client/stores/dialog";

const GenericIcon = () => <Code className="size-6" weight="duotone" />;

const SkillGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Skill[];
  handleEdit: (skill: Skill) => void;
  handleDelete: (skill: Skill) => void;
}) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {data.map((skill) => (
      <div
        key={skill.id}
        className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
              <GenericIcon />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{skill.name}</h3>
              {skill.description && <p className="text-sm text-gray-500">{skill.description}</p>}
            </div>
          </div>

          <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
              title={t`Edit Skill`}
              onClick={() => handleEdit(skill)}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Skill`}
              onClick={() => handleDelete(skill)}
            >
              <Trash className="size-4" weight="duotone" />
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{t`Proficiency`}</span>
              <span className="text-sm font-medium text-gray-700">{skill.level * 20}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/50">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{ width: `${skill.level * 20}%` }}
              />
            </div>
          </div>

          {skill.keywords.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skill.keywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {kw}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);

const SkillListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Skill[];
  handleEdit: (skill: Skill) => void;
  handleDelete: (skill: Skill) => void;
}) => (
  <div className="space-y-4">
    {data.map((skill) => (
      <div
        key={skill.id}
        className="flex items-center justify-between rounded-lg border bg-background p-4"
      >
        <div className="flex items-center gap-4">
          <GenericIcon />
          <div className="flex-1">
            <h3 className="font-semibold">{skill.name}</h3>
            {skill.description && <p className="text-sm text-gray-500">{skill.description}</p>}

            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{t`Proficiency`}</span>
                <span className="text-sm font-medium text-gray-700">{skill.level * 20}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/50">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${skill.level * 20}%` }}
                />
              </div>
            </div>

            {skill.keywords.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {skill.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
            title={t`Edit Skill`}
            onClick={() => handleEdit(skill)}
          >
            <PencilSimple className="size-4" weight="duotone" />
          </button>
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
            title={t`Delete Skill`}
            onClick={() => handleDelete(skill)}
          >
            <Trash className="size-4" weight="duotone" />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export const SkillsPage = () => {
  const { open } = useDialog("skills");
  const { data: skills = [], isLoading, isError } = useSkills();

  const handleCreate = () => open("create", { id: "skills" });
  const handleEdit = (skill: Skill) => open("update", { id: "skills", item: skill });
  const handleDelete = (skill: Skill) => open("delete", { id: "skills", item: skill });

  if (isLoading) return <p>{t`Loading skills ...`}</p>;
  if (isError) return <p>{t`Could not load skills.`}</p>;

  return (
    <>
      <Helmet>
        <title>
          {t`Skills`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <div className="w-full space-y-6">
        <PageLayout
          title={t`Skills`}
          gridView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Skill`}</span>
                </Button>
              </div>
              <SkillGridView data={skills} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
          listView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Skill`}</span>
                </Button>
              </div>
              <SkillListView data={skills} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
        />
      </div>
    </>
  );
};
