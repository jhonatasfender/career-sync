import { t } from "@lingui/macro";
import {
  Briefcase,
  Calendar,
  ChartLine,
  FadersHorizontal,
  House,
  ReadCvLogo,
  Users,
} from "@phosphor-icons/react";
import { Button, KeyboardShortcut, Separator } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import useKeyboardShortcut from "use-keyboard-shortcut";

import { Icon } from "@/client/components/icon";
import { UserAvatar } from "@/client/components/user-avatar";
import { UserOptions } from "@/client/components/user-options";
import { useUser } from "@/client/services/user";

type Props = {
  className?: string;
};

const ActiveIndicator = ({ className }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: -8 }}
    animate={{ opacity: 1, x: 0 }}
    className={cn(
      "size-1.5 animate-pulse rounded-full bg-info shadow-[0_0_8px] shadow-info",
      className,
    )}
  />
);

type SidebarItem = {
  path: string;
  name: string;
  shortcut?: string;
  icon: React.ReactNode;
};

type SidebarItemProps = SidebarItem & {
  onClick?: () => void;
};

const SidebarItem = ({ path, name, shortcut, icon, onClick }: SidebarItemProps) => {
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
      className="w-full"
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
            {!isActive && (
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

type SidebarProps = {
  setOpen?: (open: boolean) => void;
};

export const Sidebar = ({ setOpen }: SidebarProps) => {
  const { user } = useUser();
  const navigate = useNavigate();

  useKeyboardShortcut(["shift", "r"], () => {
    void navigate("/dashboard/resumes");
    setOpen?.(false);
  });

  useKeyboardShortcut(["shift", "s"], () => {
    void navigate("/dashboard/settings");
    setOpen?.(false);
  });

  const sidebarItems: SidebarItem[] = [
    {
      path: "/dashboard",
      name: t`Home`,
      shortcut: "⇧H",
      icon: <House weight="duotone" />,
    },
    {
      path: "/dashboard/resumes",
      name: t`Resumes`,
      shortcut: "⇧R",
      icon: <ReadCvLogo />,
    },
    {
      path: "/dashboard/jobs",
      name: t`Jobs`,
      shortcut: "⇧J",
      icon: <Briefcase weight="duotone" />,
    },
    {
      path: "/dashboard/analytics",
      name: t`Analytics`,
      shortcut: "⇧A",
      icon: <ChartLine weight="duotone" />,
    },
    {
      path: "/dashboard/network",
      name: t`Network`,
      shortcut: "⇧N",
      icon: <Users weight="duotone" />,
    },
    {
      path: "/dashboard/calendar",
      name: t`Calendar`,
      shortcut: "⇧C",
      icon: <Calendar weight="duotone" />,
    },
    {
      path: "/dashboard/settings",
      name: t`Settings`,
      shortcut: "⇧S",
      icon: <FadersHorizontal weight="duotone" />,
    },
  ];

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

      <AnimatePresence mode="wait">
        <div className="grid w-full gap-y-2">
          {sidebarItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.2,
                delay: index * 0.05,
                ease: "easeOut",
              }}
            >
              <SidebarItem {...item} onClick={() => setOpen?.(false)} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      <div className="flex-1" />

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
