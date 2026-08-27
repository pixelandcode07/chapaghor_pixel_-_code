"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  FaWhatsapp,
  FaInfoCircle,
  FaHeadset,
  FaLink,
  FaPhoneAlt,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { ArrowIcon, EmailIcon, FacebookIcon, InstagramIcon, LinkedinIcon, PhoneIcon, TwitterIcon } from "../../custom/icons";
// import { importantLinks, informationLinks, mobilePaymentMethods, paymentMethods, supportLinks } from "./components/footer_suppoter_text";
import DesktopLinks from "./components/DesktopLinks";
import { importantLinks, informationLinks, mobilePaymentMethods, paymentMethods, supportLinks } from "./footer_suppoter_text";
import MobileSocialButton from "./components/MobileSocialButton";
import MobileAccordion from "./components/MobileAccordion";
import MobileLinks from "./components/MobileLinks";
import TabletAccordion from "./components/TabletAccordion";


export default function Footer() {
  return (
    <>
      {/* MOBILE */}
      <div className="sm:hidden">
        <MobileFooter />
      </div>

      {/* TABLET */}
      <div className="hidden sm:block lg:hidden">
        <TabletFooter />
      </div>

      {/* =====================================================
          DESKTOP — 1024px+
      ===================================================== */}
      <footer className="hidden w-full overflow-hidden bg-white font-sans lg:block">
        {/* ================= TOP NEWSLETTER ================= */}
        <section className="w-full bg-white">
          <div className="container-custom flex h-[180px]">
            {/* ORANGE */}
            <div className="flex h-full w-[430px] shrink-0 items-center bg-[#FF7037] px-[40px] text-white">
              <FaWhatsapp className="h-[52px] w-[52px] shrink-0" />

              <div className="ml-[20px]">
                <h3 className="text-[20px] font-medium leading-[1.2]">
                  Need Help? Chat With Us
                </h3>

                <p className="mt-[8px] text-[16px] font-medium">
                  We are ready to help you anytime.
                </p>

                <a
                  href="https://wa.me/8801818992244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-[20px] flex h-[48px] w-[255px] items-center justify-between rounded-[6px] bg-white px-[20px] text-[16px] font-semibold text-[#FF7037]"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="relative h-full min-w-0 flex-1 overflow-hidden bg-[#FEF1E9]">
              <div className="relative z-20 flex h-full items-center px-[32px] pr-[205px]">
                <div className="min-w-0 flex-1">
                  <h3 className="whitespace-nowrap text-[38px] font-medium leading-[1.08] text-[#012C60]">
                    Subscribe to Our Newsletter
                  </h3>

                  <p className="mt-[8px] whitespace-nowrap text-[18px] font-light text-[#012C60]">
                    Get updates on offers, new products and printing tips.
                  </p>
                </div>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="ml-[40px] flex h-[64px] w-[440px] shrink-0 overflow-hidden rounded-[10px] bg-white"
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="min-w-0 flex-1 px-[24px] text-[14px] text-black outline-none placeholder:text-[#777]"
                  />

                  <button
                    type="submit"
                    className="w-[140px] shrink-0 bg-[#FF4F00] text-[16px] font-semibold text-white"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="pointer-events-none absolute bottom-0 right-0 z-10">
                <img
                  src="/footer/Mask group.svg"
                  alt=""
                  className="h-[180px] w-auto object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= MAIN FOOTER ================= */}
        <section className="w-full bg-[#0F1722] text-white">
          <div className="w-full">
           <div>
             <div className="container-custom grid h-full grid-cols-[1.55fr_0.95fr_0.95fr_1.15fr_1.4fr]">
              {/* BRAND */}
              <div className="border-r border-white/15 px-[40px] py-[28px]">
                <div className="relative h-[72px] w-[360px]">
                  <Image
                    src="/footer/logo-white.png"
                    alt="Chapaghor"
                    fill
                    className="object-contain object-left"
                  />
                </div>

                <p className="mt-[8px] max-w-[420px] text-[17px] font-medium leading-[1.45] text-white">
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
              <div className="px-[32px] py-[28px]">
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





/* =========================================================
   TABLET
========================================================= */

function TabletFooter() {
  const [openedSection, setOpenedSection] =
    useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenedSection((current) =>
      current === section ? null : section
    );
  };

  return (
    <footer className="w-full bg-white px-0 pt-5 font-sans">
      <div className="mx-auto w-full overflow-hidden rounded-t-[20px] bg-[#0F1722] text-white">
        <div className="flex min-h-[112px] items-center justify-between gap-6 bg-[#FF4F00] px-10 py-5">
          <div className="flex min-w-0 items-center gap-4">
            <FaWhatsapp className="h-[54px] w-[54px] shrink-0" />

            <div>
              <h3 className="text-[22px] font-medium">
                Need Help? Chat With Us
              </h3>

              <p className="mt-1 text-[15px]">
                We are ready to help you anytime.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/8801818992244"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[62px] w-[260px] shrink-0 items-center justify-between rounded-[10px] bg-white px-7 text-[18px] font-medium text-[#012C60]"
          >
            <span>Chat on WhatsApp</span>
            <ArrowIcon />
          </a>
        </div>

        <div className="grid grid-cols-[0.95fr_1.05fr] gap-10 px-8 py-8">
          <div>
            <div className="relative h-[66px] w-[310px]">
              <Image
                src="/footer/logo-white.png"
                alt="Chapaghor"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="mt-3 max-w-[310px] text-[14px] leading-[1.45]">
              We provide high quality printing services for you
              business, event and personal needs
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex h-[52px] max-w-[330px] overflow-hidden rounded-[6px] bg-white"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="min-w-0 flex-1 px-3 text-[12px] text-black outline-none"
              />

              <button
                type="submit"
                className="w-[105px] bg-[#FF4F00] text-[13px] font-semibold"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-4 grid grid-cols-10 gap-1">
              {mobilePaymentMethods.map((method) => (
                <div
                  key={method}
                  className="relative aspect-square bg-white"
                >
                  <Image
                    src={`/footer/payment/${method}.png`}
                    alt={method}
                    fill
                    className="object-contain p-[2px]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {[
              ["Information", informationLinks, FaInfoCircle],
              ["Support", supportLinks, FaHeadset],
              ["Important Link", importantLinks, FaLink],
            ].map(([title, links, Icon]) => (
              <TabletAccordion
                key={title as string}
                title={title as string}
                icon={<Icon />}
                open={openedSection === title}
                onClick={() => toggleSection(title as string)}
              >
                <MobileLinks links={links as string[]} />
              </TabletAccordion>
            ))}

            <TabletAccordion
              title="Contact"
              icon={<FaPhoneAlt />}
              open={openedSection === "Contact"}
              onClick={() => toggleSection("Contact")}
            >
              <div className="flex flex-col gap-3 text-[12px] text-[#D6D6D6]">
                <a href="tel:+8801818992244">
                  +88 01818992244
                </a>

                <a href="mailto:info@chapaghor.com">
                  info@chapaghor.com
                </a>
              </div>
            </TabletAccordion>
          </div>
        </div>

        <div className="border-t border-white/15 px-4 py-4 text-center text-[12px] text-[#8F8B8B]">
        {/* border-white/15 */}
          Copyright © 2026. Bornil Printing Press. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   MOBILE
========================================================= */

function MobileFooter() {
  const [openedSection, setOpenedSection] =
    useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenedSection((current) =>
      current === section ? null : section
    );
  };

  return (
    <footer className="w-full overflow-hidden bg-[#0F1722] font-sans text-white">
      <div className="px-2 pb-[18px] pt-[17px]">
        <div className="relative mx-auto h-[54px] w-[230px]">
          <Image
            src="/footer/logo-white.png"
            alt="Chapaghor"
            fill
            className="object-contain"
          />
        </div>

        <p className="mx-auto mt-2 max-w-[310px] text-center font-light text-[11px] leading-[1.35]">
          We provide high quality printing services for you
          <br />
          business, event and personal needs
        </p>

        <div className="mt-2.25 flex items-center justify-center gap-1.5">
           <span className="text-[#FFFFFF] text-[12px] font-normal">
            Follow Us:
          </span>
          <MobileSocialButton>
            <FacebookIcon  />
          </MobileSocialButton>

          <MobileSocialButton>
            <TwitterIcon />
          </MobileSocialButton>

          <MobileSocialButton>
            <LinkedinIcon />
          </MobileSocialButton>

          <MobileSocialButton>
            <InstagramIcon />
          </MobileSocialButton>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-3 flex h-[45px] overflow-hidden rounded-[8px] border border-[#3A414B] bg-[#101822] p-[3px]"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="min-w-0 flex-1 bg-transparent px-3 text-[12px] text-white outline-none"
          />

          <button
            type="submit"
            className="w-[80px] rounded-[7px] bg-[#FF4B0B] text-[11px] font-semibold"
          >
            Subscribe
          </button>
        </form>

        <div className="my-[15px] h-px bg-[#343D48]" />

        <div className="flex flex-col gap-[7px]">
         
          <MobileAccordion
            title="Information"
            icon={<FaInfoCircle />}
            open={openedSection === "Information"}
            onClick={() => toggleSection("Information")}
          >
            <MobileLinks links={informationLinks} />
          </MobileAccordion>

          <MobileAccordion
            title="Support"
            icon={<FaHeadset />}
            open={openedSection === "Support"}
            onClick={() => toggleSection("Support")}
          >
            <MobileLinks links={supportLinks} />
          </MobileAccordion>

          <MobileAccordion
            title="Important Link"
            icon={<FaLink />}
            open={openedSection === "Important Link"}
            onClick={() => toggleSection("Important Link")}
          >
            <MobileLinks links={importantLinks} />
          </MobileAccordion>

          <MobileAccordion
            title="Contact"
            icon={<FaPhoneAlt />}
            open={openedSection === "Contact"}
            onClick={() => toggleSection("Contact")}
          >
            <div className="flex flex-col gap-3 text-[12px] text-[#D6D6D6]">
              <a href="tel:+8801818992244">
                +88 01818992244
              </a>

              <a href="mailto:info@chapaghor.com">
                info@chapaghor.com
              </a>
            </div>
          </MobileAccordion>
        </div>
      </div>

      <div className="bg-white px-2.5 py-3.5">
        <div className="grid grid-cols-10 gap-1">
          {mobilePaymentMethods.map((method) => (
            <div
              key={method}
              className="relative aspect-square rounded-[5px] border border-[#D3D3D3] bg-white"
            >
              <Image
                src={`/footer/payment/${method}.png`}
                alt={method}
                fill
                className="object-contain p-[3px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="px-3 pb-3.5 pt-3 text-center">
        <p className="text-[11px] text-[#8F8B8B]">
          © 2026. Bornil Printing Press. All rights reserved.
        </p>

        <p className="text-[9px] text-[#777D84]">
          Chapaghor.com is the online platform of Bornil Printing Press
        </p>
      </div>
    </footer>
  );
}









