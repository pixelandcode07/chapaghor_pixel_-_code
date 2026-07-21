import { motion } from "framer-motion";
import Link from "next/link";

import MegaMenu from "./MegaMenu";
import { NavLinksProps } from "./types-of-navhead/NavHeadType";

export default function NavLinks({
  category,
  relatedSubCats,
  index,
  totalCategories,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: NavLinksProps) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
      className={`relative flex items-center justify-center ${
        isHovered ? "z-99" : "z-50"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="nav-outer relative flex h-full items-center group/nav">
        <div className="nav-pill">
          <Link
            href={`/category/${category.slug}`}
            className="nav-pill-text h-full w-full whitespace-nowrap font-light xl:px-2.5 3xl:text-[21.32px]"
          >
            <span className="tracking-[0.5px]">
              {category.name}
            </span>
          </Link>
        </div>

        <span className="pointer-events-none absolute -bottom-6 left-1/2 h-[1.5px] w-full -translate-x-1/2 scale-x-0 rounded-full bg-[#FD7034] opacity-0 transition-all duration-300 ease-out group-hover/nav:scale-x-100 group-hover/nav:opacity-100" />

        <MegaMenu
          isHovered={isHovered}
          relatedSubCats={relatedSubCats}
          category={category}
          index={index}
        />
      </div>

      {index !== totalCategories - 1 && (
        <span className="pointer-events-none select-none px-2 text-xs text-[#012C60]">
          |
        </span>
      )}
    </motion.li>
  );
}