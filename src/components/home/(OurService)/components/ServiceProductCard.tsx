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
      className="relative overflow-visible border border-[#E5E5E5] bg-gray-100 shadow-sm flex flex-col justify-end transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-none w-full
aspect-174/185 md:aspect-219/250 xl:aspect-213/242 3xl:aspect-263/299"
      style={{
        borderRadius: "10px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
