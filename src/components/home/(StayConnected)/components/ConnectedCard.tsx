"use client";

import { ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa6";

const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    icon: FaFacebookF,
    color: "#1877F2",
    buttonBg: "#EEF5FF",
    action: "Follow Us",
    description: (
      <>
        Updates, news and
        <br />
        latest offers
      </>
    ),
  },
  {
    id: 2,
    name: "Instagram",
    icon: FaInstagram,
    color: "#E1306C",
    buttonBg: "#FFF0F6",
    action: "Follow Us",
    description: (
      <>
        See our latest designs
        <br />& daily updates
      </>
    ),
  },
  {
    id: 3,
    name: "YouTube",
    icon: FaYoutube,
    color: "#FF0000",
    buttonBg: "#FFF0F0",
    action: "Subscribe",
    description: (
      <>
        Watch tutorials, behind
        <br />
        the scenes & more.
      </>
    ),
  },
  {
    id: 4,
    name: "Pinterest",
    icon: FaPinterestP,
    color: "#E60023",
    buttonBg: "#FFF0F2",
    action: "Follow Us",
    description: (
      <>
        Explore creative ideas
        <br />
        and design inspiration.
      </>
    ),
  },
  {
    id: 5,
    name: "LinkedIn",
    icon: FaLinkedinIn,
    color: "#0A66C2",
    buttonBg: "#EEF6FF",
    action: "Connect",
    description: (
      <>
        Connect with us for business
        <br />
        news and opportunities
      </>
    ),
  },
];

export default function ConnectedCard() {
  return (
    <section className=" my-1 w-full px-2 py-1 md:px-0">
      {/* XL / 1XL / 3XL */}
      <div className="hidden xl:grid xl:grid-cols-5 xl:gap-4 1xl:gap-5 3xl:gap-6 container-custom">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <div
              key={social.id}
              className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 3xl:px-6 3xl:pt-[42px] 1xl:pt-[31px] xl:pt-[29px] xl:pt-[29px]  text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 
              hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
            >
              <div
                className="mb-4 xl:mb-[15px] 1xl:mb-[16px] 3xl:mb-[23px] flex h-12 w-12 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: social.color }}
              >
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mb-1 xl:mb-[9px] 1xl:mb-[15px] 3xl:mb-[15px] text-base font-medium text-[#000000] xl:text-[12px] 1xl:text-[14px] 3xl:text-[19px] tracking-[0.5px]">
                {social.name}
              </h3>

              <p className="mb-5 xl:mb-[22px] 1xl:mb-[24px] 3xl:mb-[34px] text-sm leading-snug font-light text-[#757575] xl:text-[10px] 1xl:text-[12px] 3xl:text-[16px] tracking-[0.5px]">
                {social.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-1 xl:text-[12px] 3xl:text-[17px] font-light transition-all hover:gap-2 tracking-[0.5px] xl:pb-[19px] 1xl:pb-[21px] 3xl:pb-0"
                style={{ color: social.color }}
              >
                {social.action} <span><ArrowRight className="xl:w-3 3xl:w-4 xl:h-3 3xl:h-4" /></span>
                {/* → */}
              </a>
            </div>
          );
        })}
      </div>

      {/* Mobile / MD / LG */}
      <div className="grid grid-cols-5 gap-1 md:gap-2 lg:gap-3 xl:hidden">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <div
              key={social.id}
              className="flex h-[83px] w-[64px] flex-col items-center rounded-[10px] border border-[#EEEEEE] bg-white px-1 py-3 shadow-[0_3px_15px_rgba(0,0,0,0.05)] md:h-[170px] md:px-2 md:pt-[17px] md:pb-[14px] lg:h-[180px] lg:px-3"
            >
              <div className="flex h-[19px] w-[26px] shrink-0 items-center justify-center md:h-11 md:w-11">
                <Icon className="h-4.5 w-4.5 md:h-10 md:w-10" style={{ color: social.color }} />
              </div>

              <h3 className="mt-2 truncate text-[7px] font-medium leading-none text-black md:text-[15px] lg:text-[16px] tracking-[0.5px]">
                {social.name}
              </h3>

              <span
                className="mt-2 h-[1.5px] w-[9.45px] shrink-0 rounded-full md:mt-4 md:h-0.75 md:w-5"
                style={{ backgroundColor: social.color }}
              />

              <a
                href="#"
                className="mt-2 md:mt-4 flex h-[28px] w-full max-w-[80px] items-center justify-center rounded-full text-[9px] font-medium md:h-[38px] md:w-[105px] md:text-[18px] tracking-[0.5px]"
                style={{
                  color: social.color,
                  backgroundColor: social.buttonBg,
                }}
              >
                {social.action.replace(" Us", "")}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}



// Done By Moinuddin
{/* Mobile / MD / LG */}
//  <div className="grid grid-cols-5 gap-1 md:gap-2 lg:gap-3 xl:hidden">
//         {socialLinks.map((social) => {
//           const Icon = social.icon;

//           return (
//             <div
//               key={social.id}
//               className="flex h-auto min-w-0 flex-col items-center rounded-[10px] border border-[#EEEEEE] bg-white px-1 py-3 shadow-[0_3px_15px_rgba(0,0,0,0.05)] md:h-[170px] md:px-2 md:py-4 lg:h-[180px] lg:px-3"
//             >
//               <div className="flex h-8 w-8 shrink-0 items-center justify-center md:h-11 md:w-11">
//                 <Icon className="h-7 w-7 md:h-10 md:w-10" style={{ color: social.color }} />
//               </div>

//               <h3 className="mt-2 truncate text-[8px] font-medium leading-none text-black md:text-[15px] lg:text-[16px] tracking-[0.5px]">
//                 {social.name}
//               </h3>

//               <span
//                 className="mt-2 h-0.5 w-4 shrink-0 rounded-full md:mt-4 md:h-0.75 md:w-5"
//                 style={{ backgroundColor: social.color }}
//               />

//               <a
//                 href="#"
//                 className="mt-2 md:mt-4 flex h-[28px] w-full max-w-[80px] items-center justify-center rounded-full text-[9px] font-medium md:h-[38px] md:max-w-[108px] md:text-[14px] tracking-[0.5px]"
//                 style={{
//                   color: social.color,
//                   backgroundColor: social.buttonBg,
//                 }}
//               >
//                 {social.action.replace(" Us", "")}
//               </a>
//             </div>
//           );
//         })}
//       </div>