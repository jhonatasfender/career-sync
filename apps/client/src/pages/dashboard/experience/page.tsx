/* eslint-disable lingui/no-unlocalized-strings */
import { t } from "@lingui/macro";
import { Plus } from "@phosphor-icons/react";
import { Button, Input } from "@reactive-resume/ui";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { useDialog } from "@/client/stores/dialog";

export const ExperiencePage = () => {
  const { open } = useDialog("experience");
  const onCreate = () => {
    open("create", { id: "experience" });
  };

  return (
    <>
      <Helmet>
        <title>
          {t`Experience`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <motion.div
        className="flex min-h-screen flex-col p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <motion.div
          className="w-full max-w-3xl space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ scale: 1.1, color: "#3b82f6" }} // Testando
            whileTap={{ scale: 1.9 }} // Testando
            className="mb-8 text-left text-4xl font-bold tracking-tight"
          >
            {t`Experience`}
          </motion.h1>

          <div>
            <Input />
            <Button>Buscar</Button>
          </div>
          <table>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Date or Date Range</th>
            </tr>
            <tr>
              <td>Teste</td>
              <td>Teste</td>
              <td>Teste</td>
            </tr>
          </table>
          <Button
            variant="outline"
            className="ml-auto gap-x-2 text-xs lg:text-sm"
            onClick={onCreate}
          >
            <Plus />
            <span>
              {t({
                message: "Add a new item",
                context: "For example, add a new work experience, or add a new profile.",
              })}
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </>
  );
};
