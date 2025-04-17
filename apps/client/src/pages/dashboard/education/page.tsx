import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { t } from "@lingui/macro";
import { Button, ScrollArea } from "@reactive-resume/ui";
import { SectionBase } from "../../builder/sidebars/left/sections/shared/section-base";
import { useDialog } from "@/client/stores/dialog";
import { Plus } from "@phosphor-icons/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Education = {
  institution: string;
  typeStudy: string;
  areaStudy: string;
  score: string;
  dateRange: string;
  website: string;
  summary: string;
};
const data: Education[] = [
  {
    institution: "Universidade X",
    typeStudy: "Bacharelado",
    areaStudy: "Engenharia Civil",
    score: "92",
    dateRange: "2018-2022",
    website: "https://universidadex.com",
    summary: "Curso focado em estruturas e planejamento urbano.",
  },
  {
    institution: "Instituto Y",
    typeStudy: "Mestrado",
    areaStudy: "Administração",
    score: "88",
    dateRange: "2020-2022",
    website: "https://institutoy.org",
    summary: "Gestão estratégica e inovação organizacional.",
  },
  {
    institution: "Faculdade Z",
    typeStudy: "Tecnólogo",
    areaStudy: "Design Gráfico",
    score: "95",
    dateRange: "2019-2021",
    website: "https://faculdadez.edu",
    summary: "Foco em identidade visual e UX/UI.",
  },
];

export const EducationPage = () => {
  const { open } = useDialog("education");
  const handleCreate = () => {
    open("create", { id: "education" });
  };

  const columnHelper = createColumnHelper<Education>();
  const columns = [
    columnHelper.accessor("institution", {
      header: "Institution",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("typeStudy", {
      header: "TypeStudy",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("areaStudy", {
      header: "AreaStudy",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("score", {
      header: "Score",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("dateRange", {
      header: "DateRange",
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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <Helmet>
        <title>
          {t`Education`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <motion.div
        className="w-full space-y-6 px-4"
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
          {t`Education`}
        </motion.h1>

        <motion.div
          className="w-full overflow-hidden rounded-lg bg-background shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="overflow-w-auto">
            <table className="min-x-full">
              <thead className="bg-secondary">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="whitespace.nowrap px-4 py-3 text-left">
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
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
