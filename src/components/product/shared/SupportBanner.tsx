// import { SupportBannerArrow, WhatsAppIcons } from '@/components/custom/icons';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function SupportBanner() {
//   return (
//     <div
//       className="
//         w-full
//         rounded-[12px]
//         3xl:rounded-[16px]
        
//         flex
//         flex-col
//         items-center
        
//         relative
//         overflow-hidden
        
//         /* ব্যাকগ্রাউন্ড কালার দিয়ে রাখলাম সেফটির জন্য */
//         bg-[#0B0D12]
//       "
//       style={{
//         backgroundImage: "url('/product-banners/support-folder.jpg')",
//         /* નીચેের ৩টি লাইন নিশ্চিত করবে যে ইমেজের ডানে বা বামে কোনো অংশই কাটবে না */
//         backgroundSize: "100% 100%", 
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* 
//       // px-[20px]
//         // md:px-[40px]
//         // xl:px-[50px]
//         // 3xl:px-[80px]
//         // py-[30px]
//         // md:py-[35px]
//         // xl:py-[40px]
//         // 3xl:py-[60px]
//         এই Wrapper-টিতে pl (padding-left) ব্যবহার করা হয়েছে 
//         যাতে ব্যাকগ্রাউন্ড ইমেজের বাম পাশের ফোল্ডারটি পরিষ্কার দেখা যায় 
//         এবং টেক্সট ফোল্ডারের ওপর উঠে না যায়।
//         //   pl-[90px]
//         //   md:pl-[140px]
//         //   xl:pl-[200px]
//       */}
//       <div
//         className="
//           flex
//           flex-col
//           md:flex-row
//           items-start
//           md:items-center
//           justify-between
//           w-full
//           relative
//           z-10
          
//           pl-[38%]
//           pr-[15px]
//           py-[15px]
        
//           3xl:pl-[393px]
//           1xl:pl-[283px]
//           xl:pl-[258px]
//           md:pl-[182px]
//           md:pr-0
//           md:py-0
//         "
//       >
//         {/* Text Content */}
//         <div className="text-left mb-[12px] md:mb-0 3xl:py-[24px] 1xl:py-[17px] xl:py-[15px] md:py-[14px]">
//           <p
//             className="
//               text-white
//               text-[12px]
//               md:text-[9px]
//               1xl:text-[11px]
//               xl:text-[10px]
//               3xl:text-[15px]
//               font-normal
//               mb-[4px]
//               3xl:mb-[8px]
//               leading-none
//             "
//           >
//             Can't Find What You Need?
//           </p>
//           <h2
//             className="
//               text-[#FF6B00]
//               text-[16px]
//               sm:text-[20px]
//               md:text-[18px]
//               xl:text-[20px]
//               1xl:text-[22px]
//               3xl:text-[31px]
//               font-normal
//               mb-[4px]
//               md:mb-[8px]
//               3xl:mb-[12px]
//               leading-none
//             "
//           >
//             We're Here To Help You!
//           </h2>
//           <p
//             className="
//               text-white
//               text-[10px]
//               sm:text-[12px]
//               md:text-[10px]
//               xl:text-[11px]
//               1xl:text-[13px]
//               3xl:text-[17px]
//               leading-[1.4]
//               max-w-[180px]
//               sm:max-w-[250px]
//               md:w-[156px]
//               xl:w-[177px]
//               1xl:w-[196px]
//               3xl:w-[260px]
//             "
//           >
//             Chat with our team on WhatsApp for custom templates and designs.
//           </p>
//         </div>

//         {/* Button */}
//         <div className="flex-shrink-0 3xl:mr-[214px] 1xl:mr-[155px] xl:mr-[140px] md:mr-[55px] self-start md:self-center">
//           <Link
//             href="#"
//             className="
//               bg-white
//               text-[#1B2130]
//               px-[14px]
//               py-[8px]
//               sm:px-[20px]
//               sm:py-[10px]
//               md:px-[24px]
//               md:py-[12px]
//               xl:py-[11px]
//               xl:px-[20px]
//               3xl:px-[30px]
//               3xl:py-[18px]
              
