import { t } from "@lingui/macro";
import { Globe, PencilSimple, Plus, Trash } from "@phosphor-icons/react";
import { Button, ScrollArea } from "@reactive-resume/ui";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { useDialog } from "@/client/stores/dialog";

type Reference = {
  name: string;
  description: string;
  website: string;
  summary: string;
  avatar: string;
};

export const ReferencesPage = () => {
  const { open } = useDialog("references");

  const handleCreate = () => {
    open("create", { id: "references" });
  };

  const handleEdit = (reference: Reference) => {
    open("update", { id: "references", item: reference });
  };

  const handleDelete = (reference: Reference) => {
    open("delete", { id: "references", item: reference });
  };

  const data: Reference[] = [
    {
      name: t`Design Patterns: Elements of Reusable Object-Oriented Software`,
      description: t`Livro fundamental sobre padrões de projeto em desenvolvimento de software.`,
      website: "https://www.pearson.com",
      summary: t`Apresenta soluções comuns para problemas recorrentes na engenharia de software.`,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gamma&backgroundColor=b6e3f4",
    },
    {
      name: t`MDN Web Docs`,
      description: t`Documentação oficial para tecnologias web, incluindo HTML, CSS e JavaScript.`,
      website: "https://developer.mozilla.org",
      summary: t`Fonte essencial para desenvolvedores web de todos os níveis, com tutoriais e guias detalhados.`,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Delta&backgroundColor=c0aede",
    },
    {
      name: t`The Pragmatic Programmer`,
      description: t`Livro clássico sobre boas práticas e mentalidade de desenvolvimento de software.`,
      website: "https://pragprog.com",
      summary: t`Explora técnicas e princípios para se tornar um programador mais eficiente e adaptável.`,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Epsilon&backgroundColor=d1d4f9",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t`References`} - {t`Reactive Resume`}
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
              {t`References`}
            </motion.h1>
            <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
              <Plus weight="bold" />
              <span>{t`Add Reference`}</span>
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
                {data.map((reference) => (
                  <motion.div
                    key={reference.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
                        <img
                          src={reference.avatar}
                          alt={reference.name}
                          className="size-12 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{reference.name}</h3>
                        <p className="text-sm text-gray-500">{reference.description}</p>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                          className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
                          title={t`Edit Reference`}
                          onClick={() => {
                            handleEdit(reference);
                          }}
                        >
                          <PencilSimple className="size-4" weight="duotone" />
                        </button>
                        <button
                          className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                          title={t`Delete Reference`}
                          onClick={() => {
                            handleDelete(reference);
                          }}
                        >
                          <Trash className="size-4" weight="duotone" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 space-y-4">
                      <p className="text-sm text-gray-600">{reference.summary}</p>
                      {reference.website && (
                        <a
                          href={reference.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-1 text-primary hover:bg-secondary/70"
                        >
                          <Globe className="size-3.5" weight="duotone" />
                          <span className="whitespace-nowrap">{t`Website`}</span>
                        </a>
                      )}
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
