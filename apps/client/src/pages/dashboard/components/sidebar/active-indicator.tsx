import { cn } from "@reactive-resume/utils";
import { motion } from "framer-motion";

type Props = {
  className?: string;
};

export const ActiveIndicator = ({ className }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: -8 }}
    animate={{ opacity: 1, x: 0 }}
    className={cn(
      "size-1.5 animate-pulse rounded-full bg-info shadow-[0_0_8px] shadow-info",
      className,
    )}
  />
);
