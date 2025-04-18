import { t } from "@lingui/macro";
import {
  AmazonLogo,
  AppleLogo,
  Building,
  GoogleLogo,
  MicrosoftWordLogo,
  PencilSimple,
  Plus,
  Trash,
} from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";
import { useDialog } from "@career-sync/client/stores/dialog";

type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  website: string;
};

const ExperienceGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Experience[];
  handleEdit: (experience: Experience) => void;
  handleDelete: (experience: Experience) => void;
}) => {
  const getIcon = (icon: string) => {
    switch (icon.toLowerCase()) {
      case "amazon": {
        return <AmazonLogo className="size-6" weight="duotone" />;
      }
      case "google": {
        return <GoogleLogo className="size-6" weight="duotone" />;
      }
      case "microsoft": {
        return <MicrosoftWordLogo className="size-6" weight="duotone" />;
      }
      case "apple": {
        return <AppleLogo className="size-6" weight="duotone" />;
      }
      default: {
        return <Building className="size-6" weight="duotone" />;
      }
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((experience) => (
        <div
          key={experience.company}
          className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
                {getIcon(experience.company)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{experience.company}</h3>
                <p className="text-sm text-gray-500">{experience.position}</p>
                <p className="text-sm text-gray-500">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              <button
                className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
                title={t`Edit Experience`}
                onClick={() => {
                  handleEdit(experience);
                }}
              >
                <PencilSimple className="size-4" weight="duotone" />
              </button>
              <button
                className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                title={t`Delete Experience`}
                onClick={() => {
                  handleDelete(experience);
                }}
              >
                <Trash className="size-4" weight="duotone" />
              </button>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-sm text-gray-600">{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            {experience.website && (
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                {t`Visit Company Website`}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const ExperienceListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Experience[];
  handleEdit: (experience: Experience) => void;
  handleDelete: (experience: Experience) => void;
}) => {
  return (
    <div className="space-y-4">
      {data.map((experience) => (
        <div
          key={experience.company}
          className="flex items-center justify-between rounded-lg border bg-background p-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <h3 className="font-semibold">{experience.company}</h3>
              <p className="text-sm text-gray-500">{experience.position}</p>
              <p className="text-sm text-gray-500">
                {experience.startDate} - {experience.endDate}
              </p>
              <p className="mt-2 text-sm text-gray-600">{experience.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
              title={t`Edit Experience`}
              onClick={() => {
                handleEdit(experience);
              }}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Experience`}
              onClick={() => {
                handleDelete(experience);
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

export const ExperiencePage = () => {
  const { open } = useDialog("experience");

  const handleCreate = () => {
    open("create", { id: "experience" });
  };

  const handleEdit = (experience: Experience) => {
    open("update", { id: "experience", item: experience });
  };

  const handleDelete = (experience: Experience) => {
    open("delete", { id: "experience", item: experience });
  };

  const data: Experience[] = [
    {
      company: t`Career Sync`,
      position: t`Senior Software Engineer`,
      startDate: t`2023`,
      endDate: t`Present`,
      description: t`Leading the development of a modern resume builder and career management platform.`,
      technologies: [t`React`, t`TypeScript`, t`Tailwind CSS`, t`Node.js`, t`PostgreSQL`],
      website: "https://career-sync.com",
    },
    {
      company: t`Tech Corp`,
      position: t`Software Engineer`,
      startDate: t`2021`,
      endDate: t`2023`,
      description: t`Developed and maintained web applications using modern technologies.`,
      technologies: [t`Next.js`, t`TypeScript`, t`Tailwind CSS`, t`GraphQL`],
      website: "https://techcorp.com",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t`Experience`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <div className="w-full space-y-6">
        <PageLayout
          title={t`Experience`}
          gridView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Experience`}</span>
                </Button>
              </div>
              <ExperienceGridView data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
          listView={
            <>
              <div className="mb-4 flex justify-end">
                <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                  <Plus weight="bold" />
                  <span>{t`Add Experience`}</span>
                </Button>
              </div>
              <ExperienceListView data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
            </>
          }
        />
      </div>
    </>
  );
};
