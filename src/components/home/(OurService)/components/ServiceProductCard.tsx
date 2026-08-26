"use client";

import Image from "next/image";

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
  const handleMouseEnter = () => {
    window.dispatchEvent(new Event("service-card-cursor-enter"));
  };

  const handleMouseLeave = () => {
    window.dispatchEvent(new Event("service-card-cursor-leave"));
  };

  return (
    <div
      className="relative overflow-visible border border-white bg-gray-100 flex flex-col justify-end transition-all duration-500 hover:scale-105 cursor-none w-full aspect-174/185 md:aspect-219/250 xl:aspect-213/242 3xl:aspect-263/299 shadow-[4.67px_9.34px_18.68px_0px_#FF663333] rounded-[20px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Wrapper */}
      <div className="relative h-full w-full overflow-hidden rounded-[20px]">
        {/* Image */}
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover"
        />

        {/* Gradient */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 102, 51, 0) 47.6%, #FF2E00 85.58%)",
          }}
        />

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