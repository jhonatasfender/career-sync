import { t } from "@lingui/macro";
import { Heart, PencilSimple, Plus, Tag, Trash } from "@phosphor-icons/react";
import { Button, ScrollArea } from "@reactive-resume/ui";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { useDialog } from "@/client/stores/dialog";

type Interest = {
  name: string;
  keywords: string;
};

export const InterestsPage = () => {
  const { open } = useDialog("interests");

  const handleCreate = () => {
    open("create", { id: "interests" });
  };

  const handleEdit = (interest: Interest) => {
    open("update", { id: "interests", item: interest });
  };

  const handleDelete = (interest: Interest) => {
    open("delete", { id: "interests", item: interest });
  };

  const data: Interest[] = [
    {
      name: t`AI-Powered Recommendation System`,
      keywords: t`Machine Learning, AI, Personalization`,
    },
    {
      name: t`Blockchain-Based Voting Platform`,
      keywords: t`Blockchain, Security, Decentralization`,
    },
    {
      name: t`Real-Time Weather Forecasting App`,
      keywords: t`Meteorology, Data Analysis, IoT`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t`Interests`} - {t`Reactive Resume`}
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
              {t`Interests`}
            </motion.h1>
            <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
              <Plus weight="bold" />
              <span>{t`Add Interest`}</span>
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
                {data.map((interest) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
                        <Heart className="size-6" weight="duotone" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{interest.name}</h3>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                          className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
                          title={t`Edit Interest`}
                          onClick={() => {
                            handleEdit(interest);
                          }}
                        >
                          <PencilSimple className="size-4" weight="duotone" />
                        </button>
                        <button
                          className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                          title={t`Delete Interest`}
                          onClick={() => {
                            handleDelete(interest);
                          }}
                        >
                          <Trash className="size-4" weight="duotone" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {interest.keywords.split(", ").map((keyword) => (
                          <span
                            key={keyword}
                            className="inline-flex items-center gap-1 rounded-full bg-secondary/50 px-2 py-1 text-xs text-gray-600"
                          >
                            <Tag className="size-3" weight="duotone" />
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
