"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

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
  const [isHovering, setIsHovering] = useState(false);

  // Motion values (no React re-render)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation
  const springX = useSpring(mouseX, {
    stiffness: 250,
    damping: 22,
    mass: 0.4,
  });

  const springY = useSpring(mouseY, {
    stiffness: 250,
    damping: 22,
    mass: 0.4,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);

    // Hide global cursor
    window.dispatchEvent(new Event("hide-custom-cursor"));
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

    // Show global cursor
    window.dispatchEvent(new Event("show-custom-cursor"));
  };

  return (
    <div
      className="relative overflow-visible border border-[#E5E5E5] bg-gray-100 shadow-sm flex flex-col justify-end transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-none 3xl:w-[267px] 3xl:aspect-[267/304]"
      style={{
        borderRadius: "10px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Custom Arrow Cursor */}
      <motion.div
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
             h-14 w-14
             -ml-7 -mt-7
             flex items-center justify-center
             rounded-full bg-black shadow-xl"
      >
        <ArrowRight className="text-white" size={24} strokeWidth={2.5} />
      </motion.div>

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
        <div className="absolute inset-x-0 bottom-0 top-36 z-10 bg-gradient-to-t from-[#FF6633] via-[#EA4335] to-transparent" />

        {/* Title */}
        <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center">
          <span
            className="pointer-events-none text-center text-base font-bold text-white drop-shadow-md xl:text-[18px] 3xl:text-[21px]"
            style={{ lineHeight: "150%" }}
          >
            {product.title}
          </span>
        </div>
      </div>
    </div>
  );
}
