// import Image from 'next/image';
// import Link from 'next/link';

// interface Product {
//   name: string;
//   moq: number;
//   views: number;
//   src: string;
//   price?: number;
// }

// interface CardBoxProps {
//   title: string;
//   products: Product[];
// }

// export default function CardBox({ title, products }: CardBoxProps) {
//   return (
//     <div
//       className="
//         bg-white
//         border-0
//         border-[#EAEAEC]
//         rounded-[16px]

//         pt-[6px]
//         3xl:pt-[18px]
//         1xl:pt-[13px]
//         xl:pt-[12px]

//         pb-[30px]
//         3xl:pb-[52px]

//         px-[20px]
//         md:pl-[19px]
//         md:pr-0
//         pr-0
//         pl-[10px]
//         3xl:px-[55px]
//         1xl:px-[40px]
//         xl:px-[36px]
//       "
//     >
//       {/* Header */}
//       <div
//         className="
//           flex
//           justify-between
//           items-center

//           mb-[5px]
//           md:mb-[11px]

//           3xl:mb-[10px]
//           1xl:mb-[7px]
//           xl:mb-[7px]
//         "
//       >
//         {/* Title */}
//         <h2
//           className="
//             m-0
//             p-0
//             leading-none
//             text-[#333333]

//             text-[18px]
//             md:text-[30px]

//             3xl:text-[42px]
//             1xl:text-[30px]
//             xl:text-[28px]

//             font-light
//             font-['Helvetica_Neue',Helvetica,sans-serif]
//           "
//         >
//           {title}
//         </h2>

//         {/* View All */}
//         <Link
//           href="#"
//           className="
//             text-[#FF6B00]

//             text-[11px]
//             md:text-[21px]

//             3xl:text-[30px]
//             1xl:text-[22px]
//             xl:text-[20px]
            
//             md:pr-[33px]
//             pr-[15px]

//             hover:underline
//             font-light
//             leading-none
//           "
//         >
//           View All
//         </Link>
//       </div>

//       {/* Divider */}
//       <div
//         className="
//           border-t
//           border-[#EAEAEC]

//           mb-[10px]
//           md:mb-[24px]
//           3xl:mb-[40px]
//           1xl:mb-[25px]
//           xl:mb-[22px]
//         "
//       />

//       {/* Products */}
//       <div
//         className="
//           /*
//            * MOBILE & MD = Horizontal scroll
//            */
//           flex
//           gap-[12px]
//           md:gap-[18px]
          
//           overflow-x-auto
//           overflow-y-hidden
//           scroll-smooth
//           pb-[4px]
          
//           /* Hide Scrollbar for Mobile & Tablet */
//           [scrollbar-width:none]
//           [-ms-overflow-style:none]
//           [&::-webkit-scrollbar]:hidden

//           /*
//            * Reset to Grid for Desktop (LG and above)
//            * To keep the desktop layout intact
//            */
//           lg:grid
//           lg:grid-cols-4
//           xl:grid-cols-6
//           lg:overflow-visible

//           3xl:gap-[24px]
//         "
//       >
//         {products.map((product, idx) => (
//           <div
//             key={idx}
//             className="
//               relative
//               group
//               rounded-[12px]
//               overflow-hidden
//               cursor-pointer
//               bg-gray-100
//               flex
//               flex-col
              
//               /*
//                * MOBILE ONLY
//                * Fixed width for horizontal scroll
//                */
//               w-[132px]
//               min-w-[143px]
//               shrink-0

//               /*
//                * MD ONLY
//                * Fixed width to match your 768px tablet design
//                */
//               md:w-[190px]
//               md:min-w-[190px]
//               md:shrink-0

//               /*
//                * LG & ABOVE
//                * Reset back to grid auto width
//                */
//               lg:w-auto
//               lg:min-w-0
//               lg:shrink
//             "
//           >
//             {/* Price Badge */}
//             <div
//               className="
//                 absolute
//                 top-2
//                 right-2

//                 bg-black/30
//                 backdrop-blur-md

//                 text-white
//                 text-[7px]

