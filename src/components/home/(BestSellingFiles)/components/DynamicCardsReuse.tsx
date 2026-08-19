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
                : "xl:w-full xl:aspect-189/207 1xl:w-49.75 1xl:aspect-199/207 3xl:w-66.5 3xl:aspect-266/278"
            }`}
          >
            <div className="absolute inset-0 overflow-hidden rounded-[16px] 3xl:rounded-[20px] bg-white border border-gray-100">
              <Image
                src={product.src}
                alt={product.name}
                fill
                className="object-cover rounded-br-[50px] group-hover:rounded-br-[80px] group-hover:scale-105 transition-all duration-700"
              />

              {/* White Cutout */}
              <div 
                className="absolute bottom-0 right-0 bg-white z-10 pointer-events-none
                           w-[44px] h-[44px] md:w-[50px] md:h-[50px] xl:w-[56px] xl:h-[56px] 1xl:w-[62px] 1xl:h-[62px] 3xl:w-[76px] 3xl:h-[76px]
                           rounded-tl-[24px] md:rounded-tl-[25px] xl:rounded-tl-[28px] 1xl:rounded-tl-[30px] 3xl:rounded-tl-[41px]" 
              />

              {/* Top Curve */}
              <div 
                className="absolute right-0 z-10 pointer-events-none 
                           bottom-[43px] md:bottom-[50px] xl:bottom-[55px] 1xl:bottom-[62px] 3xl:bottom-[76px] 
                           w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 1xl:w-7 1xl:h-7 3xl:w-8 3xl:h-8"
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-full h-full text-white"
                >
                  <path
                    d="M0 32 C22 32, 32 28, 32 0 L32 32 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Left Curve */}
              <div 
                className="absolute bottom-0 z-10 pointer-events-none 
                           right-[43px] md:right-[50px] xl:right-[55px] 1xl:right-[62px] 3xl:right-[76px] 
                           w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 1xl:w-7 1xl:h-7 3xl:w-8 3xl:h-8"
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-full h-full text-white"
                >
                  <path
                    d="M0 32 C22 32, 32 28, 32 0 L32 32 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {/* Arrow */}
            <div 
              className="absolute rounded-full bg-[#1D2939] group-hover:bg-[#FD7034] text-white flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 z-20 shadow-md bottom-0 right-0
                          
                         w-[40px] h-[40px] md:w-[45px] md:h-[45px] xl:w-[52px] xl:h-[52px] 1xl:w-[58px] 1xl:h-[58px] 3xl:w-[70px] 3xl:h-[70px]"
            >
              {/* bottom-[4px] right-[4px] md:bottom-[6px] md:right-[6px] xl:bottom-[8px] xl:right-[8px] 1xl:bottom-[10px] 1xl:right-[10px] 3xl:bottom-[0px] 3xl:right-[0px] */}
              <ArrowUpRight 
                className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 1xl:w-7 1xl:h-7 3xl:w-8 3xl:h-8" 
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