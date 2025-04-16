/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable lingui/no-unlocalized-strings */
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
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { useDialog } from "@/client/stores/dialog";
import { useProfileStore } from "@/client/stores/profile-store";

type ProfileForTable = {
  network: string;
  username: string;
  icon: string;
  id: string;
  url: { href: string; label?: string };
};

export const ProfilePage = () => {
  const { open } = useDialog("profiles");

  const profiles = useProfileStore((state) => state.profiles);
  const loadProfiles = useProfileStore((state) => state.loadProfiles);

  useEffect(() => {
    void loadProfiles();
  }, [loadProfiles]);

  const handleCreate = () => {
    open("create", { id: "profiles" });
  };

  const handleEdit = (profile: ProfileForTable) => {
    open("update", {
      id: "profiles",
      item: {
        id: profile.id,
        network: profile.network,
        username: profile.username,
        url: profile.url.href,
        icon: profile.icon,
      },
    });
  };

  const data: ProfileForTable[] = profiles.map((p) => ({
    ...p,
    icon: p.icon || "",
    url: { href: p.url, label: p.url },
  }));

  const columnHelper = createColumnHelper<ProfileForTable>();
  const columns = [
    columnHelper.accessor("network", {
      header: () => t`Network`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("username", {
      header: t`Username`,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("url.href", {
      header: t`Website`,
      cell: (info) => {
        const href = info.getValue();
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {href}
          </a>
        );
      },
    }),
    columnHelper.accessor("icon", {
      header: t`Icon`,
      cell: (info) => (
        <img
          src={`/icons/${info.getValue()}.svg`}
          alt={info.row.original.network}
          className="size-6"
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
          className="text-4xl font-bold tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
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
                    <tr
                      key={row.id}
                      className="cursor-pointer transition-colors hover:bg-secondary/50"
                      onClick={() => {
                        handleEdit(row.original);
                      }}
                    >
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
              className="ml-auto mt-4 gap-x-2 text-xs lg:text-sm"
              onClick={handleCreate}
            >
              <Plus />
              <span>{t`Add a new item`}</span>
            </Button>
          </motion.div>
        </ScrollArea>
      </motion.div>
    </>
  );
};
