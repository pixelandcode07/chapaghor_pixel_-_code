import Image from "next/image";

import type { AllCard } from "@/lib/all-cards";

import { TakaIcon } from "@/components/custom/icons";

interface AllDynamicCardsProps {
  card: AllCard;
}

export default function AllDynamicCards({ card }: AllDynamicCardsProps) {
  return (
   <div className="group w-full overflow-hidden bg-white transition-transform duration-300 hover:rotate-[2deg]">
    
      <div className="relative aspect-[150/160] md:aspect-[170/182] lg:aspect-[180/194] xl:aspect-173/186 1xl:aspect-191/206 3xl:aspect-265/286 w-full overflow-hidden rounded-[12px] md:rounded-[14px] xl:rounded-[20px]">
        <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-500 " />

{/* Price */}
<div className="absolute right-[6px] top-[6px] md:right-[7px] md:top-[7px] xl:right-[8px] xl:top-[8px] 3xl:right-[10px] 3xl:top-[10px] rounded-full p-[0.37px]
 bg-[radial-gradient(150.36%_227.1%_at_8.75%_100%,#FFFFFF80_0%,#C9C9C900_100%)]">
  <div className="flex items-center xl:gap-0.5 3xl:gap-0.75 rounded-full bg-white/10 px-2 lg:px-2.5 py-0.5 lg:py-1 text-white ">

    <TakaIcon className="size-[8px] md:size-[9px] lg:size-[9px] xl:size-[8px] 1xl:size-[8px] 3xl:size-[10px] mb-px md:mb-0.5" />

    <span className="text-[9px] md:text-[10px] lg:text-[10px] xl:text-[7px] 1xl:text-[8px] 3xl:text-[11px] font-normal leading-0 tracking-[0.5px] mt-0.5 sm:mt-0">
      {card.price}
    </span>

  </div>
</div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0  p-2 md:p-2.5 lg:p-2.5 xl:px-3.25 xl:pb-2.5 3xl:px-4.5 3xl:pb-3.5 text-white">
          <h3 className="leading-none truncate text-[12px] md:text-[13px] lg:text-[13px] xl:text-[12px] 1xl:text-[14px] 3xl:text-[19px] font-bold uppercase tracking-[0.5px]">{card.title}</h3>
          <p className="text-[7px] md:text-[8px] lg:text-[8px] xl:text-[7px] 1xl:text-[8px] 3xl:text-[11px] font-normal tracking-[0.5px]">MOQ: {card.moq} | {card.views} views</p>
        </div>
      </div>
    </div>
  );
}