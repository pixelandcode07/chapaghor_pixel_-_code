"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import BlurBackdrop from "./BlurBackdrop";
import IZero from "./IZero";
import IOne from "./IOne";
import ITwo from "./ITwo";
import IThree from "./IThree";
import IFour from "./IFour";

import { MegaMenuPanelProps } from "./types-of-navhead/MegaMenuType";

export default function MegaMenuPanel({ activeMenu }: MegaMenuPanelProps) {
  const renderMenu = () => {
    if (!activeMenu) return null;

    const { category, relatedSubCats, index } = activeMenu;

    switch (index) {
      case 0:
        return (
          <IZero
            relatedSubCats={relatedSubCats}
            category={category}
            index={index}
            isHovered
          />
        );

      case 1:
        return (
          <IOne
            relatedSubCats={relatedSubCats}
            category={category}
            index={index}
            isHovered
          />
        );

      case 2:
        return (
          <ITwo
            relatedSubCats={relatedSubCats}
            category={category}
            index={index}
            isHovered
          />
        );

      case 3:
        return (
          <IThree
            relatedSubCats={relatedSubCats}
            category={category}
            index={index}
            isHovered
          />
        );

      case 4:
        return (
          <IFour
            relatedSubCats={relatedSubCats}
            category={category}
            index={index}
            isHovered
          />
        );

      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border border-gray-100 shadow-xl rounded-b-xl overflow-hidden"
          >
            <div className="h-0.5 w-full bg-[#F05A28]" />

            <ul className="py-2">
              {relatedSubCats.map((subCat) => (
                <li key={subCat._id}>
                  <Link
                    href={`/category/${category.slug}/${subCat.slug}`}
                    className="block px-5 py-2.5 text-sm text-gray-600 hover:text-[#F05A28] hover:bg-orange-50 transition-colors text-center"
                  >
                    {subCat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        );
    }
  };

  return (
    <AnimatePresence>
      {activeMenu && (
        <>
          <BlurBackdrop />

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.2 }}
            className="
    absolute
    top-full
    left-0
    w-full
    z-50
  "
          >
            <div
              className="
      mx-auto
      w-full

      md:max-w-[92vw]
      xl:max-w-[89vw]
      3xl:max-w-[86.56vw]
      7xl:max-w-[62vw]
      10xl:max-w-[50vw]
    "
            >
              {renderMenu()}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
