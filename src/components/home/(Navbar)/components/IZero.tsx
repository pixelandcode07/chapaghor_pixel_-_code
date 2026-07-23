import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MegaMenuProps } from "./types-of-navhead/MegaMenuType";
import MegaMenuWrapper from "./MegaMenuWrapper";

export default function IZero({ relatedSubCats, category }: MegaMenuProps) {
  const COLUMN_COUNT = 5;
  const ITEMS_PER_COLUMN = 9;

  const columns = Array.from({ length: COLUMN_COUNT }, (_, index) => {
    // Last column: reserve one slot for "View all"
    const maxItems =
      index === COLUMN_COUNT - 1
        ? ITEMS_PER_COLUMN - 1 // 7 items
        : ITEMS_PER_COLUMN; // 8 items

    const start =
      index < COLUMN_COUNT - 1
        ? index * ITEMS_PER_COLUMN
        : (COLUMN_COUNT - 1) * ITEMS_PER_COLUMN;

    return relatedSubCats.slice(start, start + maxItems);
  });

  return (
    <MegaMenuWrapper className="border-t lg:translate-x-[-15%] xl:translate-x-[-33%] lg:w-[1500px] xl:w-[2000px] 3xl_v2:w-[2400px] 4xl:w-[3500px] 10xl:w-[6000px] lg:h-[255px] xl:h-[355px] flex justify-center py-[40px] ">
      <div className="w-full md:max-w-[90vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto h-full flex items-stretch">
        {/* Image */}
        <div className="w-44 h-full 3xl:w-107.75 shrink-0  flex items-center justify-center border">
          <Image
            src="/nav-logo/nav.jpg"
            alt="Offset Print Machine"
            // fill
            width={431}
            height={270}
            className="w-full h-full object-contain rounded-[21px]"
          />
        </div>

        {/* Content */}
        <div className="ml-16 flex-1 h-full  overflow-hidden border">
          <div className="grid h-full grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-4.5">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-1.5">
                {column.map((subCat) => (
                  <Link
                    key={subCat._id}
                    href={`/category/${category.slug}/${subCat.slug}`}
                    className="group relative flex items-start gap-[6.5px]  whitespace-nowrap font-light text-[16px] 3xl:text-[18px] leading-6.25 tracking-[1px] "
                  >
                    {/* Icon */}
                    <ArrowRight size={18} className="mt-0.5 shrink-0 text-[#757575]" />

                    {/* Animated Text */}
                    <div className="relative overflow-hidden h-6">
                      <span className="block transition-all duration-200 [transform:translateY(0)_rotateX(0)] group-hover:opacity-0 group-hover:[transform:translateY(50%)_rotateX(90deg)] text-[#3C3C3C] tracking-[0.5px]">
                        {subCat.name}
                      </span>

                      <span className="absolute left-0 top-0 block opacity-0 transition-all duration-200 [transform:translateY(-50%)_rotateX(90deg)] group-hover:opacity-100 group-hover:[transform:translateY(0)_rotateX(0)] text-[#3C3C3C] tracking-[0.5px]">
                        {subCat.name}
                      </span>
                    </div>
                  </Link>
                ))}

                {columnIndex === columns.length - 1 && (
                  <button className="flex items-start gap-[6.5px] font-normal text-[16px] 3xl:text-[18px] leading-6.25 text-[#F05A28] hover:underline underline-offset-4 cursor-pointer tracking-[0.5px]">
                    <ArrowRight size={18} className="mt-0.5 shrink-0 text-orange-500" />
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
