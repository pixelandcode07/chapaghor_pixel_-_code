import { ArrowIcon } from "@/components/custom/icons";
import Image from "next/image";
import { useState } from "react";
import { FaHeadset, FaInfoCircle, FaLink, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { importantLinks, informationLinks, mobilePaymentMethods, supportLinks } from "../footer_suppoter_text";
import TabletAccordion from "./TabletAccordion";
import MobileLinks from "./MobileLinks";
import { ArrowRight } from "lucide-react";

export function TabletFooter() {
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
            {/* <ArrowIcon /> */}
            <ArrowRight className="text-[#012C60]"/>
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