import { useDialog } from "@/client/stores/dialog";
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

type Awards = {
  name: string;
  publisher: string;
  date: string;
  website: string;
  summary: string;
};

const data: Awards[] = [
  {
    name: "Innovator of the Year",
    publisher: "Tech Excellence Awards",
    date: "2023-10-05",
    website: "https://techexcellenceawards.com",
    summary: "Reconhecimento por contribuições excepcionais na área de inovação tecnológica.",
  },
  {
    name: "Best Open-Source Contribution",
    publisher: "Global Dev Community",
    date: "2022-08-15",
    website: "https://globaldevcommunity.org",
    summary:
      "Prêmio concedido a desenvolvedores por impactos significativos em projetos open-source.",
  },
  {
    name: "Leadership in AI Research",
    publisher: "International AI Symposium",
    date: "2024-03-12",
    website: "https://aisymposium.com",
    summary:
      "Honraria por avanços significativos na pesquisa e desenvolvimento de inteligência artificial.",
  },
];

export const PublicationsPage = () => {
  const { open } = useDialog("publications");
  const handleCreate = () => {
    open("create", { id: "publications" });
  };

  const columnHelper = createColumnHelper<Awards>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("publisher", {
      header: "Publisher",
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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <Helmet>
        <title>
          {t`Publication`} - {t`Reactive Resume`}
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
          {t`Publication`}
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
