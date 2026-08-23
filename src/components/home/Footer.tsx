"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
  FaInfoCircle,
  FaHeadset,
  FaLink,
  FaPhoneAlt,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const informationLinks = [
  "About Us",
  "Our Service",
  "Order Information",
  "Artwork Instructions",
  "FAQ",
];

const supportLinks = [
  "Help Business",
  "Solutions Find",
  "Stores My Account",
  "Payment Methods",
  "Track Order",
];

const importantLinks = [
  "Privacy Policy",
  "Delivery & Return Policy",
  "Terms & conditions",
  "Shipping Policy",
  "Packaging",
];

const paymentMethods = [
  "dbbl_nexus",
  "bkash",
  "nagad",
  "rocket",
  "upay",
  "visa",
  "mastercard",
  "american_express",
  "unionpay",
  "diners_club",
];

const mobilePaymentMethods = [
  "visa",
  "mastercard",
  "american_express",
  "unionpay",
  "diners_club",
  "dbbl_nexus",
  "bkash",
  "nagad",
  "rocket",
  "upay",
];

export default function Footer() {
  return (
    <>
    <div className="sm:hidden">
      <MobileFooter />
    </div>

    <div className="hidden sm:block lg:hidden">
      <TabletFooter />
    </div>

    <footer className="hidden w-full overflow-x-hidden bg-white font-sans lg:block">

      {/* ================= TOP BANNER ================= */}
      <section className="w-full bg-white px-3 pt-4 sm:px-5 lg:px-0 lg:pt-4">
        <div className="mx-auto flex w-full flex-col gap-0 lg:h-[180px] lg:max-w-[90vw] lg:flex-row lg:gap-0 2xl:h-[180px]">

          {/* ================= ORANGE / WHATSAPP ================= */}
          <div className="flex shrink-0 items-center gap-4 rounded-t-[16px] bg-[#FD7034] px-5 py-6 text-white sm:px-7 lg:h-full lg:w-[31%] lg:rounded-l-[18px] lg:rounded-r-none lg:px-5 lg:py-5 xl:w-[27%] xl:px-6 2xl:w-[430px] 2xl:gap-5 2xl:px-10">
            <FaWhatsapp className="h-[44px] w-[44px] shrink-0 sm:h-[48px] sm:w-[48px] lg:h-[42px] lg:w-[42px] xl:h-[46px] xl:w-[46px] 2xl:h-[52px] 2xl:w-[52px]" />

            <div className="min-w-0 flex-1">
              <h3 className="text-[17px] font-medium leading-tight sm:text-[19px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px]">
                Need Help? Chat With Us
              </h3>

              <p className="mt-2 text-[13px] font-medium leading-tight sm:text-[14px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px]">
                We are ready to help you anytime.
              </p>

              <a
                href="https://wa.me/8801818992244"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex h-[46px] w-full max-w-[250px] items-center justify-between rounded-[6px] bg-white px-5 text-[14px] font-medium text-[#FE6E35] transition-colors hover:bg-gray-50 lg:h-[43px] lg:max-w-[205px] lg:text-[11px] xl:max-w-[225px] xl:text-[13px] 2xl:h-[48px] 2xl:max-w-[255px] 2xl:text-[16px]"
              >
                <span>Chat on WhatsApp</span>
                <FaArrowRight className="shrink-0 text-[14px]" />
              </a>
            </div>
          </div>

        
         {/* ================= PINK / NEWSLETTER ================= */}
{/* ================= PINK / NEWSLETTER ================= */}
<div className="relative flex-1 overflow-hidden rounded-b-[16px] bg-[#FEF1E9] px-5 py-7 sm:px-7 lg:h-full lg:rounded-l-none lg:rounded-r-[18px] lg:px-6 lg:py-0 xl:px-7 2xl:px-8">

  {/* Content */}
  <div className="relative z-20 flex h-full flex-col justify-center gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(240px,300px)] lg:items-center lg:gap-4 lg:pr-[150px] xl:grid-cols-[minmax(320px,1fr)_minmax(280px,340px)] xl:gap-5 xl:pr-[170px] 2xl:grid-cols-[minmax(440px,1fr)_minmax(360px,440px)] 2xl:gap-6 2xl:pr-[205px]">

    {/* Newsletter Text */}
    <div className="min-w-0">
      <h3 className="text-[26px] font-medium leading-[1.08] text-[#012C60] sm:text-[29px] lg:whitespace-nowrap lg:text-[24px] xl:text-[28px] 2xl:text-[38px]">
        Subscribe to Our Newsletter
      </h3>

      <p className="mt-2 text-[14px] font-light leading-relaxed text-[#012C60] sm:text-[15px] lg:whitespace-nowrap lg:text-[12px] xl:text-[14px] 2xl:text-[18px]">
        Get updates on offers, new products and printing tips.
      </p>
    </div>

    {/* Email Input */}
    <form onSubmit={(e) => e.preventDefault()} className="flex h-[54px] w-full min-w-0 overflow-hidden rounded-[10px] bg-white sm:h-[58px] lg:h-[52px] lg:max-w-[440px] lg:justify-self-end xl:h-[56px] 2xl:h-[64px]">
      <input type="email" placeholder="Enter your email address" className="min-w-0 flex-1 bg-white px-4 text-[12px] text-black outline-none placeholder:text-gray-500 sm:px-5 sm:text-[13px] lg:px-4 lg:text-[11px] xl:px-5 xl:text-[12px] 2xl:px-6 2xl:text-[14px]" />

      <button type="submit" className="shrink-0 bg-[#FF4F00] px-4 text-[12px] font-semibold text-white transition-colors hover:bg-[#E94800] sm:px-6 sm:text-[13px] lg:px-5 lg:text-[11px] xl:px-7 xl:text-[13px] 2xl:px-8 2xl:text-[16px]">
        Subscribe
      </button>
    </form>

  </div>

  {/* ================= ENVELOPE ================= */}
  <div className="pointer-events-none absolute bottom-0 right-0 z-10 hidden lg:block">
    <img src="/footer/Mask group.svg" alt="" className="h-[120px] w-auto max-w-none object-contain object-bottom xl:h-[145px] 2xl:h-[180px]" />
  </div>

</div>

        </div>
      </section>

      {/* ================= MAIN FOOTER ================= */}
      <section className="w-full bg-[#0F1722] text-white">
        <div className="mx-auto w-full px-5 sm:px-7 lg:max-w-[90vw] lg:px-0">

          {/* Desktop fixed compact height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:h-[300px] lg:grid-cols-[1.55fr_0.95fr_0.95fr_1.15fr_1.4fr]">

            {/* ================= BRAND ================= */}
            <div className="border-b border-white/15 py-8 sm:col-span-2 lg:col-span-1 lg:border-b-0 lg:border-r lg:px-6 lg:py-7 xl:px-7 2xl:px-10">

              <div className="relative h-[62px] w-[275px] max-w-full sm:w-[310px] lg:h-[55px] lg:w-[240px] xl:h-[60px] xl:w-[270px] 2xl:h-[72px] 2xl:w-[360px]">
                <Image
                  src="/footer/logo-white.png"
                  alt="Chapaghor"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <p className="mt-4 max-w-[420px] text-[14px] font-medium leading-[1.45] text-white sm:text-[15px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px]">
                We provide high quality printing services for you business, event and personal needs
              </p>

              <div className="mt-6 flex items-center gap-3 text-white">

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition-colors hover:bg-white hover:text-black lg:h-9 lg:w-9 2xl:h-11 2xl:w-11"
                >
                  <FaFacebook />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition-colors hover:bg-white hover:text-black lg:h-9 lg:w-9 2xl:h-11 2xl:w-11"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition-colors hover:bg-white hover:text-black lg:h-9 lg:w-9 2xl:h-11 2xl:w-11"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition-colors hover:bg-white hover:text-black lg:h-9 lg:w-9 2xl:h-11 2xl:w-11"
                >
                  <FaInstagram />
                </a>

              </div>
            </div>

            {/* ================= INFORMATION ================= */}
            <FooterLinks
              title="Information"
              links={informationLinks}
            />

            {/* ================= SUPPORT ================= */}
            <FooterLinks
              title="Support"
              links={supportLinks}
            />

            {/* ================= IMPORTANT LINKS ================= */}
            <FooterLinks
              title="Important Links"
              links={importantLinks}
            />

            {/* ================= CONTACT ================= */}
            <div className="border-t border-white/15 py-8 sm:border-l sm:border-t-0 sm:pl-6 lg:border-l-0 lg:px-5 lg:py-7 xl:px-6 2xl:px-10">

              <h4 className="mb-5 text-[18px] font-medium text-white lg:text-[15px] xl:text-[17px] 2xl:text-[20px]">
                Contact
              </h4>

              <div className="flex flex-col gap-4 text-[14px] font-medium text-white lg:gap-3 lg:text-[12px] xl:text-[14px] 2xl:gap-4 2xl:text-[18px]">

                {/* Phone */}
                <a
                  href="tel:+8801818992244"
                  className="flex items-center gap-3 transition-colors hover:text-gray-200 2xl:gap-4"
                >
                  <div className="relative h-9 w-9 shrink-0 lg:h-8 lg:w-8 xl:h-9 xl:w-9 2xl:h-11 2xl:w-11">
                    <Image
                      src="/footer/Icon (1).png"
                      alt="Phone"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <span className="whitespace-nowrap">
                    +88 01818992244
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@chapaghor.com"
                  className="flex items-center gap-3 transition-colors hover:text-gray-200 2xl:gap-4"
                >
                  <div className="relative h-9 w-9 shrink-0 lg:h-8 lg:w-8 xl:h-9 xl:w-9 2xl:h-11 2xl:w-11">
                    <Image
                      src="/footer/Icon.png"
                      alt="Email"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <span className="whitespace-nowrap">
                    info@chapaghor.com
                  </span>
                </a>

              </div>

              {/* ================= PAYMENT METHODS ================= */}
              <div className="mt-5 flex items-center gap-2 lg:mt-4 2xl:mt-5">

                {/* Verified By */}
                <div className="flex shrink-0 items-center gap-1">

                  <span className="rotate-180 whitespace-nowrap text-[7px] font-medium text-white [writing-mode:vertical-rl] xl:text-[8px] 2xl:text-[9px]">
                    Verified By
                  </span>

                  <div className="relative h-[72px] w-[20px] shrink-0 lg:h-[66px] lg:w-[18px] xl:h-[72px] xl:w-[20px] 2xl:h-[82px] 2xl:w-[23px]">
                    <Image
                      src="/footer/payment/sslcommerz_verified.png"
                      alt="SSLCommerz"
                      fill
                      className="object-contain"
                    />
                  </div>

                </div>

                {/* Payment Logos */}
                <div className="grid grid-cols-5 gap-1.5 lg:gap-1 xl:gap-1.5 2xl:gap-2">

                  {paymentMethods.map((method) => (
                    <div
                      key={method}
                      className="relative h-[30px] w-[34px] shrink-0 rounded-[4px] bg-white lg:h-[25px] lg:w-[28px] xl:h-[28px] xl:w-[32px] 2xl:h-[34px] 2xl:w-[38px]"
                    >
                      <Image
                        src={`/footer/payment/${method}.png`}
                        alt={method.replaceAll("_", " ")}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>

          {/* ================= COPYRIGHT ================= */}
          <div className="flex min-h-[92px] flex-col items-center justify-center gap-1 border-t border-white/15 px-3 py-5 text-center lg:h-[108px] lg:min-h-0 lg:py-0">

            <p className="text-[12px] font-medium text-[#8F8080] sm:text-[13px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px]">
              Copyright © 2026. Bornil Printing Press. All rights reserved.
            </p>

            <p className="text-[10px] font-normal text-[#8F8080] sm:text-[11px] lg:text-[11px] xl:text-[12px] 2xl:text-[13px]">
              Chapaghor.com is the online platform of Bornil Printing Press
            </p>

          </div>

        </div>
      </section>

    </footer>
    </>
  );
}

function TabletFooter() {
  const [openedSection, setOpenedSection] = useState<string | null>(null);
  const toggleSection = (section: string) => setOpenedSection((current) => current === section ? null : section);

  return (
    <footer className="w-full bg-white px-5 pt-5 font-sans">
      <div className="mx-auto w-full overflow-hidden rounded-t-[20px] bg-[#0F1722] text-white">
        <div className="flex min-h-[112px] items-center justify-between gap-6 bg-[#FF4F00] px-10 py-5">
          <div className="flex min-w-0 items-center gap-4">
            <FaWhatsapp className="h-[54px] w-[54px] shrink-0" />
            <div className="min-w-0">
              <h3 className="whitespace-nowrap text-[22px] font-medium leading-tight">Need Help? Chat With Us</h3>
              <p className="mt-1 whitespace-nowrap text-[15px] font-medium">We are ready to help you anytime.</p>
            </div>
          </div>
          <a href="https://wa.me/8801818992244" target="_blank" rel="noopener noreferrer" className="flex h-[62px] w-[260px] shrink-0 items-center justify-between rounded-[10px] bg-white px-7 text-[18px] font-medium text-[#012C60]">
            <span>Chat on WhatsApp</span><FaArrowRight />
          </a>
        </div>

        <div className="grid grid-cols-[0.95fr_1.05fr] gap-10 px-8 py-8">
          <div className="min-w-0">
            <div className="relative h-[66px] w-[310px] max-w-full">
              <Image src="/footer/logo-white.png" alt="Chapaghor" fill className="object-contain object-left" />
            </div>
            <p className="mt-3 max-w-[310px] text-[14px] leading-[1.45]">We provide high quality printing services for you business, event and personal needs</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex h-[52px] w-full max-w-[330px] overflow-hidden rounded-[6px] bg-white">
              <input type="email" placeholder="Enter your email address" className="min-w-0 flex-1 px-3 text-[12px] text-black outline-none placeholder:text-gray-500" />
              <button type="submit" className="w-[105px] shrink-0 bg-[#FF4F00] text-[13px] font-semibold text-white">Subscribe</button>
            </form>

            <div className="mt-4 flex items-center gap-3">
              <div className="relative h-[26px] w-[100px] shrink-0">
                <Image src="/footer/payment/ssl.png" alt="SSLCommerz" fill className="object-contain object-left" />
              </div>
              <span className="h-7 w-px bg-white/20" />
              <span className="whitespace-nowrap text-[12px]">Follow us:</span>
              <div className="flex gap-1.5">
                <TabletSocialButton><FaFacebook /></TabletSocialButton>
                <TabletSocialButton><FaTwitter /></TabletSocialButton>
                <TabletSocialButton><FaLinkedin /></TabletSocialButton>
                <TabletSocialButton><FaInstagram /></TabletSocialButton>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-10 gap-1">
              {mobilePaymentMethods.map((method) => (
                <div key={method} className="relative aspect-square min-w-0 overflow-hidden rounded-[4px] bg-white">
                  <Image src={`/footer/payment/${method}.png`} alt={method.replaceAll("_", " ")} fill className="object-contain p-[2px]" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-2.5">
            <TabletAccordion title="Information" icon={<FaInfoCircle />} open={openedSection === "information"} onClick={() => toggleSection("information")}><MobileLinks links={informationLinks} /></TabletAccordion>
            <TabletAccordion title="Support" icon={<FaHeadset />} open={openedSection === "support"} onClick={() => toggleSection("support")}><MobileLinks links={supportLinks} /></TabletAccordion>
            <TabletAccordion title="Important Link" icon={<FaLink />} open={openedSection === "important"} onClick={() => toggleSection("important")}><MobileLinks links={importantLinks} /></TabletAccordion>
            <TabletAccordion title="Contact" icon={<FaPhoneAlt />} open={openedSection === "contact"} onClick={() => toggleSection("contact")}>
              <div className="flex flex-col gap-3 text-[12px] text-[#D6D6D6]"><a href="tel:+8801818992244">+88 01818992244</a><a href="mailto:info@chapaghor.com">info@chapaghor.com</a></div>
            </TabletAccordion>
          </div>
        </div>

        <div className="border-t border-white/15 px-4 py-4 text-center text-[12px] text-[#8F8B8B]">Copyright © 2026. Bornil Printing Press. All rights reserved.</div>
      </div>
    </footer>
  );
}

function TabletSocialButton({ children }: { children: ReactNode }) {
  return <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full border border-[#3D4651] text-[10px] transition-colors hover:bg-white hover:text-black">{children}</a>;
}

function TabletAccordion({ title, icon, open, onClick, children }: { title: string; icon: ReactNode; open: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[9px] border border-[#6C7075] bg-[#101822]">
      <button type="button" onClick={onClick} aria-expanded={open} className="flex min-h-[61px] w-full items-center justify-between px-5 text-left">
        <span className="flex items-center gap-4"><span className="flex w-6 justify-center text-[19px]">{icon}</span><span className="text-[16px]">{title}</span></span>
        <span className="text-[18px]">{open ? <FaMinus /> : <FaPlus />}</span>
      </button>
      {open && <div className="border-t border-[#4A4F55] px-5 pb-4 pt-3">{children}</div>}
    </div>
  );
}

function MobileFooter() {
  const [openedSection, setOpenedSection] = useState<string | null>(null);
  const toggleSection = (section: string) => {
    setOpenedSection((current) => current === section ? null : section);
  };

  return (
    <footer className="w-full overflow-hidden bg-[#0F1722] font-sans text-white">
      <div className="px-4 pb-[18px] pt-[22px]">
        <div className="relative mx-auto h-[54px] w-[230px] max-w-[85%]">
          <Image src="/footer/logo-white.png" alt="Chapaghor" fill className="object-contain" />
        </div>

        <p className="mx-auto mt-1 max-w-[310px] text-center text-[11px] font-normal leading-[1.35] text-white">
          We provide high quality printing services for you<br className="max-[350px]:hidden" /> business, event and personal needs
        </p>

        <div className="mt-3 flex items-center justify-center gap-1.5">
          <span className="mr-1 whitespace-nowrap text-[14px] font-medium">Follow us:</span>
          <MobileSocialButton><FaFacebook /></MobileSocialButton>
          <MobileSocialButton><FaTwitter /></MobileSocialButton>
          <MobileSocialButton><FaLinkedin /></MobileSocialButton>
          <MobileSocialButton><FaInstagram /></MobileSocialButton>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex h-[45px] w-full items-stretch overflow-hidden rounded-[8px] border border-[#3A414B] bg-[#101822] p-[3px]">
          <input type="email" placeholder="Enter your email address" className="min-w-0 flex-1 bg-transparent px-3 text-[12px] text-white outline-none placeholder:text-[#9699A2]" />
          <button type="submit" className="w-[76px] shrink-0 rounded-[7px] bg-[#FF4B0B] px-1 text-[11px] font-semibold text-white min-[390px]:w-[90px]">Subscribe</button>
        </form>

        <div className="mb-[15px] mt-[15px] h-px w-full bg-[#343D48]" />

        <div className="flex flex-col gap-[7px]">
          <MobileAccordion title="Information" icon={<FaInfoCircle />} open={openedSection === "information"} onClick={() => toggleSection("information")}>
            <MobileLinks links={informationLinks} />
          </MobileAccordion>
          <MobileAccordion title="Support" icon={<FaHeadset />} open={openedSection === "support"} onClick={() => toggleSection("support")}>
            <MobileLinks links={supportLinks} />
          </MobileAccordion>
          <MobileAccordion title="Important Link" icon={<FaLink />} open={openedSection === "important"} onClick={() => toggleSection("important")}>
            <MobileLinks links={importantLinks} />
          </MobileAccordion>
          <MobileAccordion title="Contact" icon={<FaPhoneAlt />} open={openedSection === "contact"} onClick={() => toggleSection("contact")}>
            <div className="flex flex-col gap-3 text-[12px] text-[#D6D6D6]">
              <a href="tel:+8801818992244" className="flex items-center gap-3"><FaPhoneAlt /> +88 01818992244</a>
              <a href="mailto:info@chapaghor.com" className="flex items-center gap-3">info@chapaghor.com</a>
            </div>
          </MobileAccordion>
        </div>
      </div>

      <div className="w-full bg-white px-2.5 py-3.5">
        <div className="grid w-full grid-cols-10 gap-1">
          {mobilePaymentMethods.map((method) => (
            <div key={method} className="relative aspect-square min-w-0 overflow-hidden rounded-[5px] border border-[#D3D3D3] bg-white shadow-sm">
              <Image src={`/footer/payment/${method}.png`} alt={method.replaceAll("_", " ")} fill className="object-contain p-[3px]" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0F1722] px-3 pb-3.5 pt-3 text-center">
        <p className="text-[11px] font-medium leading-relaxed text-[#8F8B8B]">© 2026. Bornil Printing Press. All rights reserved.</p>
        <p className="text-[9px] font-normal leading-relaxed text-[#777D84]">Chapaghor.com is the online platform of Bornil Printing Press</p>
      </div>
    </footer>
  );
}

function MobileSocialButton({ children }: { children: ReactNode }) {
  return (
    <a href="#" className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border border-[#3D4651] text-[11px] text-white transition-colors hover:bg-white hover:text-black">
      {children}
    </a>
  );
}

function MobileAccordion({ title, icon, open, onClick, children }: { title: string; icon: ReactNode; open: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[8px] border border-[#30363D] bg-[#121B25]">
      <button type="button" onClick={onClick} aria-expanded={open} className="flex min-h-[41px] w-full items-center justify-between px-3.5 text-left text-white">
        <span className="flex items-center gap-2.5"><span className="flex w-[16px] justify-center text-[13px]">{icon}</span><span className="text-[12px] font-normal">{title}</span></span>
        <span className="flex h-5 w-5 items-center justify-center text-[13px]">{open ? <FaMinus /> : <FaPlus />}</span>
      </button>
      {open && <div className="border-t border-[#30363D] px-3.5 pb-3 pt-2.5">{children}</div>}
    </div>
  );
}

function MobileLinks({ links }: { links: string[] }) {
  return <ul className="flex flex-col gap-2 text-[12px] text-[#C4C4C4]">{links.map((link) => <li key={link}><a href="#" className="transition-colors hover:text-white">{link}</a></li>)}</ul>;
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="border-b border-white/15 py-8 sm:border-r sm:px-6 lg:border-b-0 lg:px-5 lg:py-7 xl:px-6 2xl:px-8">

      <h4 className="mb-5 text-[18px] font-medium text-white lg:text-[15px] xl:text-[17px] 2xl:text-[20px]">
        {title}
      </h4>

      <ul className="flex flex-col gap-2 text-[14px] font-medium text-[#A19A9A] lg:gap-1.5 lg:text-[11px] xl:text-[13px] 2xl:gap-2 2xl:text-[15px]">

        {links.map((link) => (
          <li
            key={link}
            className="flex items-start gap-2"
          >
            <span className="mt-[1px] shrink-0 text-[#FF3020]">
              {">"}
            </span>

            <a
              href="#"
              className="leading-tight transition-colors hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}

      </ul>
    </div>
  );
}
