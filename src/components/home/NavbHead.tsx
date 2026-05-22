// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Search, Sun, ShoppingCart, Users, Menu, ChevronDown, Loader2 } from "lucide-react";
// import SearchOverlay from "./SearchOverlay";
// import Image from "next/image";

// type SubCategory = {
//   _id: string;
//   name: string;
//   slug: string;
//   category: { _id: string; name: string };
// };

// type Category = {
//   _id: string;
//   name: string;
//   slug: string;
//   isActive: boolean;
//   isNavhead: boolean;
// };

// export default function NavbHead() {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   useEffect(() => {
//     const fetchNavData = async () => {
//       try {
//         const [catRes, subCatRes] = await Promise.all([
//           fetch("/api/v1/categories"),
//           fetch("/api/v1/sub-categories"),
//         ]);
//         const catData = await catRes.json();
//         const subCatData = await subCatRes.json();

//         if (catData.success) {
//           setCategories(
//             catData.data.filter(
//               (c: Category) => c.isActive && c.isNavhead !== false
//             )
//           );
//         }
//         if (subCatData.success) setSubCategories(subCatData.data);
//       } catch (error) {
//         console.error("Failed to load navigation data", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchNavData();
//   }, []);

//   return (
//     <>
//       <style>{`

//         /* ═══════════════════════════════════════════════════════
//            Animatable CSS custom property
//         ═══════════════════════════════════════════════════════ */
//         @property --nav-sweep {
//           syntax: '<percentage>';
//           initial-value: 0%;
//           inherits: false;
//         }

//         /* ═══════════════════════════════════════════════════════
//            .nav-pill  — pill button

//            WHY THIS GIVES UNIFORM 2px BORDER (no thick top/bottom):
//            ─ Previous approach used conic-gradient + -webkit-mask
//              which caused uneven rendering at top/bottom.
//            ─ New approach: background-clip trick
//                Layer 0: white fill  → background-clip: padding-box
//                Layer 1: conic sweep → background-clip: border-box
//              Browser draws the gradient exactly in the 2px border
//              strip on all sides — perfectly uniform.
//         ═══════════════════════════════════════════════════════ */
//         .nav-pill {
//           position: relative;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           padding: 8px 16px;
//           border-radius: 9999px;
//           cursor: pointer;

//           /* 2-px border placeholder — filled by background-clip */
//           border: 2px solid transparent;

//           /* Layer 0: white inner | Layer 1: sweeping border colour */
//           background-image:
//             linear-gradient(#ffffff, #ffffff),
//             conic-gradient(
//               from -90deg,
//               #F05A28 var(--nav-sweep),
//               transparent var(--nav-sweep)
//             );
//           background-origin: border-box;
//           background-clip: padding-box, border-box;

//           /* Phase 1 — animate sweep 0% → 100% */
//           --nav-sweep: 0%;
//           transition: --nav-sweep 0.45s ease;
//         }

//         .nav-pill:hover {
//           --nav-sweep: 100%;
//         }

//         /* ═══════════════════════════════════════════════════════
//            Phase 2 — ::after  →  solid orange FILL
//            inset: -2px sits on top of the border strip (no gap)
//            Delayed 0.40s so it appears as sweep finishes
//         ═══════════════════════════════════════════════════════ */
//         .nav-pill::after {
//           content: '';
//           position: absolute;
//           inset: -2px;
//           border-radius: 9999px;
//           background: #F5B79D;
//           opacity: 0;
//           transition: opacity 0.22s ease 0.40s;
//           z-index: 0;
//           pointer-events: none;
//         }

//         .nav-pill:hover::after {
//           opacity: 1;
//         }

//         /* ═══════════════════════════════════════════════════════
//            Phase 3 — text + icon → white
//            0.52s: after fill appears
//         ═══════════════════════════════════════════════════════ */
//         .nav-pill-text {
//           position: relative;
//           z-index: 10;
//           display: inline-flex;
//           align-items: center;
//           gap: 4px;
//           color: #003B5C;
//           text-decoration: none;
//           font-size: 15px;
//           font-weight: 500;
//           transition: color 0.15s ease 0.52s;
//           white-space: nowrap;
//         }

//         .nav-pill:hover .nav-pill-text {
//           color: #ffffff;
//         }

//         .nav-pill-chevron {
//           position: relative;
//           z-index: 10;
//           color: #9ca3af;
//           flex-shrink: 0;
//           transition:
//             color     0.15s ease 0.52s,
//             transform 0.25s ease;
//         }

