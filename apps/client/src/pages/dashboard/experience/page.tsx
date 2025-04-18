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
import { Button, ScrollArea } from "@reactive-resume/ui";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { useDialog } from "@/client/stores/dialog";

type Experience = {
  company: string;
  position: string;
  dateRange: string;
  location: string;
  icon: string;
  description: string;
  technologies: string[];
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

  const data: Experience[] = [
    {
      company: t`Tech Solutions Inc.`,
      position: t`Desenvolvedor Front-end`,
      dateRange: t`03/2022 - Presente`,
      location: t`São Paulo, SP`,
      icon: "building",
      description: t`Desenvolvimento de aplicações web modernas com foco em performance e experiência do usuário. Trabalho em equipe ágil com metodologia Scrum.`,
      technologies: [t`React`, t`TypeScript`, t`Next.js`, t`Tailwind CSS`, t`Node.js`],
    },
    {
      company: t`Amazon`,
      position: t`Senior Software Engineer`,
      dateRange: t`01/2020 - 02/2022`,
      location: t`Remote`,
      icon: "amazon",
      description: t`Desenvolvimento de serviços escaláveis na AWS. Implementação de arquiteturas serverless e microserviços. Mentoria de desenvolvedores juniores.`,
      technologies: [t`AWS`, t`Python`, t`Docker`, t`Kubernetes`, t`Terraform`],
    },
    {
      company: t`Google`,
      position: t`Product Designer`,
      dateRange: t`01/2018 - 12/2019`,
      location: t`Mountain View, CA`,
      icon: "google",
      description: t`Design de interfaces para produtos Google. Pesquisa de usuários e testes de usabilidade. Criação de sistemas de design e componentes reutilizáveis.`,
      technologies: [t`Figma`, t`Sketch`, t`Adobe XD`, t`Material Design`, t`User Research`],
    },
    {
      company: t`Apple`,
      position: t`iOS Developer`,
      dateRange: t`06/2016 - 12/2017`,
      location: t`Cupertino, CA`,
      icon: "apple",
      description: t`Desenvolvimento de aplicativos nativos para iOS. Implementação de recursos avançados como ARKit e CoreML. Otimização de performance e consumo de bateria.`,
      technologies: [t`Swift`, t`Objective-C`, t`UIKit`, t`CoreData`, t`ARKit`],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t`Experience`} - {t`Reactive Resume`}
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
              {t`Experience`}
            </motion.h1>
            <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
              <Plus weight="bold" />
              <span>{t`Add Experience`}</span>
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
                {data.map((experience) => (
                  <motion.div
                    key={experience.company}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
                        {getIcon(experience.icon)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{experience.company}</h3>
                        <p className="text-sm text-gray-500">{experience.position}</p>
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
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{experience.dateRange}</span>
                        <span>•</span>
                        <span>{experience.location}</span>
                      </div>
                      <p className="text-sm text-gray-600">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-secondary/50 px-3 py-1 text-xs text-gray-600"
                          >
                            {tech}
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
