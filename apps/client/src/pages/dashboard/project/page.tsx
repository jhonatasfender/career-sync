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

type Projects = {
  name: string;
  description: string;
  dateRange: string;
  website: string;
  summary: string;
  keywords: string;
};

export const ProjectsPage = () => {
  const { open } = useDialog("projects");
  const handleCreate = () => {
    open("create", { id: "projects" });
  };

  const data: Projects[] = [
    {
      name: t`AI-Powered Chatbot`,
      description: t`Desenvolvimento de um chatbot utilizando machine learning para atendimento ao cliente.`,
      dateRange: "2023-01 - 2023-12",
      website: "https://aiprojects.com/chatbot",
      summary: t`O projeto envolve a criação de um assistente virtual com capacidade de compreensão de linguagem natural.`,
      keywords: t`AI, Chatbot, NLP, Machine Learning`,
    },
    {
      name: t`E-Commerce Analytics Dashboard`,
      description: t`Painel interativo para monitoramento de métricas de vendas e engajamento em plataformas de e-commerce.`,
      dateRange: "2022-06 - 2023-04",
      website: "https://ecomanalytics.com",
      summary: t`A plataforma permite a análise de dados em tempo real, otimizando estratégias de vendas.`,
      keywords: t`E-Commerce, Data Analytics, Dashboard, Business Intelligence`,
    },
    {
      name: t`Open-Source Task Manager`,
      description: t`Aplicação de gerenciamento de tarefas baseada em tecnologia open-source para colaboração em equipe.`,
      dateRange: "2024-02 - 2024-08",
      website: "https://opensource-tasks.com",
      summary: t`Ferramenta leve e altamente customizável para gestão de produtividade, disponível gratuitamente.`,
      keywords: t`Task Management, Open-Source, Productivity, Collaboration`,
    },
  ];

  const columnHelper = createColumnHelper<Projects>();
  const columns = [
    columnHelper.accessor("name", {
      header: t`Name`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("description", {
      header: t`Description`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("dateRange", {
      header: t`Date Range`,
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
          {t`Projects`} - {t`Reactive Resume`}
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
          {t`Projects`}
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
