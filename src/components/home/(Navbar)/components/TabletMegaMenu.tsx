"use client";

import { AnimatePresence, motion } from "framer-motion";

import MegaMenuContent from "./MegaMenuContent";
import { MegaMenuPanelProps } from "./types-of-navhead/MegaMenuType";
import BlurBackdrop from "./BlurBackdrop";

export default function TabletMegaMenu({
  activeMenu,
}: MegaMenuPanelProps) {
    console.log(activeMenu);
  return (
    
    <AnimatePresence>
      {activeMenu && (
        <>
         <BlurBackdrop />
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
          className="
            absolute
            left-0
            top-full
            w-full
            z-50
            "
            >
          <MegaMenuContent activeMenu={activeMenu} />
        </motion.div>
      </>
      )}
    </AnimatePresence>
  );
}