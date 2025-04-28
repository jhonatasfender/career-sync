/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
import { t } from "@lingui/macro";
import { Button, ScrollArea } from "@reactive-resume/ui";
import type { AxiosError } from "axios";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { useBasics } from "@career-sync/client/hooks/use-basics";
import { useResumeStore } from "@career-sync/client/stores/resume";

import { BasicsSection } from "../../builder/sidebars/left/sections/basics";

export const BasicPage = () => {
  const { isLoading, isError, error, exists, create, update } = useBasics();
  const basics = useResumeStore((s) => s.resume.data.basics);

  const handleSave = () => {
    if (exists) update.mutate(basics);
    else create.mutate(basics);
  };

  if (isLoading) return <p>{t`Carregando dados básicos …`}</p>;

  if (isError && (error as AxiosError).response?.status !== 404) {
    return (
      <p>
        {t`Não foi possível carregar os dados básicos.`}
        {error && <span className="block text-xs opacity-70">{error.message}</span>}
      </p>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {t`Basic Information`} – {t`Reactive Resume`}
        </title>
      </Helmet>

      <motion.div className="max-w-3xl space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <header className="flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight">{t`Basic Information`}</h1>

          <Button variant="primary" size="md" onClick={handleSave}>
            {t`Save Changes`}
          </Button>
        </header>

        <ScrollArea hideScrollbar className="h-[calc(100vh-140px)] lg:h-[calc(100vh-88px)]">
          <motion.div
            className="max-w-lg rounded-lg bg-background p-6 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <BasicsSection />
          </motion.div>
        </ScrollArea>
      </motion.div>
    </>
  );
};
