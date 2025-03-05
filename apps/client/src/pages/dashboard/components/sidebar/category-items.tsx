import { motion } from "framer-motion";

import { containerAnimation, itemAnimation, listAnimation } from "./animations";
import type { MenuItem } from "./menu-items";
import { SidebarItem } from "./sidebar-item";

type Props = {
  items: MenuItem[];
};

export const CategoryItems = ({ items }: Props) => (
  <motion.div {...containerAnimation} className="overflow-hidden pl-4">
    <motion.div {...listAnimation}>
      {items.map((item) => (
        <motion.div key={item.path} {...itemAnimation}>
          <SidebarItem {...item} />
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);
