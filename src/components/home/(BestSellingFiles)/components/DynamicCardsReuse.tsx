// import { ArrowUpRight } from 'lucide-react'
// import Image from 'next/image'

// type Product = {
//     name: string;
//     src: string;
// }

// type DynamicCardsReuseProps = {
//     products: Product[];
//     index?: number;
// }

// export default function DynamicCardsReuse({ products, index }: DynamicCardsReuseProps) {
//     return (
//         <>
//             {products.map((product, idx) => (
//                 <div
//                     key={idx}
//                     className="relative flex flex-col group cursor-pointer w-full  mx-auto"
//                 >

//                     {/* Image & Cutout Wrapper */}
//                     <div className="relative 3xl:w-[266px] 3xl:aspect-[266/277]">

//                         {/* Inner image box */}
//                         <div className="absolute inset-0 rounded-[16px] xl:rounded-[30px] overflow-hidden bg-white border border-gray-100">
//                             <Image
//                                 src={product.src}
//                                 alt={product.name}
//                                 fill
//                                 className="object-cover rounded-br-[50px] hover:rounded-br-[80px] group-hover:scale-105 transition-transform duration-700"
//                             />

//                             {/* White block for the cutout */}
//                             <div className="absolute -bottom-1 -right-1 3xl:bottom-auto 3xl:right-auto 3xl:left-[239px] 3xl:top-[251px] w-[68px] h-[68px] xl:w-[80px] xl:h-[80px] bg-white rounded-tl-[32px] xl:rounded-tl-[38px] z-10 pointer-events-none" />

//                             {/* Concave curve (Top edge) */}
//                             <div className="absolute bottom-[63px] 3xl:bottom-auto 3xl:right-auto 3xl:top-[219px] 3xl:left-[283px] w-5 h-5 xl:w-8 xl:h-8 z-10 pointer-events-none">
//                                 <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-white">
//                                     <path d="M0 32 C 22 32, 32 22, 32 0 L 32 32 Z" fill="currentColor" />
//                                 </svg>
//                             </div>

//                             {/* Concave curve (Left edge) */}
//                             <div className="absolute -bottom-0.5 right-[63px] 3xl:bottom-auto 3xl:right-auto 3xl:top-[295px] 3xl:left-[207px] w-5 h-5 xl:w-8 xl:h-8 z-10 pointer-events-none ">
//                                 <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-white">
//                                     <path d="M0 32 C 22 32, 32 22, 32 0 L 32 32 Z" fill="currentColor" />
//                                 </svg>
//                             </div>
//                         </div>

//                         {/* Circular Button */}
//                         <div className="absolute bottom-[4px] right-[4px] xl:bottom-[6px] xl:right-[6px] 3xl:bottom-auto 3xl:right-auto 3xl:left-[249px] 3xl:top-[261px] w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] bg-[#111827] group-hover:bg-[#FD7034] text-white flex items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 z-20 shadow-md">
//                             <ArrowUpRight className="w-6 h-6 xl:w-7 xl:h-7" strokeWidth={2} />
//                         </div>
//                     </div>

//                     {/* Product Title Pill */}
//                     <div className="mt-3 xl:mt-4 flex items-center justify-center w-full">
//                         <span className="w-full text-center bg-[#F4F4F5] text-[#012C60] text-[14px] xl:text-[16px] 3xl:text-[27px] font-normal px-2 py-2.5 xl:py-2.75 rounded-[8px] xl:rounded-[10px] group-hover:bg-[#E5E7EB] transition-colors tracking-wide block truncate">
//                             {product.name}
//                         </span>
//                     </div>
//                 </div>
//             ))}
//         </>
//     )
// }


import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Product = {
  name: string;
  src: string;
};

type DynamicCardsReuseProps = {
  products: Product[];
  index?: number;
};

export default function DynamicCardsReuse({
  products,
}: DynamicCardsReuseProps) {
  return (
    <>
      {products.map((product, idx) => (
        <div
          key={idx}
          className="relative flex flex-col group cursor-pointer w-full mx-auto"
        >
          {/* Image Wrapper */}
          <div className="relative xl:w-[266px] xl:aspect-[266/277]">
            {/* Image */}
            <div className="absolute inset-0 rounded-[16px] xl:rounded-[30px] overflow-hidden bg-white border border-gray-100">
              <Image
                src={product.src}
                alt={product.name}
                fill
                className="object-cover rounded-br-[50px] hover:rounded-br-[80px] group-hover:scale-105 transition-all duration-700"
              />

              {/* White Cutout */}
              <div className="absolute bottom-0 right-0 w-[68px] h-[68px] xl:w-[84px] xl:h-[84px] bg-white rounded-tl-[36px] xl:rounded-tl-[42px] z-10 pointer-events-none" />

              {/* Top Concave Curve */}
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

              {/* Left Concave Curve */}
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

            {/* Arrow Button */}
            <div className="absolute bottom-[4px] right-[4px] xl:bottom-[8px] xl:right-[8px] w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] bg-[#111827] group-hover:bg-[#FD7034] text-white flex items-center justify-center rounded-full transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 z-20 shadow-md">
              <ArrowUpRight
                className="w-6 h-6 xl:w-7 xl:h-7"
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Product Title */}
          <div className="mt-3 xl:mt-4 flex items-center justify-center w-full">
            <span className="w-full text-center bg-[#F4F4F5] text-[#012C60] text-[14px] xl:text-[22px] font-normal px-2 py-2.5 xl:py-2.75 rounded-[8px] xl:rounded-[10px] group-hover:bg-[#E5E7EB] transition-colors tracking-wide block truncate">
              {product.name}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}