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

type SkillsPage = {
  name: string;
  description: string;
  level: number;
  keywords: string;
};

export const SkillsPage = () => {
  const { open } = useDialog("skills");

  const handleCreate = () => {
    open("create", { id: "skills" });
  };

  const data: SkillsPage[] = [
    {
      name: t`JavaScript`,
      description: t`Linguagem de programação usada para desenvolvimento web.`,
      level: 8,
      keywords: t`frontend, backend, web, programação`,
    },
    {
      name: t`Design UX/UI`,
      description: t`Criação de interfaces intuitivas e acessíveis.`,
      level: 7,
      keywords: t`design, usabilidade, prototipação, experiência do usuário`,
    },
    {
      name: t`Gestão de Projetos`,
      description: t`Planejamento e execução de projetos ágeis e tradicionais.`,
      level: 9,
      keywords: t`scrum, kanban, planejamento, execução`,
    },
  ];

  const columnHelper = createColumnHelper<SkillsPage>();
  const columns = [
    columnHelper.accessor("name", {
      header: t`Name`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("description", {
      header: t`Description`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("level", {
      header: t`Level`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("keywords", {
      header: t`Keywords`,
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
          {t`Skills`} - {t`Reactive Resume`}
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
          {t`Skills`}
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
                className="mr-auto gap-x-2 text-xs lg:text-sm"
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
