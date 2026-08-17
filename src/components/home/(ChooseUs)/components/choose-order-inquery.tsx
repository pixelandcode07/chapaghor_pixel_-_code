"use client";

import { ClipboardList, CircleHelp } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

export default function CustomOrderInquiry() {
  return (
    <section className="w-full pb-2 md:pb-3 xl:pb-4 1xl:pb-5 3xl:pb-6">
      {/* XL / 1XL / 3XL */}
      <div className="hidden xl:flex container-custom items-center justify-between rounded-[12px] bg-[#FFF4ED] px-8 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.08)] 1xl:px-10 1xl:py-4 3xl:px-12 3xl:py-5">
        <div className="flex items-center gap-5 1xl:gap-6 3xl:gap-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(240,90,40,0.12)] 1xl:h-14 1xl:w-14 3xl:h-16 3xl:w-16">
            <div className="relative">
              <ClipboardList className="h-6 w-6 text-[#F05A28] 1xl:h-7 1xl:w-7 3xl:h-8 3xl:w-8" strokeWidth={1.6} />
              <CircleHelp className="absolute -bottom-1 -right-2 h-3.5 w-3.5 rounded-full bg-white text-[#F05A28] 1xl:h-4 1xl:w-4 3xl:h-5 3xl:w-5" strokeWidth={2} />
            </div>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold leading-none text-[#012C60] 1xl:text-[18px] 3xl:text-[22px]">
              Custom Order <span className="text-[#F05A28]">Inquiry</span>
            </h3>

            <p className="mt-1 max-w-[520px] text-[9px] leading-[1.2] text-[#555555] 1xl:text-[10px] 3xl:text-[13px]">
              Looking for a product we don&apos;t offer yet?<br />
              Send us your custom specifications and we&apos;ll take it forward from there.
            </p>
          </div>
        </div>

        <div className="flex h-[84px] w-[300px] shrink-0 items-center overflow-hidden rounded-[8px] rounded-br-[17px] bg-white shadow-sm 1xl:w-[320px] 3xl:h-[92px] 3xl:w-[360px]">
          <span className="whitespace-nowrap px-6 text-[14px] font-medium text-[#012C60] 1xl:text-[16px] 3xl:text-[20px]">
            Send Request
          </span>

          <button className="ml-auto mr-2 flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[4px] rounded-br-[13px] bg-[#c94a24] px-5 text-white transition-colors hover:bg-[#a73c1c] 3xl:h-[72px] 3xl:w-[72px]">
            <FaArrowRight className="size-5 3xl:size-6" />
          </button>
        </div>
      </div>

      {/* Mobile / MD / LG */}
      <div className="xl:hidden w-full bg-[#FFF0E8]">
        <div className="container-custom flex items-center justify-between gap-2 px-2 py-3 md:gap-4 md:px-4 md:py-4 lg:py-5">
          <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-4 lg:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(240,90,40,0.12)] md:h-16 md:w-16 lg:h-[68px] lg:w-[68px]">
              <div className="relative">
                <ClipboardList className="h-6 w-6 text-[#F05A28] md:h-8 md:w-8 lg:h-9 lg:w-9" strokeWidth={1.6} />
                <CircleHelp className="absolute -bottom-1 -right-1.5 h-3.5 w-3.5 rounded-full bg-white text-[#F05A28] md:h-4 md:w-4 lg:h-5 lg:w-5" strokeWidth={2} />
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="whitespace-nowrap text-[12px] font-semibold leading-tight text-[#012C60] md:text-[17px] lg:text-[19px]">
                Custom Order <span className="text-[#F05A28]">Inquiry</span>
              </h3>

              <p className="mt-1 max-w-[180px] text-[7px] leading-[1.15] text-[#555555] md:max-w-[340px] md:text-[9px] lg:max-w-[430px] lg:text-[10px]">
                Looking for a product we don&apos;t offer yet?<br />
                Send us your custom specifications and we&apos;ll take it forward from there.
              </p>
            </div>
          </div>

          <div className="flex h-[48px] w-[132px] shrink-0 items-center overflow-hidden rounded-[6px] rounded-br-[12px] bg-white shadow-sm md:h-[58px] md:w-[180px] md:rounded-[7px] md:rounded-br-[14px] lg:h-[68px] lg:w-[220px] lg:rounded-[8px] lg:rounded-br-[16px]">
            <span className="whitespace-nowrap px-2.5 text-[8px] font-medium text-[#012C60] md:px-4 md:text-[10px] lg:px-5 lg:text-[12px]">
              Send Request
            </span>

            <button className="ml-auto mr-1.5 flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[3px] rounded-br-[9px] bg-[#c94a24] text-white transition-colors hover:bg-[#a73c1c] md:mr-2 md:h-[44px] md:w-[44px] md:rounded-[4px] md:rounded-br-[11px] lg:h-[52px] lg:w-[52px] lg:rounded-[4px] lg:rounded-br-[13px]">
              <FaArrowRight className="size-3.5 md:size-4 lg:size-4.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}