/* apps/client/src/pages/SummaryPage.tsx */

import { t } from "@lingui/core/macro";
import { Button, ScrollArea } from "@reactive-resume/ui";
import { RichInput } from "@reactive-resume/ui";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { useSummary } from "@career-sync/client/hooks/use-summary";
import { useResumeStore } from "@career-sync/client/stores/resume";

export const SummaryPage = () => {
  const { isLoading, isError, error, exists, save, patch } = useSummary();
  const content = useResumeStore((s) => s.resume.data.sections.summary.content);
  const setValue = useResumeStore((s) => s.setValue);

  const handleSave = () => {
    if (exists) patch.mutate(content);
    else save.mutate(content);
  };

  const handleClear = () => {
    setValue("sections.summary.content", "");
  };

  if (isLoading) return <p>{t`Carregando resumo …`}</p>;

  if (isError) {
    return (
      <p>
        {t`Não foi possível carregar o resumo.`}
        {error && <span className="block text-xs opacity-70">{error.message}</span>}
      </p>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {t`Summary`} – {t`Reactive Resume`}
        </title>
      </Helmet>

      <motion.div
        className="max-w-3xl space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl font-bold tracking-tight">{t`Summary`}</h1>

        <ScrollArea hideScrollbar className="h-[calc(100vh-140px)] lg:h-[calc(100vh-88px)]">
          <motion.div
            className="rounded-lg bg-background p-6 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <RichInput
              content={content}
              footer={(_editor) => (
                <div className="flex justify-end gap-3 py-3">
                  <Button variant="primary" onClick={handleSave}>
                    {t`Save`}
                  </Button>
                  <Button variant="secondary" onClick={handleClear}>
                    {t`Clear`}
                  </Button>
                </div>
              )}
              onChange={(val) => {
                setValue("sections.summary.content", val);
              }}
            />
          </motion.div>
        </ScrollArea>
      </motion.div>
    </>
  );
};
