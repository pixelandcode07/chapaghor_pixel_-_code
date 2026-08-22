// import { ChevronRight, MoveRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export const categories = [
//   "All Resources",
//   "Stationery",
//   "Business Card",
//   "Banner",
//   "X-Stand",
//   "Social Media",
//   "Packaging",
//   "Mockups",
//   "Others",
// ];

// interface GraphicCategoryProps {
//   activeCategory: string;
//   onCategoryChange: (category: string) => void;
// }

// export default function GraphicCategory({
//   activeCategory,
//   onCategoryChange,
// }: GraphicCategoryProps) {
//   return (
//     <div className="flex items-center gap-2 py-4 md:py-5 xl:py-8 overflow-x-auto scrollbar-none">
//       {categories.map((category) => {
//         const active = category === activeCategory;

//         return (
//           <Button
//             key={category}
//             variant="outline"
//             onClick={() => onCategoryChange(category)}
//             className={`
//               shrink-0 rounded-full border px-6.5 py-2 md:px-8.25 md:py-5 xl:px-9 xl:py-4.5 1xl:px-10.5 1xl:py-4.75 3xl:px-14 3xl:py-5.5
//               text-[12px] md:text-[15px] font-normal shadow-none
//               transition-all cursor-pointer
//               ${
//                 active
//                   ? "border-[#ff6b32] bg-[#ff6b32] text-white hover:bg-[#ff6b32] hover:text-white"
//                   : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
//               }
//             `}
//           >
//             {category}
//           </Button>
//         );
//       })}

//       {/* Browse Library */}
//       <Button
//         variant="ghost"
//         className="  shrink-0 text-[12px] md:text-[15px] rounded-full border border-[#ff7043] cursor-pointer font-normal text-[#ff7043] bg-white hover:text-[#ff7043] px-6.5 py-2 md:px-8.25 md:py-5 xl:px-9 xl:py-4.5 1xl:px-10.5 1xl:py-4.75 3xl:px-14 3xl:py-5.5"
//       >
//         Browse Library
//         <MoveRight size={12} />
//       </Button>
//     </div>
//   );
// }




// =====================================================================
// =====================================================================
// =====================================================================


// import { MoveRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export const categories = [
//   "All Resources",
//   "Stationery",
//   "Business Card",
//   "Banner",
//   "X-Stand",
//   "Social Media",
//   "Packaging",
//   "Mockups",
//   "Others",
// ];

// interface GraphicCategoryProps {
//   activeCategory: string;
//   onCategoryChange: (category: string) => void;
// }

// export default function GraphicCategory({
//   activeCategory,
//   onCategoryChange,
// }: GraphicCategoryProps) {
//   return (
//     <div className="flex items-center gap-2 py-4 md:py-5 xl:py-8">
//       <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto scrollbar-none">
//         {categories.map((category) => {
//           const active = category === activeCategory;

//           return (
//             <Button
//               key={category}
//               variant="outline"
//               onClick={() => onCategoryChange(category)}
//               className={`shrink-0 rounded-full border px-6.5 py-2 md:px-8.25 md:py-5 xl:px-9 xl:py-4.5 1xl:px-10.5 1xl:py-4.75 3xl:px-14 3xl:py-5.5 text-[12px] md:text-[15px] font-normal shadow-none transition-all cursor-pointer ${
//                 active
//                   ? "border-[#ff6b32] bg-[#ff6b32] text-white hover:bg-[#ff6b32] hover:text-white"
//                   : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
//               }`}
//             >
//               {category}
//             </Button>
//           );
//         })}
//       </div>

//       <Button
//         variant="ghost"
//         className="shrink-0 rounded-full border border-[#ff7043] bg-white px-6.5 py-2 text-[12px] font-normal text-[#ff7043] cursor-pointer hover:bg-white hover:text-[#ff7043] md:px-8.25 md:py-5 md:text-[15px] xl:px-9 xl:py-4.5 1xl:px-10.5 1xl:py-4.75 3xl:px-14 3xl:py-5.5"
//       >
//         Browse Library
//         <MoveRight size={12} />
//       </Button>
//     </div>
//   );
// }


// ==================================================================
// ==================================================================
// ==================================================================


"use client";

import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const categories = [
  "All Resources",
  "Stationery",
  "Business Card",
  "Banner",
  "X-Stand",
  "Social Media",
  "Packaging",
  "Mockups",
  "Others",
];

interface GraphicCategoryProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GraphicCategory({
  activeCategory,
  onCategoryChange,
}: GraphicCategoryProps) {
  const [highlightBrowse, setHighlightBrowse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightBrowse((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1 1xl:gap-1.5 3xl:gap-2 py-4 md:py-5 xl:py-10">
      <div className="flex min-w-0 flex-1 items-center gap-1 1xl:gap-1.5 3xl:gap-2 overflow-x-auto scrollbar-none">
        {categories.map((category) => {
          const active = category === activeCategory;

          return (
            <Button
  key={category}
  variant="outline"
  onClick={() => onCategoryChange(category)}
  className={`h-[28px] md:h-[37px] xl:h-[31px] 1xl:h-[36px] 3xl:h-[48px]  w-[90px] md:w-[117px] xl:w-[118px] 3xl:w-[162px] shrink-0 rounded-full border p-0 text-[12px] font-normal shadow-none transition-all cursor-pointer md:text-[15px] ${
    active
      ? "border-[#ff6b32] bg-[#ff6b32] text-white hover:bg-[#ff6b32] hover:text-white"
      : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
  }`}
>
  {category}
</Button>
          );
        })}
      </div>

      <Button
        variant="ghost"
        className={`w-[90px] md:w-[140px] xl:w-[160px] 3xl:w-[200px] h-[28px] md:h-[37px] xl:h-[31px] 1xl:h-[36px] 3xl:h-[48px]  shrink-0 rounded-full border border-[#ff7043]  text-[12px] font-normal cursor-pointer  md:text-[15px]  transition-all duration-500 ${
          // px-6.5 py-2 md:px-8.25 md:py-5 xl:px-9 xl:py-4.5 1xl:px-10.5 1xl:py-4.75 3xl:px-14 3xl:py-5.5
          highlightBrowse
            ? "bg-[#FFE0D6] text-[#ff7043] shadow-[0_0_18px_rgba(255,112,67,0.25)] scale-[1.03]"
            : "bg-white text-[#ff7043] shadow-none scale-100"
        } hover:text-[#ff7043]`}
      >
        Browse <span className="hidden md:block">Library</span>
        <MoveRight size={12} />
      </Button>
    </div>
  );
}