import { Button, Separator } from "@reactive-resume/ui";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import useKeyboardShortcut from "use-keyboard-shortcut";

import { Icon } from "@career-sync/client/components/icon";
import { UserAvatar } from "@career-sync/client/components/user-avatar";
import { UserOptions } from "@career-sync/client/components/user-options";
import { useUser } from "@career-sync/client/services/user";

import { getMenuCategories } from "./menu-items";
import { SidebarCategory } from "./sidebar-category";

type Props = {
  setOpen?: (open: boolean) => void;
};

export const Sidebar = ({ setOpen }: Props) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const menuCategories = getMenuCategories();

  useKeyboardShortcut(["shift", "r"], () => {
    void navigate("/dashboard/resumes");
    setOpen?.(false);
  });

  useKeyboardShortcut(["shift", "s"], () => {
    void navigate("/dashboard/settings");
    setOpen?.(false);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="flex size-full flex-col gap-y-4"
    >
      <motion.div
        className="ml-12 flex justify-center lg:ml-0"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Button asChild size="icon" variant="ghost" className="size-10 p-0">
          <Link to="/">
            <Icon size={24} className="mx-auto hidden lg:block" />
          </Link>
        </Button>
      </motion.div>

      <Separator className="opacity-50" />

      <div className="flex-1 overflow-y-auto px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="space-y-1">
          <AnimatePresence mode="wait">
            {menuCategories.map((category) => (
              <SidebarCategory key={category.name} {...category} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Separator className="opacity-50" />

      <UserOptions>
        <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
          <Button
            size="lg"
            variant="ghost"
            className="w-full justify-start px-3 transition-colors duration-200"
          >
            <UserAvatar size={24} className="mr-3" />
            <span>{user?.name}</span>
          </Button>
        </motion.div>
      </UserOptions>
    </motion.div>
  );
};
