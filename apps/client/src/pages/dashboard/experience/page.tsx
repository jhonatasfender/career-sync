import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { t } from "@lingui/macro";
import { useDialog } from "@/client/stores/dialog";
import { Button, Input } from "@reactive-resume/ui";
import { Plus } from "@phosphor-icons/react";

export const ExperiencePage = () => {

 const { open } = useDialog("experience");
 const onCreate = () => {
  open("create", { id:"experience" });
};


  return (
    <>
      <Helmet>
        <title>
          {t`Experience`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <motion.div
        className="flex flex-col min-h-screen p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
         <motion.div
          className="max-w-3xl w-full space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3, }}
            whileHover={{scale: 1.1, color: "#3b82f6"}} // Testando
            whileTap={{ scale: 1.9 }} // Testando
            className="text-4xl font-bold tracking-tight text-left mb-8"
          >

            {t`Experience`}
          </motion.h1>

      <div>
        <Input />
        <Button>Buscar</Button>
      </div>
      <table>
        <tr>
          <th>
            Company
          </th>
          <th>
            Position
          </th>
          <th>Date or Date Range</th>
        </tr>
        <tr>
          <td>
            Teste
          </td>
          <td>
            Teste
          </td>
          <td>
            Teste
            </td>
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
