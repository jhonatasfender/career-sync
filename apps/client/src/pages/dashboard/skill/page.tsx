import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { t } from "@lingui/macro";
import { Button, ScrollArea } from "@reactive-resume/ui";
import { SectionBase } from "../../builder/sidebars/left/sections/shared/section-base";
import { Plus } from "@phosphor-icons/react";
import { useDialog } from "@/client/stores/dialog";

export const SkillsPage = () => {
  const { open } = useDialog("skills");

  const handleCreate = () => {
    open("create", { id: "skills" });
  };
  return (
    <>
      <Helmet>
        <title>
          {t`Skills`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <motion.div
        className="max-w-3xl space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight"
        >
          {t`Skills`}
        </motion.h1>

        <ScrollArea hideScrollbar className="h-[calc(100vh-140px)] lg:h-[calc(100vh-88px)]">
          <motion.div
            className="max-w-lg rounded-lg bg-background p-6 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <footer className="flex items-center justify-start">
              <Button
                variant="outline"
                className="ml-auto gap-x-2 text-xs lg:text-sm"
                onClick={handleCreate}
              >
                <Plus />
                <span>
                  {t({
                    message: "Add a new item",
                    context: "For example, add a new work experience, or add a new profile.",
                  })}
                </span>
              </Button>
            </footer>
          </motion.div>
        </ScrollArea>
      </motion.div>
    </>
  );
};
