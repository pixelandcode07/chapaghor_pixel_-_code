// src/components/shared/GraphicsPromoBanner.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function GraphicsPromoBanner() {
  return (
    <div
      className="
        w-full
        bg-gradient-to-r
        from-[#FFF5F0]
        to-[#FFEFE5]
        rounded-[12px]
        3xl:rounded-[16px]
        flex
        flex-col-reverse
        md:flex-row
        items-center
        px-[20px]
        md:px-[40px]
        xl:px-[60px]
        3xl:px-[100px]
        py-[30px]
        md:py-[40px]
        xl:py-[60px]
        3xl:py-[80px]
        relative
        overflow-hidden
      "
    >
      {/* Left Text Content */}
      <div
        className="
          w-full
          md:w-1/2
          relative
          z-10
          text-center
          md:text-left
          mt-[30px]
          md:mt-0
        "
      >
        <p
          className="
            text-[#8A8F99]
            text-[10px]
            md:text-[12px]
            xl:text-[14px]
            3xl:text-[20px]
            font-medium
            tracking-[1px]
            uppercase
            mb-[8px]
            md:mb-[12px]
            3xl:mb-[16px]
            leading-none
          "
        >
          GRAPHICS RESOURCES
        </p>

        <h2
          className="
            text-[#1B2130]
            text-[24px]
            md:text-[32px]
            xl:text-[40px]
            3xl:text-[60px]
            font-bold
            leading-[1.1]
            mb-[12px]
            md:mb-[16px]
            3xl:mb-[24px]
          "
        >
          Design Assets to <br className="hidden md:block" />
          <span className="text-[#FF6B00]">Elevate Your Projects</span>
        </h2>

        <p
          className="
            text-[#666666]
            text-[12px]
            md:text-[14px]
            xl:text-[16px]
            3xl:text-[24px]
            leading-[1.5]
            max-w-[300px]
            md:max-w-[400px]
            3xl:max-w-[550px]
            mx-auto
            md:mx-0
            mb-[20px]
            md:mb-[30px]
            3xl:mb-[45px]
          "
        >
          Ready to use templates, mockup & design resources to save time and inspire creativity
        </p>

        <Link
          href="#"
          className="
            inline-flex
            items-center
            gap-[8px]
            3xl:gap-[12px]
            bg-[#FF6B00]
            text-white
            px-[24px]
            py-[12px]
            3xl:px-[40px]
            3xl:py-[20px]
            rounded-full
            hover:bg-[#E55A00]
            transition-colors
          "
        >
          <span
            className="
              text-[14px]
              md:text-[16px]
              3xl:text-[24px]
              font-semibold
              leading-none
            "
          >
            Explore Resources
          </span>
          <span className="text-[16px] 3xl:text-[24px] leading-none">&rarr;</span>
        </Link>
      </div>

      {/* Right Image Group */}
      <div
        className="
          w-full
          md:w-1/2
          relative
          z-10
          flex
          justify-center
          md:justify-end
        "
      >
        {/* রেশিও ঠিক রাখতে ফিক্সড উইডথ/হাইট না দিয়ে aspect-ratio ব্যবহার করা হয়েছে */}
        <div
          className="
            relative
            w-[280px]
            md:w-[350px]
            xl:w-[450px]
            3xl:w-[700px]
            aspect-[16/10]
          "
        >
          {/* আপনার গ্রাফিক্স ব্যানারটির অরিজিনাল ইমেজ পাথ এখানে দিবেন */}
          <Image
            src="/banners/graphics-assets.png"
            alt="Graphics Assets"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}