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
    <section className="w-full bg-white ">
      <MagicCard
        gradientSize={800}
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        gradientOpacity={0.8}
        gradientFrom="#F05A28"
        gradientTo="#FF8D28"
        className="relative container-custom overflow-hidden !bg-white p-0 shadow-none xl:!bg-black xl:rounded-[24px] border-none"
      >
        <div className="relative z-10 px-5 md:px-8 xl:px-0 py-4.5 md:py-0 xl:pb-[31px] xl:pt-[35px] 3xl:px-12 1xl:pb-[33px] 1xl:pt-[39px] 3xl:pb-[46px] 3xl:pt-[54px]">
          
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
========================= */}
<div className="grid grid-cols-2 gap-3 md:gap-4 xl:hidden">
  {features.map((feature) => (
    <div
      key={feature.id}
      className="flex min-h-[63px] w-full items-center gap-3 rounded-[8px] bg-[#1B1C20] px-3 py-3 md:min-h-[134px] md:gap-4 md:rounded-[10px] md:px-5 md:py-4 lg:min-h-[140px]"
    >
      {/* Icon Box */}
      <div className="flex h-[41px] w-[41px] shrink-0 items-center justify-center rounded-full bg-[#25262B] md:h-[86px] md:w-[86px]">
        <Image
          src={feature.iconUrl}
          alt={feature.title}
          width={64}
          height={64}
          className="h-full w-full object-contain p-2"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 text-left">
        <h4 className="text-[8.79px] font-bold leading-[1.25] text-white md:text-[18.51px]">
          {feature.title}
        </h4>

        <p className="mt-1 whitespace-pre-line text-[7.85px] font-light leading-[1.35] text-white/70 md:text-[16.53px]">
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</div>

          {/* =========================
              XL / 1XL / 3XL Version
             ========================= */}
          <div className="mx-auto hidden grid-cols-4 gap-6 xl:grid 1xl:gap-10 3xl:gap-13.75 xl:max-w-[62vw] 1xl:max-w-[63.6806vw] 3xl:max-w-[64vw]">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex items-center justify-center"
              >
                <div className="group relative flex w-full flex-col items-center justify-start overflow-hidden rounded-[13px] border border-white/[0.22] bg-white/[0.045] px-0 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.05),0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-[24px] backdrop-saturate-[180%] xl:min-h-[160px] xl:py-4 1xl:min-h-[182px] 1xl:py-5 3xl:min-h-[244px] 3xl:py-7 3xl:backdrop-blur-[28px]">
                  {/* Top glass reflection */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.12] to-transparent opacity-70" />

                  {/* Top right glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/[0.06] blur-2xl transition-opacity duration-500 group-hover:bg-white/[0.1]" />

                  {/* Bottom left orange glow */}
                  <div className="pointer-events-none absolute -bottom-12 -left-10 h-24 w-24 rounded-full bg-[#F05A28]/[0.08] blur-3xl" />

                  {/* Icon */}
                  <div className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center border-b-2 border-[#F05A28] xl:h-[72px] xl:w-[72px] 1xl:h-[63px] 1xl:w-[45px] 3xl:h-[96px] 3xl:w-[96px]">
                    <Image
                      src={feature.iconUrl}
                      alt={feature.title}
                      width={96}
                      height={96}
                      className="h-full w-full object-contain pb-4 drop-shadow-[0_4px_10px_rgba(255,255,255,0.18)]"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="relative z-10 mt-4 text-[17px] font-bold leading-tight text-white xl:mt-4 xl:text-[17px] 1xl:mt-5 1xl:text-[20px] 3xl:mt-6 3xl:text-[27px]">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="relative z-10 mt-2 whitespace-pre-line text-[12px] font-light leading-tight tracking-[0.5px] text-white/90 xl:mt-2 xl:text-[12px] 3xl:mt-4 3xl:text-[17px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MagicCard>
    </section>
  );
}