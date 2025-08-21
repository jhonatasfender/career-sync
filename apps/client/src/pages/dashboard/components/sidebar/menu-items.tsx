import { t } from "@lingui/core/macro";
import {
  Books,
  Brain,
  Briefcase,
  Buildings,
  Certificate,
  ChatCircle,
  FilePdf,
  FolderNotch,
  GraduationCap,
  HandHeart,
  Heart,
  House,
  IdentificationCard,
  Lightning,
  Translate,
  Trophy,
  User,
  Users,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";

export type MenuItem = {
  path: string;
  name: string;
  icon: ReactNode;
};

export type MenuCategory =
  | {
      name: string;
      icon: ReactNode;
      items?: MenuItem[];
    }
  | MenuItem;

export const getMenuCategories = (): MenuCategory[] => [
  {
    path: "/dashboard/chat",
    name: t`Home`,
    icon: <House weight="duotone" />,
  },
  {
    name: t`Personal`,
    icon: <User weight="duotone" />,
    items: [
      {
        path: "/dashboard/basic",
        name: t`Basic Info`,
        icon: <IdentificationCard weight="duotone" />,
      },
      {
        path: "/dashboard/summary",
        name: t`Summary`,
        icon: <ChatCircle weight="duotone" />,
      },
      {
        path: "/dashboard/profiles",
        name: t`Profiles`,
        icon: <Users weight="duotone" />,
      },
    ],
  },
  {
    name: t`Professional`,
    icon: <Briefcase weight="duotone" />,
    items: [
      {
        path: "/dashboard/experience",
        name: t`Experience`,
        icon: <Buildings weight="duotone" />,
      },
      {
        path: "/dashboard/education",
        name: t`Education`,
        icon: <GraduationCap weight="duotone" />,
      },
      {
        path: "/dashboard/skills",
        name: t`Skills`,
        icon: <Lightning weight="duotone" />,
      },
    ],
  },
  {
    name: t`Qualifications`,
    icon: <Certificate weight="duotone" />,
    items: [
      {
        path: "/dashboard/languages",
        name: t`Languages`,
        icon: <Translate weight="duotone" />,
      },
      {
        path: "/dashboard/awards",
        name: t`Awards`,
        icon: <Trophy weight="duotone" />,
      },
      {
        path: "/dashboard/certifications",
        name: t`Certifications`,
        icon: <Certificate weight="duotone" />,
      },
    ],
  },
  {
    name: t`Portfolio`,
    icon: <FolderNotch weight="duotone" />,
    items: [
      {
        path: "/dashboard/projects",
        name: t`Projects`,
        icon: <FolderNotch weight="duotone" />,
      },
      {
        path: "/dashboard/publications",
        name: t`Publications`,
        icon: <Books weight="duotone" />,
      },
    ],
  },
  {
    name: t`Additional`,
    icon: <Heart weight="duotone" />,
    items: [
      {
        path: "/dashboard/interests",
        name: t`Interests`,
        icon: <Heart weight="duotone" />,
      },
      {
        path: "/dashboard/volunteer",
        name: t`Volunteer`,
        icon: <HandHeart weight="duotone" />,
      },
      {
        path: "/dashboard/references",
        name: t`References`,
        icon: <ChatCircle weight="duotone" />,
      },
    ],
  },
  {
    name: t`AI`,
    icon: <Brain weight="duotone" />,
    items: [
      {
        path: "/dashboard/resume-generator",
        name: t`Resume Generator`,
        icon: <FilePdf weight="duotone" />,
      },
    ],
  },
];
