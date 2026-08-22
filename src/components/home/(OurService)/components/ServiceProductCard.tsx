"use client";

// import { useState } from "react";
import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

type Product = {
  title: string;
  imageUrl: string;
};

type ServiceProductCardProps = {
  product: Product;
};

export default function ServiceProductCard({
  product,
}: ServiceProductCardProps) {
  // const [isHovering, setIsHovering] = useState(false);

  // // Motion values (no React re-render)
  // const mouseX = useMotionValue(0);
  // const mouseY = useMotionValue(0);

  // // Smooth spring animation
  // const springX = useSpring(mouseX, {
  //   stiffness: 250,
  //   damping: 22,
  //   mass: 0.4,
  // });

  // const springY = useSpring(mouseY, {
  //   stiffness: 250,
  //   damping: 22,
  //   mass: 0.4,
  // });

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const rect = e.currentTarget.getBoundingClientRect();

  //   mouseX.set(e.clientX - rect.left);
  //   mouseY.set(e.clientY - rect.top);
  // };

  // const handleMouseEnter = () => {
  //   setIsHovering(true);

  //   // Hide global cursor
  //   window.dispatchEvent(new Event("hide-custom-cursor"));
  // };

  // const handleMouseLeave = () => {
  //   setIsHovering(false);

  //   // Show global cursor
  //   window.dispatchEvent(new Event("show-custom-cursor"));
  // };

  const handleMouseEnter = () => {
  window.dispatchEvent(new Event("service-card-cursor-enter"));
};

const handleMouseLeave = () => {
  window.dispatchEvent(new Event("service-card-cursor-leave"));
};

  return (
    <div
      className="relative overflow-visible border border-[#E5E5E5] bg-gray-100 shadow-sm flex flex-col justify-end transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-none w-full
aspect-174/185 md:aspect-219/250 xl:aspect-213/242 3xl:aspect-267/304"
      style={{
        borderRadius: "10px",
      }}
      // onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
    >
      {/* Custom Arrow Cursor */}
      {/* <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.6,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { duration: 0.2 },
        }}
        className="pointer-events-none absolute left-0 top-0 z-50
        h-8 w-8
        md:h-11 md:w-11
             xl:h-14 xl:w-14
             -ml-7 -mt-7
             flex items-center justify-center
             rounded-full bg-black shadow-xl"
      >
        <ArrowRight
          className="text-white w-3.5 h-3.5 md:w-5.5 md:h-5.5"
          strokeWidth={2.5}
        />
      </motion.div> */}

      {/* Image Wrapper */}
      <div className="relative h-full w-full overflow-hidden rounded-[10px]">
        {/* Image */}
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover"
        />

        {/* Gradient */}
        {/* <div className="absolute inset-x-0 bottom-0 top-36 md:top-48 xl:top-48 z-10 bg-gradient-to-t from-[#FF6633] via-[#EA4335] to-transparent" /> */}
        {/* Gradient */}
<div className="absolute inset-x-0 bottom-0 top-32 md:top-48 xl:top-48 z-10 bg-[linear-gradient(to_top,#FF3D16_0%,#FF3D16_18%,rgba(255,69,25,0.92)_35%,rgba(255,92,50,0.58)_52%,rgba(255,120,85,0.20)_68%,transparent_82%)] " />

        {/* Title */}
        <div className="absolute inset-x-0 bottom-1 md:bottom-2 xl:bottom-3 z-20 flex justify-center">
          <span
            className="pointer-events-none text-center text-[15px] font-bold text-white drop-shadow-md xl:text-[18px] 3xl:text-[21px] uppercase tracking-[0.5px]"
            style={{ lineHeight: "150%" }}
          >
            {product.title}
          </span>
        </div>
      </div>
    </div>
  );
}
