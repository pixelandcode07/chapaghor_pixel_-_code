
import Image from "next/image";

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

export default function ChooseUsBody() {
  return (
    <section className="w-full bg-white">
      <div className="relative container-custom overflow-hidden bg-[#111111] xl:rounded-[24px]">
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="/choose-us/banner.jpg"
            alt="Choose us background"
            fill
            className="object-cover object-bottom-left opacity-60"
            priority
          />
        </div>

        <div className="relative z-10 px-4 py-10 md:px-6 md:py-12 xl:px-8 xl:py-16 3xl:px-12 3xl:py-12.5">
          <div className="mb-8 flex flex-col items-center justify-center px-2 text-center md:mb-10 xl:mb-12">
            <div className="flex w-full items-center justify-center gap-2 xl:gap-4">
              <span className="h-[2px] w-12 bg-[#FF8D28] xl:w-16 3xl:w-20" />
              <h5 className="uppercase text-[#FF8D28] text-[12px] md:text-[14px] lg:text-[16px] 3xl:text-[24px] font-normal leading-tight tracking-wide">
                WHY CHOOSE US
              </h5>
              <span className="h-[2px] w-12 bg-[#FF8D28] xl:w-16 3xl:w-20" />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <h1 className="pb-2 text-[22px] font-normal leading-tight tracking-wide text-white md:text-[28px] xl:text-[39px] 3xl:text-[52px]">
                Quality Printing You Can
              </h1>
              <h1 className="pb-2 text-[22px] font-normal leading-tight tracking-wide text-[#FF8D28] md:text-[28px] xl:text-[39px] 3xl:text-[52px]">
                Trust
              </h1>
            </div>
            <p className="mt-1 text-center text-[11px] font-normal leading-tight tracking-wide text-white/90 md:text-[14px] xl:text-[18px] 3xl:text-[24px]">
              We use the best materials and latest technology to deliver the
              perfect printing quality
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 xl:grid-cols-4 xl:gap-6 3xl:gap-8 xl:max-w-[62vw] 1xl:max-w-[68vw] 3xl:max-w-[66vw] mx-auto">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex items-center justify-center "
              >
                {/* Mobile / MD / LG */}
                <div className="flex h-[92px] w-full items-center gap-3 rounded-[8px] bg-[#151619] px-3 md:h-[100px] md:gap-4 md:rounded-[9px] md:px-4 lg:h-[108px] lg:px-5 xl:hidden">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#242528] md:h-14 md:w-14 lg:h-16 lg:w-16 ">
                    <Image
                      src={feature.iconUrl}
                      alt={feature.title}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain p-1.5 md:p-2"
                    />
                  </div>
                  <div className="min-w-0 text-left">
                    <h4 className="text-[11px] font-semibold leading-tight text-white md:text-[14px] lg:text-[15px]">
                      {feature.title}
                    </h4>
                    <p className="mt-1 whitespace-pre-line text-[8px] font-normal leading-tight text-white/70 md:text-[10px] lg:text-[11px]">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* XL / 1XL / 3XL */}
             <div className="group relative hidden w-full flex-col items-center justify-start overflow-hidden rounded-[13px] border border-white/[0.22] bg-white/[0.045] px-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.05),0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-[24px] backdrop-saturate-[180%] xl:flex xl:min-h-[160px] xl:py-4 1xl:min-h-[182px] 1xl:py-5 3xl:min-h-[244px] 3xl:py-7 3xl:backdrop-blur-[28px]">
  <div className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.12] to-transparent opacity-70" />

  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/[0.06] blur-2xl transition-opacity duration-500 group-hover:bg-white/[0.1]" />

  <div className="pointer-events-none absolute -bottom-12 -left-10 h-24 w-24 rounded-full bg-[#F05A28]/[0.08] blur-3xl" />

  <div className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center border-b-2 border-[#F05A28] xl:h-[72px] xl:w-[72px] 1xl:h-[80px] 1xl:w-[80px] 3xl:h-[96px] 3xl:w-[96px]">
    <Image src={feature.iconUrl} alt={feature.title} width={96} height={96} className="h-full w-full object-contain pb-4 drop-shadow-[0_4px_10px_rgba(255,255,255,0.18)]" />
  </div>

  <h4 className="relative z-10 mt-4 text-[17px] font-bold leading-tight text-white xl:mt-4 xl:text-[17px] 1xl:mt-5 1xl:text-[20px] 3xl:mt-6 3xl:text-[27px]">
    {feature.title}
  </h4>

  <p className="relative z-10 mt-2 whitespace-pre-line text-[12px] font-light leading-tight tracking-[0.5px] text-white/90 xl:mt-2 xl:text-[12px] 3xl:mt-4 3xl:text-[17px]">
    {feature.description}
  </p>
</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
