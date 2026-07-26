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
      {products.map((product, idx) => (
        <div
          key={idx}
          className={`relative flex flex-col group cursor-pointer mx-auto snap-start ${
            isHorizontal ? "w-[189px] shrink-0" : "w-full"
          }`}
        >
          {/* Image */}
          <div
            className={`relative ${
              isHorizontal
                ? "w-full aspect-[152/158] md:w-[187px] md:aspect-[187/194]"
                : "xl:w-[211px] xl:aspect-[211/220] 3xl:w-66.5 3xl:aspect-[266/278]"
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
              <div className="absolute bottom-0 right-0 w-[68px] h-[68px] xl:w-[84px] xl:h-[84px] bg-white rounded-tl-[36px] xl:rounded-tl-[42px] z-10 pointer-events-none" />

              {/* Top Curve */}
              <div className="absolute bottom-[68px] right-0 xl:bottom-[84px] w-5 h-5 xl:w-8 xl:h-8 z-10 pointer-events-none">
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
              <div className="absolute bottom-0 right-[68px] xl:right-[84px] w-5 h-5 xl:w-8 xl:h-8 z-10 pointer-events-none">
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
            <div className="absolute bottom-[4px] right-[4px] xl:bottom-[8px] xl:right-[8px] w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] rounded-full bg-[#111827] group-hover:bg-[#FD7034] text-white flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 z-20 shadow-md">
              <ArrowUpRight className="w-6 h-6 xl:w-7 xl:h-7" strokeWidth={2} />
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
