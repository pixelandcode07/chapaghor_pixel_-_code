import { motion } from "framer-motion";
import React from "react";

interface MegaMenuWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MegaMenuWrapper({
  children,
  className = "",
}: MegaMenuWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`absolute top-[168%] bg-[#FFFFFF] rounded-b-xl z-50 cursor-default ${className}`}
    >
      {children}
    </motion.div>
  );
}
