"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Sun, ShoppingCart, Users, Menu, ChevronDown, Loader2 } from "lucide-react";
import SearchOverlay from "./SearchOverlay";

// Types
type SubCategory = {
  _id: string;
  name: string;
  slug: string;
  category: { _id: string; name: string };
};

type Category = {
  _id: string;
  name: string;
  slug: string;
  isActive: boolean;
  isNavhead: boolean;
};

export default function NavbHead() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
      {/* ═══════════════════════════════════════════════════════════
          ANIMATION SYSTEM
          Phase 1 (0 → 0.45s) : conic-gradient border sweeps around
          Phase 2 (0.40s → 0.62s): orange bg fades in
          Phase 3 (0.50s → 0.65s): text colour → white
      ═══════════════════════════════════════════════════════════ */}
      <style>{`

        /* ── Animatable CSS custom property ── */
        @property --nav-sweep {
          syntax: '<percentage>';
          initial-value: 0%;
          inherits: false;
        }

        /* ══════════════════════════════════════════════
           .nav-pill  — the pill button wrapper
        ══════════════════════════════════════════════ */
        .nav-pill {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          border-radius: 9999px;
          cursor: pointer;
          /* keep default: 0% sweep */
          --nav-sweep: 0%;
        }

        /* ──────────────────────────────────────────────
           PHASE 1 — ::before  →  sweeping orange border
           conic-gradient starting from top (-90deg)
           masked to show only the 2px "ring"
        ────────────────────────────────────────────── */
        .nav-pill::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          padding: 2px;                           /* border thickness */

          background: conic-gradient(
            from -90deg,
            #F05A28 var(--nav-sweep),
            transparent var(--nav-sweep)
          );

          /* punch out the centre → only the 2px padding ring shows */
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;

          /* animate the sweep percentage */
          transition: --nav-sweep 0.45s ease;

          z-index: 1;
          pointer-events: none;
        }

        /* Trigger sweep on hover */
        .nav-pill:hover::before {
          --nav-sweep: 100%;
        }

        /* ──────────────────────────────────────────────
           PHASE 2 — ::after  →  solid orange fill
           Delayed 0.40s so it starts just before
           the border sweep finishes (0.45s)
        ────────────────────────────────────────────── */
        .nav-pill::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: #F05A28;
          opacity: 0;
          transition: opacity 0.22s ease 0.40s;   /* delay = sweep time */
          z-index: 0;
          pointer-events: none;
        }

        .nav-pill:hover::after {
          opacity: 1;
        }

        /* ──────────────────────────────────────────────
           PHASE 3 — text + icon colour → white
           Slightly later than fill (0.52s delay)
        ────────────────────────────────────────────── */
        .nav-pill-text {
          position: relative;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #003B5C;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.15s ease 0.52s;
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
          transition:
            color     0.15s ease 0.52s,
            transform 0.25s ease;
        }

        .nav-pill:hover .nav-pill-chevron {
          color: #ffffff;
        }

        /* Chevron rotates when the OUTER group (dropdown) is hovered */
        .nav-outer:hover .nav-pill-chevron {
          transform: rotate(180deg);
        }

      `}</style>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* ── Logo ── */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img
                  src="/logos/Logo.gif"
                  alt="Chapaghor Logo"
                  className="h-10 md:h-12 object-contain cursor-pointer"
                />
              </Link>
            </div>

            {/* ── Category Nav ── */}
            <nav className="hidden lg:flex items-center">
              {isLoading ? (
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Loader2 className="animate-spin" size={16} /> Loading menu...
                </div>
              ) : (
                <ul className="flex items-center">
                  {categories.map((category, index) => {
                    const relatedSubCats = subCategories.filter(
                      (sub) => sub.category?._id === category._id
                    );

                    return (
                      <li key={category._id} className="flex items-center h-20">

                        {/* Outer group: controls dropdown show/hide */}
                        <div className="nav-outer relative h-full flex items-center group/nav">

                          {/* ── Pill button (draw + fill animation) ── */}
                          <div className="nav-pill">
                            <Link
                              href={`/category/${category.slug}`}
                              className="nav-pill-text"
                            >
                              {category.name}
                              {relatedSubCats.length > 0 && (
                                <ChevronDown
                                  size={14}
                                  className="nav-pill-chevron"
                                />
                              )}
                            </Link>
                          </div>

                          {/* ── Dropdown ── */}
                          {relatedSubCats.length > 0 && (
                            <div className="
                              absolute top-20 left-1/2 -translate-x-1/2
                              w-56 bg-white border border-gray-100
                              shadow-xl rounded-b-xl
                              opacity-0 invisible
                              group-hover/nav:opacity-100 group-hover/nav:visible
                              transition-all duration-300
                              translate-y-2 group-hover/nav:translate-y-0
                              z-50 overflow-hidden
                            ">
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
                            </div>
                          )}
                        </div>

                        {/* Divider between items */}
                        {index !== categories.length - 1 && (
                          <span className="text-gray-300 mx-1 xl:mx-2 pointer-events-none select-none text-xs">
                            |
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </nav>

            {/* ── Search + Icons ── */}
            <div className="flex items-center gap-4 xl:gap-8">
              <div
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:flex items-center bg-[#F4F4F4] rounded-full px-4 py-2.5 cursor-text hover:bg-gray-200 transition-colors w-32 xl:w-48 group"
              >
                <Search
                  size={20}
                  className="text-gray-400 mr-2 group-hover:text-[#003B5C] transition-colors"
                  strokeWidth={1.5}
                />
                <span className="text-[15px] text-gray-400 select-none font-medium">
                  Search
                </span>
              </div>

              <div className="flex items-center gap-4 xl:gap-6 text-[#003B5C]">
                <button className="hover:text-[#F05A28] transition-colors" title="Theme">
                  <Sun size={24} strokeWidth={1.5} />
                </button>
                <button className="hover:text-[#F05A28] transition-colors relative" title="Cart">
                  <ShoppingCart size={24} strokeWidth={1.5} />
                  <span className="absolute -top-1.5 -right-1.5 bg-[#F05A28] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
                    0
                  </span>
                </button>
                <button className="hover:text-[#F05A28] transition-colors hidden sm:block" title="Account">
                  <Users size={24} strokeWidth={1.5} />
                </button>
                <button className="text-[#003B5C] hover:text-[#F05A28] transition-colors">
                  <Menu size={26} strokeWidth={1.5} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}