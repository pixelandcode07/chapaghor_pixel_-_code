"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Loader2, Mic } from "lucide-react";
import { motion } from "framer-motion";
import SearchOverlay from "../SearchOverlay";
import { Button } from "@/components/ui/button";
import MegaMenu from "./components/MegaMenu";
import { Category, SubCategory } from "./components/types-of-navhead/NavHeadType";

// ═══════════════════════════════════════════════════════════════
// Custom SVG Icons matched exactly with Figma Design
// ═══════════════════════════════════════════════════════════════
const VendorBoxIcon = ({ size = 22, className = "", strokeWidth = 1.5 }) => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49194 0.606567V5.45903" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.606689 5.45901H16.3772V15.1639C16.3772 15.4857 16.2493 15.7943 16.0219 16.0217C15.7944 16.2492 15.4858 16.377 15.1641 16.377H1.8198C1.49806 16.377 1.18951 16.2492 0.962002 16.0217C0.7345 15.7943 0.606689 15.4857 0.606689 15.1639V5.45901Z" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.606689 5.45903L2.42636 1.95312C2.62253 1.55798 2.92273 1.2238 3.29466 0.986533C3.66659 0.749269 4.09617 0.617903 4.53718 0.606567H12.4467C12.8981 0.606806 13.3404 0.732959 13.7241 0.97084C14.1077 1.20872 14.4173 1.5489 14.6182 1.95312L16.3772 5.45903" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.49139 13.7642V8.16943" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6149 10.257L8.49166 8.13379L6.36847 10.257" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

const GroupUsersIcon = ({ size = 22, className = "", strokeWidth = 1.5 }) => (
    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.60498 3.75H4.20998C4.20998 5.07272 5.28226 6.145 6.60498 6.145V6.75V7.355C4.61399 7.355 2.99998 5.74099 2.99998 3.75H3.60498ZM6.60498 6.75V6.145C7.9277 6.145 8.99998 5.07272 8.99998 3.75H9.60498H10.21C10.21 5.74099 8.59597 7.355 6.60498 7.355V6.75ZM9.60498 3.75H8.99998C8.99998 2.42728 7.9277 1.355 6.60498 1.355V0.75V0.145C8.59597 0.145 10.21 1.75901 10.21 3.75H9.60498ZM6.60498 0.75V1.355C5.28226 1.355 4.20998 2.42728 4.20998 3.75H3.60498H2.99998C2.99998 1.75901 4.61399 0.145 6.60498 0.145V0.75ZM9.60498 9.75V10.355H3.60498V9.75V9.145H9.60498V9.75ZM3.60498 15.75V15.145H9.60498V15.75V16.355H3.60498V15.75ZM9.60498 15.75V15.145C10.9277 15.145 12 14.0727 12 12.75H12.605H13.21C13.21 14.741 11.596 16.355 9.60498 16.355V15.75ZM0.60498 12.75H1.20998C1.20998 14.0727 2.28226 15.145 3.60498 15.145V15.75V16.355C1.61399 16.355 -1.90735e-05 14.741 -1.90735e-05 12.75H0.60498ZM3.60498 9.75V10.355C2.28226 10.355 1.20998 11.4273 1.20998 12.75H0.60498H-1.90735e-05C-1.90735e-05 10.759 1.61399 9.145 3.60498 9.145V9.75ZM9.60498 9.75V9.145C11.596 9.145 13.21 10.759 13.21 12.75H12.605H12C12 11.4273 10.9277 10.355 9.60498 10.355V9.75Z" fill="#012C60"/>
<path d="M10.8528 6.38865C11.0106 6.13527 11.3065 6 11.605 6C12.8476 6 13.855 4.99264 13.855 3.75C13.855 2.50736 12.8476 1.5 11.605 1.5C11.3065 1.5 11.0106 1.36473 10.8528 1.11135C10.8459 1.10014 10.8388 1.08896 10.8318 1.07782C10.5692 0.663308 10.7022 0.0764006 11.19 0.0227032C11.3262 0.00770099 11.4647 0 11.605 0C13.676 0 15.355 1.67893 15.355 3.75C15.355 5.82107 13.676 7.5 11.605 7.5C11.4647 7.5 11.3262 7.4923 11.19 7.4773C10.7022 7.4236 10.5692 6.83669 10.8318 6.42218C10.8388 6.41104 10.8459 6.39986 10.8528 6.38865Z" fill="#012C60"/>
<path d="M13.8967 14.3169C14.0102 14.1275 14.2106 14 14.4314 14H14.605C15.8476 14 16.855 12.9926 16.855 11.75C16.855 10.5074 15.8476 9.5 14.605 9.5H14.4314C14.2106 9.5 14.0102 9.37252 13.8967 9.18313C13.6196 8.72082 13.9203 8 14.4593 8H14.605C16.676 8 18.355 9.67893 18.355 11.75C18.355 13.8211 16.676 15.5 14.605 15.5H14.4593C13.9203 15.5 13.6196 14.7792 13.8967 14.3169Z" fill="#012C60"/>
</svg>

);

