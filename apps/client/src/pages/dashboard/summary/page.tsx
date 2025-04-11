import { Helmet } from "react-helmet-async";
import { SummarySection } from "../../builder/sidebars/left/sections/summary";
import { t } from "@lingui/macro";
import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button, RichInput } from "@reactive-resume/ui";
import { Value } from "@radix-ui/react-select";
import Editor from "react-simple-code-editor";

export const SummaryPage = () => {
  return (
    <>
      <Helmet>
        <title>
          {t`Summary`} {t`Reative Resume`}
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
          {t`Summary`}
        </motion.h1>

        <ScrollArea className="h-[calc(100vh-140px)] lg:h-[calc(100vh-88px)]">
          <motion.div
            className="rounded-lg bg-background p-6 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <RichInput
              footer={(editor) => (
                <div className="flex justify-end gap-3 py-3">
                  <Button variant={"secondary"}>Salvar</Button>
                  <Button>Limpar</Button>
                </div>
              )}
              onChange={(value) => {
                // setValue("sections.summary.content", value);
              }}
            />
          </motion.div>
        </ScrollArea>
      </motion.div>
    </>
  );
};
