import { t } from "@lingui/macro";
import { Calendar, FileText, Globe, PencilSimple, Plus, Trash } from "@phosphor-icons/react";
import { Button, ScrollArea } from "@reactive-resume/ui";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { useDialog } from "@/client/stores/dialog";

type Publication = {
  name: string;
  publisher: string;
  date: string;
  website: string;
  summary: string;
};

export const PublicationsPage = () => {
  const { open } = useDialog("publications");

  const handleCreate = () => {
    open("create", { id: "publications" });
  };

  const handleEdit = (publication: Publication) => {
    open("update", { id: "publications", item: publication });
  };

  const handleDelete = (publication: Publication) => {
    open("delete", { id: "publications", item: publication });
  };

  const data: Publication[] = [
    {
      name: t`Innovator of the Year`,
      publisher: t`Tech Excellence Awards`,
      date: "2023-10-05",
      website: "https://techexcellenceawards.com",
      summary: t`Reconhecimento por contribuições excepcionais na área de inovação tecnológica.`,
    },
    {
      name: t`Best Open-Source Contribution`,
      publisher: t`Global Dev Community`,
      date: "2022-08-15",
      website: "https://globaldevcommunity.org",
      summary: t`Prêmio concedido a desenvolvedores por impactos significativos em projetos open-source.`,
    },
    {
      name: t`Leadership in AI Research`,
      publisher: t`International AI Symposium`,
      date: "2024-03-12",
      website: "https://aisymposium.com",
      summary: t`Honraria por avanços significativos na pesquisa e desenvolvimento de inteligência artificial.`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t`Publications`} - {t`Reactive Resume`}
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
              {t`Publications`}
            </motion.h1>
            <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
              <Plus weight="bold" />
              <span>{t`Add Publication`}</span>
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
                {data.map((publication) => (
                  <motion.div
                    key={publication.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
                        <FileText className="size-6" weight="duotone" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{publication.name}</h3>
                        <p className="text-sm text-gray-500">{publication.publisher}</p>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                          className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
                          title={t`Edit Publication`}
                          onClick={() => {
                            handleEdit(publication);
                          }}
                        >
                          <PencilSimple className="size-4" weight="duotone" />
                        </button>
                        <button
                          className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                          title={t`Delete Publication`}
                          onClick={() => {
                            handleDelete(publication);
                          }}
                        >
                          <Trash className="size-4" weight="duotone" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 space-y-4">
                      <p className="text-sm text-gray-600">{publication.summary}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="size-4" weight="duotone" />
                          <span>{publication.date}</span>
                        </div>
                        {publication.website && (
                          <a
                            href={publication.website}
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
