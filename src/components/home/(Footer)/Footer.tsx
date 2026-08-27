"use client";

import Image from "next/image";
import {
  FaWhatsapp,
} from "react-icons/fa";
import { ArrowIcon, EmailIcon, FacebookIcon, InstagramIcon, LinkedinIcon, PhoneIcon, TwitterIcon } from "../../custom/icons";
import DesktopLinks from "./components/DesktopLinks";
import { importantLinks, informationLinks, paymentMethods, supportLinks } from "./footer_suppoter_text";
import { MobileFooter } from "./components/MobileFooter";
import { TabletFooter } from "./components/TabletFooter";
import { ArrowRight } from "lucide-react";


export default function Footer() {
  return (
    <>
       {/* MOBILE */}
  <div className="md:hidden">
    <MobileFooter />
  </div>

  {/* TABLET + LG */}
  <div className="hidden md:block xl:hidden">
    <TabletFooter />
  </div>

  {/* XL / 1XL / 3XL */}
  <footer className="hidden w-full overflow-hidden bg-white font-sans xl:block">
        {/* ================= TOP NEWSLETTER ================= */}
     <section className="w-full bg-white">
  <div className="container-custom flex overflow-hidden  xl:h-[140px] 1xl:h-[160px] 3xl:h-[180px]">
    {/* ORANGE */}
    <div className=" rounded-t-[18px] 3xl:rounded-t-[20px] flex h-full shrink-0 items-center bg-[#FF7037] text-white xl:w-[300px] xl:px-[24px] 1xl:w-[360px] 1xl:px-[30px] 3xl:w-[430px] 3xl:px-[40px]">
      <FaWhatsapp className="shrink-0 xl:h-[38px] xl:w-[38px] 1xl:h-[46px] 1xl:w-[46px] 3xl:h-[52px] 3xl:w-[52px]" />

      <div className="xl:ml-[12px] 1xl:ml-[17px] 3xl:ml-[20px]">
        <h3 className="whitespace-nowrap font-medium leading-[1.2] xl:text-[15px] 1xl:text-[18px] 3xl:text-[20px]">
          Need Help? Chat With Us
        </h3>

        <p className="whitespace-nowrap font-medium xl:mt-[5px] xl:text-[12px] 1xl:mt-[7px] 1xl:text-[14px] 3xl:mt-[8px] 3xl:text-[16px]">
          We are ready to help you anytime.
        </p>

        <a
          href="https://wa.me/8801818992244"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-[6px] bg-white font-medium text-[#FF7037] xl:mt-[12px] xl:h-[38px] xl:w-[180px] xl:px-[14px] xl:text-[12px] 1xl:mt-[17px] 1xl:h-[43px] 1xl:w-[225px] 1xl:px-[18px] 1xl:text-[14px] 3xl:mt-[20px] 3xl:h-[48px] 3xl:w-[255px] 3xl:px-[20px] 3xl:text-[16px]"
        >
          <span>Chat on WhatsApp</span>
          {/* <ArrowIcon /> */}
          <ArrowRight/>
        </a>
      </div>
    </div>

    {/* NEWSLETTER */}
<div className="relative rounded-t-[18px] 3xl:rounded-t-[20px]  h-full min-w-0 flex-1 overflow-hidden bg-[#FEF1E9]">
  <div className="relative z-20 grid h-full items-center xl:grid-cols-[360px_290px_minmax(0,1fr)] 1xl:grid-cols-[350px_320px_minmax(0,1fr)] 3xl:grid-cols-[590px_420px_minmax(0,1fr)] xl:gap-[18px] 1xl:gap-[24px] 3xl:gap-[40px] xl:px-[24px] xl:pr-[160px] 1xl:px-[28px] 1xl:pr-[180px] 3xl:px-[32px] 3xl:pr-[205px]">
    
    {/* TITLE / CONTENT */}
    <div className="min-w-0">
      <h3 className="whitespace-nowrap font-medium leading-[1.08] text-[#012C60] xl:text-[25px] 1xl:text-[26px] 3xl:text-[38px]">
        Subscribe to Our Newsletter
      </h3>

      <p className="whitespace-nowrap font-light text-[#012C60] xl:mt-[5px] xl:text-[12px] 1xl:mt-[7px] 1xl:text-[14px] 3xl:mt-[8px] 3xl:text-[18px]">
        Get updates on offers, new products and printing tips.
      </p>
    </div>

    {/* FORM */}
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full overflow-hidden rounded-[10px] bg-white xl:h-[48px] 1xl:h-[56px] 3xl:h-[64px]"
    >
      <input
        type="email"
        placeholder="Enter your email address"
        className="min-w-0 flex-1 text-black outline-none placeholder:text-[#777] xl:px-[14px] xl:text-[10px] 1xl:px-[18px] 1xl:text-[12px] 3xl:px-[24px] 3xl:text-[14px]"
      />

      <button
        type="submit"
        className="shrink-0 bg-[#FF4F00] font-semibold text-white xl:w-[100px] xl:text-[12px] 1xl:w-[115px] 1xl:text-[14px] 3xl:w-[140px] 3xl:text-[16px]"
      >
        Subscribe
      </button>
    </form>

    {/* AUTO REMAINING SPACE */}
    <div className="min-w-0" />
  </div>

  <div className="pointer-events-none absolute bottom-0 right-0 z-10">
    <img
      src="/footer/Mask group.svg"
      alt=""
      className="w-auto object-contain object-bottom xl:h-[140px] 1xl:h-[160px] 3xl:h-[180px]"
    />
  </div>
</div>
  </div>
</section>

        {/* ================= MAIN FOOTER ================= */}
        <section className="w-full bg-[#0F1722] text-white">
          <div className="w-full">
           <div>
             {/* <div className="container-custom grid h-full grid-cols-[1.55fr_0.95fr_0.95fr_1.15fr_1.4fr]"> */}
             <div className="container-custom grid h-full grid-cols-[2fr_1.80fr_1.80fr_1.80fr_2fr]">
              {/* BRAND */}
              <div className="border-r border-white/15 xl:px-[20px] 1xl:px-[30px] 3xl:px-[40px] py-[28px]">
                <div className="relative xl:h-[50px] 1xl:h-[58px] 3xl:h-[72px] xl:w-[255px] 1xl:w-[293px] 3xl:w-[360px]">
                  <Image
                    src="/footer/logo-white.png"
                    alt="Chapaghor"
                    fill
                    className="object-contain object-left"
                  />
                </div>

                <p className="mt-[8px] w-full xl:text-[12px] 1xl:text-[14px] 3xl:text-[18px] font-medium leading-[1.45] text-white">
                  We provide high quality printing services for you business,
                  event and personal needs
                </p>

                <div className="mt-[22px] flex items-center gap-[12px]">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#3B4653]"
                  >
                    <FacebookIcon />
                  </a>

                  <a
                    href="#"
                    aria-label="Twitter"
                    className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#3B4653]"
                  >
                    <TwitterIcon />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#3B4653]"
                  >
                    <LinkedinIcon />
                  </a>

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#3B4653]"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>

              {/* INFORMATION */}
              <DesktopLinks
                title="Information"
                links={informationLinks}
              />

              {/* SUPPORT */}
              <DesktopLinks
                title="Support"
                links={supportLinks}
              />

              {/* IMPORTANT LINKS */}
              <DesktopLinks
                title="Important Links"
                links={importantLinks}
              />

              {/* CONTACT */}
              <div className="xl:px-[10px] 1xl:px-[20px] 3xl:px-[32px] py-[28px]">
                <h4 className="text-[20px] font-medium">
                  Contact
                </h4>

                <div className="mt-[26px] flex flex-col gap-[16px]">
                  <a
                    href="tel:+8801818992244"
                    className="flex items-center gap-[12px]"
                  >
                    <PhoneIcon />
                    <span className="text-[18px] font-medium">
                      +88 01818992244
                    </span>
                  </a>

                  <a
                    href="mailto:info@chapaghor.com"
                    className="flex items-center gap-[12px]"
                  >
                    <EmailIcon />
                    <span className="text-[18px] font-medium">
                      info@chapaghor.com
                    </span>
                  </a>
                </div>

                {/* PAYMENT */}
                <div className="mt-[18px] flex items-center gap-[7px]">
                  <div className="flex shrink-0 items-center gap-[3px]">
                    <span className="rotate-180 text-[8px] font-medium [writing-mode:vertical-rl]">
                      Verified By
                    </span>

                    <div className="relative h-[82px] w-[23px]">
                      <Image
                        src="/footer/payment/sslcommerz_verified.png"
                        alt="SSLCommerz"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-[8px]">
                    {paymentMethods.map((method) => (
                      <div
                        key={method}
                        className="relative h-[34px] w-[38px] rounded-[4px] bg-white"
                      >
                        <Image
                          src={`/footer/payment/${method}.png`}
                          alt={method.replaceAll("_", " ")}
                          fill
                          className="object-contain p-[4px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
           </div>

            {/* ================= COPYRIGHT ================= */}
            <div className="border-t border-white/15">
              <div className="container-custom flex h-[108px] flex-col items-center justify-center  text-center">
              <p className="text-[16px] font-medium text-[#8F8080]">
                Copyright © 2026. Bornil Printing Press. All rights reserved.
              </p>

              <p className="mt-[3px] text-[13px] text-[#8F8080]">
                Chapaghor.com is the online platform of Bornil Printing Press
              </p>
            </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}