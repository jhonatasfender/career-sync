import { t } from "@lingui/macro";
import { List, SquaresFour } from "@phosphor-icons/react";
import { Tabs, TabsList, TabsTrigger } from "@reactive-resume/ui";

type Layout = "grid" | "list";

type LayoutSwitcherProps = {
  value: Layout;
  onChange: (value: Layout) => void;
};

export const LayoutSwitcher = ({ value, onChange }: LayoutSwitcherProps) => {
  return (
    <Tabs
      value={value}
      onValueChange={(value) => {
        onChange(value as Layout);
      }}
    >
      <TabsList>
        <TabsTrigger value="grid" className="size-8 p-0 sm:h-8 sm:w-auto sm:px-4">
          <SquaresFour />
          <span className="ml-2 hidden sm:block">{t`Grid`}</span>
        </TabsTrigger>
        <TabsTrigger value="list" className="size-8 p-0 sm:h-8 sm:w-auto sm:px-4">
          <List />
          <span className="ml-2 hidden sm:block">{t`List`}</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
