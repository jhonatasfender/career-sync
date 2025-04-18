import { t } from "@lingui/macro";
import { Plus } from "@phosphor-icons/react";
import { Button, ScrollArea } from "@reactive-resume/ui";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
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
  const { open } = useDialog("publications");
  const handleCreate = () => {
    open("create", { id: "publications" });
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

  const columnHelper = createColumnHelper<Volunteer>();
  const columns = [
    columnHelper.accessor("organization", {
      header: t`Organization`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("position", {
      header: t`Position`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("dateRange", {
      header: t`Date Range`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("location", {
      header: t`Location`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("website", {
      header: t`Website`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("summary", {
      header: t`Summary`,
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <Helmet>
        <title>
          {t`Volunteer`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <motion.div
        className="w-full space-y-4"
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
          {t`Volunteer`}
        </motion.h1>

        <ScrollArea hideScrollbar className="h-[calc(100vh-140px)] lg:h-[calc(100vh-88px)]">
          <motion.div
            className="w-full rounded-lg bg-background p-6 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-secondary">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th key={header.id} className="whitespace-normal px-4 py-3 text-left">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y divide-border">
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="transition-colors hover:bg-secondary/50">
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="min-w-[100px] whitespace-normal break-words px-4 py-3 text-sm"
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-start gap-3 py-3">
              <Button
                variant="outline"
                className="gap-x-2 text-xs lg:text-sm"
                onClick={handleCreate}
              >
                <Plus />
                <span>
                  {t({
                    message: "Add a new item",
                  })}
                </span>
              </Button>
            </div>
          </motion.div>
        </ScrollArea>
      </motion.div>
    </>
  );
};