//         .nav-pill:hover .nav-pill-chevron {
//           color: #ffffff;
//         }

//         /* Chevron rotates when outer group (dropdown) is hovered */
//         .nav-outer:hover .nav-pill-chevron {
//           transform: rotate(180deg);
//         }

//       `}</style>

//       <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

//       <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
//         <div className="max-w-[80vw] mx-auto ">
//           {/* px-4 sm:px-6 lg:px-8 */}
//           <div className="">
//             {/* flex justify-between items-center h-20 */}

//             {/* ── Logo ── */}
//             <div className="shrink-0 flex items-center justify-start">
//               <Link href="/">
//                 <Image
//                   src={'/logos/Logo.png'}
//                   alt="Chapaghor Logo"
//                   width={180}
//                   height={35}
//                 />
//               </Link>
//             </div>

//             {/* ── Category Nav ── */}
//             <nav className="hidden lg:flex items-center">
//               {isLoading ? (
//                 <h1 className="flex items-center gap-2 text-gray-400 text-sm">
//                   <Loader2 className="animate-spin" size={16} /> Loading menu...
//                 </h1>
//               ) : (
//                 <ul className="flex items-center">
//                   {categories.map((category, index) => {
//                     const relatedSubCats = subCategories.filter(
//                       (sub) => sub.category?._id === category._id
//                     );
//                     return (
//                       <li key={category._id} className="flex items-center justify-center">

//                         {/* Outer group — controls dropdown */}
//                         <div className="nav-outer relative h-full flex items-center group/nav">

//                           {/* ── Pill button ── */}
//                           <div className="nav-pill">
//                             <Link
//                               href={`/category/${category.slug}`}
//                               className="nav-pill-text text-center text-[#012C60] text-[15px] font-medium"
//                             >
//                               {category.name}
//                               {relatedSubCats.length > 0 && (
//                                 <ChevronDown size={14} className="nav-pill-chevron" />
//                               )}
//                             </Link>
//                           </div>

//                           {/* ── Dropdown ── */}
//                           {relatedSubCats.length > 0 && (
//                             <div className="
//                               absolute top-20 left-1/2 -translate-x-1/2
//                               w-56 bg-white border border-gray-100
//                               shadow-xl rounded-b-xl
//                               opacity-0 invisible
//                               group-hover/nav:opacity-100 group-hover/nav:visible
//                               transition-all duration-300
//                               translate-y-2 group-hover/nav:translate-y-0
//                               z-50 overflow-hidden
//                             ">
//                               <div className="h-0.5 w-full bg-[#F05A28]" />
//                               <ul className="py-2">
//                                 {relatedSubCats.map((subCat) => (
//                                   <li key={subCat._id}>
//                                     <Link
//                                       href={`/category/${category.slug}/${subCat.slug}`}
//                                       className="block px-5 py-2.5 text-sm text-gray-600 hover:text-[#F05A28] hover:bg-orange-50 transition-colors text-center"
//                                     >
//                                       {subCat.name}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           )}
//                         </div>

//                         {/* Divider */}
//                         {index !== categories.length - 1 && (
//                           <span className="text-gray-300 mx-1 xl:mx-2 pointer-events-none select-none text-xs">
//                             |
//                           </span>
//                         )}
//                       </li>
//                     );
//                   })}
//                 </ul>
//               )}
//             </nav>

//             {/* ── Search + Icons ── */}
//             <div className="flex items-center gap-4 xl:gap-8">
//               <div
//                 onClick={() => setIsSearchOpen(true)}
//                 className="hidden md:flex items-center bg-[#F4F4F4] rounded-full px-4 py-2.5 cursor-text hover:bg-gray-200 transition-colors w-32 xl:w-48 group"
//               >
//                 <Search
//                   size={20}
//                   className="text-gray-400 mr-2 group-hover:text-[#003B5C] transition-colors"
//                   strokeWidth={1.5}
//                 />
//                 <span className="text-[15px] text-gray-400 select-none font-medium">
//                   Search
//                 </span>
//               </div>

