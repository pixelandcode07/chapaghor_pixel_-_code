"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { useEffect, useState } from "react";
import { comboData } from "../ComboFile";
import { TakaIcon, TopNComboIcon } from "../../../custom/icons";

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
        isHorizontal ? "w-[151px] md:w-47 shrink-0 snap-start" : ""
      }`}
    >
      {/* Background Wrapper with Magic UI BorderBeam */}
      <div
        className={`absolute top-0 left-0 rounded-[13px] md:rounded-[15px] xl:rounded-[23px] bg-white/10 backdrop-blur-md z-0 transition-colors duration-300 group-hover:bg-white/10 overflow-hidden ${
          isHorizontal
            ? "w-full aspect-151/157 md:w-47 md:aspect-188/194"
            : "xl:w-full xl:aspect-214/180 1xl:w-full 1xl:aspect-246/207 3xl:w-[284px] 3xl:h-[345px]"
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
            : "text-[16px] xl:text-[18px] 3xl:text-[22px] pt-[29px] px-[25px] pb-[15px] mb-0 mx-0.5"
        }`}
      >
        <h3 className="truncate ">
          {/* xl:truncate 3xl:overflow-visible 3xl:whitespace-normal */}
          {item.title}
        </h3>
        <h3 className="flex justify-center items-center text-[#FD7034] shrink-0">
          <span>
            <TakaIcon className="w-8 h-6" />
          </span>
          {item.price}
        </h3>
      </div>

      {/* Stacked Image Container */}
      <div className="relative z-10 pb-4 mt-[0px] xl:mt-[45px] 1xl:mt-[44px] 3xl:mt-[64px]">
        <div className="relative w-full aspect-212/152 mt-0 3xl:w-[284px] 3xl:h-[209px]">
          {" "}
          {/* mt-4 gives room for back layers to peek out top */}
          {/* The 3 Image Layers */}
          {item.images.map((src, index) => {
            const offset =
              (index - currentIndex + item.images.length) % item.images.length;

            const isFront = offset === 0;
            const isMiddle = offset === 1;
            const [layerOffset, setLayerOffset] = useState(15);
            useEffect(() => {
              const updateLayerOffset = () => {
                const width = window.innerWidth;

                if (width >= 1536) {
                  setLayerOffset(15);
                } else if (width >= 1440) {
                  setLayerOffset(11);
                } else if (width >= 768) {
                  setLayerOffset(10);
                } else {
                  setLayerOffset(7);
                }
              };

              updateLayerOffset();
              window.addEventListener("resize", updateLayerOffset);

              return () => window.removeEventListener("resize", updateLayerOffset);
            }, []);


            return (
               <motion.div
                key={src}
                initial={false}
                
                animate={{
                y: isFront ? 0 : isMiddle ? -layerOffset : -(layerOffset * 2),

                width: isFront
                  ? "100%"
                  : isMiddle
                    ? "90%"
                    : "78.5%",

                zIndex: isFront ? 30 : isMiddle ? 20 : 10,
              }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 rounded-[13px] md:rounded-[15px] xl:rounded-[23px] overflow-hidden bg-black shadow-lg origin-top h-full"
                >
                <Image
                  src={src}
                  alt={`${item.title} ${index}`}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    isFront ? "" : ""
                    // group-hover:scale-105
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
                className="absolute bottom-0 right-0 bg-black z-10 pointer-events-none
                           w-[44px] h-[44px] md:w-[50px] md:h-[50px] xl:w-[56px] xl:h-[56px] 1xl:w-[62px] 1xl:h-[62px] 3xl:w-[76px] 3xl:h-[76px]
                           rounded-tl-[22px] md:rounded-tl-[23px] xl:rounded-tl-[26px] 1xl:rounded-tl-[28px] 3xl:rounded-tl-[39px]" 
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
                  className="w-full h-full text-black"
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
                  className="w-full h-full text-black"
                >
                  <path
                    d="M0 32 C22 32, 32 28, 32 0 L32 32 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

                    {/* Arrow */}
                    {/* bg-[#F05A28] */}
                    <div 
              className="absolute rounded-full bg-[#F05A28] group-hover:bg-[#FD7034] text-white flex items-center justify-center transition-all duration-300  z-20  bottom-0 right-0
               w-[40px] h-[40px] md:w-[45px] md:h-[45px] xl:w-[52px] xl:h-[52px] 1xl:w-[58px] 1xl:h-[58px] 3xl:w-[70px] 3xl:h-[70px]">
              {/* bottom-[4px] right-[4px] md:bottom-[6px] md:right-[6px] xl:bottom-[8px] xl:right-[8px] 1xl:bottom-[10px] 1xl:right-[10px] 3xl:bottom-[0px] 3xl:right-[0px] */}
              {/* group-hover:-translate-y-1 group-hover:translate-x-1 shadow-md */}
              {/* <ArrowUpRight 
                className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 1xl:w-7 1xl:h-7 3xl:w-8 3xl:h-8" 
                strokeWidth={2} 
              /> */}
              <TopNComboIcon className="w-5.75 h-5.75 md:w-8 md:h-8 xl:w-7.5 xl:h-7.5 1xl:w-8.25 1xl:h-8.25 3xl:w-11.25 3xl:h-11.25"  />
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