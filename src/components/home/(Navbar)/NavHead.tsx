"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Sun, ShoppingCart, Users, Menu, Loader2, Mic } from "lucide-react";
import { motion } from "framer-motion";
import SearchOverlay from "../SearchOverlay";
import { Button } from "@/components/ui/button";
import MegaMenu from "./components/MegaMenu";
import { Category, SubCategory } from "./components/types-of-navhead/NavHeadType";



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
           .nav-pill  — pill button
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
              from -90deg,
              #FD7034 var(--nav-sweep),
              transparent var(--nav-sweep)
            );
          background-origin: border-box;
          background-clip: padding-box, border-box;
          --nav-sweep: 0%;
          transition: --nav-sweep 0.35s ease;
        
        }

        .nav-pill:hover {
          --nav-sweep: 100%;
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
          transition: opacity 0.25s ease 0.3s;
          z-index: 0;
          pointer-events: none;
        }

        .nav-pill:hover::after {
          opacity: 1;
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
          transition: color 0.15s ease 0.3s;
          white-space: nowrap;
        }

        .nav-pill:hover .nav-pill-text {
          color: #ffffff;
         
        }

        .nav-pill-chevron {
          position: relative;
          z-index: 10;
          color: #9ca3af;
          flex-shrink: 0;
          transition: color 0.15s ease 0.3s;
        }

        .nav-pill:hover .nav-pill-chevron {
          color: #ffffff;
        }
      `}</style>

            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            <header className="bg-white sticky top-0 z-50 ">
                <div className="w-[calc(100vw-200px)] mx-auto pb-3.75 pt-2">
                    <div className="flex justify-between items-center ">

                        {/* ── Logo ── */}
                        <div className="shrink-0 flex items-center justify-start">
                            <Link href="/">
                                <Image
                                    src={'/nav-logo/Logo.png'}
                                    alt="Chapaghor Logo"
                                    width={180}
                                    height={35}
                                />
                            </Link>
                        </div>

                        {/* <div> */}
                        {/* ── Category Nav with Framer Motion ── */}
                        <nav className="hidden lg:flex items-center pt-3.5 pb-5.5">
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
                                                className="flex items-center justify-center relative"
                                                onMouseEnter={() => setHoveredCategory(category._id)}
                                                onMouseLeave={() => setHoveredCategory(null)}
                                            >
                                                {/* Outer group */}
                                                <div className="nav-outer relative h-full flex items-center group/nav">

                                                    {/* ── Pill button ── */}
                                                    <div className="nav-pill flex items-center justify-center">
                                                        <Link
                                                            href={`/category/${category.slug}`}
                                                            className="nav-pill-text w-full h-full text-[16px] font-normal tracking-normal whitespace-nowrap px-2.5"
                                                        >
                                                            <span>{category.name}</span>
                                                        </Link>
                                                    </div>

                                                    {/* ── Animated Bottom Border ── */}
                                                    <span className="absolute -bottom-9.5 left-1/2 -translate-x-1/2 w-[80%] h-[2.5px] bg-[#FD7034] rounded-full opacity-0 scale-x-0 group-hover/nav:opacity-100 group-hover/nav:scale-x-100 transition-all duration-300 ease-out pointer-events-none" />

                                                    {/* ── Dynamic Mega Menu Rendering ── */}
                                                    <MegaMenu
                                                        isHovered={isHovered}
                                                        relatedSubCats={relatedSubCats}
                                                        category={category}
                                                        index={index}
                                                    />

                                                </div>

                                                {/* Divider */}
                                                {index !== categories.length - 1 && (
                                                    <span className="text-[#012C60]  pointer-events-none select-none text-xs px-0.5">
                                                        {/* mx-1 xl:mx-2 */}
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
                        <div className="flex items-center justify-end gap-4 pt-2.5">
                            {/* Search Box */}
                            <div
                                onClick={() => setIsSearchOpen(true)}
                                className="hidden md:flex items-center justify-between bg-white border border-gray-100 shadow-[0px_2px_8px_rgba(0,0,0,0.05)] rounded-full pl-4 pr-3 cursor-text hover:shadow-[0px_2px_10px_rgba(0,0,0,0.08)] transition-all w-[160px] h-[36px] group"
                            >
                                <span className="text-[14px] text-gray-500 select-none font-medium leading-none">
                                    Search
                                </span>

                                {/* Right-aligned Icon Group */}
                                <div className="flex items-center gap-2">
                                    <Search
                                        size={16}
                                        className="text-gray-500 group-hover:text-[#2D264B] transition-colors"
                                        strokeWidth={2}
                                    />

                                    {/* Vertical Divider */}
                                    <div className="h-3.5 w-[1px] bg-gray-300"></div>

                                    {/* Mic Icon */}
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

                            {/* Icons Container */}
                            <div className="flex items-center justify-between text-[#2D264B]">
                                <Button variant={'nav_sun'} title="Theme">
                                    <Sun size={22} strokeWidth={1.5} />
                                </Button>
                                <Button variant={'nav_cart'} title="Cart">
                                    <ShoppingCart size={22} strokeWidth={1.5} />
                                    <span className="absolute -top-1.5 -right-1.5 bg-[#F05A28] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center ring-1 ring-white">
                                        0
                                    </span>
                                </Button>
                                <Button variant={'nav_user'} title="Account">
                                    <Users size={22} strokeWidth={1.5} />
                                </Button>
                                <Button variant={'nav_menu'} title="Menu">
                                    <Menu size={22} strokeWidth={1.5} />
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
}