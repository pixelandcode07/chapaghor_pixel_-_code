"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export interface GraphicResource {
  id: number;
  title: string;
  category: string;
  image: string;
  className?: string;
  premium?: boolean;
}

interface GraphicCardProps {
  resource: GraphicResource;
}

export default function GraphicCard({
  resource,
}: GraphicCardProps) {
  return (
    <div
      className={`
        group relative
        overflow-hidden
        rounded-lg
        bg-gray-200
        ${resource.className ?? ""}
      `}
    >
      {/* Image */}
      <Image
        src={resource.image}
        alt={resource.title}
        fill
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 50vw,
          33vw
        "
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Premium Badge */}
      {resource.premium && (
        <div className="absolute left-1.5 top-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-[#ffbd16] text-[8px] text-white shadow">
          ★
        </div>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="w-full p-3">
          <p className="text-xs font-semibold text-white">
            {resource.title}
          </p>

          <Button
            size="sm"
            className="mt-2 h-7 rounded-full bg-white px-3 text-[10px] text-gray-800 hover:bg-gray-100"
          >
            View Resource
          </Button>
        </div>
      </div>
    </div>
  );
}