const CustomMenuIcon = ({ size = 22, className = "", strokeWidth = 1.5 }) => (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3771 0.606567H0.606584" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.3771 4.24591H4.24593" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.3771 7.88528H7.88527" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.3771 15.164H0.606584" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.3771 11.5246H4.24593" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);
// ═══════════════════════════════════════════════════════════════


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
          
          /* Start exactly at top middle (12 o'clock) */
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
          
          /* HOVER OUT ACTION: Slower, smoother erase */
          transition: --nav-sweep 0.6s cubic-bezier(0.25, 1, 0.5, 1); 
        }

        /* ═══════════════════════════════════════════════════════
           .nav-pill:hover — hover state (Controls the HOVER IN)
        ═══════════════════════════════════════════════════════ */
        .nav-pill:hover {
          --nav-sweep: 100%;
          
          /* HOVER IN ACTION: Fast, snappy draw */
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

          /* HOVER OUT: Fade out instantly so the retracting border is visible */
          transition: opacity 0.15s ease 0s;
        }

        .nav-pill:hover::after {
          opacity: 1;

          /* HOVER IN: Wait 0.3s for the border to finish drawing before filling */
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

          /* HOVER OUT: Instantly change text back to dark blue */
          transition: color 0.15s ease 0s;
        }

        .nav-pill:hover .nav-pill-text {
          color: #ffffff;

          /* HOVER IN: Wait 0.3s before turning white */
          transition: color 0.15s ease 0.3s;
        }

        .nav-pill-chevron {
          position: relative;
          z-index: 10;
          color: #9ca3af;
          flex-shrink: 0;

          /* HOVER OUT: Instantly change back */
          transition: color 0.15s ease 0s;
        }

        .nav-pill:hover .nav-pill-chevron {
          color: #ffffff;

          /* HOVER IN: Wait 0.3s */
          transition: color 0.15s ease 0.3s;
        }
      `}</style>

            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            <header className=" bg-white sticky top-0 z-50">
                <div className="container xl:w-[calc(100vw-100px)] mx-auto py-3.75 lg:px-2.5 xl:px-0 flex justify-between items-center ">

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

                    {/* ── Category Nav with Framer Motion ── */}
                    <nav className="hidden lg:flex items-center justify-center lg:pl-16 xl:pl-30 ">
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
                                            className={`flex items-center justify-center relative ${isHovered ? "z-[99]" : "z-50"
                                                }`}
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
                                                <span className="text-[#012C60]  pointer-events-none select-none text-xs lg:px-0.5 xl:px-2">
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
                    <div className="flex items-center justify-end gap-4 ">
                        
                        {/* ✅ FIX: Search Box Border thickness reduced to 'border' and rounded corners set to 'rounded-full' to perfectly match Figma */}
                        <div
                            onClick={() => setIsSearchOpen(true)}
                            className="hidden md:flex items-center justify-between bg-[#FFFFFF] border border-[#012C60] shadow-[0px_2px_8px_rgba(0,0,0,0.05)] rounded-[12px] px-4 cursor-text hover:shadow-[0px_2px_10px_rgba(0,0,0,0.08)] transition-all lg:w-[150px] xl:w-[200px] h-[36px] group"
                        >
                            <span className="text-[14px] text-gray-500 select-none font-medium leading-none">
                                Search
                            </span>

                            <div className="flex items-center gap-2">
                                <Search
                                    size={18}
                                    className="text-gray-500 group-hover:text-[#2D264B] transition-colors"
                                    strokeWidth={1.5}
                                />

                                <div className="h-3.5 w-[1px] bg-gray-300"></div>

                                <Mic
                                    size={18}
                                    className="text-[#F05A28] cursor-pointer hover:opacity-80 transition-opacity"
                                    strokeWidth={1.5}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                />
                            </div>
                        </div>

                        {/* ✅ FIX: Icons replaced with perfectly matching custom SVGs */}
                        <div className="flex items-center justify-between text-[#012C60] gap-1">
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