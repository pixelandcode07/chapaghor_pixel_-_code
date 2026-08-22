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

/* ============================================================
   DATA
============================================================ */

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

const desktopPaymentMethods = [
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

/* ============================================================
   FOOTER
============================================================ */

export default function Footer() {
    return (
        <div className="relative w-full font-sans">
            {/* =====================================================
                MOBILE
                0px - 639px
            ===================================================== */}

            <div className="block sm:hidden">
                <MobileFooter />
            </div>

            {/* =====================================================
                TABLET / DESKTOP
            ===================================================== */}

            <div className="hidden sm:block">
                {/* =================================================
                    TOP AREA
                ================================================= */}

                <section className="relative z-20 w-full">
                    <div
                        className="
                            mx-auto
                            flex
                            w-[94%]
                            max-w-[1806px]
                            flex-col

                            xl:grid
                            xl:grid-cols-[335px_minmax(0,1fr)]

                            min-[1400px]:w-[92%]
                            min-[1400px]:grid-cols-[365px_minmax(0,1fr)]

                            min-[1536px]:w-[89%]
                            min-[1536px]:grid-cols-[26%_74%]
                        "
                    >
                        {/* =============================================
                            WHATSAPP
                        ============================================= */}

                        <div
                            className="
                                flex
                                min-h-[180px]
                                items-center
                                rounded-t-[19px]
                                bg-[#FD7034]
                                px-6
                                py-7
                                text-white

                                xl:h-[180px]
                                xl:min-h-[180px]
                                xl:rounded-tr-none

                                min-[1400px]:h-[184px]
                                min-[1400px]:min-h-[184px]
                                min-[1400px]:px-8

                                min-[1536px]:h-[180px]
                                min-[1536px]:min-h-[180px]
                                min-[1536px]:px-[38px]
                            "
                        >
                            <div
                                className="
                                    flex
                                    w-full
                                    items-start
                                    gap-4

                                    min-[1400px]:gap-5

                                    min-[1536px]:gap-[22px]
                                "
                            >
                                <FaWhatsapp
                                    className="
                                        mt-1
                                        shrink-0
                                        text-[40px]

                                        min-[1400px]:text-[46px]

                                        min-[1536px]:text-[48px]
                                    "
                                />

                                <div className="min-w-0">
                                    <h3
                                        className="
                                            whitespace-nowrap
                                            text-[14px]
                                            font-medium
                                            leading-tight

                                            min-[1400px]:text-[16px]

                                            min-[1536px]:text-[20px]
                                        "
                                    >
                                        Need Help? Chat With Us
                                    </h3>

                                    <p
                                        className="
                                            mt-[6px]
                                            whitespace-nowrap
                                            text-[11px]
                                            font-medium

                                            min-[1400px]:text-[13px]

                                            min-[1536px]:text-[17px]
                                        "
                                    >
                                        We are ready to help you anytime.
                                    </p>

                                    <a
                                        href="https://wa.me/8801818992244"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            mt-5
                                            flex
                                            h-[42px]
                                            w-[180px]
                                            items-center
                                            justify-between
                                            rounded-[5px]
                                            bg-white
                                            px-4
                                            text-[12px]
                                            font-medium
                                            text-[#FD612D]
                                            transition-colors

                                            hover:bg-gray-50

                                            min-[1400px]:h-[45px]
                                            min-[1400px]:w-[205px]
                                            min-[1400px]:text-[14px]

                                            min-[1536px]:h-[46px]
                                            min-[1536px]:w-[205px]
                                            min-[1536px]:text-[16px]
                                        "
                                    >
                                        <span>Chat on WhatsApp</span>

                                        <FaArrowRight
                                            className="
                                                shrink-0
                                                text-[12px]

                                                min-[1536px]:text-[16px]
                                            "
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* =============================================
                            NEWSLETTER
                        ============================================= */}

                        <div
                            className="
                                relative
                                min-h-[180px]
                                overflow-hidden
                                rounded-t-[19px]
                                bg-[#FEF1E9]
                                px-6
                                py-7

                                xl:grid
                                xl:h-[180px]
                                xl:min-h-[180px]
                                xl:grid-cols-[minmax(250px,1fr)_300px_145px]
                                xl:items-center
                                xl:gap-[14px]
                                xl:rounded-tl-none
                                xl:px-5
                                xl:py-0

                                min-[1400px]:h-[184px]
                                min-[1400px]:min-h-[184px]
                                min-[1400px]:grid-cols-[minmax(300px,1fr)_365px_180px]
                                min-[1400px]:gap-[18px]
                                min-[1400px]:px-7

                                min-[1536px]:h-[180px]
                                min-[1536px]:min-h-[180px]
                                min-[1536px]:grid-cols-[minmax(330px,380px)_320px_minmax(190px,1fr)]
                                min-[1536px]:gap-[24px]
                                min-[1536px]:px-[32px]
                            "
                        >
                            {/* =========================================
                                NEWSLETTER TEXT
                            ========================================= */}

                            <div
                                className="
                                    relative
                                    z-20
                                    min-w-0
    
                                    min-[1536px]:max-w-[400px]
                                "
                            >
                                <h3
                                    className="
                                        font-medium
                                        leading-[1.08]
                                        text-[#012C60]

                                        xl:whitespace-nowrap
                                        xl:text-[28px]

                                        min-[1400px]:text-[30px]

                                        min-[1536px]:whitespace-normal
                                        min-[1536px]:text-[40px]
                                    "
                                >
                                    Subscribe to Our Newsletter
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        font-light
                                        leading-[1.35]
                                        text-[#123B67]

                                        xl:text-[15px]

                                        min-[1400px]:text-[16px]

                                        min-[1536px]:mt-[9px]
                                        min-[1536px]:text-[20px]
                                    "
                                >
                                    Get updates on offers, new products and
                                    printing tips.
                                </p>
                            </div>

                            {/* =========================================
                                EMAIL FORM
                            ========================================= */}

                            <div
                                className="
                                    relative
                                    z-30
                                    flex
                                    min-w-0
                                    w-full
                                    overflow-hidden
                                    bg-white

                                    xl:h-[57px]
                                    xl:rounded-[10px]

                                    min-[1400px]:h-[64px]
                                    min-[1400px]:rounded-[13px]

                                    min-[1536px]:h-[52px]
                                    min-[1536px]:w-[320px]
                                    min-[1536px]:rounded-[4px]
                                "
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="
                                        min-w-0
                                        flex-1
                                        bg-transparent
                                        px-3
                                        font-normal
                                        text-[#333333]
                                        outline-none

                                        placeholder:text-[#777777]

                                        xl:text-[11px]

                                        min-[1400px]:px-4
                                        min-[1400px]:text-[13px]

                                        min-[1536px]:px-[16px]
                                        min-[1536px]:text-[14px]
                                    "
                                />

                                <button
                                    type="button"
                                    className="
                                        flex
                                        shrink-0
                                        items-center
                                        justify-center
                                        bg-[#FF4B0B]
                                        font-semibold
                                        text-white
                                        transition-colors

                                        hover:bg-[#e94308]

                                        xl:w-[105px]
                                        xl:text-[12px]

                                        min-[1400px]:w-[130px]
                                        min-[1400px]:text-[15px]

                                        min-[1536px]:w-[115px]
                                        min-[1536px]:text-[14px]
                                    "
                                >
                                    Subscribe
                                </button>
                            </div>

                            {/* =========================================
                                ENVELOPE

                                scale-[5] intentionally preserved.
                            ========================================= */}

                            <div
                                className="
                                    pointer-events-none
                                    relative
                                    hidden
                                    h-full
                                    min-w-0
                                    overflow-hidden

                                    xl:block
                                "
                            >
                                <div
                                    className="
                                        absolute
                                        bottom-0
                                        right-0
                                        h-full
                                        w-full
                                    "
                                >
                                    <Image
                                        src="/footer/Mask group.svg"
                                        alt=""
                                        fill
                                        className="
                                            origin-bottom-right
                                            scale-[5]
                                            object-contain
                                            object-right-bottom
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    MAIN FOOTER
                ===================================================== */}

                <footer className="relative bg-[#0F1722] text-white">
                   

                    <div
                        className="
                            relative
                            z-10
                            mx-auto
                            w-[94%]
                            max-w-[1806px]

                            min-[1400px]:w-[92%]

                            min-[1536px]:w-[89%]
                        "
                    >
                        {/* =============================================
                            FOOTER COLUMNS
                        ============================================= */}

                        <div
                            className="
                                grid
                                grid-cols-1
                                border-b
                                border-[#303944]

                                md:grid-cols-2

                                xl:grid-cols-[1.45fr_0.88fr_0.88fr_1.10fr_1.52fr]

                                min-[1400px]:grid-cols-[1.52fr_0.90fr_0.90fr_1.10fr_1.48fr]

                                min-[1536px]:min-h-[520px]
                                min-[1536px]:grid-cols-[4fr_2fr_2fr_2fr_2fr]
                            "
                        >
                            {/* =========================================
                                BRAND
                            ========================================= */}

                            <div
                                className="
                                    min-w-0
                                    py-7
                                    pr-5

                                    md:border-r
                                    md:border-[#303944]

                                    xl:py-8
                                    xl:pr-6

                                    min-[1400px]:pr-8

                                    min-[1536px]:py-0
                                    min-[1536px]:pl-0
                                    min-[1536px]:pr-[35px]
                                    min-[1536px]:pt-[95px]
                                "
                            >
                                {/* LOGO */}

                                <div
                                    className="
                                        relative
                                        mb-3
                                        h-[55px]
                                        w-[220px]
                                        max-w-full

                                        min-[1400px]:h-[62px]
                                        min-[1400px]:w-[270px]

                                        min-[1536px]:h-[77px]
                                        min-[1536px]:w-[391px]
                                    "
                                >
                                    <Image
                                        src="/footer/logo-white.png"
                                        alt="Chapaghor"
                                        fill
                                        className="
                                            object-contain
                                            object-left
                                        "
                                    />
                                </div>

                                {/* DESCRIPTION */}

                                <p
                                    className="
                                        max-w-[450px]
                                        text-[12px]
                                        font-medium
                                        leading-[1.55]
                                        text-white

                                        min-[1400px]:text-[14px]

                                        min-[1536px]:text-[19px]
                                        min-[1536px]:leading-[1.45]
                                    "
                                >
                                    We provide high quality printing services
                                    for you business, event and personal needs
                                </p>

                                {/* SOCIAL */}

                                <div
                                    className="
                                        mt-5
                                        flex
                                        items-center
                                        gap-2

                                        min-[1536px]:mt-6
                                        min-[1536px]:gap-3
                                    "
                                >
                                    <DesktopSocialButton>
                                        <FaFacebook />
                                    </DesktopSocialButton>

                                    <DesktopSocialButton>
                                        <FaTwitter />
                                    </DesktopSocialButton>

                                    <DesktopSocialButton>
                                        <FaLinkedin />
                                    </DesktopSocialButton>

                                    <DesktopSocialButton>
                                        <FaInstagram />
                                    </DesktopSocialButton>
                                </div>
                            </div>

                            {/* =========================================
                                INFORMATION
                            ========================================= */}

                            <DesktopLinkColumn
                                title="Information"
                                links={informationLinks}
                                className="
                                    md:border-r
                                    md:border-[#303944]

                                    xl:px-4

                                    min-[1400px]:px-5

                                    min-[1536px]:pl-[39px]
                                    min-[1536px]:pr-4
                                "
                            />

                            {/* =========================================
                                SUPPORT
                            ========================================= */}

                            <DesktopLinkColumn
                                title="Support"
                                links={supportLinks}
                                className="
                                    md:border-r
                                    md:border-[#303944]

                                    xl:px-4

                                    min-[1400px]:px-5

                                    min-[1536px]:pl-[40px]
                                    min-[1536px]:pr-4
                                "
                            />

                            {/* =========================================
                                IMPORTANT LINKS
                            ========================================= */}

                            <DesktopLinkColumn
                                title="Important Links"
                                links={importantLinks}
                                className="
                                    md:border-r
                                    md:border-[#303944]

                                    xl:px-4

                                    min-[1400px]:px-5

                                    min-[1536px]:pl-[40px]
                                    min-[1536px]:pr-3
                                "
                            />

                            {/* =========================================
                                CONTACT
                            ========================================= */}

                            <div
                                className="
                                    min-w-0
                                    py-7
                                    pl-4

                                    xl:py-8
                                    xl:pl-5

                                    min-[1400px]:pl-6

                                    min-[1536px]:py-0
                                    min-[1536px]:pl-[38px]
                                    min-[1536px]:pr-0
                                    min-[1536px]:pt-[100px]
                                "
                            >
                                <h4
                                    className="
                                        mb-4
                                        text-[14px]
                                        font-medium
                                        text-white

                                        min-[1400px]:text-[16px]

                                        min-[1536px]:mb-[18px]
                                        min-[1536px]:text-[19px]
                                    "
                                >
                                    Contact
                                </h4>

                                {/* =====================================
                                    PHONE + EMAIL
                                ===================================== */}

                                <div
                                    className="
                                        flex
                                        flex-col
                                        gap-3

                                        min-[1536px]:gap-[15px]
                                    "
                                >
                                    {/* PHONE */}

                                    <a
                                        href="tel:+8801818992244"
                                        className="
                                            flex
                                            min-w-0
                                            items-center
                                            gap-2

                                            min-[1536px]:gap-[12px]
                                        "
                                    >
                                        <div
                                            className="
                                                relative
                                                h-[27px]
                                                w-[27px]
                                                shrink-0

                                                min-[1400px]:h-[30px]
                                                min-[1400px]:w-[30px]

                                                min-[1536px]:h-[44px]
                                                min-[1536px]:w-[44px]
                                            "
                                        >
                                            <Image
                                                src="/footer/Icon (1).png"
                                                alt="Phone"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        <span
                                            className="
                                                whitespace-nowrap
                                                text-[12px]
                                                font-medium

                                                min-[1400px]:text-[14px]

                                                min-[1536px]:text-[18px]
                                            "
                                        >
                                            +88 01818992244
                                        </span>
                                    </a>

                                    {/* EMAIL */}

                                    <a
                                        href="mailto:info@chapaghor.com"
                                        className="
                                            flex
                                            min-w-0
                                            items-center
                                            gap-2

                                            min-[1536px]:gap-[12px]
                                        "
                                    >
                                        <div
                                            className="
                                                relative
                                                h-[27px]
                                                w-[27px]
                                                shrink-0

                                                min-[1400px]:h-[30px]
                                                min-[1400px]:w-[30px]

                                                min-[1536px]:h-[44px]
                                                min-[1536px]:w-[44px]
                                            "
                                        >
                                            <Image
                                                src="/footer/Icon.png"
                                                alt="Email"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        <span
                                            className="
                                                whitespace-nowrap
                                                text-[12px]
                                                font-medium

                                                min-[1400px]:text-[14px]

                                                min-[1536px]:text-[18px]
                                            "
                                        >
                                            info@chapaghor.com
                                        </span>
                                    </a>
                                </div>

                                {/* =====================================
                                    PAYMENT
                                ===================================== */}

                                <div
                                    className="
                                        mt-5
                                        flex
                                        min-w-0
                                        items-center
                                        gap-1.5

                                        min-[1400px]:gap-2

                                        min-[1536px]:mt-[24px]
                                        min-[1536px]:gap-[8px]
                                    "
                                >
                                    {/* VERIFIED BY */}

                                    <div
                                        className="
                                            flex
                                            shrink-0
                                            items-center
                                            gap-[3px]
                                        "
                                    >
                                        <span
                                            className="
                                                rotate-180
                                                whitespace-nowrap
                                                text-[7px]
                                                font-medium
                                                text-white
                                                [writing-mode:vertical-rl]

                                                min-[1400px]:text-[8px]

                                                min-[1536px]:text-[9px]
                                            "
                                        >
                                            Verified By
                                        </span>

                                        <div
                                            className="
                                                relative
                                                h-[62px]
                                                w-[22px]
                                                shrink-0

                                                min-[1400px]:h-[70px]
                                                min-[1400px]:w-[25px]

                                                min-[1536px]:h-[80px]
                                                min-[1536px]:w-[33px]
                                            "
                                        >
                                            <Image
                                                src="/footer/payment/sslcommerz_verified.png"
                                                alt="SSLCommerz Verified"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* PAYMENT LOGOS */}

                                    <div
                                        className="
                                            grid
                                            min-w-0
                                            grid-cols-5
                                            gap-[3px]

                                            min-[1400px]:gap-1

                                            min-[1536px]:gap-[6px]
                                        "
                                    >
                                        {desktopPaymentMethods.map((method) => (
                                            <div
                                                key={method}
                                                className="
                                                    relative
                                                    h-[24px]
                                                    w-[24px]
                                                    overflow-hidden
                                                    rounded-[4px]
                                                    bg-white

                                                    min-[1400px]:h-[29px]
                                                    min-[1400px]:w-[29px]

                                                    min-[1536px]:h-[35px]
                                                    min-[1536px]:w-[35px]
                                                    min-[1536px]:rounded-[6px]
                                                "
                                            >
                                                <Image
                                                    src={`/footer/payment/${method}.png`}
                                                    alt={method.replaceAll(
                                                        "_",
                                                        " "
                                                    )}
                                                    fill
                                                    className="
                                                        object-contain
                                                        p-[2px]

                                                        min-[1536px]:p-[3px]
                                                    "
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* =============================================
                            COPYRIGHT
                        ============================================= */}

                        <div
                            className="
                                flex
                                min-h-[58px]
                                items-center
                                justify-center
                                px-4
                                py-4
                                text-center
                            "
                        >
                            <p
                                className="
                                    text-[12px]
                                    font-medium
                                    text-[#8F8B8B]

                                    min-[1400px]:text-[14px]

                                    min-[1536px]:text-[16px]
                                "
                            >
                                Copyright © 2026. Bornil Printing Press. All
                                rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

/* ============================================================
   DESKTOP LINK COLUMN
============================================================ */

type DesktopLinkColumnProps = {
    title: string;
    links: string[];
    className?: string;
};

function DesktopLinkColumn({
    title,
    links,
    className = "",
}: DesktopLinkColumnProps) {
    return (
        <div
            className={`
                min-w-0
                py-7

                xl:py-8

                min-[1536px]:py-0
                min-[1536px]:pt-[100px]

                ${className}
            `}
        >
            <h4
                className="
                    mb-4
                    text-[13px]
                    font-medium
                    text-white

                    min-[1400px]:text-[15px]

                    min-[1536px]:mb-[20px]
                    min-[1536px]:text-[19px]
                "
            >
                {title}
            </h4>

            <ul
                className="
                    flex
                    flex-col
                    gap-[6px]
                    font-medium
                    leading-[1.25]
                    text-[#B8AEAE]

                    xl:text-[11px]

                    min-[1400px]:text-[13px]

                    min-[1536px]:gap-[8px]
                    min-[1536px]:text-[18px]
                "
            >
                {links.map((link) => (
                    <li
                        key={link}
                        className="
                            flex
                            min-w-0
                            items-start
                            gap-[5px]

                            min-[1536px]:gap-[7px]
                        "
                    >
                        <span
                            className="
                                shrink-0
                                text-[#FF2424]
                            "
                        >
                            &gt;
                        </span>

                        <a
                            href="#"
                            className="
                                transition-colors
                                hover:text-white
                            "
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ============================================================
   DESKTOP SOCIAL BUTTON
============================================================ */

function DesktopSocialButton({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <a
            href="#"
            className="
                flex
                h-[30px]
                w-[30px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#39424D]
                text-[12px]
                text-white
                transition-colors

                hover:bg-white
                hover:text-black

                min-[1400px]:h-[34px]
                min-[1400px]:w-[34px]

                min-[1536px]:h-[42px]
                min-[1536px]:w-[42px]
                min-[1536px]:text-[16px]
            "
        >
            {children}
        </a>
    );
}

/* ============================================================
   MOBILE FOOTER
============================================================ */

function MobileFooter() {
    const [openedSection, setOpenedSection] =
        useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenedSection((current) =>
            current === section ? null : section
        );
    };

    return (
        <footer
            className="
                w-full
                overflow-hidden
                bg-[#0F1722]
                text-white
            "
        >
            {/* =====================================================
                MOBILE MAIN
            ===================================================== */}

            <div
                className="
                    px-[16px]
                    pb-[30px]
                    pt-[26px]
                "
            >
                {/* LOGO */}

                <div
                    className="
                        relative
                        mx-auto
                        h-[66px]
                        w-[285px]
                        max-w-[90%]
                    "
                >
                    <Image
                        src="/footer/logo-white.png"
                        alt="Chapaghor"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* DESCRIPTION */}

                <p
                    className="
                        mx-auto
                        mt-[8px]
                        max-w-[330px]
                        text-center
                        text-[14px]
                        font-normal
                        leading-[1.45]
                        text-white
                    "
                >
                    We provide high quality printing services for you
                    business, event and personal needs
                </p>

                {/* SOCIAL */}

                <div
                    className="
                        mt-[19px]
                        flex
                        items-center
                        justify-center
                        gap-[8px]
                    "
                >
                    <span
                        className="
                            mr-[3px]
                            whitespace-nowrap
                            text-[16px]
                            font-medium
                        "
                    >
                        Follow us:
                    </span>

                    <MobileSocialButton>
                        <FaFacebook />
                    </MobileSocialButton>

                    <MobileSocialButton>
                        <FaTwitter />
                    </MobileSocialButton>

                    <MobileSocialButton>
                        <FaLinkedin />
                    </MobileSocialButton>

                    <MobileSocialButton>
                        <FaInstagram />
                    </MobileSocialButton>
                </div>

                {/* =================================================
                    MOBILE EMAIL
                ================================================= */}

                <div
                    className="
                        mt-[20px]
                        flex
                        min-h-[75px]
                        w-full
                        items-stretch
                        overflow-hidden
                        rounded-[10px]
                        border
                        border-[#3A414B]
                        bg-[#101822]
                        p-[5px]
                    "
                >
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="
                            min-w-0
                            flex-1
                            bg-transparent
                            px-[11px]
                            text-[15px]
                            font-normal
                            text-white
                            outline-none

                            placeholder:text-[#9699A2]
                        "
                    />

                    <button
                        type="button"
                        className="
                            flex
                            w-[125px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-[9px]
                            bg-[#FF4B0B]
                            px-2
                            text-[14px]
                            font-semibold
                            text-white

                            max-[380px]:w-[116px]
                            max-[380px]:text-[13px]
                        "
                    >
                        Subscribe
                    </button>
                </div>

                {/* DIVIDER */}

                <div
                    className="
                        mb-[25px]
                        mt-[26px]
                        h-px
                        w-full
                        bg-[#343D48]
                    "
                />

                {/* =================================================
                    MOBILE ACCORDIONS
                ================================================= */}

                <div className="flex flex-col gap-[10px]">
                    <MobileAccordion
                        title="Information"
                        icon={<FaInfoCircle />}
                        open={openedSection === "information"}
                        onClick={() =>
                            toggleSection("information")
                        }
                    >
                        <MobileLinks links={informationLinks} />
                    </MobileAccordion>

                    <MobileAccordion
                        title="Support"
                        icon={<FaHeadset />}
                        open={openedSection === "support"}
                        onClick={() =>
                            toggleSection("support")
                        }
                    >
                        <MobileLinks links={supportLinks} />
                    </MobileAccordion>

                    <MobileAccordion
                        title="Important Link"
                        icon={<FaLink />}
                        open={openedSection === "important"}
                        onClick={() =>
                            toggleSection("important")
                        }
                    >
                        <MobileLinks links={importantLinks} />
                    </MobileAccordion>

                    <MobileAccordion
                        title="Contact"
                        icon={<FaPhoneAlt />}
                        open={openedSection === "contact"}
                        onClick={() =>
                            toggleSection("contact")
                        }
                    >
                        <div
                            className="
                                flex
                                flex-col
                                gap-4
                                pb-2
                                pt-1
                                text-[13px]
                                text-[#D6D6D6]
                            "
                        >
                            <a
                                href="tel:+8801818992244"
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <FaPhoneAlt />

                                <span>
                                    +88 01818992244
                                </span>
                            </a>

                            <a
                                href="mailto:info@chapaghor.com"
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <div
                                    className="
                                        relative
                                        h-[17px]
                                        w-[17px]
                                        shrink-0
                                    "
                                >
                                    <Image
                                        src="/footer/Icon.png"
                                        alt="Email"
                                        fill
                                        className="
                                            object-contain
                                            brightness-0
                                            invert
                                        "
                                    />
                                </div>

                                <span>
                                    info@chapaghor.com
                                </span>
                            </a>
                        </div>
                    </MobileAccordion>
                </div>
            </div>

            {/* =====================================================
                MOBILE PAYMENT BAR
            ===================================================== */}

            <div
                className="
                    w-full
                    bg-white
                    px-[10px]
                    py-[24px]
                "
            >
                <div
                    className="
                        grid
                        w-full
                        grid-cols-10
                        gap-[4px]
                    "
                >
                    {mobilePaymentMethods.map((method) => (
                        <div
                            key={method}
                            className="
                                relative
                                aspect-square
                                min-w-0
                                overflow-hidden
                                rounded-[6px]
                                border
                                border-[#D3D3D3]
                                bg-white
                                shadow-sm
                            "
                        >
                            <Image
                                src={`/footer/payment/${method}.png`}
                                alt={method.replaceAll("_", " ")}
                                fill
                                className="
                                    object-contain
                                    p-[3px]
                                "
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* =====================================================
                MOBILE COPYRIGHT
            ===================================================== */}

            <div
                className="
                    bg-[#0F1722]
                    px-4
                    pb-[25px]
                    pt-[19px]
                    text-center
                "
            >
                <p
                    className="
                        text-[13px]
                        font-medium
                        leading-relaxed
                        text-[#8F8B8B]
                    "
                >
                    © 2026. Bornil Printing Press. All rights reserved.
                </p>

                <p
                    className="
                        mt-[2px]
                        text-[11px]
                        font-normal
                        leading-relaxed
                        text-[#777D84]
                    "
                >
                    Chapaghor.com is the online platform of Bornil
                    Printing Press
                </p>
            </div>
        </footer>
    );
}

/* ============================================================
   MOBILE SOCIAL BUTTON
============================================================ */

function MobileSocialButton({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <a
            href="#"
            className="
                flex
                h-[40px]
                w-[40px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#3D4651]
                text-[15px]
                text-white
                transition-colors

                hover:bg-white
                hover:text-black

                max-[380px]:h-[37px]
                max-[380px]:w-[37px]
            "
        >
            {children}
        </a>
    );
}

/* ============================================================
   MOBILE ACCORDION
============================================================ */

type MobileAccordionProps = {
    title: string;
    icon: ReactNode;
    open: boolean;
    onClick: () => void;
    children: ReactNode;
};

function MobileAccordion({
    title,
    icon,
    open,
    onClick,
    children,
}: MobileAccordionProps) {
    return (
        <div
            className="
                overflow-hidden
                rounded-[10px]
                border
                border-[#30363D]
                bg-[#121B25]
            "
        >
            <button
                type="button"
                onClick={onClick}
                className="
                    flex
                    min-h-[68px]
                    w-full
                    items-center
                    justify-between
                    px-[20px]
                    text-left
                    text-white
                "
            >
                <div
                    className="
                        flex
                        items-center
                        gap-[15px]
                    "
                >
                    <span
                        className="
                            flex
                            w-[22px]
                            shrink-0
                            items-center
                            justify-center
                            text-[18px]
                        "
                    >
                        {icon}
                    </span>

                    <span
                        className="
                            text-[15px]
                            font-normal
                        "
                    >
                        {title}
                    </span>
                </div>

                <span
                    className="
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        text-[18px]
                        font-light
                    "
                >
                    {open ? <FaMinus /> : <FaPlus />}
                </span>
            </button>

            {open && (
                <div
                    className="
                        border-t
                        border-[#30363D]
                        px-[20px]
                        pb-[16px]
                        pt-[13px]
                    "
                >
                    {children}
                </div>
            )}
        </div>
    );
}

/* ============================================================
   MOBILE LINKS
============================================================ */

function MobileLinks({
    links,
}: {
    links: string[];
}) {
    return (
        <ul
            className="
                flex
                flex-col
                gap-3
                text-[13px]
                text-[#C4C4C4]
            "
        >
            {links.map((link) => (
                <li key={link}>
                    <a
                        href="#"
                        className="
                            transition-colors
                            hover:text-white
                        "
                    >
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    );
}