import { useDialog } from "@career-sync/client/stores/dialog";
import { t } from "@lingui/macro";
import { Calendar, Certificate, Globe, PencilSimple, Plus, Trash } from "@phosphor-icons/react";
import { Button, ScrollArea } from "@reactive-resume/ui";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

type Certifications = {
  name: string;
  issuer: string;
  date: string;
  website: string;
  summary: string;
};

export const CertificationsPage = () => {
  const { open } = useDialog("certifications");

  const handleCreate = () => {
    open("create", { id: "certifications" });
  };

  const handleEdit = (certification: Certifications) => {
    open("update", { id: "certifications", item: certification });
  };

  const handleDelete = (certification: Certifications) => {
    open("delete", { id: "certifications", item: certification });
  };

  const data: Certifications[] = [
    {
      name: t`AWS Certified Solutions Architect`,
      issuer: t`Amazon Web Services`,
      date: "2023-11-10",
      website: "https://aws.amazon.com/certification/",
      summary: t`Certificação reconhecida globalmente para arquitetos de soluções que trabalham na AWS.`,
    },
    {
      name: t`Google Professional Data Engineer`,
      issuer: t`Google Cloud`,
      date: "2024-06-20",
      website: "https://cloud.google.com/certification/data-engineer",
      summary: t`Certificação voltada para engenheiros de dados especializados na infraestrutura da Google Cloud.`,
    },
    {
      name: t`Microsoft Certified: Azure Fundamentals`,
      issuer: t`Microsoft`,
      date: "2022-09-15",
      website: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
      summary: t`Certificação introdutória para profissionais que desejam aprender conceitos fundamentais do Azure.`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t`Certifications`} - {t`Reactive Resume`}
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
              {t`Certifications`}
            </motion.h1>
            <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
              <Plus weight="bold" />
              <span>{t`Add Certification`}</span>
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
                {data.map((certification) => (
                  <motion.div
                    key={certification.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
                        <Certificate className="size-6" weight="duotone" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{certification.name}</h3>
                        <p className="text-sm text-gray-500">{certification.issuer}</p>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                          className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
                          title={t`Edit Certification`}
                          onClick={() => {
                            handleEdit(certification);
                          }}
                        >
                          <PencilSimple className="size-4" weight="duotone" />
                        </button>
                        <button
                          className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                          title={t`Delete Certification`}
                          onClick={() => {
                            handleDelete(certification);
                          }}
                        >
                          <Trash className="size-4" weight="duotone" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 space-y-4">
                      <p className="text-sm text-gray-600">{certification.summary}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="size-4" weight="duotone" />
                          <span>{certification.date}</span>
                        </div>
                        {certification.website && (
                          <a
                            href={certification.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-primary hover:underline"
                          >
                            <Globe className="size-4" weight="duotone" />
                            <span>{t`Website`}</span>
                          </a>
                        )}
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
