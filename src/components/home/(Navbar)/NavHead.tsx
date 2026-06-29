"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Loader2, Mic, Heart } from "lucide-react";
import { motion } from "framer-motion";
import SearchOverlay from "../SearchOverlay";
import { Button } from "@/components/ui/button";
import MegaMenu from "./components/MegaMenu";
import { Category, SubCategory } from "./components/types-of-navhead/NavHeadType";
import { CustomMenuIcon, GroupUsersIcon, VendorBoxIcon } from "./components/custom/icons";

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
                            (c: Category) => c.isActive && c.isNavhead !== false
                        )
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
          text-decoration: none;
          font-weight: 400;
          white-space: nowrap;
          transition: color 0.15s ease 0s;
        }

        .nav-pill:hover .nav-pill-text {
          color: #ffffff;
          transition: color 0.15s ease 0.3s;
        }
      `}</style>

            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            <header className=" bg-white sticky top-0 z-50">
                {/* <div className="container xl:w-full mx-auto py-3.75 px-1 md:px-2.5 flex justify-between items-center "> */}
                    {/* w-[calc(100vw-100px)] */}
                    <div className="w-full py-[15px] px-4 md:px-10 xl:px-[100px] flex justify-between items-center">

                    {/* ── Logo ── */}
                    <div className="shrink-0 flex items-center justify-start">
                        <Link href="/">
                            <Image
                                src={'/nav-logo/Logo.png'}
                                alt="Chapaghor Logo"
                                width={180}
                                height={35}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* ── Category Nav with Framer Motion ── */}
                    <nav className="hidden lg:flex items-center justify-center lg:pl-16 xl:pl-28">
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
                                        transition: { staggerChildren: 0.05 }
                                    }
                                }}
                                className="flex items-center"
                            >
                                {categories.map((category, index) => {
                                    const relatedSubCats = subCategories.filter(
                                        (sub) => sub.category?._id === category._id
                                    );
                                    const isHovered = hoveredCategory === category._id;

                                    return (
                                        <motion.li
                                            variants={{
                                                hidden: { opacity: 0, y: -10 },
                                                visible: { opacity: 1, y: 0 }
                                            }}
                                            key={category._id}
                                            className={`flex items-center justify-center relative ${isHovered ? "z-[99]" : "z-50"}`}
                                            onMouseEnter={() => setHoveredCategory(category._id)}
                                            onMouseLeave={() => setHoveredCategory(null)}
                                        >
                                            <div className="nav-outer relative h-full flex items-center group/nav">

                                                <div className="nav-pill flex items-center justify-center">
                                                    <Link
                                                        href={`/category/${category.slug}`}
                                                        className="nav-pill-text w-full h-full xl:text-[16px] font-normal tracking-normal whitespace-nowrap lg:px-1.5 xl:px-2.5"
                                                    >
                                                        <span>{category.name}</span>
                                                    </Link>
                                                </div>

                                                <span className="absolute -bottom-4.5 left-1/2 -translate-x-1/2 w-full h-[2.5px] bg-[#FD7034] rounded-full opacity-0 scale-x-0 group-hover/nav:opacity-100 group-hover/nav:scale-x-100 transition-all duration-300 ease-out pointer-events-none" />

                                                <MegaMenu
                                                    isHovered={isHovered}
                                                    relatedSubCats={relatedSubCats}
                                                    category={category}
                                                    index={index}
                                                />

                                            </div>

                                            {index !== categories.length - 1 && (
                                                <span className="text-[#012C60] pointer-events-none select-none text-xs lg:px-0.5 xl:px-2">
                                                    |
                                                </span>
                                            )}
                                        </motion.li>
                                    );
                                })}
                            </motion.ul>
                        )}
                    </nav>

                    {/* ── Search + Icons ── */}
                    <div className="flex items-center justify-end gap-4 shrink-0">

                        {/* ✅ FIX: Removed fixed width & justify-between. Added gap-4 xl:gap-6 to keep spacing perfectly tight! */}
                        <div
                            onClick={() => setIsSearchOpen(true)}
                            className="hidden md:flex items-center gap-4 xl:gap-6 bg-[#FFFFFF] border-[1.5px] border-[#E5E7EB] rounded-[12px] pl-3.5 pr-2.5 cursor-text hover:border-gray-300 hover:shadow-sm transition-all h-[36px] group"
                        >
                            <span className="text-[14px] text-[#9CA3AF] select-none font-normal leading-none">
                                Search
                            </span>

                            <div className="flex items-center">
                                <Search
                                    size={16}
                                    className="text-[#6B7280] group-hover:text-[#2D264B] transition-colors"
                                    strokeWidth={2}
                                />

                                <div className="h-[18px] w-[1.5px] bg-[#E5E7EB] mx-1.5"></div>

                                <Mic
                                    size={16}
                                    className="text-[#F05A28] cursor-pointer hover:opacity-80 transition-opacity"
                                    strokeWidth={2}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-[#012C60] gap-1">
                            <Button size={"nav-icon"} variant={'nav_user'} title="Wishlist">
                                <Heart size={20} strokeWidth={1.5} />
                            </Button>

                            <Button size={"nav-icon"} variant={'nav_user'} title="Vendor/Box">
                                <VendorBoxIcon />
                            </Button>

                            <Button size={"nav-icon"} variant={'nav_user'} title="Group Users">
                                <GroupUsersIcon />
                            </Button>

                            <Button size={"nav-icon"} variant={'nav_menu'} title="Menu">
                                <CustomMenuIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}