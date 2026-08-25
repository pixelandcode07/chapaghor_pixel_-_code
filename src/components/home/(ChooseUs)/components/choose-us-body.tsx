"use client";

import Image from "next/image";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";

const features = [
  {
    id: 1,
    title: "Premium Quality",
    description: "Best materials &\nlatest technology",
    iconUrl: "/choose-us/first.png",
  },
  {
    id: 2,
    title: "Fast Turnaround",
    description: "Quick production &\non-time delivery",
    iconUrl: "/choose-us/second.png",
  },
  {
    id: 3,
    title: "Affordable Price",
    description: "Best quality print at\nreasonable price",
    iconUrl: "/choose-us/third.png",
  },
  {
    id: 4,
    title: "Customer Support",
    description: "Friendly support\nanytime you need",
    iconUrl: "/choose-us/fourth.png",
  },
];

const featurePairs = [
  [features[0], features[1]],
  [features[2], features[3]],
];

export default function ChooseUsBody() {
  const { theme } = useTheme();

  return (
    <section className="w-full bg-white">
      <MagicCard
        gradientSize={800}
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        gradientOpacity={0.8}
        gradientFrom="#F05A28"
        gradientTo="#FF8D28"
        className="relative container-custom overflow-hidden !bg-white p-0 shadow-none xl:!bg-black xl:rounded-[24px] border-none"
      >
        <div className="relative z-10 px-4 py-4.5 md:px-0 md:py-0 xl:px-0 xl:pb-[31px] xl:pt-[35px] 3xl:px-12 1xl:pb-[33px] 1xl:pt-[39px] 3xl:pb-[46px] 3xl:pt-[54px]">
          
          {/* Heading */}
          <div className=" flex flex-col items-center justify-center px-2 text-center mb-2 md:mb-4.5 xl:mb-[30px] 1xl:mb-[34px] 3xl:mb-11.5">
           
            <div className="flex w-full items-center justify-center gap-2 xl:gap-4">
              <span className="h-[2px] w-12 bg-[#FF8D28] xl:w-16 3xl:w-20" />

              <h5 className="text-[12px] font-normal leading-tight tracking-wide text-[#FF8D28] uppercase md:text-[14px] lg:text-[16px] 3xl:text-[24px]">
                WHY CHOOSE US
              </h5>

              <span className="h-[2px] w-12 bg-[#FF8D28] xl:w-16 3xl:w-20" />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <h1 className="pb-1.5 md:pb-2 text-[22px] font-normal leading-tight tracking-wide text-black md:text-[28px] xl:text-white xl:text-[39px] 3xl:text-[52px]">
                Quality Printing You Can
              </h1>

              <h1 className="pb-1.5 md:pb-2 text-[22px] font-normal leading-tight tracking-wide text-[#FF8D28] md:text-[28px] xl:text-[39px] 3xl:text-[52px]">
                Trust
              </h1>
            </div>

            <p className="mt-1 mx-8 md:mx-42.5 lg:mx-0 text-center text-[11px] font-normal leading-tight tracking-wide text-black/70 md:text-[14px] xl:text-white/90 xl:text-[18px] 3xl:text-[24px]">
              We use the best materials and latest technology to deliver the
              perfect printing quality
            </p>
          </div>

         {/* =========================
    Mobile / Tablet Version
    Separate Individual Cards
              </div>
            ))}
          </div>
        </div>
      </MagicCard>
    </section>
  );
}
