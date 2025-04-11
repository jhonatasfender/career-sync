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
import { ProfilesDialog } from "../../builder/sidebars/left/dialogs/profiles";

type Profile = {
  network: string;
  username: string;
  website: string;
  icon: string;
};

export const ProfilePage = () => {
  const { open } = useDialog("profiles");

  const handleCreate = () => {
    open("create");
  };
  const data: Profile[] = [
    {
      network: "github-net",
      username: "john",
      website: "https://github.com/john",
      icon: "github-icon",
    },
    {
      network: "linkedin-net",
      username: "mary",
      website: "https://linkedin.com/mary",
      icon: "linkedin-icon",
    },
    {
      network: "twitter-net",
      username: "john_doe",
      website: "https://twitter.com/john_doe",
      icon: "twitter-icon",
    },
    {
      network: "instagram-net",
      username: "luna_art",
      website: "https://instagram.com/luna_art",
      icon: "instagram-icon",
    },
    {
      network: "facebook-net",
      username: "alex_tech",
      website: "https://facebook.com/alex_tech",
      icon: "facebook-icon",
    },
  ];

  const columnHelper = createColumnHelper<Profile>();
  const columns = [
    columnHelper.accessor("network", {
      header: () => t`Network`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("username", {
      header: "UserName",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("website", {
      header: "website",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("icon", {
      header: "Icon",
      cell: (info) => (
        <img
          src={`/icons/${info.getValue()}.svg`}
          alt={info.row.original.network}
          className="h-6 w-6"
        />
      ),
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
          {t`Profiles`} - {t`Reactive Resume`}
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
          {t`Profiles`}
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
                        <td key={cell.id} className="whitespace-nowrap px-4 py-3 text-sm">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end gap-3 py-3">
              <Button>Create</Button>
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
            <ProfilesDialog />
          </motion.div>
        </ScrollArea>
      </motion.div>
    </>
  );
};
