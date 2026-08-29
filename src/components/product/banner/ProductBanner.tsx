import Image from 'next/image';

// TypeScript Interface for Capabilities
interface Capability {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

const capabilities: Capability[] = [
  { id: 1, title: 'Offset Printing', desc: 'High volume\nbest quality', icon: '/product-banners/icon1.png' },
  { id: 2, title: 'Digital Printing', desc: 'Short run\nfast & sharp', icon: '/product-banners/icon2.png' },
  { id: 3, title: 'Large Format', desc: 'Banners, posters\n& signage', icon: '/product-banners/icon3.png' },
  { id: 4, title: 'Finishing', desc: 'Lamination, Cutting\n& binding', icon: '/product-banners/icon4.png' },
  { id: 5, title: 'Bulk Order', desc: 'Special discount\nfor bulk order', icon: '/product-banners/icon5.png' },
  { id: 6, title: 'Fast Delivery', desc: 'On-time delivery\nnationwide', icon: '/product-banners/icon6.png' },
];

export default function ProductBanner() {
  return (
    <section
      className="w-full h-auto lg:h-[354px] justify-center items-center py-10 lg:py-0 flex bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/product-banners/product_banners.jpg')" }}
    >
      <div className="max-w-[1920px] w-full h-full mx-auto px-4 sm:px-8 xl:px-20 3xl:pl-[106px] 3xl:pr-[106px] flex flex-col lg:flex-row lg:items-center justify-between gap-8 xl:gap-4">

        {/* Left Side: Hero Text & Buttons */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center 3xl:pr-[240px] text-center lg:text-left lg:mt-10 3xl:mt-[89px] 3xl:mb-[69px]">

          <p className="text-gray-500 text-sm lg:text-base 3xl:text-[25px] xl:text-[17px] mb-1 3xl:mb-0 font-light">
            Premium Printing Solutions
          </p>

          <h1 className="text-[32px] md:text-[40px] xl:text-[48px] 3xl:text-[42px] 2xl:text-[52px] font-medium text-[#1B2130] leading-[1.1] mb-0">
            One Place For Every <br />
            <span className="text-[#FF5A2C]">
              Printing Solution
            </span>
          </h1>

          <p className="text-[#757575] tracking-[0.05em] text-sm xl:text-[15px] 3xl:text-[17.51px] mb-4 w-full mx-auto lg:mx-0 lg:whitespace-nowrap">
            High quality printing, fast delivery and custom solution for your business
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 xl:gap-4">

            <button className="flex items-center tracking-[0.05em] 3xl:text-[13px] gap-2 bg-[#FF5A2C] hover:bg-[#e04a20] transition-colors text-white px-5 xl:px-6 py-2.5 xl:py-3 rounded-full text-sm xl:text-base font-medium shadow-md">
              Shop Now

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>

            <button className="flex items-center gap-2 bg-white text-[#FF5A2C] hover:bg-gray-50 transition-colors px-5 xl:px-6 py-2.5 xl:py-3 rounded-full text-sm 3xl:text-[14px] tracking-[0.05em] xl:text-base font-medium shadow-md border border-gray-100">
              Get A Quote

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>

          </div>
        </div>

        {/* Right Side: Capabilities Card */}
        <div className="w-full lg:w-[55%] 3xl:w-full bg-white/60 backdrop-blur-[2px] border border-white/50 rounded-2xl shadow-[1.02px_1.02px_3.98px_0px_#0000001A] p-5 xl:p-6 3xl:pt-[21px] 3xl:pb-[24px] 3xl:px-[42px] relative mx-auto lg:mx-0 flex flex-col justify-between lg:mt-8 3xl:mt-[0px] 3xl:mb-[0px]">

          <div className="text-center">
            <h2 className="text-[16px] xl:text-[18px] 3xl:text-[22px] 3xl:font-medium mt-0 pt-0 font-bold text-gray-900 tracking-wide uppercase">
              Our <span className="text-[#FF5A2C]">Printing</span> Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-300/60 gap-y-6 lg:gap-y-0 h-full">
            {capabilities.map((cap) => (
              <div
                key={cap.id}
                className="flex flex-col items-center text-center group cursor-default px-1 xl:px-2 3xl:px-1 h-full"
              >

                <div className="w-[42px] h-[42px] xl:w-[48px] xl:h-[48px] 3xl:w-[65px] 3xl:h-[65px] relative mb-2.5 3xl:mb-0 shrink-0">
                  <Image
                    src={cap.icon}
                    alt={cap.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 16vw, 16vw"
                    className="object-contain group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </div>

                <div className="flex flex-col items-center flex-1 w-full justify-start">
                  <h3 className="font-medium text-[12px] text-[#1B2130] mb-0.5 3xl:mb-1 leading-tight whitespace-nowrap">
                    {cap.title}
                  </h3>

                  <p className="text-[10.63px] text-gray-500 font-light leading-[1.3] whitespace-pre-line">
                    {cap.desc}
                  </p>
                </div>

                <div className="w-4 h-[2px] bg-[#FF5A2C] mt-2.5 3xl:mt-3 rounded-full shrink-0"></div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}