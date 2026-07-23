// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { MegaMenuProps } from "./types-of-navhead/MegaMenuType";
// import MegaMenuWrapper from "./MegaMenuWrapper";
// import { ArrowRight } from "lucide-react";

// export default function ITwo({ relatedSubCats, category }: MegaMenuProps) {
//   return (
//     <MegaMenuWrapper className="border-t lg:translate-x-[-15%] xl:translate-x-[-44%] lg:w-[1500px] xl:w-[2000px] 3xl_v2:w-[2400px] 4xl:w-[3500px] 10xl:w-[6000px] lg:h-[255px] xl:h-[320px] flex justify-center py-[23px]">
//       <div className="w-full md:max-w-[90vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto relative flex items-start xl:pl-0">
//         <div className="w-44 h-44.75 3xl:w-[431px] 3xl:h-[271px] shrink-0 transition-all duration-300">
//           <Image
//             src={"/nav-logo/stationary.png"}
//             alt="Category 2 Machine"
//             width={176}
//             height={179}
//             className="w-full h-full object-contain"
//           />
//         </div>
//         <div className="ml-[25px] flex-1 h-full">
//          <div className="columns-2 md:columns-4 lg:columns-4 xl:columns-6 3xl:columns-6 gap-9 [column-rule:1px_solid_#E5E7EB]">
//             {relatedSubCats.map((subCat) => (
//               <Link
//                 key={subCat._id}
//                 href={`/category/${category.slug}/${subCat.slug}`}
//                 className="group relative flex items-start gap-2 break-inside-avoid overflow-hidden whitespace-nowrap font-normal text-[16px] 3xl:text-[18px] leading-6.25 text-[#012C60] hover:text-[#F05A28] space-y-3"
//               >
//                 {/* Fixed Icon */}
//                 <ArrowRight size={18} className="mt-0.5 shrink-0" />

//                 {/* Animated Text Container */}
//                 <div className="relative overflow-hidden h-6 ">
//                   {/* Front Text */}
//                   <span className="block transition-all duration-200 [transform:translateY(0)_rotateX(0)] group-hover:opacity-0 group-hover:[transform:translateY(50%)_rotateX(90deg)] ">
//                     {subCat.name}
//                   </span>

//                   {/* Back Text */}
//                   <span className="absolute left-0 top-0 block opacity-0 transition-all duration-200 [transform:translateY(-50%)_rotateX(90deg)] group-hover:opacity-100 group-hover:[transform:translateY(0)_rotateX(0)] ">
//                     {subCat.name}
//                   </span>
//                 </div>
//               </Link>
//             ))}
//             <button className="flex items-start gap-2 break-inside-avoid overflow-hidden whitespace-nowrap font-normal text-[16px] 3xl:text-[18px] leading-6.25 text-[#F05A28] hover:underline underline-offset-4 cursor-pointer">
//               {/* bg-[#FD7034] */}
//               <ArrowRight size={18} className="mt-0.5 shrink-0" /> View all
//             </button>
//           </div>
//         </div>
//       </div>
//     </MegaMenuWrapper>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MegaMenuProps } from "./types-of-navhead/MegaMenuType";
import MegaMenuWrapper from "./MegaMenuWrapper";

export default function ITwo({ relatedSubCats, category }: MegaMenuProps) {
  const COLUMN_COUNT = 5;
  const ITEMS_PER_COLUMN = 9;

  const columns = Array.from({ length: COLUMN_COUNT }, (_, index) => {
    // Reserve one slot in the last column for "View all"
    const maxItems =
      index === COLUMN_COUNT - 1
        ? ITEMS_PER_COLUMN - 1
        : ITEMS_PER_COLUMN;

    const start =
      index < COLUMN_COUNT - 1
        ? index * ITEMS_PER_COLUMN
        : (COLUMN_COUNT - 1) * ITEMS_PER_COLUMN;

    return relatedSubCats.slice(start, start + maxItems);
  });

  return (
    <MegaMenuWrapper className="border-t lg:translate-x-[-15%] xl:translate-x-[-44%] lg:w-[1500px] xl:w-[2000px] 3xl_v2:w-[2400px] 4xl:w-[3500px] 10xl:w-[6000px] lg:h-[255px] xl:h-[320px] flex justify-center py-[40px]">
      <div className="w-full md:max-w-[90vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto h-full flex items-stretch">
        {/* Image */}
        <div className="w-44 h-full 3xl:w-107.75 shrink-0  flex items-center justify-center">
          <Image
            src="/nav-logo/nav.jpg"
            alt="Category 2 Machine"
            width={431}
            height={271}
            className="w-full h-full object-contain rounded-[21px]"
          />
        </div>

        {/* Content */}
        <div className="ml-6.75 flex-1 h-full overflow-hidden">
          <div className="grid h-full grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-4.5">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-1.5">
                {column.map((subCat) => (
                  <Link
                    key={subCat._id}
                    href={`/category/${category.slug}/${subCat.slug}`}
                    className="group relative flex items-start gap-[6.5px] whitespace-nowrap font-normal text-[16px] 3xl:text-[18px] leading-6.25 tracking-[1px]"
                  >
                    <ArrowRight
                      size={18}
                      className="mt-0.5 shrink-0 text-[#757575]"
                    />

                    <div className="relative overflow-hidden h-6">
                      <span className="block transition-all tracking-[0.5px] duration-200 [transform:translateY(0)_rotateX(0)] group-hover:opacity-0 group-hover:[transform:translateY(50%)_rotateX(90deg)] text-[#3C3C3C]">
                        {subCat.name}
                      </span>

                      <span className="absolute left-0 top-0 tracking-[0.5px] block opacity-0 transition-all duration-200 [transform:translateY(-50%)_rotateX(90deg)] group-hover:opacity-100 group-hover:[transform:translateY(0)_rotateX(0)] text-[#3C3C3C]">
                        {subCat.name}
                      </span>
                    </div>
                  </Link>
                ))}

                {columnIndex === columns.length - 1 && (
                  <button className="flex items-start tracking-[0.5px] gap-[6.5px] font-normal text-[16px] 3xl:text-[18px] leading-6.25 text-[#F05A28] hover:underline underline-offset-4 cursor-pointer">
                    <ArrowRight
                      size={18}
                      className="mt-0.5 shrink-0 text-orange-500"
                    />
                    View all
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MegaMenuWrapper>
  );
}