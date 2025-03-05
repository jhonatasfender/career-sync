export const containerAnimation = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.2, ease: "easeInOut" },
      opacity: { duration: 0.1 },
    },
  },
  transition: {
    height: { duration: 0.2, ease: "easeOut" },
    opacity: { duration: 0.2, delay: 0.1 },
  },
};

export const listAnimation = {
  initial: "closed",
  animate: "open",
  exit: "closed",
  variants: {
    open: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
    closed: {
      transition: { staggerChildren: 0.03, staggerDirection: -1 },
    },
  },
};

export const itemAnimation = {
  variants: {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  },
};
