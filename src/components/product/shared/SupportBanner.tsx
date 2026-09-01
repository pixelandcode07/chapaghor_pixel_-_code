import { SupportBannerArrow, WhatsAppIcons } from '@/components/custom/icons';
import Image from 'next/image';
import Link from 'next/link';

export default function SupportBanner() {
  return (
    <div
      className="
        w-full
        rounded-[12px]
        3xl:rounded-[16px]
        
        flex
        flex-col
        items-center
        
        relative
        overflow-hidden
        
        /* ব্যাকগ্রাউন্ড কালার দিয়ে রাখলাম সেফটির জন্য */
        bg-[#0B0D12]
      "
      style={{
        backgroundImage: "url('/product-banners/support-folder.jpg')",
        /* નીચેের ৩টি লাইন নিশ্চিত করবে যে ইমেজের ডানে বা বামে কোনো অংশই কাটবে না */
        backgroundSize: "100% 100%", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 
      // px-[20px]
        // md:px-[40px]
        // xl:px-[50px]
        // 3xl:px-[80px]
        // py-[30px]
        // md:py-[35px]
        // xl:py-[40px]
        // 3xl:py-[60px]
        এই Wrapper-টিতে pl (padding-left) ব্যবহার করা হয়েছে 
        যাতে ব্যাকগ্রাউন্ড ইমেজের বাম পাশের ফোল্ডারটি পরিষ্কার দেখা যায় 
        এবং টেক্সট ফোল্ডারের ওপর উঠে না যায়।
        //   pl-[90px]
        //   md:pl-[140px]
        //   xl:pl-[200px]
      */}
      <div
        className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          w-full
          relative
          z-10
        
          3xl:pl-[393px]
          1xl:pl-[283px]
          xl:pl-[258px]
          md:pl-[182px]
        "
      >
        {/* Text Content */}
        <div className="text-left mb-[20px] md:mb-0 3xl:py-[24px] 1xl:py-[17px] xl:py-[15px] md:py-[14px]">
          <p
            className="
              text-white
              text-[12px]
              md:text-[9px]
              1xl:text-[11px]
              xl:text-[10px]
              3xl:text-[15px]
              font-normal
              mb-[4px]
              3xl:mb-[8px]
              leading-none
            "
          >
            Can't Find What You Need?
          </p>
          <h2
            className="
              text-[#FF6B00]
              text-[20px]
              md:text-[18px]
              xl:text-[20px]
              1xl:text-[22px]
              3xl:text-[31px]
              font-normal
              mb-[8px]
              3xl:mb-[12px]
              leading-none
            "
          >
            We're Here To Help You!
          </h2>
          <p
            className="
              text-white
              text-[12px]
              md:text-[10px]
              xl:text-[11px]
              1xl:text-[13px]
              3xl:text-[17px]
              leading-[1.4]
              max-w-[250px]
              md:w-[156px]
              xl:w-[177px]
              1xl:w-[196px]
              3xl:w-[260px]
            "
          >
            Chat with our team on WhatsApp for custom templates and designs.
          </p>
        </div>

        {/* Button */}
        <div className="flex-shrink-0 3xl:mr-[214px] 1xl:mr-[155px] xl:mr-[140px] md:mr-[55px] self-start md:self-center">
          <Link
            href="#"
            className="
              bg-white
              text-[#1B2130]
              px-[20px]
              py-[10px]
              md:px-[24px]
              md:py-[12px]
              xl:py-[11px]
              xl:px-[20px]
              3xl:px-[30px]
              3xl:py-[18px]
              
              rounded-full
              flex
              items-center
              gap-[8px]
              3xl:gap-[12px]
              hover:bg-gray-100
              transition-colors
            "
          >
            {/* বাটনের ভেতরের হোয়াটসঅ্যাপ আইকনটি (svg) আগের মতোই থাকবে */}
            <WhatsAppIcons className='1xl:w-[15px] 1xl:h-[15px] xl:w-[14px] xl:h-[14px] '/>
            <span
              className="
                text-[14px]
                md:text-[16px]
                xl:text-[11px]
                1xl:text-[12px]
                3xl:text-[16px]
                font-semibold
                leading-none
              "
            >
              Chat On WhatsApp
            </span>
            <span className="3xl:pl-[16px] 1xl:pl-[16px] 3xl:text-[17px] xl:pl-[8px] 1xl:text-[12px] leading-none"> <SupportBannerArrow className='xl:w-[8px] xl:h-[11px] '/> </span>
          </Link>
        </div>
      </div>
    </div>
  );
}