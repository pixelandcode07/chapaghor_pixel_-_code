import Image from "next/image";
import { importantLinks, informationLinks, mobilePaymentMethods, supportLinks } from "../footer_suppoter_text";
import { FaHeadset, FaInfoCircle, FaLink, FaPhoneAlt } from "react-icons/fa";
import MobileAccordion from "./MobileAccordion";
import MobileLinks from "./MobileLinks";
import MobileSocialButton from "./MobileSocialButton";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/custom/icons";
import { useState } from "react";

export function MobileFooter() {
  const [openedSection, setOpenedSection] =
    useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenedSection((current) =>
      current === section ? null : section
    );
  };

  return (
    <footer className="w-full overflow-hidden bg-[#0F1722] font-sans text-white">
      <div className="px-5 md:px-8 xl:px-0 pb-[18px] pt-[17px]">
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