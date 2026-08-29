import { ArrowiconProduct } from '@/components/custom/icons';
import Image from 'next/image';

// TypeScript Interface for Capabilities
interface Capability {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

const capabilities: Capability[] = [
  {
    id: 1,
    title: 'Offset Printing',
    desc: 'High volume\nbest quality',
    icon: '/product-banners/icon1.png',
  },
  {
    id: 2,
    title: 'Digital Printing',
    desc: 'Short run\nfast & sharp',
    icon: '/product-banners/icon2.png',
  },
  {
    id: 3,
    title: 'Large Format',
    desc: 'Banners, posters\n& signage',
    icon: '/product-banners/icon3.png',
  },
  {
    id: 4,
    title: 'Finishing',
    desc: 'Lamination, Cutting\n& binding',
    icon: '/product-banners/icon4.png',
  },
  {
    id: 5,
    title: 'Bulk Order',
    desc: 'Special discount\nfor bulk order',
    icon: '/product-banners/icon5.png',
  },
  {
    id: 6,
    title: 'Fast Delivery',
    desc: 'On-time delivery\nnationwide',
    icon: '/product-banners/icon6.png',
  },
];

export default function ProductBanner() {
  return (
    <>
      {/* =========================================================
          MOBILE DESIGN (Figma 375px Optimized)
          < 768px
          ========================================================= */}
      <div className="block md:hidden w-full relative z-0 overflow-hidden bg-[#FDFDFD]">
        
        {/* Mobile Background Image Layer */}
        <Image
          src="/product-banners/productMobileBanner.png"
          alt="Premium Printing Solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right -z-10"
        />

        {/* Mobile Content Overlay (Left Aligned for 375px display) */}
        <div className="w-full px-[16px] py-[32px] flex flex-col items-start justify-center relative z-10">
          
          {/* Pill Badge */}
          <div className="w-fit border-[0.2px] border-[#FD7034] rounded-full pr-[4px] pt-[3px] pb-[2px] pl-[3px] mb-[8px] bg-white/40 backdrop-blur-[2px] flex items-center justify-center">
          <span className="text-[#FD7034] text-[5px] font-light leading-none whitespace-nowrap tracking-wide">
            Premium Printing Solutions
          </span>
        </div>
          {/* Heading */}
          <h1 className="text-[16px] font-bold text-[#1B2130] leading-[1.1] mb-[5px] tracking-tight">
            One Place For Every <br />
            <span className="text-[#FF5A2C]">Printing Solution</span>
          </h1>

          {/* Paragraph */}
          <p className="text-[#333333] text-[6.3px] font-light leading-[100%] tracking-[0%] mb-[8px] w-[101.47px]">
  High quality printing, fast delivery and custom solution for your business
</p>

          {/* Buttons Layout */}
          <div className="flex flex-row items-center gap-[4px]">
            
            {/* Shop Now Button */}
            <button className="flex items-center justify-center gap-1.5 bg-[#FF5A2C] hover:bg-[#e04a20] transition-colors text-white px-[9px] py-[5px] sm:px-5 sm:py-2.5 rounded-[2.66px] text-[5px] sm:text-[13px] font-medium shadow-sm">
              Shop Now
              <ArrowiconProduct className="1xl:w-2.5 w-[4px] h-[4px] md:w-[7px] md:h-[7px] xl:w-[9px] xl:h-[9px] 1xl:h-2.75 3xl:w-3.5 3xl:h-3.5" />
            </button>

            {/* Get A Quote Button */}
            <button className="flex items-center justify-center gap-1.5 bg-white text-[#FF5A2C] border border-[#FF5A2C] hover:bg-orange-50 transition-colors px-[9px] py-[5px] sm:px-5 sm:py-2.5 rounded-[2.66px] text-[5px] font-medium shadow-sm">
              Get A Quote
              <ArrowiconProduct
        className="1xl:w-2.5 1xl:h-2.75 w-[4px] h-[4px] md:w-[7px] md:h-[7px] xl:w-[9px] xl:h-[9px] 3xl:w-3.5 3xl:h-3.5 text-orange-600"/>
            </button>

          </div>
        </div>
      </div>

      {/* =========================================================
          TABLET + DESKTOP DESIGN
          >= 768px (Unchanged, matched exactly as previous)
          ========================================================= */}
      <section
        className="hidden md:flex w-full h-auto lg:h-[354px] 3xl:h-auto xl:h-auto 1xl:h-auto md:h-auto justify-center items-center py-10 lg:py-0 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/product-banners/product_banners.jpg')",
        }}
      >
        <div className="w-full h-full mx-auto px-4 sm:px-8 xl:px-30 md:px-[32px] 3xl:pl-[106px] 3xl:pr-[106px] flex flex-col md:flex-row md:items-center justify-between gap-8 xl:gap-4">

          {/* =====================================================
              Left Side: Hero Text & Buttons
              ===================================================== */}
          <div className="w-full md:w-[45%] flex flex-col justify-center 3xl:pr-[240px] text-left md:text-left lg:mt-10 3xl:mt-[89px] 3xl:mb-[69px] xl:mb-[45px]">

            <p className="text-gray-500 text-sm md:text-[10px] 1xl:text-[18px] 3xl:text-[25px] xl:text-[16px] 3xl:mb-0 font-light">
              Premium Printing Solutions
            </p>

            <h1 className="text-[32px] 1xl:text-[31px] md:text-[21px] xl:text-[27px] 3xl:text-[42px] 2xl:text-[52px] font-medium text-[#1B2130] leading-[1.1] mb-0">
              One Place For Every <br />
              <span className="text-[#FF5A2C]">
                Printing Solution
              </span>
            </h1>

