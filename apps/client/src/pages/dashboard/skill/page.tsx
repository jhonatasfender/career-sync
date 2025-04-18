import { t } from "@lingui/macro";
import { Code, Database, Gear, PencilSimple, Plus, Trash } from "@phosphor-icons/react";
import { Button, ScrollArea } from "@reactive-resume/ui";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { useDialog } from "@/client/stores/dialog";

type SkillsPage = {
  name: string;
  description: string;
  level: number;
  keywords: string;
  icon: string;
};

export const SkillsPage = () => {
  const { open } = useDialog("skills");

  const handleCreate = () => {
    open("create", { id: "skills" });
  };

  const handleEdit = (skill: SkillsPage) => {
    open("update", { id: "skills", item: skill });
  };

  const handleDelete = (skill: SkillsPage) => {
    open("delete", { id: "skills", item: skill });
  };

  const getIcon = (icon: string) => {
    switch (icon.toLowerCase()) {
      case "code": {
        return <Code className="size-6" weight="duotone" />;
      }
      case "database": {
        return <Database className="size-6" weight="duotone" />;
      }
      case "gear": {
        return <Gear className="size-6" weight="duotone" />;
      }
      default: {
        return <Code className="size-6" weight="duotone" />;
      }
    }
  };

  const data: SkillsPage[] = [
    {
      name: t`JavaScript`,
      description: t`Linguagem de programação usada para desenvolvimento web.`,
      level: 8,
      keywords: t`frontend, backend, web, programação`,
      icon: "code",
    },
    {
      name: t`Design UX/UI`,
      description: t`Criação de interfaces intuitivas e acessíveis.`,
      level: 7,
      keywords: t`design, usabilidade, prototipação, experiência do usuário`,
      icon: "gear",
    },
    {
      name: t`Gestão de Projetos`,
      description: t`Planejamento e execução de projetos ágeis e tradicionais.`,
      level: 9,
      keywords: t`scrum, kanban, planejamento, execução`,
      icon: "gear",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t`Skills`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <motion.div
        className="w-full space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight"
            >
              {t`Skills`}
            </motion.h1>
            <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
              <Plus weight="bold" />
              <span>{t`Add Skill`}</span>
            </Button>
          </div>

          <ScrollArea hideScrollbar className="h-[calc(100vh-140px)] lg:h-[calc(100vh-88px)]">
            <motion.div
              className="w-full rounded-lg bg-background p-6 shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
                        {getIcon(skill.icon)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{skill.name}</h3>
                        <p className="text-sm text-gray-500">{skill.description}</p>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                          className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
                          title={t`Edit Skill`}
                          onClick={() => {
                            handleEdit(skill);
                          }}
                        >
                          <PencilSimple className="size-4" weight="duotone" />
                        </button>
                        <button
                          className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                          title={t`Delete Skill`}
                          onClick={() => {
                            handleDelete(skill);
                          }}
                        >
                          <Trash className="size-4" weight="duotone" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">
                            {t`Proficiency`}
                          </span>
                          <span className="text-sm font-medium text-gray-700">
                            {skill.level * 10}%
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/50">
                          <div
                            className="h-full rounded-full bg-primary transition-all duration-300"
                            style={{ width: `${skill.level * 10}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.keywords.split(", ").map((keyword) => (
                          <span
                            key={keyword}
                            className="rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium text-gray-700"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollArea>
        </div>
      </motion.div>
    </>
  );
};
