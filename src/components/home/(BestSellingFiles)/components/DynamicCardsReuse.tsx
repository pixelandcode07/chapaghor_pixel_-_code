import { TopNComboIcon } from "@/components/custom/icons";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Product = {
  name: string;
  src: string;
};

type DynamicCardsReuseProps = {
  products: Product[];
  isHorizontal?: boolean;
};

export default function DynamicCardsReuse({
  products,
  isHorizontal = false,
}: DynamicCardsReuseProps) {
  return (
    <>
      {products.slice(0, 6).map((product, idx) => (
        <div
          key={idx}
          className={`relative flex flex-col group cursor-pointer mx-auto snap-start ${
            isHorizontal ? "w-[151px] md:w-46.75 shrink-0" : "w-full"
          }`}
        >
          {/* Image Container */}
          <div
            className={`relative ${
              isHorizontal
                ? "w-full aspect-151/157 md:w-46.75 md:aspect-187/194"
                : "xl:w-full xl:aspect-189/207  1xl:aspect-199/207 3xl:aspect-265/275"
                // 1xl:w-49.75 3xl:w-66.5
            }`}
          >
            <div className="absolute inset-0 overflow-hidden rounded-[16px] 3xl:rounded-[20px] bg-white border border-gray-100">
              <Image
                src={product.src}
                alt={product.name}
                fill
                className="object-cover"
                // group-hover:scale-105 transition-all duration-700
              />

              {/* Corner glow behind the arrow button.
                  Old approach: a solid white square + 2 curve SVGs, each sized
                  per-breakpoint by hand. The image's own rounded-br radius was
                  fixed at 50px/80px(hover) while those pieces were sized
                  separately per breakpoint — they never quite matched, so a
                  hard white edge/seam showed up against the photo.
                  New approach: one element, one radial mask. The mask fades
                  fully to transparent before it reaches the element's own
                  edge, so there's no hard border to see no matter what's
                  underneath — and it reads as a soft blur, not a white patch. */}
              <div
                className="absolute bottom-0 right-0 z-10 pointer-events-none
                           backdrop-blur-md bg-white/30
                           transition-transform duration-300 origin-bottom-right group-hover:scale-110
                           w-[64px] h-[64px] md:w-[72px] md:h-[72px] xl:w-[84px] xl:h-[84px] 1xl:w-[92px] 1xl:h-[92px] 3xl:w-[112px] 3xl:h-[112px]"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at 100% 100%, black 32%, transparent 68%)",
                  maskImage:
                    "radial-gradient(circle at 100% 100%, black 32%, transparent 68%)",
                }}
              />
            </div>

            {/* Arrow */}
            <div 
              className="absolute rounded-full bg-[#1D2939]  text-white flex items-center justify-center transition-all duration-300 z-20 bottom-0 right-0 w-[37px] h-[37px] md:w-[51px] md:h-[51px] xl:w-[46px] xl:h-[46px] 1xl:w-[52px] 1xl:h-[52px] 3xl:w-[71px] 3xl:h-[71px] group-hover:bg-[#FD7034]"
            >
              
              {/* bottom-[4px] right-[4px] md:bottom-[6px] md:right-[6px] xl:bottom-[8px] xl:right-[8px] 1xl:bottom-[10px] 1xl:right-[10px] 3xl:bottom-[0px] 3xl:right-[0px] */}
              {/* group-hover:-translate-y-1 group-hover:translate-x-1 shadow-md */}
              {/* <ArrowUpRight 
                className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 1xl:w-7 1xl:h-7 3xl:w-8 3xl:h-8" 
                strokeWidth={2} 
              /> */}
              <TopNComboIcon className="w-5.75 h-5.75 md:w-8 md:h-8 xl:w-7.5 xl:h-7.5 1xl:w-8.25 1xl:h-8.25 3xl:w-11.25 3xl:h-11.25"  />
            </div>
          </div>

          {/* Title */}
          <div className="mt-2.75 md:mt-4 xl:mt-3.5 1xl:mt-4 3xl:mt-5 flex justify-center">
            <span
              className={`bg-[#F4F4F5] text-[#012C60] font-normal rounded-[8px] xl:rounded-[10px] group-hover:bg-[#E5E7EB] transition-colors text-center truncate block ${
                isHorizontal
                  ? "w-full text-xs p-1 md:py-2 lg:p-1.5 md:text-[15px]"
                  : "w-full text-[13px]  xl:text-[12px] 3xl:text-[24px] p-1 lg:py-1 tracking-[0.5px]"
              }`}
            >
              {product.name}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}