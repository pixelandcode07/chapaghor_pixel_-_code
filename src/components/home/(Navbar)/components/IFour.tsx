import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MegaMenuProps } from "./types-of-navhead/MegaMenuType";
import MegaMenuWrapper from "./MegaMenuWrapper";

export default function IFour({ relatedSubCats, category }: MegaMenuProps) {
  const COLUMN_COUNT = 4;
  const ITEMS_PER_COLUMN = 10;

  const columns = Array.from({ length: COLUMN_COUNT }, (_, index) => {
    // Last column: reserve one slot for "View all"
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
    <MegaMenuWrapper className="w-full py-10">
     {/* <div className="w-full h-full flex items-stretch xl:pl-44"> */}
     <div className="w-full h-full flex items-stretch">
        {/* Image */}
        <div className="md:w-72.5 xl:w-107.75 h-76.25 shrink-0  flex items-center justify-center">
          <Image
            src="/nav-logo/nav.jpg"
            alt="Category 4 Machine"
            width={431}
            height={271}
            className="w-full h-full object-fill rounded-[21px]"
          />
        </div>

        {/* Content */}
        <div className="md:ml-4 xl:ml-16 flex-1 h-full overflow-hidden">
          <div className="grid h-full grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-x-4.5">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-[7.5px]">
                {column.map((subCat) => (
                  <Link
                    key={subCat._id}
                    href={`/category/${category.slug}/${subCat.slug}`}
                    className="group relative flex items-start gap-[6.5px] whitespace-nowrap font-light text-[16px] 3xl:text-[18px] leading-5 tracking-[1px]"
                  >
                    <ArrowRight
                      size={13} className="mt-1.25 shrink-0 text-[#757575]" 
                    />

                    <div className="relative overflow-hidden h-6">
                      <span className="block transition-all duration-200 tracking-[0.5px] [transform:translateY(0)_rotateX(0)] group-hover:opacity-0 group-hover:[transform:translateY(50%)_rotateX(90deg)] text-[#3C3C3C] ">
                        {subCat.name}
                      </span>

                      <span className="absolute left-0 top-0 block text-[#3C3C3C] tracking-[0.5px] opacity-0 transition-all duration-200 [transform:translateY(-50%)_rotateX(90deg)] group-hover:opacity-100 group-hover:[transform:translateY(0)_rotateX(0)] ">
                        {subCat.name}
                      </span>
                    </div>
                  </Link>
                ))}

                {columnIndex === columns.length - 1 && (
                  <button className="flex items-start gap-[6.5px] font-normal text-[16px] 3xl:text-[18px] tracking-[0.5px] leading-6.25 text-[#F05A28] hover:underline underline-offset-4 cursor-pointer">
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