import { t } from "@lingui/macro";
import { Building, GraduationCap, PencilSimple, Plus, Trash } from "@phosphor-icons/react";
import { Button, ScrollArea } from "@reactive-resume/ui";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { useDialog } from "@/client/stores/dialog";

type Education = {
  institution: string;
  typeStudy: string;
  areaStudy: string;
  score: string;
  dateRange: string;
  website: string;
  summary: string;
  icon: string;
  technologies: string[];
};

export const EducationPage = () => {
  const { open } = useDialog("education");

  const handleCreate = () => {
    open("create", { id: "education" });
  };

  const handleEdit = (education: Education) => {
    open("update", { id: "education", item: education });
  };

  const handleDelete = (education: Education) => {
    open("delete", { id: "education", item: education });
  };

  const getIcon = (icon: string) => {
    switch (icon.toLowerCase()) {
      case "university": {
        return <Building className="size-6" weight="duotone" />;
      }
      case "college": {
        return <GraduationCap className="size-6" weight="duotone" />;
      }
      default: {
        return <GraduationCap className="size-6" weight="duotone" />;
      }
    }
  };

  const data: Education[] = [
    {
      institution: t`Universidade X`,
      typeStudy: t`Bacharelado`,
      areaStudy: t`Engenharia Civil`,
      score: t`92`,
      dateRange: t`2018-2022`,
      website: "https://universidadex.com",
      summary: t`Curso focado em estruturas e planejamento urbano.`,
      icon: "university",
      technologies: [
        t`Cálculo Estrutural`,
        t`AutoCAD`,
        t`Revit`,
        t`Concreto Armado`,
        t`Topografia`,
      ],
    },
    {
      institution: t`Instituto Y`,
      typeStudy: t`Mestrado`,
      areaStudy: t`Administração`,
      score: t`88`,
      dateRange: t`2020-2022`,
      website: "https://institutoy.org",
      summary: t`Gestão estratégica e inovação organizacional.`,
      icon: "college",
      technologies: [
        t`Gestão de Projetos`,
        t`Análise Financeira`,
        t`Marketing Digital`,
        t`Liderança`,
        t`Planejamento Estratégico`,
      ],
    },
    {
      institution: t`Faculdade Z`,
      typeStudy: t`Tecnólogo`,
      areaStudy: t`Design Gráfico`,
      score: t`95`,
      dateRange: t`2019-2021`,
      website: "https://faculdadez.edu",
      summary: t`Foco em identidade visual e UX/UI.`,
      icon: "college",
      technologies: [
        t`Adobe Photoshop`,
        t`Illustrator`,
        t`Figma`,
        t`UI/UX Design`,
        t`Tipografia`,
        t`Branding`,
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t`Education`} - {t`Reactive Resume`}
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
              {t`Education`}
            </motion.h1>
            <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
              <Plus weight="bold" />
              <span>{t`Add Education`}</span>
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
                {data.map((education) => (
                  <motion.div
                    key={education.institution}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
                        {getIcon(education.icon)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{education.institution}</h3>
                        <p className="text-sm text-gray-500">{education.areaStudy}</p>
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
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{education.typeStudy}</span>
                        <span>•</span>
                        <span>{education.dateRange}</span>
                      </div>
                      <p className="text-sm text-gray-600">{education.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {education.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-700">
                            {t`Score`}: {education.score}
                          </span>
                        </div>
                        <a
                          href={education.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          {t`Visit Website`}
                        </a>
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
