import { ReactNode } from 'react';

export type MenuItemProps = {
  icon: ReactNode;
  title: string;
  active?: boolean;
  path: string;
  onClick?: () => void;
};

export type MenuListProps = {
  readonly items: MenuItemProps[];
};


export type MenuListAction =
  | { type: 'SET_ACTIVE'; payload: string };
