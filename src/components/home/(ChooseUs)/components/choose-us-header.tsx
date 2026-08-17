"use client";

import { Download, Smile, Layers3, ShieldCheck, CloudDownload } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "15K+",
    label: "Downloads",
    icon: Download,
    iconBg: "bg-[#F0E7FF]",
    iconColor: "text-[#A855F7]",
  },
  {
    id: 2,
    value: "8K+",
    label: "Happy Users",
    icon: Smile,
    iconBg: "bg-[#E4F8E9]",
    iconColor: "text-[#22C55E]",
  },
  {
    id: 3,
    value: "200+",
    label: "Templates",
    icon: Layers3,
    iconBg: "bg-[#FFF0E8]",
    iconColor: "text-[#F97316]",
  },
  {
    id: 4,
    value: "100%",
    label: "Premium Quality",
    icon: ShieldCheck,
    iconBg: "bg-[#E7F0FF]",
    iconColor: "text-[#3B82F6]",
  },
  {
    id: 5,
    value: "Premium",
    label: "Download",
    icon: CloudDownload,
    iconBg: "bg-[#FFE8F2]",
    iconColor: "text-[#EC4899]",
  },
];

export default function ChooseUsHeader() {
  return (
   <section className="w-full">
  <div className="container-custom overflow-hidden rounded-[10px] border border-[#E5E5E5] bg-white shadow-[0_8px_14px_-6px_rgba(0,0,0,0.3)]">
    {/* XL / 1XL / 3XL */}
    <div className="hidden xl:flex w-full">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div key={stat.id} className="relative flex flex-1 items-center justify-center py-3 1xl:py-4 3xl:py-5">
            <div className="flex items-center gap-4 1xl:gap-5 3xl:gap-6">
              <div className={`flex h-12 w-12 1xl:h-14 1xl:w-14 3xl:h-16 3xl:w-16 shrink-0 items-center justify-center rounded-[9px] 1xl:rounded-[10px] 3xl:rounded-[12px] ${stat.iconBg}`}>
                <Icon className={`h-6 w-6 1xl:h-7 1xl:w-7 3xl:h-8 3xl:w-8 ${stat.iconColor}`} strokeWidth={2} />
              </div>

              <div className="flex flex-col">
                <span className="text-[22px] 1xl:text-[26px] 3xl:text-[32px] font-bold leading-none tracking-[-0.5px] text-black">
                  {stat.value}
                </span>

                <span className="mt-1 text-[10px] 1xl:text-[12px] 3xl:text-[14px] font-normal leading-none text-[#777777]">
                  {stat.label}
                </span>
              </div>
            </div>

            {index !== stats.length - 1 && <span className="absolute right-0 top-1/2 h-[70%] -translate-y-1/2 w-px bg-[#E5E5E5]" />}
          </div>
        );
      })}
    </div>

    {/* Mobile / MD / LG */}
    <div className="xl:hidden flex w-full">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div key={stat.id} className="relative flex flex-1 items-center justify-center py-2 md:py-3">
            <div className="flex flex-col items-center justify-center text-center">
              <div className={`flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-[6px] md:rounded-[8px] ${stat.iconBg}`}>
                <Icon className={`h-4 w-4 md:h-5 md:w-5 ${stat.iconColor}`} strokeWidth={2} />
              </div>

              <span className="mt-1 text-[10px] md:text-[12px] font-medium leading-none text-black">
                {stat.value}
              </span>

              <span className="mt-0.5 text-[6px] md:text-[8px] font-normal leading-none text-[#777777]">
                {stat.label}
              </span>
            </div>

            {index !== stats.length - 1 && <span className="absolute right-0 top-1/2 h-[70%] -translate-y-1/2 w-px bg-[#E5E5E5]" />}
          </div>
        );
      })}
    </div>
  </div>
</section>
  );
}