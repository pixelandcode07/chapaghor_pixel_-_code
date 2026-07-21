"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Loader2, Mic } from "lucide-react";
import { motion } from "framer-motion";
import SearchOverlay from "../SearchOverlay";
import MegaMenu from "./components/MegaMenu";
import {
  Category,
  SubCategory,
} from "./components/types-of-navhead/NavHeadType";
import {
  CustomMenuIcon,
  GroupUsersIcon,
  HeartIcon,
  NotificationIcon,
  VendorBoxIcon,
} from "./components/custom/icons";
import { Button } from "@/components/ui/button";
import NavLinks from "./components/NavLinks";

export default function NavHead() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchNavData = async () => {
      try {
        const [catRes, subCatRes] = await Promise.all([
          fetch("/api/v1/categories"),
          fetch("/api/v1/sub-categories"),
        ]);
        const catData = await catRes.json();
        const subCatData = await subCatRes.json();

        if (catData.success) {
          setCategories(
            catData.data.filter(
              (c: Category) => c.isActive && c.isNavhead !== false,
            ),
          );
        }
        if (subCatData.success) setSubCategories(subCatData.data);
      } catch (error) {
        console.error("Failed to load navigation data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNavData();
  }, []);

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════
            Animatable CSS custom property
        ═══════════════════════════════════════════════════════ */
        @property --nav-sweep {
          syntax: '<percentage>';
          initial-value: 0%;
          inherits: false;
        }

        /* ═══════════════════════════════════════════════════════
           .nav-pill  — normal state (Controls the HOVER OUT)
        ═══════════════════════════════════════════════════════ */
        .nav-pill {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          cursor: pointer;
          border: 1px solid transparent;
          
          background-image:
            linear-gradient(#ffffff, #ffffff),
            conic-gradient(
              from 0deg, 
              #FD7034 var(--nav-sweep),
              transparent var(--nav-sweep)
            );
          background-origin: border-box;
          background-clip: padding-box, border-box;
          --nav-sweep: 0%;
          
          transition: --nav-sweep 0.6s cubic-bezier(0.25, 1, 0.5, 1); 
        }

        .nav-pill:hover {
          --nav-sweep: 100%;
          transition: --nav-sweep 0.3s ease-in;
        }

        /* ═══════════════════════════════════════════════════════
           Phase 2 — ::after  →  solid orange FILL
        ═══════════════════════════════════════════════════════ */
        .nav-pill::after {
          content: '';
          position: absolute;
          inset: -1px; 
          border-radius: 20px;
          background: #FD7034; 
          opacity: 0;
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.15s ease 0s;
        }

        .nav-pill:hover::after {
          opacity: 1;
          transition: opacity 0.25s ease 0.3s;
        }

        /* ═══════════════════════════════════════════════════════
           Phase 3 — text + icon → white
        ═══════════════════════════════════════════════════════ */
        .nav-pill-text {
          position: relative;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          color: #012C60; 
          transition: color 0.15s ease 0s;
        }

        .nav-pill:hover .nav-pill-text {
          color: #ffffff;
          transition: color 0.15s ease 0.3s;
        }
      `}</style>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <header className=" bg-white xl:sticky top-0 z-50">
        {/* <div className="container xl:max-w-[80vw] 2xl:max-w-[80vw] mx-auto py-3.75 px-1 md:px-2.5 flex justify-between items-center "> */}
        <div className=" w-full md:max-w-[90vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto flex justify-between items-center px-2.25 md:px-0 py-3.5 md:py-3 xl:py-4.25 3xl:py-[23.5px]">
          {/* ── Logo ── */}
          <div className="shrink-0 flex items-center justify-start">
            <Link href="/">
              <Image
                src={"/nav-logo/Logo.png"}
                alt="Chapaghor Logo"
                // fill
                width={180}
                height={35}
                className="object-contain w-[157px] h-[29px] md:w-[188px] md:h-[35px] xl:w-[144px] xl:h-[26px] 3xl:w-[200px] 3xl:h-[40px]"
              />
            </Link>
          </div>

          {/* ── Category Nav with Framer Motion ── */}
          <nav className="hidden xl:flex items-center justify-center lg:pl-10.5 xl:pl-[140px]">
            {isLoading ? (
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-gray-400 text-sm"
              >
                <Loader2 className="animate-spin" size={16} /> Loading menu...
              </motion.h1>
            ) : (
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05 },
                  },
                }}
                className="flex items-center"
              >
                {categories.map((category, index) => {
                  const relatedSubCats = subCategories.filter(
                    (sub) => sub.category?._id === category._id,
                  );
                  const isHovered = hoveredCategory === category._id;

                  return (
                    // <></>
                    <NavLinks
                    key={category._id}
                      category={category}
                      relatedSubCats={relatedSubCats}
                      index={index}
                      totalCategories={categories.length}
                      isHovered={isHovered}
                      onMouseEnter={() => setHoveredCategory(category._id)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    />
                  );
                })}
              </motion.ul>
            )}
          </nav>

         {/* ── Search + Icons ── */}
<div className="flex items-center justify-end gap-0 md:gap-3 xl:gap-4 shrink-0">
  {/* Search */}
  <div
    onClick={() => setIsSearchOpen(true)}
    className="flex items-center gap-2 md:gap-4 xl:gap-6 3xl:gap-8 bg-white md:border-[1.5px] border-[#E5E7EB] rounded-[12px] pl-2.5 md:pl-3.5 pr-2 h-[36px] cursor-text hover:border-gray-300 hover:shadow-sm transition-all group"
  >
    {/* Hide text only on mobile */}
    <span className="hidden sm:block text-[14px] 3xl:text-base text-[#9CA3AF] font-normal leading-none select-none">
      Search
    </span>

    <div className="flex items-center">
      <Search
        className="w-5 h-5 3xl:w-5 3xl:h-5 text-[#012C60] md:text-[#6B7280] group-hover:text-[#2D264B] transition-colors"
        strokeWidth={2}
      />

      <div className="hidden sm:block h-[18px] w-[1.5px] bg-[#E5E7EB] mx-1.5" />

      <Mic
        className="hidden sm:block w-4 h-4 3xl:w-5 3xl:h-5 text-[#6839A3] cursor-pointer hover:opacity-80 transition-opacity"
        strokeWidth={2}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  </div>

  {/* Icons */}
  <div className="flex items-center text-[#012C60] gap-0.5 sm:gap-1">
    <Button size="nav-icon" variant="nav_user_laptop" title="Wishlist">
      <HeartIcon className="size-6 sm:size-7" />
    </Button>

    <Button size="nav-icon" variant="nav_user_laptop" title="Vendor/Box">
      <VendorBoxIcon className="size-5 sm:size-6" />
    </Button>

    <Button size="nav-icon" variant="nav_user_laptop" title="Group Users">
      <GroupUsersIcon className="size-6 sm:size-7" />
    </Button>

    <Button size="nav-icon" variant="nav_user_mobile" title="Menu">
      <NotificationIcon className="size-5 sm:size-6" />
    </Button>
    <Button size="nav-icon" variant="nav_menu" title="Menu">
      <CustomMenuIcon className="size-5 sm:size-6" />
    </Button>
  </div>
</div>
        </div>
      </header>
      <div className="hidden md:flex xl:hidden md:sticky top-0 z-50 border-y bg-white">
  <div className="container mx-auto">
    <ul className="flex items-center justify-center py-2">
      {categories.map((category, index) => {
        const relatedSubCats = subCategories.filter(
          (sub) => sub.category?._id === category._id
        );

        return (
          <NavLinks
            key={category._id}
            category={category}
            relatedSubCats={relatedSubCats}
            index={index}
            totalCategories={categories.length}
            isHovered={hoveredCategory === category._id}
            onMouseEnter={() => setHoveredCategory(category._id)}
            onMouseLeave={() => setHoveredCategory(null)}
          />
        );
      })}
    </ul>
  </div>
</div>
    </>
  );
}