            <p className="text-[#757575] tracking-[0.05em] text-sm md:text-[8px] xl:text-[11px] 3xl:text-[17.51px] 1xl:mb-[12px] mb-4 xl:mb-[10px] w-full mx-auto 1xl:text-[13px] lg:mx-0 lg:whitespace-nowrap">
              High quality printing, fast delivery and custom solution for your business
            </p>

            <div className="flex flex-wrap xl:gap-[7px] items-center justify-start gap-3 1xl:gap-2">

              {/* Shop Now */}
              <button className="flex items-center xl:text-[9px] 1xl:py-2.75 1xl:text-[10px] tracking-[0.05em] 3xl:text-[13px] gap-2 bg-[#FF5A2C] hover:bg-[#e04a20] transition-colors text-white px-5 xl:px-[17px] py-2.5 xl:py-[7px] md:text-[7px] md:px-[14px] md:py-[7px] rounded-full text-sm xl:text-base font-medium shadow-md">
                Shop Now
                <ArrowiconProduct className="1xl:w-2.5 md:w-[7px] md:h-[7px] xl:w-[9px] xl:h-[9px] 1xl:h-2.75 3xl:w-3.5 3xl:h-3.5" />
              </button>

              {/* Get A Quote */}
              <button className="flex items-center gap-2 bg-white text-[#FF5A2C] hover:bg-gray-50 transition-colors px-5 py-2.5 1xl:px-4 1xl:py-[10px] 1xl:text-[10px] 3xl:px-4 3xl:py-[10px] 3xl:text-[14px] xl:py-[7px] xl:px-[17px] md:py-[7px] md:px-[14px] md:text-[7px] xl:text-[9px] rounded-full tracking-[0.05em] font-medium shadow-md border border-gray-100">
                Get A Quote
                <ArrowiconProduct className="1xl:w-2.5 1xl:h-2.75 md:w-[7px] md:h-[7px] xl:w-[9px] xl:h-[9px] 3xl:w-3.5 3xl:h-3.5 text-orange-600" />
              </button>

            </div>
          </div>

          {/* =====================================================
              Right Side: Capabilities Card
              ===================================================== */}
          <div
            className="
              w-full md:w-[55%] lg:w-[55%] 3xl:w-full
              bg-white/60 backdrop-blur-[2px] border border-white/50
              rounded-2xl shadow-[1.02px_1.02px_3.98px_0px_#0000001A]
              p-5 md:pt-[10px] md:pb-[7px] md:px-[14px]
              xl:pt-[8px] xl:pb-[8px] xl:px-[51px]
              1xl:pt-[16px] 1xl:pb-[18px] 1xl:px-[29px]
              3xl:pt-[21px] 3xl:pb-[24px] 3xl:px-[42px]
              relative mx-auto lg:mx-0
              flex flex-col justify-between
              md:mt-0 lg:mt-8 xl:my-[47px] 3xl:mt-0 3xl:mb-0
            "
          >
            {/* Heading */}
            <div className="text-center">
              <h2
                className="
                  text-[16px] md:text-[12px] md:leading-[14px]
                  xl:text-[14px] 1xl:text-[16px] 3xl:text-[22px]
                  3xl:font-medium mt-0 pt-0 font-bold
                  text-gray-900 tracking-wide uppercase
                "
              >
                Our <span className="text-[#FF5A2C]">Printing</span> Capabilities
              </h2>
            </div>

            {/* Capabilities */}
            <div
              className="
                grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6
                md:mt-[7px] xl:mt-[8px] 1xl:mt-[19px]
                divide-y md:divide-y-0 lg:divide-y-0
                md:divide-x lg:divide-x divide-gray-300/60
                gap-y-6 md:gap-y-0 lg:gap-y-0 h-full
              "
            >
              {capabilities.map((cap) => (
                <div
                  key={cap.id}
                  className="flex flex-col items-center text-center group cursor-default px-1 xl:px-2 3xl:px-1 h-full"
                >
                  {/* Icon */}
                  <div
                    className="
                      relative w-[42px] h-[42px]
                      md:w-[34px] md:h-[23px] md:mb-[3px]
                      xl:w-[40px] xl:h-[40px]
                      1xl:w-[41px] 1xl:h-[34px]
                      3xl:w-[65px] 3xl:h-[65px]
                      mb-2.5 xl:mb-[4px] 1xl:mb-[7px] 3xl:mb-0 shrink-0
                    "
                  >
                    <Image
                      src={cap.icon}
                      alt={cap.title}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 16vw, 16vw"
                      className="object-contain group-hover:-translate-y-1 transition-transform duration-300"
                    />
                  </div>

                  {/* Title + Description */}
                  <div className="flex flex-col items-center flex-1 w-full justify-start">
                    <h3
                      className="
                        font-medium md:text-[7px] md:leading-[8px]
                        xl:text-[8px] 1xl:text-[9px] 3xl:text-[13px]
                        text-[#1B2130] mb-0.5 3xl:mb-1
                        leading-tight whitespace-nowrap
                      "
                    >
                      {cap.title}
                    </h3>
                    <p
                      className="
                        md:text-[5px] md:leading-[6.5px]
                        xl:text-[7px] 1xl:text-[8px] 3xl:text-[10.63px]
                        text-gray-500 font-light leading-[1.3] whitespace-pre-line
                      "
                    >
                      {cap.desc}
                    </p>
                  </div>

                  {/* Orange Divider */}
                  <div className="w-4 md:w-[11px] md:h-[0.5] h-[2px] bg-[#FF5A2C] mt-[3px] 3xl:mt-3 rounded-full shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}