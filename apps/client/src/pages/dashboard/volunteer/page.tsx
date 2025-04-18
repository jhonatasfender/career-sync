import { t } from "@lingui/macro";
import {
  Calendar,
  Globe,
  Handshake,
  MapPin,
  PencilSimple,
  Plus,
  Trash,
} from "@phosphor-icons/react";
import { Button, ScrollArea } from "@reactive-resume/ui";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { useDialog } from "@/client/stores/dialog";

type Volunteer = {
  organization: string;
  position: string;
  dateRange: string;
  location: string;
  website: string;
  summary: string;
};

export const VolunteerPage = () => {
  const { open } = useDialog("volunteer");

  const handleCreate = () => {
    open("create", { id: "volunteer" });
  };

  const handleEdit = (volunteer: Volunteer) => {
    open("update", { id: "volunteer", item: volunteer });
  };

  const handleDelete = (volunteer: Volunteer) => {
    open("delete", { id: "volunteer", item: volunteer });
  };

  const data: Volunteer[] = [
    {
      organization: t`Environmental Action Group`,
      position: t`Project Coordinator`,
      dateRange: t`2023-05 - 2024-02`,
      location: t`São Paulo, Brasil`,
      website: "https://enviroaction.org",
      summary: t`Liderança na implementação de iniciativas sustentáveis e programas de conscientização ambiental.`,
    },
    {
      organization: t`Tech Education for All`,
      position: t`Volunteer Instructor`,
      dateRange: t`2022-09 - 2023-12`,
      location: t`Rio de Janeiro, Brasil`,
      website: "https://techedforall.org",
      summary: t`Ministração de cursos gratuitos de programação para jovens em situação de vulnerabilidade social.`,
    },
    {
      organization: t`Animal Welfare Foundation`,
      position: t`Fundraising Volunteer`,
      dateRange: t`2024-01 - Presente`,
      location: t`Brasília, Brasil`,
      website: "https://animalwelfarefoundation.org",
      summary: t`Organização de campanhas para arrecadação de fundos visando o resgate e cuidado de animais em risco.`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t`Volunteer`} - {t`Reactive Resume`}
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
              {t`Volunteer`}
            </motion.h1>
            <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
              <Plus weight="bold" />
              <span>{t`Add Volunteer`}</span>
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
                {data.map((volunteer) => (
                  <motion.div
                    key={volunteer.organization}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
                        <Handshake className="size-6" weight="duotone" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{volunteer.organization}</h3>
                        <p className="text-sm text-gray-500">{volunteer.position}</p>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                          className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
                          title={t`Edit Volunteer`}
                          onClick={() => {
                            handleEdit(volunteer);
                          }}
                        >
                          <PencilSimple className="size-4" weight="duotone" />
                        </button>
                        <button
                          className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                          title={t`Delete Volunteer`}
                          onClick={() => {
                            handleDelete(volunteer);
                          }}
                        >
                          <Trash className="size-4" weight="duotone" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 space-y-4">
                      <p className="text-sm text-gray-600">{volunteer.summary}</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-1">
                          <Calendar className="size-3.5" weight="duotone" />
                          <span className="whitespace-nowrap">{volunteer.dateRange}</span>
                        </div>
                        <div className="flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-1">
                          <MapPin className="size-3.5" weight="duotone" />
                          <span className="whitespace-nowrap">{volunteer.location}</span>
                        </div>
                        {volunteer.website && (
                          <a
                            href={volunteer.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-1 text-primary hover:bg-secondary/70"
                          >
                            <Globe className="size-3.5" weight="duotone" />
                            <span className="whitespace-nowrap">{t`Website`}</span>
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
