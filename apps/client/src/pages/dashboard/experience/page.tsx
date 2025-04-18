import { t } from "@lingui/macro";
import { Plus } from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { useDialog } from "@/client/stores/dialog";

type Experience = {
  company: string;
  position: string;
  dateRange: string; // Mudar para data
  location: string;
};

export const ExperiencePage = () => {
  const { open } = useDialog("experience");
  const handleCreate = () => {
    open("create", { id: "experience" });
  };

  const data: Experience[] = [
    {
      company: t`Tech Solutions Inc.`,
      position: t`Desenvolvedor Front-end`,
      dateRange: t`03/2022 - Presente`,
      location: t`São Paulo, SP`,
    },
    {
      company: t`Digital Innovations`,
      position: t`UI/UX Designer`,
      dateRange: t`01/2020 - 02/2022`,
      location: t`Remote`,
    },
    {
      company: t`Software New`,
      position: t`Back-end & Designer`,
      dateRange: t`01/2024 - 02/2025`,
      location: t`Hibrido`,
    },
  ];

  const columnHelper = createColumnHelper<Experience>();
  const columns = [
    columnHelper.accessor("company", {
      header: t`Company`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("position", {
      header: t`Position`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("dateRange", {
      header: t`Date or Date Range`,
      cell: (info) => info.getValue(),
      // sortingFn: (a, b) => {
      //  return customDateSort(a.original.dateRange, b.original.dateRange);
    }),

    columnHelper.accessor("location", {
      header: t`Location`,
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
            className="mb-8 text-left text-4xl font-bold tracking-tight"
          >
            {t`Experience`}
          </motion.h1>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-secondary">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="whitespace-nowrap px-4 py-3 text-left">
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
                      <td key={cell.id} className="whitespace-nowrap px-4 py-3 text-sm">
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
      </motion.div>
    </>
  );
};
