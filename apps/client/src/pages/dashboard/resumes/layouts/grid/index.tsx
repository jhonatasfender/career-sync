import type { ResumeDto } from "@reactive-resume/dto";
import { sortByDate } from "@reactive-resume/utils";
import { AnimatePresence, motion } from "framer-motion";

import { useResumes } from "@career-sync/client/services/resume";

import { BaseCard } from "./components/base-card";
import { CreateResumeCard } from "./components/create-card";
import { ImportResumeCard } from "./components/import-card";
import { ResumeCard } from "./components/resume-card";

export const GridView = () => {
  const { resumes, loading } = useResumes();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
        <CreateResumeCard />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
      >
        <ImportResumeCard />
      </motion.div>

      {loading &&
        Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="duration-300 animate-in fade-in"
            style={{ animationFillMode: "backwards", animationDelay: `${i * 300}ms` }}
          >
            <BaseCard />
          </div>
        ))}

      {resumes && (
        <AnimatePresence>
          {resumes
            .sort((a: ResumeDto, b: ResumeDto) => sortByDate(a, b, "updatedAt"))
            .map((resume: ResumeDto, index: number) => (
              <motion.div
                key={resume.id}
                layout
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, transition: { delay: (index + 2) * 0.1 } }}
                exit={{ opacity: 0, filter: "blur(8px)", transition: { duration: 0.5 } }}
              >
                <ResumeCard resume={resume} />
              </motion.div>
            ))}
        </AnimatePresence>
      )}
    </div>
  );
};
