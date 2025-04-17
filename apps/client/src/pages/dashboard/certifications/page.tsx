import { t } from "@lingui/macro";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button, ScrollArea } from "@reactive-resume/ui";
import { SectionBase } from "../../builder/sidebars/left/sections/shared/section-base";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useDialog } from "@/client/stores/dialog";
import { Plus } from "@phosphor-icons/react";

type Certifications = {
  name: string;
  issuer: string;
  date: string;
  website: string;
  summary: string;
};
const data: Certifications[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023-11-10",
    website: "https://aws.amazon.com/certification/",
    summary:
      "Certificação reconhecida globalmente para arquitetos de soluções que trabalham na AWS.",
  },
  {
    name: "Google Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2024-06-20",
    website: "https://cloud.google.com/certification/data-engineer",
    summary:
      "Certificação voltada para engenheiros de dados especializados na infraestrutura da Google Cloud.",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2022-09-15",
    website: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    summary:
      "Certificação introdutória para profissionais que desejam aprender conceitos fundamentais do Azure.",
  },
];
const columnHelper = createColumnHelper<Certifications>();
const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("issuer", {
    header: "Issuer",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("website", {
    header: "Website",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("summary", {
    header: "Summary",
    cell: (info) => info.getValue(),
  }),
];

export const CertificationsPage = () => {
  const { open } = useDialog("certifications");
  const handleCreate = () => {
    open("create", { id: "certifications" });
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <Helmet>
        <title>
          {t`Certifications`} - {t`Reactive Resume`}
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
          {t`Certifications`}
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
            <Button
              variant="outline"
              className="ml-auto gap-x-2 text-xs lg:text-sm"
              onClick={handleCreate}
            >
              <Plus />
              <span>
                {t({
                  message: "Add a new item",
                })}
              </span>
            </Button>
          </motion.div>
        </ScrollArea>
      </motion.div>
    </>
  );
};
