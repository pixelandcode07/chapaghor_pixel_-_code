import Image from "next/image";
import type { AllCard } from "@/lib/all-cards";

interface AllDynamicCardsProps {
  card: AllCard;
}

export default function AllDynamicCards({
  card,
}: AllDynamicCardsProps) {
  return (
    <div className="group w-full overflow-hidden rounded-[12px] bg-white">
      <div className="relative aspect-[1/1] w-full overflow-hidden rounded-[12px]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Price */}
        <div className="absolute right-[8px] top-[8px] rounded-full bg-black/20 px-2 py-1 text-[10px] text-white backdrop-blur-sm">
          ৳ {card.price}
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/30 p-3 text-white backdrop-blur-[2px]">
          <h3 className="truncate text-[14px] font-semibold uppercase">
            {card.title}
          </h3>

          <p className="text-[9px]">
            MOQ: {card.moq} | {card.views} views
          </p>
        </div>
      </div>
    </div>
  );
}