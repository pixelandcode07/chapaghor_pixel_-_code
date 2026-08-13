"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { useEffect, useState } from "react";
import { comboData } from "../ComboFile";
import { TakaIcon } from "../../../custom/icons";

export default function DynamicCards({
  item,
  isHorizontal = false,
}: {
  item: (typeof comboData)[0];
  isHorizontal?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycles the layers every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % item.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [item.images.length]);

  return (
    <div
      className={`relative group cursor-pointer ${
        isHorizontal ? "w-35 md:w-47 shrink-0 snap-start" : ""
      }`}
    >
      {/* Background Wrapper with Magic UI BorderBeam */}
      <div
        className={`absolute top-0 left-0 rounded-[23px] bg-white/10 backdrop-blur-md z-0 transition-colors duration-300 group-hover:bg-white/10 overflow-hidden ${
          isHorizontal
            ? "w-full aspect-140/139 md:w-47 md:aspect-188/194"
            : "xl:w-full xl:aspect-214/180 1xl:w-full 1xl:aspect-246/207 3xl:w-full 3xl:aspect-283/283"
        }`}
      >
        <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-red-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          borderWidth={2}
          className="from-transparent via-blue-500 to-transparent"
        />
      </div>

      {/* Title */}
      <div
        className={`relative z-10 text-white font-medium flex justify-between items-center border-b border-[#686868] ${
          isHorizontal
            ? "text-sm pt-5 px-4 pb-3 mb-10"
            : "text-[16px] xl:text-[18px] 3xl:text-[22px] pt-[29px] px-[25px] pb-[15px] mb-12.5 mx-0.5"
        }`}
      >
        <h3 className="truncate xl:truncate 1xl:overflow-visible 1xl:whitespace-normal">
          {item.title}
        </h3>
        <h3 className="flex justify-center items-center text-[#FD7034] shrink-0">
          <span>
            <TakaIcon className="w-6 h-6" />
          </span>
          {item.price}
        </h3>
      </div>

      {/* Stacked Image Container */}
      <div className="relative z-10 pb-4 mt-2">
        <div className="relative w-full aspect-5/4.5 mt-4">
          {" "}
          {/* mt-4 gives room for back layers to peek out top */}
          {/* The 3 Image Layers */}
          {item.images.map((src, index) => {
            const offset =
              (index - currentIndex + item.images.length) % item.images.length;

            const isFront = offset === 0;
            const isMiddle = offset === 1;

            return (
              <motion.div
                key={src}
                initial={false}
                animate={{
                  y: isFront ? 0 : isMiddle ? -12 : -24,
                  scale: isFront ? 1 : isMiddle ? 0.92 : 0.84,
                  zIndex: isFront ? 30 : isMiddle ? 20 : 10,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-[20px] overflow-hidden bg-black shadow-lg origin-top"
              >
                <Image
                  src={src}
                  alt={`${item.title} ${index}`}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    isFront ? "group-hover:scale-105" : ""
                  }`}
                />

                <motion.div
                  initial={false}
                  animate={{
                    opacity: isFront ? 0 : isMiddle ? 0.3 : 0.6,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-black"
                />

                {isFront && (
                  <>
                    {/* Bottom-right Cutout */}
                    <div 
                      className="absolute bottom-0 right-0 bg-black z-40 pointer-events-none
                                 w-[50px] h-[50px] md:w-[68px] md:h-[68px] xl:w-[84px] xl:h-[84px] 1xl:w-[92px] 1xl:h-[92px] 3xl:w-[110px] 3xl:h-[110px]
                                 rounded-tl-[24px] md:rounded-tl-[36px] xl:rounded-tl-[42px] 1xl:rounded-tl-[46px] 3xl:rounded-tl-[54px]" 
                    />

                    {/* Top Curve */}
                    <div 
                      className="absolute right-0 z-40 pointer-events-none 
                                 bottom-[50px] md:bottom-[68px] xl:bottom-[84px] 1xl:bottom-[92px] 3xl:bottom-[110px] 
                                 w-4 h-4 md:w-5 md:h-5 xl:w-8 xl:h-8 1xl:w-9 1xl:h-9 3xl:w-10 3xl:h-10"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        className="w-full h-full text-black"
                      >
                        <path
                          d="M0 32 C22 32 32 22 32 0 L32 32 Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    {/* Left Curve */}
                    <div 
                      className="absolute bottom-0 z-40 pointer-events-none 
                                 right-[50px] md:right-[68px] xl:right-[84px] 1xl:right-[92px] 3xl:right-[110px] 
                                 w-4 h-4 md:w-5 md:h-5 xl:w-8 xl:h-8 1xl:w-9 1xl:h-9 3xl:w-10 3xl:h-10"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        className="w-full h-full text-black"
                      >
                        <path
                          d="M0 32 C22 32 32 22 32 0 L32 32 Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    {/* Arrow */}
                    <div 
                      className="absolute rounded-full bg-[#F05A28] flex items-center justify-center z-50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1
                                 bottom-[4px] right-[4px] md:bottom-[6px] md:right-[6px] xl:bottom-[8px] xl:right-[8px] 1xl:bottom-[10px] 1xl:right-[10px] 3xl:bottom-[12px] 3xl:right-[12px] 
                                 w-[40px] h-[40px] md:w-[50px] md:h-[50px] xl:w-[60px] xl:h-[60px] 1xl:w-[68px] 1xl:h-[68px] 3xl:w-[80px] 3xl:h-[80px]"
                    >
                      <ArrowUpRight
                        className="text-white w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 1xl:w-8 1xl:h-8 3xl:w-10 3xl:h-10"
                        strokeWidth={2}
                      />
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}