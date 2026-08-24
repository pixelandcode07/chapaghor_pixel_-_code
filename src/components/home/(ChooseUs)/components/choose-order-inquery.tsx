

"use client";

import Image from "next/image";

import ActionButton from "@/components/home/landing-page-btn-gorguse";

export default function CustomOrderInquiry() {
  return (
    <section className="w-full">
      {/* =========================
          Mobile / Tablet / LG
          Full Width
      ========================= */}
      <div className="flex w-full items-center justify-between gap-2 rounded-[8px] bg-[linear-gradient(to_right,#FEF1E8_0%,#FFFFFF_50%,#FEF1E8_100%)] px-2 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.08)] md:gap-4 md:px-7.5 md:py-4 lg:gap-5 lg:rounded-[10px] lg:py-5 xl:hidden">
        <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-4 lg:gap-5">
          {/* Icon */}
          <div className="flex h-[49px] w-[49px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(240,90,40,0.12)] md:h-[101px] md:w-[101px] lg:h-[68px] lg:w-[68px]">
            <Image
              src="/choose-us/custom-order-inquiry-icon.svg"
              alt="Custom Order Inquiry"
              width={113}
              height={122}
              className="h-6 w-6 md:h-8 md:w-8"
            />
          </div>

          <div className="min-w-0">
            {/* Content title */}
            <h3 className="whitespace-nowrap text-[12px] font-semibold leading-tight tracking-[0.5px] text-[#012C60] md:text-[27px] md:text-black">
              Custom Order{" "}
              <span className="text-[#012C60] md:text-[#F05A28]">
                Inquiry
              </span>
            </h3>

            {/* Content description */}
            <p className="mt-1 leading-[1.15] tracking-[0.5px] text-[7px] text-[#000000] md:max-w-75 lg:max-w-90 md:text-[15px] lg:tracking-[1px]">
              Looking for a product we don&apos;t offer yet?
              <br />
              Send us your custom specifications and we&apos;ll take it forward
              from there.
            </p>
          </div>
        </div>

        <ActionButton
          title="Send Request"
          cardWidth="h-[48px] w-[128px] md:h-[58px] md:w-[160px] lg:h-[64px] lg:w-[180px]"
          buttonBg="bg-[#FF4900]"
          titleColor="text-white"
          arrowBg="bg-white"
          arrowColor="text-black"
        />
      </div>

      {/* =========================
          XL / 1XL / 3XL
          Container Custom
      ========================= */}
      <div className="container-custom hidden items-center justify-between gap-5 rounded-[12px] bg-[linear-gradient(to_right,#FEF1E8_0%,#FFFFFF_50%,#FEF1E8_100%)] px-8 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.08)] xl:flex 1xl:px-10 1xl:py-4 3xl:px-30 3xl:py-5">
        <div className="flex min-w-0 flex-1 items-center gap-5 1xl:gap-6 3xl:gap-8">
          {/* Icon */}
          <div className="flex h-[71px] w-[71px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(240,90,40,0.12)] 3xl:h-[110px] 3xl:w-[110px]">
            <Image
              src="/choose-us/custom-order-inquiry-icon.svg"
              alt="Custom Order Inquiry"
              width={113}
              height={122}
              className="h-8 w-8 1xl:h-10 1xl:w-10 3xl:h-60 3xl:w-15 3xl:p-2"
            />
          </div>

          <div className="min-w-0">
            {/* Content title */}
            <h3 className="whitespace-nowrap text-[17px] font-semibold leading-tight tracking-[0.5px] text-black 1xl:text-[20px] 3xl:text-[26px]">
              Custom Order{" "}
              <span className="text-[#F05A28]">Inquiry</span>
            </h3>

            {/* Content description */}
            <p className="mt-1 max-w-141 leading-[1.15] tracking-[0.5px] text-[11px] text-[#000000] 1xl:text-[13px] 3xl:max-w-150 3xl:text-[17px]">
              Looking for a product we don&apos;t offer yet?
              <br />
              Send us your custom specifications and we&apos;ll take it forward
              from there.
            </p>
          </div>
        </div>

        <ActionButton
          title="Send Request"
          cardWidth="h-[84px] w-[220px] 1xl:w-[250px] 3xl:h-[92px] 3xl:w-[280px]"
          buttonBg="bg-[#FF4900]"
          titleColor="text-white"
          arrowBg="bg-white"
          arrowColor="text-black"
        />
      </div>
    </section>
  );
}