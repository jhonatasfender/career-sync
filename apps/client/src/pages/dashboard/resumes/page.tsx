import { t } from "@lingui/core/macro";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { PageLayout } from "@career-sync/client/components/page-layout";

import { GridView } from "./layouts/grid";
import { ListView } from "./layouts/list";

export const ResumesPage = () => {
  return (
    <>
      <Helmet>
        <title>
          {t`Resumes`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <PageLayout title={t`Resumes`} gridView={<GridView />} listView={<ListView />} />
      </motion.div>
    </>
  );
};
