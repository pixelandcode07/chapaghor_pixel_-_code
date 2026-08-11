"use client";

import { AnimatePresence, motion } from "framer-motion";
import BlurBackdrop from "./BlurBackdrop";
import { MegaMenuShellProps } from "./types-of-navhead/MegaMenuType";
import MegaMenuContent from "./MegaMenuContent";

export default function MegaMenuShell({
  activeMenu,
//   headerHeight,
}: MegaMenuShellProps) {
  return (
    <AnimatePresence>
      {activeMenu && (
        <>
          <BlurBackdrop />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="
              fixed
              left-0
              right-0
              z-999
            "
          >
            <MegaMenuContent activeMenu={activeMenu} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
