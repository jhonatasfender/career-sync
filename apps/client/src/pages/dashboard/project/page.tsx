import { t } from "@lingui/macro";
import { Calendar, Code, Globe, PencilSimple, Plus, Tag, Trash } from "@phosphor-icons/react";
import { Button, ScrollArea } from "@reactive-resume/ui";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { useDialog } from "@/client/stores/dialog";

type Projects = {
  name: string;
  description: string;
  dateRange: string;
  website: string;
  summary: string;
  keywords: string;
};

export const ProjectsPage = () => {
  const { open } = useDialog("projects");

  const handleCreate = () => {
    open("create", { id: "projects" });
  };

  const handleEdit = (project: Projects) => {
    open("update", { id: "projects", item: project });
  };

  const handleDelete = (project: Projects) => {
    open("delete", { id: "projects", item: project });
  };

  const data: Projects[] = [
    {
      name: t`AI-Powered Chatbot`,
      description: t`Desenvolvimento de um chatbot utilizando machine learning para atendimento ao cliente.`,
      dateRange: "2023-01 - 2023-12",
      website: "https://aiprojects.com/chatbot",
      summary: t`O projeto envolve a criação de um assistente virtual com capacidade de compreensão de linguagem natural.`,
      keywords: t`AI, Chatbot, NLP, Machine Learning`,
    },
    {
      name: t`E-Commerce Analytics Dashboard`,
      description: t`Painel interativo para monitoramento de métricas de vendas e engajamento em plataformas de e-commerce.`,
      dateRange: "2022-06 - 2023-04",
      website: "https://ecomanalytics.com",
      summary: t`A plataforma permite a análise de dados em tempo real, otimizando estratégias de vendas.`,
      keywords: t`E-Commerce, Data Analytics, Dashboard, Business Intelligence`,
    },
    {
      name: t`Open-Source Task Manager`,
      description: t`Aplicação de gerenciamento de tarefas baseada em tecnologia open-source para colaboração em equipe.`,
      dateRange: "2024-02 - 2024-08",
      website: "https://opensource-tasks.com",
      summary: t`Ferramenta leve e altamente customizável para gestão de produtividade, disponível gratuitamente.`,
      keywords: t`Task Management, Open-Source, Productivity, Collaboration`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t`Projects`} - {t`Reactive Resume`}
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
              {t`Projects`}
            </motion.h1>
            <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
              <Plus weight="bold" />
              <span>{t`Add Project`}</span>
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
                {data.map((project) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
                        <Code className="size-6" weight="duotone" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{project.name}</h3>
                        <p className="text-sm text-gray-500">{project.description}</p>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                          className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
                          title={t`Edit Project`}
                          onClick={() => {
                            handleEdit(project);
                          }}
                        >
                          <PencilSimple className="size-4" weight="duotone" />
                        </button>
                        <button
                          className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                          title={t`Delete Project`}
                          onClick={() => {
                            handleDelete(project);
                          }}
                        >
                          <Trash className="size-4" weight="duotone" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 space-y-4">
                      <p className="text-sm text-gray-600">{project.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.keywords.split(", ").map((keyword) => (
                          <span
                            key={keyword}
                            className="inline-flex items-center gap-1 rounded-full bg-secondary/50 px-2 py-1 text-xs text-gray-600"
                          >
                            <Tag className="size-3" weight="duotone" />
                            {keyword}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="size-4" weight="duotone" />
                          <span>{project.dateRange}</span>
                        </div>
                        {project.website && (
                          <a
                            href={project.website}
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