//                 xl:text-[9px]

//                 px-1.25
//                 xl:px-[9px]
//                 md:px-[9px]

//                 xl:py-0.75
//                 md:py-0
//                 py-0

//                 rounded-full
//                 z-10

//                 flex
//                 items-center
//                 gap-[1px]

//                 xl:gap-[3px]
//               "
//             >
//               <Image
//                 src="/combo/Taka Icon.svg"
//                 alt="Taka"
//                 width={12}
//                 height={12}
//                 className="
//                   w-[9px]
//                   h-[9px]

//                   xl:w-[9px]
//                   xl:h-[9px]

//                   object-contain
//                   brightness-0
//                   invert
//                 "
//               />

//               <span>135</span>
//             </div>

//             {/* Product Image */}
//             <div
//               className="
//                 relative
//                 w-full
//                 aspect-[264/285]
//                 overflow-hidden
//               "
//             >
//               <Image
//                 src={product.src}
//                 alt={product.name}
//                 fill
//                 className="
//                   object-cover
//                   transition-transform
//                   duration-300
//                   group-hover:scale-105
//                 "
//               />
//             </div>

//             {/* Overlay Text */}
//             <div
//               className="
//                 absolute
//                 bottom-0
//                 left-0
//                 w-full

//                 px-[9px]
//                 pb-[7px]

//                 xl:pb-[9px]
//                 md:pb-[10px]

//                 flex
//                 flex-col
//                 justify-end
//               "
//             >
//               <h3
//                 className="
//                   m-0
//                   p-0
//                   leading-none
//                   text-white
//                   font-bold

//                   text-[9px]

//                   xl:text-[12px]
//                   md:text-[13px]
//                   1xl:text-[14px]
//                   3xl:text-[16px]

//                   tracking-[1px]
//                   uppercase
//                 "
//               >
//                 {product.name}
//               </h3>

//               <p
//                 className="
//                   m-0
//                   p-0

//                   mt-[3px]

//                   xl:mt-[3px]
//                   md:mt-[3px]
//                   1xl:mt-[4px]
//                   3xl:mt-[5px]

//                   leading-none
//                   text-white/80

//                   text-[6px]

//                   xl:text-[7px]
//                   md:text-[8px]
//                   1xl:text-[8px]
//                   3xl:text-[11px]
//                 "
//               >
//                 MOQ: {product.moq} | {product.views} views
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  CustomSquareArrowOutUpRight,
  TakaIcon,
} from "@/components/custom/icons";

interface Product {
  name: string;
  moq: number;
  views: number;
  src: string;
  price?: number;
}

interface CardBoxProps {
  title: string;
  products: Product[];
}

