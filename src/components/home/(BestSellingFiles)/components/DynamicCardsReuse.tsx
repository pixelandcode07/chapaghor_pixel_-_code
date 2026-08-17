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
            isHorizontal ? "w-35 md:w-46.75 shrink-0" : "w-full"
          }`}
        >
          {/* Image Container */}
          <div
            className={`relative ${
              isHorizontal
                ? "w-full aspect-140/139 md:w-46.75 md:aspect-187/194"
                : "xl:w-43.25 xl:aspect-173/180 1xl:w-49.75 1xl:aspect-199/207 3xl:w-66.5 3xl:aspect-266/278"
            }`}
          >
            <div className="absolute inset-0 overflow-hidden rounded-[16px] xl:rounded-[30px] bg-white border border-gray-100">
              <Image
                src={product.src}
                alt={product.name}
                fill
                className="object-cover rounded-br-[50px] group-hover:rounded-br-[80px] group-hover:scale-105 transition-all duration-700"
              />

              {/* White Cutout */}
              <div 
                className="absolute bottom-0 right-0 bg-white z-10 pointer-events-none
                           w-[50px] h-[50px] md:w-[68px] md:h-[68px] xl:w-[84px] xl:h-[84px] 1xl:w-[92px] 1xl:h-[92px] 3xl:w-[110px] 3xl:h-[110px]
                           rounded-tl-[24px] md:rounded-tl-[36px] xl:rounded-tl-[42px] 1xl:rounded-tl-[46px] 3xl:rounded-tl-[54px]" 
              />

              {/* Top Curve */}
              <div 
                className="absolute right-0 z-10 pointer-events-none 
                           bottom-[50px] md:bottom-[68px] xl:bottom-[84px] 1xl:bottom-[92px] 3xl:bottom-[110px] 
                           w-4 h-4 md:w-5 md:h-5 xl:w-8 xl:h-8 1xl:w-9 1xl:h-9 3xl:w-10 3xl:h-10"
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-full h-full text-white"
                >
                  <path
                    d="M0 32 C22 32, 32 22, 32 0 L32 32 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Left Curve */}
              <div 
                className="absolute bottom-0 z-10 pointer-events-none 
                           right-[50px] md:right-[68px] xl:right-[84px] 1xl:right-[92px] 3xl:right-[110px] 
                           w-4 h-4 md:w-5 md:h-5 xl:w-8 xl:h-8 1xl:w-9 1xl:h-9 3xl:w-10 3xl:h-10"
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-full h-full text-white"
                >
                  <path
                    d="M0 32 C22 32, 32 22, 32 0 L32 32 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {/* Arrow */}
            <div 
              className="absolute rounded-full bg-[#111827] group-hover:bg-[#FD7034] text-white flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 z-20 shadow-md
                         bottom-[4px] right-[4px] md:bottom-[6px] md:right-[6px] xl:bottom-[8px] xl:right-[8px] 1xl:bottom-[10px] 1xl:right-[10px] 3xl:bottom-[12px] 3xl:right-[12px] 
                         w-[40px] h-[40px] md:w-[50px] md:h-[50px] xl:w-[60px] xl:h-[60px] 1xl:w-[68px] 1xl:h-[68px] 3xl:w-[80px] 3xl:h-[80px]"
            >
              <ArrowUpRight 
                className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 1xl:w-8 1xl:h-8 3xl:w-10 3xl:h-10" 
                strokeWidth={2} 
              />
            </div>
          </div>

          {/* Title */}
          <div className="mt-3 xl:mt-4 flex justify-center">
            <span
              className={`bg-[#F4F4F5] text-[#012C60] font-normal rounded-[8px] xl:rounded-[10px] group-hover:bg-[#E5E7EB] transition-colors text-center truncate block ${
                isHorizontal
                  ? "w-full text-xs py-2 px-2"
                  : "w-full text-[13px] md:text-[16px] xl:text-[18px] 3xl:text-[22px] px-2 py-2.5 xl:py-2.75 tracking-[0.5px]"
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