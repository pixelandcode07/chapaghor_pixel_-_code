<<<<<<< HEAD
import React from 'react';

export default function ConnectedCard() {
  return (
    <section className="container-custom py-1 my-1 ">
      {/* Top navigation dots */}
      {/* <div className="flex justify-center items-center gap-2 mb-8 text-sm text-gray-400 font-medium tracking-wide">
        <span className="text-gray-400">•</span>
        <span>Behind the scenes</span>
        <span className="text-gray-400">•</span>
        <span>Offers</span>
        <span className="text-gray-400">•</span>
        <span>New Designs</span>
        <span className="text-gray-400">•</span>
        <span>Tips</span>
      </div> */}

      {/* Social Cards */}
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        {/* Facebook */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
          <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-gray-900 mb-1">
            Facebook
          </h3>
          <p className="text-sm text-gray-500 mb-5 leading-snug">
            Updates, news and
            <br />
            latest offers
          </p>
          <a
            href="#"
            className="text-[#1877F2] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            Follow Us <span>→</span>
          </a>
        </div>

        {/* Instagram */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-gray-900 mb-1">
            Instagram
          </h3>
          <p className="text-sm text-gray-500 mb-5 leading-snug">
            See our latest designs
            <br />& daily updates
          </p>
          <a
            href="#"
            className="text-[#E1306C] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            Follow Us <span>→</span>
          </a>
        </div>

        {/* YouTube */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
          <div className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-gray-900 mb-1">
            YouTube
          </h3>
          <p className="text-sm text-gray-500 mb-5 leading-snug">
            Watch tutorials, behind
            <br />
            the scenes & more.
          </p>
          <a
            href="#"
            className="text-[#FF0000] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            Subscribe <span>→</span>
          </a>
        </div>

        {/* Pinterest */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
          <div className="w-12 h-12 rounded-full bg-[#E60023] flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-gray-900 mb-1">
            Pinterest
          </h3>
          <p className="text-sm text-gray-500 mb-5 leading-snug">
            Explore creative ideas
            <br />
            and design inspiration.
          </p>
          <a
            href="#"
            className="text-[#E60023] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            Follow Us <span>→</span>
          </a>
        </div>

        {/* LinkedIn */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
          <div className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center mb-4">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-gray-900 mb-1">
            LinkedIn
          </h3>
          <p className="text-sm text-gray-500 mb-5 leading-snug">
            Connect with us for business
            <br />
            news and opportunities
          </p>
          <a
            href="#"
            className="text-[#0A66C2] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            Connect <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
=======
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

              <p className="mb-5 xl:mb-[22px] 1xl:mb-[24px] 3xl:mb-[34px] text-sm leading-snug font-light text-[#757575] xl:text-[10px] 1xl:text-[12px] 3xl:text-[15px] tracking-[0.5px]">
                {social.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-1 xl:text-[12px] 3xl:text-[16px] font-light transition-all hover:gap-2 tracking-[0.5px] xl:pb-[19px] 1xl:pb-[21px] 3xl:pb-[29px]"
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
>>>>>>> c2e966d100d3268a89a008c13a5f461138751889
