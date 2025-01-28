import { Button, KeyboardShortcut } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router";

import { ActiveIndicator } from "./active-indicator";
import type { MenuItem } from "./menu-items";

type Props = MenuItem & {
  className?: string;
  shortcut?: string;
  onClick?: () => void;
};

export const SidebarItem = ({ path, name, icon, shortcut, onClick, className }: Props) => {
  const isActive = useLocation().pathname === path;

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -8 }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className={cn("w-full", className)}
    >
      <Button
        asChild
        size="lg"
        variant="ghost"
        className={cn(
          "h-auto w-full justify-start px-4 py-3 transition-colors duration-200",
          isActive && "pointer-events-none bg-secondary/50 text-secondary-foreground",
        )}
        onClick={onClick}
      >
        <Link to={path} className="w-full">
          <div className="flex w-full items-center">
            <div className="mr-3 transition-transform duration-200">{icon}</div>
            <span className="flex-1">{name}</span>
            {!isActive && shortcut && (
              <KeyboardShortcut className="ml-auto transition-opacity duration-200">
                {shortcut}
              </KeyboardShortcut>
            )}
            {isActive && <ActiveIndicator className="ml-auto" />}
          </div>
        </Link>
      </Button>
    </motion.div>
  );
};
