import { cn } from "@reactive-resume/utils";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router";

import { CategoryHeader } from "./category-header";
import { CategoryItems } from "./category-items";
import type { MenuCategory } from "./menu-items";
import { SidebarItem } from "./sidebar-item";

type Props = MenuCategory & {
  className?: string;
};

export const SidebarCategory = ({ name, icon, items, path, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  if (!items && path) {
    return <SidebarItem path={path} name={name} icon={icon} />;
  }

  if (!items && !path) {
    return null;
  }

  const isActive = items.some((item) => location.pathname === item.path);

  return (
    <div className={cn("space-y-1", className)}>
      <CategoryHeader
        name={name}
        icon={icon}
        isOpen={isOpen}
        isActive={isActive}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />

      <AnimatePresence initial={false} mode="sync">
        {isOpen && <CategoryItems items={items} />}
      </AnimatePresence>
    </div>
  );
};
