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

/* =========================================================
   EXACT FIGMA SOCIAL SVGs
========================================================= */

function FacebookIcon() {
  return (
    <svg
      width="12"
      height="22"
      viewBox="0 0 12 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.18988 21.329V11.6001H10.4542L10.9439 7.80747H7.18988V5.38642C7.18988 4.2887 7.49346 3.54062 9.06936 3.54062L11.076 3.53979V0.147512C10.729 0.102416 9.53779 -0.000976562 8.15135 -0.000976562C5.25623 -0.000976562 3.27418 1.76618 3.27418 5.0108V7.80747H0V11.6001H3.27418V21.329H7.18988Z"
        fill="#F1FAEE"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.33 2.05168C20.5368 2.39963 19.6916 2.63026 18.8104 2.74224C19.7169 2.20099 20.4088 1.35046 20.7341 0.325282C19.8889 0.829204 18.9557 1.18515 17.9612 1.38378C17.1587 0.529251 16.0148 0 14.767 0C12.3461 0 10.397 1.96503 10.397 4.37398C10.397 4.7206 10.4264 5.05388 10.4984 5.37116C6.86293 5.19385 3.6461 3.45146 1.4851 0.797209C1.10783 1.45177 0.886528 2.20099 0.886528 3.00753C0.886528 4.52196 1.66641 5.86442 2.82889 6.64163C2.12633 6.6283 1.43711 6.42433 0.8532 6.10305C0.8532 6.11638 0.8532 6.13371 0.8532 6.15104C0.8532 8.27604 2.36896 10.0411 4.35665 10.4477C4.00071 10.545 3.61277 10.5917 3.21017 10.5917C2.93021 10.5917 2.64759 10.5757 2.38229 10.517C2.94887 12.2488 4.55662 13.5219 6.46832 13.5632C4.98056 14.727 3.09152 15.4283 1.0465 15.4283C0.687893 15.4283 0.343946 15.4123 0 15.3683C1.93703 16.6174 4.23267 17.3306 6.70828 17.3306C14.755 17.3306 19.1543 10.665 19.1543 4.88724C19.1543 4.69393 19.1477 4.5073 19.1383 4.32199C20.0062 3.70609 20.7354 2.93687 21.33 2.05168Z"
        fill="#F1FAEE"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1963 19.1953V12.9457C19.1963 9.87413 18.535 7.52783 14.9516 7.52783C13.2238 7.52783 12.072 8.46635 11.6028 9.36221H11.5601V7.80512H8.16864V19.1953H11.7094V13.5429C11.7094 12.0498 11.9867 10.6207 13.8211 10.6207C15.6341 10.6207 15.6555 12.3058 15.6555 13.6282V19.174H19.1963V19.1953Z"
        fill="#F1FAEE"
      />
      <path
        d="M2.40771 7.80615H5.94849V19.1964H2.40771V7.80615Z"
        fill="#F1FAEE"
      />
      <path
        d="M4.18031 2.13232C3.04982 2.13232 2.13263 3.04951 2.13263 4.18C2.13263 5.31049 3.04982 6.24901 4.18031 6.24901C5.3108 6.24901 6.22799 5.31049 6.22799 4.18C6.22799 3.04951 5.3108 2.13232 4.18031 2.13232Z"
        fill="#F1FAEE"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2268_3640)">
        <path
          d="M21.3085 6.2701C21.2586 5.13676 21.0753 4.35759 20.8127 3.68244C20.5419 2.96577 20.1252 2.32415 19.5793 1.79076C19.0459 1.24907 18.4001 0.828157 17.6917 0.561545C17.0126 0.299003 16.2375 0.115727 15.1042 0.0657578C13.9624 0.0115565 13.5999 -0.000976562 10.7039 -0.000976562C7.808 -0.000976562 7.44552 0.0115565 6.30794 0.0615259C5.1746 0.111495 4.39543 0.294933 3.72044 0.557314C3.00362 0.828157 2.36199 1.24484 1.8286 1.79076C1.28691 2.32415 0.866162 2.97001 0.599387 3.67837C0.336844 4.35759 0.153569 5.13252 0.1036 6.26587C0.0493983 7.40768 0.0368652 7.77016 0.0368652 10.6661C0.0368652 13.5621 0.0493983 13.9245 0.0993677 15.0621C0.149337 16.1955 0.332775 16.9746 0.595318 17.6498C0.866162 18.3664 1.28691 19.0081 1.8286 19.5415C2.36199 20.0831 3.00785 20.5041 3.71621 20.7707C4.39543 21.0332 5.17037 21.2165 6.30387 21.2665C7.44129 21.3166 7.80393 21.329 10.6999 21.329C13.5958 21.329 13.9583 21.3166 15.0959 21.2665C16.2292 21.2165 17.0084 21.0332 17.6834 20.7707C19.1169 20.2164 20.2502 19.0831 20.8044 17.6498C21.0668 16.9706 21.2503 16.1955 21.3002 15.0621C21.3502 13.9245 21.3627 13.5621 21.3627 10.6661C21.3627 7.77016 21.3585 7.40768 21.3085 6.2701ZM19.3877 14.9788C19.3418 16.0205 19.1668 16.583 19.021 16.958C18.6626 17.8873 17.9251 18.6248 16.9959 18.9832C16.6208 19.129 16.0543 19.304 15.0166 19.3497C13.8916 19.3998 13.5542 19.4122 10.7082 19.4122C7.8622 19.4122 7.52056 19.3998 6.39958 19.3497C5.35787 19.304 4.79535 19.129 4.42034 18.9832C3.95792 18.8123 3.537 18.5414 3.19535 18.1872C2.84117 17.8414 2.57033 17.4247 2.39943 16.9623C2.25359 16.5872 2.07861 16.0205 2.03287 14.983C1.98274 13.858 1.97037 13.5204 1.97037 10.6744C1.97037 7.82843 1.98274 7.48678 2.03287 6.36597C2.07861 5.32426 2.25359 4.76174 2.39943 4.38673C2.57033 3.92414 2.84117 3.50339 3.19959 3.16158C3.5453 2.8074 3.96199 2.53656 4.42457 2.36582C4.79958 2.21998 5.36634 2.045 6.40381 1.9991C7.52886 1.94913 7.86644 1.9366 10.7122 1.9366C13.5625 1.9366 13.8999 1.94913 15.0208 1.9991C16.0626 2.045 16.6251 2.21998 17.0001 2.36582C17.4625 2.53656 17.8834 2.8074 18.2251 3.16158C18.5793 3.50746 18.8501 3.92414 19.021 4.38673C19.1668 4.76174 19.3418 5.32833 19.3877 6.36597C19.4377 7.49102 19.4502 7.82843 19.4502 10.6744C19.4502 13.5204 19.4377 13.8537 19.3877 14.9788Z"
          fill="#F1FAEE"
        />
        <path
          d="M10.7053 5.18652C7.68031 5.18652 5.22595 7.64072 5.22595 10.6659C5.22595 13.6911 7.68031 16.1453 10.7053 16.1453C13.7305 16.1453 16.1847 13.6911 16.1847 10.6659C16.1847 7.64072 13.7305 5.18652 10.7053 5.18652ZM10.7053 14.2202C8.74285 14.2202 7.15099 12.6285 7.15099 10.6659C7.15099 8.70326 8.74285 7.11157 10.7053 7.11157C12.668 7.11157 14.2597 8.70326 14.2597 10.6659C14.2597 12.6285 12.668 14.2202 10.7053 14.2202Z"
          fill="#F1FAEE"
        />
        <path
          d="M17.6779 4.96961C17.6779 5.67602 17.1051 6.2488 16.3986 6.2488C15.6922 6.2488 15.1194 5.67602 15.1194 4.96961C15.1194 4.26304 15.6922 3.69043 16.3986 3.69043C17.1051 3.69043 17.6779 4.26304 17.6779 4.96961Z"
          fill="#F1FAEE"
        />
      </g>
      <defs>
        <clipPath id="clip0_2268_3640">
          <rect width="21.33" height="21.33" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.88513 2.66431L9.32617 7.10535L4.88513 11.5464"
        stroke="#CC0001"
        strokeWidth="1.77641"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   FOOTER
========================================================= */

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
          <div className="container-custom">
            <div className="grid h-[300px] grid-cols-[1.55fr_0.95fr_0.95fr_1.15fr_1.4fr]">
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

            {/* ================= COPYRIGHT ================= */}
            <div className="flex h-[108px] flex-col items-center justify-center border-t border-white/15 text-center">
              <p className="text-[16px] font-medium text-[#8F8080]">
                Copyright © 2026. Bornil Printing Press. All rights reserved.
              </p>

              <p className="mt-[3px] text-[13px] text-[#8F8080]">
                Chapaghor.com is the online platform of Bornil Printing Press
              </p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

/* =========================================================
   PHONE ICON — EXACT 34x34
========================================================= */

function PhoneIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.93755 11.775L7.05444 9.65788C7.34963 9.36264 7.71933 9.22422 8.13577 9.2529C8.55221 9.28159 8.89945 9.46954 9.15133 9.80241L12.286 13.9457C12.7085 14.5042 12.6553 15.2771 12.1601 15.7723L10.693 17.2396C12.9506 19.159 14.8382 21.0476 16.7573 23.3051L18.2247 21.8374C18.72 21.3421 19.4927 21.289 20.0511 21.7116L24.1938 24.8466C24.5267 25.0985 24.7146 25.4458 24.7433 25.8623C24.7719 26.2788 24.6335 26.6486 24.3383 26.9438L22.2211 29.0613C17.3459 33.9372 0.0621953 16.651 4.93755 11.775ZM23.0204 4.0791C26.8307 4.0791 29.9197 6.96686 29.9197 10.5291C29.9197 14.0914 26.8307 16.9792 23.0204 16.9792C21.7119 16.9792 20.4886 16.6387 19.4461 16.0472C18.5973 16.423 17.6865 16.5316 16.8148 16.4027C17.1412 15.7849 17.3844 15.1265 17.5381 14.4448C16.6494 13.3591 16.1211 12.0019 16.1211 10.5291C16.1211 6.96686 19.21 4.0791 23.0204 4.0791Z"
          stroke="white"
          strokeWidth="0.68"
          strokeMiterlimit="22.9256"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.0045 13.6367V9.81455H22.134M22.0933 13.6756H23.9158M23.0045 7.2959V7.31563"
          stroke="white"
          strokeWidth="0.68"
          strokeMiterlimit="22.9256"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/* =========================================================
   EMAIL ICON — EXACT 34x34
========================================================= */

function EmailIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <mask
          id="mask0_2268_3607"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="4"
          y="4"
          width="26"
          height="26"
        >
          <path
            d="M29.5798 29.5811V4.4209H4.41968V29.5811H29.5798Z"
            fill="white"
            stroke="white"
            strokeWidth="0.68"
          />
        </mask>

        <g mask="url(#mask0_2268_3607)">
          <path
            d="M18.4867 14.6198C18.4867 15.8833 17.7113 16.8296 16.7829 16.8296C15.8545 16.8296 15.0334 15.8965 15.0334 14.6329C15.0334 13.3693 15.9001 12.5274 16.8285 12.5274C17.7569 12.5274 18.4867 13.3562 18.4867 14.6198Z"
            stroke="white"
            strokeWidth="0.68"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.9097 18.9683C15.0631 18.9172 13.3793 17.6674 12.8794 15.7664C12.3023 13.5722 13.5645 11.2804 15.7264 10.5922C18.0129 9.86438 20.4446 11.1507 21.1355 13.4398C21.38 14.3557 21.2373 15.1526 20.9133 15.9671C20.7849 16.2901 20.3613 17.0462 19.419 17.0462C18.9045 17.0462 18.4756 16.5531 18.4785 15.9853L18.4971 12.2222"
            stroke="white"
            strokeWidth="0.68"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.1353 13.439C21.3797 14.3549 21.237 15.1518 20.9131 15.9663"
            stroke="white"
            strokeWidth="0.68"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.6486 7.86475L16.9997 4.83661L13.3508 7.86475"
            stroke="white"
            strokeWidth="0.68"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.41947 11.9567L4.83618 14.9304V29.1626H29.1622V14.9304L25.5789 11.9567"
            stroke="white"
            strokeWidth="0.68"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.9991 22.501L25.5789 17.1609V7.86499H8.41943V17.1609L16.9991 22.501Z"
            stroke="white"
            strokeWidth="0.68"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.1622 14.9304L16.9992 22.5007L4.83618 14.9304V29.1626H29.1622V14.9304Z"
            stroke="white"
            strokeWidth="0.68"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

/* =========================================================
   DESKTOP LINKS
========================================================= */

function DesktopLinks({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="border-r border-white/15 px-[32px] py-[28px]">
      <h4 className="text-[20px] font-medium">
        {title}
      </h4>

      <ul className="mt-[26px] flex flex-col gap-[12px]">
        {links.map((link) => (
          <li
            key={link}
            className="flex items-center gap-[8px]"
          >
            <ArrowIcon />

            <a
              href="#"
              className="text-[15px] font-medium text-[#A19A9A] transition-colors hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
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
    <footer className="w-full bg-white px-5 pt-5 font-sans">
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
      <div className="px-4 pb-[18px] pt-[22px]">
        <div className="relative mx-auto h-[54px] w-[230px]">
          <Image
            src="/footer/logo-white.png"
            alt="Chapaghor"
            fill
            className="object-contain"
          />
        </div>

        <p className="mx-auto mt-1 max-w-[310px] text-center text-[11px] leading-[1.35]">
          We provide high quality printing services for you
          <br />
          business, event and personal needs
        </p>

        <div className="mt-3 flex justify-center gap-1.5">
          <MobileSocialButton>
            <FacebookIcon />
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

/* =========================================================
   HELPERS
========================================================= */

function TabletSocialButton({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <a
      href="#"
      className="flex h-7 w-7 items-center justify-center rounded-full border border-[#3D4651]"
    >
      {children}
    </a>
  );
}

function TabletAccordion({
  title,
  icon,
  open,
  onClick,
  children,
}: {
  title: string;
  icon: ReactNode;
  open: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[9px] border border-[#6C7075] bg-[#101822]">
      <button
        type="button"
        onClick={onClick}
        className="flex min-h-[61px] w-full items-center justify-between px-5 text-left"
      >
        <span className="flex items-center gap-4">
          <span className="w-6">{icon}</span>
          <span className="text-[16px]">{title}</span>
        </span>

        {open ? <FaMinus /> : <FaPlus />}
      </button>

      {open && (
        <div className="border-t border-[#4A4F55] px-5 pb-4 pt-3">
          {children}
        </div>
      )}
    </div>
  );
}

function MobileSocialButton({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <a
      href="#"
      className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-[#3D4651]"
    >
      {children}
    </a>
  );
}

function MobileAccordion({
  title,
  icon,
  open,
  onClick,
  children,
}: {
  title: string;
  icon: ReactNode;
  open: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[8px] border border-[#30363D] bg-[#121B25]">
      <button
        type="button"
        onClick={onClick}
        className="flex min-h-[41px] w-full items-center justify-between px-3.5 text-left"
      >
        <span className="flex items-center gap-2.5">
          <span className="w-[16px]">{icon}</span>
          <span className="text-[12px]">{title}</span>
        </span>

        {open ? <FaMinus /> : <FaPlus />}
      </button>

      {open && (
        <div className="border-t border-[#30363D] px-3.5 pb-3 pt-2.5">
          {children}
        </div>
      )}
    </div>
  );
}

function MobileLinks({
  links,
}: {
  links: string[];
}) {
  return (
    <ul className="flex flex-col gap-2 text-[12px] text-[#C4C4C4]">
      {links.map((link) => (
        <li key={link}>
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  );
}