//               <div className="flex items-center gap-4 xl:gap-6 text-[#003B5C]">
//                 <button className="hover:text-[#F05A28] transition-colors" title="Theme">
//                   <Sun size={24} strokeWidth={1.5} />
//                 </button>
//                 <button className="hover:text-[#F05A28] transition-colors relative" title="Cart">
//                   <ShoppingCart size={24} strokeWidth={1.5} />
//                   <span className="absolute -top-1.5 -right-1.5 bg-[#F05A28] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
//                     0
//                   </span>
//                 </button>
//                 <button className="hover:text-[#F05A28] transition-colors hidden sm:block" title="Account">
//                   <Users size={24} strokeWidth={1.5} />
//                 </button>
//                 <button className="text-[#003B5C] hover:text-[#F05A28] transition-colors">
//                   <Menu size={26} strokeWidth={1.5} />
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </header>
//     </>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Sun, ShoppingCart, Users, Menu, ChevronDown, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SearchOverlay from "./SearchOverlay";

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
          padding: 8px 16px;
          border-radius: 9999px;
          cursor: pointer;
          border: 2px solid transparent;
          background-image:
            linear-gradient(#ffffff, #ffffff),
            conic-gradient(
              from -90deg,
              #F05A28 var(--nav-sweep),
              transparent var(--nav-sweep)
            );
          background-origin: border-box;
          background-clip: padding-box, border-box;
          --nav-sweep: 0%;
          transition: --nav-sweep 0.55s ease;
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
          inset: -2px;
          border-radius: 9999px;
          background: #FD7034;
          opacity: 0;
          transition: opacity 0.22s ease 0.40s;
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
          transition: color 0.15s ease 0.52s;
        }

        .nav-pill:hover .nav-pill-chevron {
          color: #ffffff;
        }
      `}</style>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <header className="bg-white sticky top-0 z-50">
        <div className="max-w-[80vw] mx-auto ">
          <div className="flex justify-between items-center py-4">

            {/* ── Logo ── */}
            <div className="shrink-0 flex items-center justify-start">
              <Link href="/" >
                {/* className="w-[95px] h-[28px]" */}
                <Image
                  src={'/logos/Logo.png'}
                  alt="Chapaghor Logo"
                  width={180}
                  height={35}
                />
              </Link>
            </div>

            {/* ── Category Nav with Framer Motion ── */}
            <nav className="hidden lg:flex items-center">
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
                          <div className="nav-pill min-w-[95px] h-[28px] px-3 !py-0 flex items-center justify-center">
                            <Link
                              href={`/category/${category.slug}`}
                              className="nav-pill-text flex items-center justify-center w-full h-full text-[16px] text-[#012C60] tracking-[0px] whitespace-nowrap"
                            >
                              <span>
                                {category.name}
                              </span>
                              {relatedSubCats.length > 0 && (
                                <motion.div
                                  animate={{ rotate: isHovered ? 180 : 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                  className="ml-1.5 flex-shrink-0"
                                >
                                  <ChevronDown size={14} className="nav-pill-chevron" />
                                </motion.div>
                              )}
                            </Link>
                          </div>

                          {/* ── Framer Motion Dropdown ── */}
                          <AnimatePresence>
                            {isHovered && relatedSubCats.length > 0 && (
                              <motion.div
                                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="
                                  absolute top-[110%] left-1/2 -translate-x-1/2
                                  w-56 bg-white border border-gray-100
                                  shadow-xl rounded-b-xl z-50 overflow-hidden
                                "
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
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Divider */}
                        {index !== categories.length - 1 && (
                          <span className="text-gray-300 mx-1 xl:mx-2 pointer-events-none select-none text-xs">
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
            <div className="flex items-center justify-end gap-4">
              {/* Search Box */}
              <div
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:flex items-center justify-between bg-[#0000000D] rounded-full px-3 cursor-text hover:bg-black/10 transition-colors w-[95px] h-[28px] group"
              >
                <span className="text-[13px] text-gray-500 select-none font-medium leading-none">
                  Search
                </span>
                <Search
                  size={14}
                  className="text-gray-500 group-hover:text-[#2D264B] transition-colors"
                  strokeWidth={2}
                />
              </div>

              {/* Icons Container */}
              <div className="flex items-center justify-between gap-4 text-[#2D264B] ">
                <button className="hover:text-[#F05A28] transition-colors flex items-center" title="Theme">
                  <Sun size={18} strokeWidth={1.5} />
                </button>

                <button className="hover:text-[#F05A28] transition-colors relative flex items-center" title="Cart">
                  <ShoppingCart size={18} strokeWidth={1.5} />
                  <span className="absolute -top-1.5 -right-1.5 bg-[#F05A28] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center ring-1 ring-white">
                    0
                  </span>
                </button>

                <button className="hover:text-[#F05A28] transition-colors hidden sm:flex items-center" title="Account">
                  <Users size={18} strokeWidth={1.5} />
                </button>

                <button className="hover:text-[#F05A28] transition-colors flex items-center">
                  <Menu size={20} strokeWidth={1.5} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </header>
    </>
  );
}