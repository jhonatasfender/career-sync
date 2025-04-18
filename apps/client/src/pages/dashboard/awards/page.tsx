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

type Awards = {
  title: string;
  awarder: string;
  date: string;
  website: string;
  summary: string;
};

export const AwardsPage = () => {
  const { open } = useDialog("awards");
  const handleCreate = () => {
    open("create", { id: "awards" });
  };

  const data: Awards[] = [
    {
      title: t`Best Innovator Award`,
      awarder: t`Tech Leaders Association`,
      date: "2023-09-15",
      website: "https://techleadersawards.com",
      summary: t`Reconhecimento por contribuições inovadoras no setor de tecnologia.`,
    },
    {
      title: t`Outstanding Researcher`,
      awarder: t`Global Science Foundation`,
      date: "2022-06-10",
      website: "https://globalsciencefoundation.org",
      summary: t`Prêmio concedido por pesquisas impactantes em inteligência artificial.`,
    },
    {
      title: t`Community Impact Award`,
      awarder: t`Social Good Network`,
      date: "2024-04-20",
      website: "https://socialgoodnetwork.org",
      summary: t`Honraria por projetos que geraram mudanças significativas na comunidade.`,
    },
  ];

  const columnHelper = createColumnHelper<Awards>();
  const columns = [
    columnHelper.accessor("title", {
      header: t`Title`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("awarder", {
      header: t`Awarder`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("date", {
      header: t`Date`,
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
          {t`Awards`} - {t`Reactive Resume`}
        </title>
      </Helmet>
      <motion.div
        className="max-w-3xl space-y-4"
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
          {t`Awards`}
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
