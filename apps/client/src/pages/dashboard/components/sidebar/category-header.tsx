import { CaretRight } from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  name: string;
  icon: ReactNode;
  isOpen: boolean;
  isActive: boolean;
  onClick: () => void;
};

export const CategoryHeader = ({ name, icon, isOpen, isActive, onClick }: Props) => (
  <Button
    size="lg"
    variant="ghost"
    className={cn(
      "w-full justify-between px-4 py-2",
      isActive && "bg-secondary/30 text-secondary-foreground",
    )}
    onClick={onClick}
  >
    <div className="flex items-center">
      <div className="mr-3">{icon}</div>
      <span>{name}</span>
    </div>
    <motion.div
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <CaretRight className="size-4" />
    </motion.div>
  </Button>
); 