//               rounded-full
//               flex
//               items-center
//               gap-[8px]
//               3xl:gap-[12px]
//               hover:bg-gray-100
//               transition-colors
//             "
//           >
//             {/* বাটনের ভেতরের হোয়াটসঅ্যাপ আইকনটি (svg) আগের মতোই থাকবে */}
//             <WhatsAppIcons className='1xl:w-[15px] 1xl:h-[15px] xl:w-[14px] xl:h-[14px] '/>
//             <span
//               className="
//                 text-[11px]
//                 sm:text-[14px]
//                 md:text-[16px]
//                 xl:text-[11px]
//                 1xl:text-[12px]
//                 3xl:text-[16px]
//                 font-semibold
//                 leading-none
//               "
//             >
//               Chat On WhatsApp
//             </span>
//             <span className="3xl:pl-[16px] 1xl:pl-[16px] 3xl:text-[17px] xl:pl-[8px] 1xl:text-[12px] leading-none"> <SupportBannerArrow className='xl:w-[8px] xl:h-[11px] '/> </span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { WhatsAppIcons } from "@/components/custom/icons";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HelpSection() {
  return (
    <section className="w-full px-5 md:px-0">
      <div className="relative w-full overflow-hidden rounded-[12px] md:rounded-[16px] xl:rounded-[18px] 3xl:rounded-[22px]">
        {/* Background */}
        <Image
          src="/product-banners/background.png"
          alt=""
          fill
          priority
          // sizes="100vw"
          className="object-fit"
        />

        {/* Content */}
        <div className="relative z-10 flex h-[55px] md:h-[85px] lg:h-[95px] 1xl:h-[107px] 3xl:h-[148px] w-full lg:max-w-[80vw] 1xl:max-w-[70vw] mx-auto items-center justify-between">
          {/* Left Image */}
          <div className="relative w-[21%] shrink-0 aspect-[220/140] xl:aspect-[220/110]">
            <Image
              src="/product-banners/whatsapp-box.png"
              alt="WhatsApp"
              fill
              sizes="21vw"
              className="object-contain"
            />
          </div>

          {/* Title & Description */}
          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <p className="mb-[2px] text-[5px] leading-none text-white/80 font-medium sm:text-[6px] md:text-[8px] xl:text-[11px] 3xl:text-[15px] tracking-[0.5px]">
              Can&apos;t Find What You Need?
            </p>

            <h2 className="text-[9px] font-semibold leading-none text-[#FF6B00] sm:text-[11px] md:text-[18px] xl:text-[22px] 3xl:text-[30px] tracking-[0.5px]">
              We&apos;re Here To Help You!
            </h2>

            <p className="mt-[3px] text-[4.5px] font-normal leading-tight text-white/80 sm:text-[5px] md:text-[10px] xl:text-[13px] 3xl:text-[17px] tracking-[0.5px]">
              Chat with our team on WhatsApp
              <br />
              for custom templates and designs.
            </p>
          </div>

          {/* WhatsApp Button */}
          <div className="flex shrink-0 items-center justify-center mr-7 md:mr-13.5 xl:mr-0">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-[4px] rounded-full bg-white px-[8px] py-[4px] text-[#222222] shadow-sm transition-transform duration-300 hover:scale-[1.03] sm:gap-[5px] sm:px-[10px] sm:py-[5px] md:gap-[7px] md:px-[15px] md:py-[7px] xl:gap-[10px] xl:px-[22px] xl:py-[10px] 3xl:gap-[15px] 3xl:px-[35px] 3xl:py-[15px]"
            >
              <WhatsAppIcons className="w-2.5 h-2.5 md:w-4 md:h-4 3xl:w-5.5 3xl:h-5.5"/>

              <span className="whitespace-nowrap text-[5px] font-medium sm:text-[6px] md:text-[10px] xl:text-[12px] 3xl:text-[17px]">
                Chat On WhatsApp
              </span>

              <span className="text-[7px] leading-none sm:text-[8px] md:text-[10px] xl:text-[14px] 3xl:text-[20px]">
                <ArrowRight className="h-[8px] w-[8px] sm:h-[6px] sm:w-[6px] md:h-[13px] md:w-[13px] xl:h-[16px] xl:w-[16px] 3xl:h-[20px] 3xl:w-[20px]" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}