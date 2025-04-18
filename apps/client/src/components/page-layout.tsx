import { ScrollArea, Tabs, TabsContent } from "@reactive-resume/ui";
import { useState } from "react";

import { LayoutSwitcher } from "@career-sync/client/components/layout-switcher";

type Layout = "grid" | "list";

type PageLayoutProps = {
  title: string;
  gridView: React.ReactNode;
  listView: React.ReactNode;
};

export const PageLayout = ({ title, gridView, listView }: PageLayoutProps) => {
  const [layout, setLayout] = useState<Layout>("grid");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <LayoutSwitcher value={layout} onChange={setLayout} />
      </div>

      <ScrollArea
        allowOverflow
        className="h-[calc(100vh-140px)] overflow-visible lg:h-[calc(100vh-88px)]"
      >
        <Tabs value={layout}>
          <TabsContent value="grid">{gridView}</TabsContent>
          <TabsContent value="list">{listView}</TabsContent>
        </Tabs>
      </ScrollArea>
    </div>
  );
};