const face1Variants: Variants = {
  hidden: {
    top: 0,
    bottom: 0,
  },

  visible: {
    top: 0,
    bottom: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },

  hover: {
    top: -10,
    bottom: 32,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const face2Variants: Variants = {
  hidden: {
    y: 0,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },

  hover: {
    y: 22,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function CardBox({ title, products }: CardBoxProps) {
  const [isXlOrAbove, setIsXlOrAbove] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleResize = () => {
      setIsXlOrAbove(mediaQuery.matches);
    };

    handleResize();

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div className="bg-white border-0 border-[#EAEAEC] rounded-[16px] pt-[6px] 3xl:pt-[18px] 1xl:pt-[13px] xl:pt-[12px] pb-[30px] 3xl:pb-[52px] px-[20px] md:pl-[19px] md:pr-0 pr-0 pl-[10px] 3xl:px-[55px] 1xl:px-[40px] xl:px-[36px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-[5px] md:mb-[11px] 3xl:mb-[10px] 1xl:mb-[7px] xl:mb-[7px]">
        {/* Title */}
        <h2 className="m-0 p-0 leading-none text-[#333333] text-[18px] md:text-[30px] 3xl:text-[42px] 1xl:text-[30px] xl:text-[28px] font-light font-['Helvetica_Neue',Helvetica,sans-serif]">
          {title}
        </h2>

        {/* View All */}
        <Link
          href="#"
          className="text-[#FF6B00] text-[11px] md:text-[21px] 3xl:text-[30px] 1xl:text-[22px] xl:text-[20px] md:pr-[33px] pr-[15px] hover:underline font-light leading-none"
        >
          View All
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t border-[#EAEAEC] mb-[10px] md:mb-[24px] 3xl:mb-[40px] 1xl:mb-[25px] xl:mb-[22px]" />

      {/* Products */}
     <div className="flex gap-[12px] md:gap-[18px] overflow-x-auto overflow-y-hidden scroll-smooth pb-[4px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden xl:grid xl:grid-cols-6 xl:overflow-visible 3xl:gap-[24px]">
        {products.map((product, idx) => (
          <div key={idx} className="relative group w-[132px] min-w-[143px] shrink-0 md:w-[190px] md:min-w-[190px] md:shrink-0 xl:w-auto xl:min-w-0 xl:shrink">
            {/* Animation Wrapper */}
            <motion.div
              initial="visible"
              whileHover={isXlOrAbove ? "hover" : undefined}
              className="relative w-full aspect-[133/143] md:aspect-[189/204] xl:aspect-[264/285]"
            >
              {/* Face 2 */}
              <motion.div
                variants={face2Variants}
                className="absolute bottom-0 left-0 right-0 h-[70px] md:h-[80px] xl:h-[60px] 1xl:h-[80px] 3xl:h-[100px] bg-[#6838A2] rounded-b-[12px] md:rounded-b-[14px] xl:rounded-b-[15px] 3xl:rounded-b-[17px] flex items-end justify-center pb-[6px] md:pb-[8px] xl:pb-[9px] 1xl:pb-[10px] 3xl:pb-[12px] z-0"
              >
                <h2 className="flex items-center justify-center gap-[2px] text-[9px] md:text-[11px] xl:text-[12px] 1xl:text-[14px] 3xl:text-[16px] font-light text-white tracking-[0.5px]">
                  ORDER
                  <CustomSquareArrowOutUpRight className="size-3 xl:size-4.5 mb-1 xl:mt-1 ml-1" />
                </h2>
              </motion.div>

              {/* Face 1 */}
              <motion.div
                variants={face1Variants}
                className="absolute left-0 right-0 overflow-hidden rounded-[12px] md:rounded-[12px] bg-gray-100 z-10"
              >
                {/* Price Badge */}
                <div className="absolute top-2 right-2 bg-black/30 backdrop-blur-md text-white text-[7px] xl:text-[9px] px-1.25 xl:px-[9px] md:px-[9px] xl:py-0.75 md:py-0 py-0 rounded-full z-10 flex items-center gap-[1px] xl:gap-[3px]">
                  <TakaIcon className="w-[7px] h-[11px] xl:w-[8px] xl:h-[10px] 1xl:w-[9px] 1xl:h-[11px] 3xl:w-[10px] 3xl:h-[12px] text-white" />

                  <span>{product.price ?? 135}</span>
                </div>

                {/* Product Image */}
                <div className="relative w-full aspect-[133/143] md:aspect-[189/204] xl:aspect-[264/285] overflow-hidden">
                  <Image
                    src={product.src}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 "
                  />
                </div>

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 w-full px-[9px] pb-[7px] xl:pb-[9px] md:pb-[10px] flex flex-col justify-end pt-[35%] group-hover:bg-[linear-gradient(179.6deg,rgba(255,255,255,0)_18.12%,#FF2E00_67.58%)]">
  <h3 className="m-0 p-0 leading-none text-white font-bold text-[9px] xl:text-[12px] md:text-[13px] 1xl:text-[14px] 3xl:text-[16px] tracking-[1px] uppercase">
    {product.name}
  </h3>

  <p className="m-0 p-0 mt-[3px] xl:mt-[3px] md:mt-[3px] 1xl:mt-[4px] 3xl:mt-[5px] leading-none text-white/80 text-[6px] xl:text-[7px] md:text-[8px] 1xl:text-[8px] 3xl:text-[11px]">
    MOQ: {product.moq} | {product.views} views
  </p>
</div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}