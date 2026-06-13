import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full mt-16 flex flex-col items-center">

            {/* ── Pre-Footer: Contact Card & Gray Space ── */}
            <div className="w-[calc(100vw-200px)] mx-auto flex flex-col md:flex-row rounded-t-[16px] overflow-hidden z-10">

                {/* Orange WhatsApp Card */}
                <div className="bg-[#FA702E] p-8 md:px-10 md:py-8 flex items-start gap-4 md:w-[450px] shrink-0">
                    {/* WhatsApp Icon SVG */}
                    <div className="pt-1 shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-11 h-11 text-white"
                        >
                            <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.125.556 4.195 1.611 6.012L.375 24l6.111-1.603c1.748.966 3.73 1.475 5.545 1.475 6.645 0 12.031-5.385 12.031-12.031S18.676 0 12.031 0zm3.626 17.382c-.152.428-.887.842-1.25.877-.323.031-.767.114-2.483-.585-2.057-.838-3.411-2.924-3.515-3.064-.105-.14-.84-1.118-.84-2.133 0-1.015.525-1.512.71-1.722.185-.21.4-.262.535-.262.134 0 .268.005.388.01.127.006.303-.05.465.342.162.392.553 1.353.603 1.458.05.105.083.228.016.368-.066.14-.101.228-.2.333-.099.105-.21.226-.3.315-.099.099-.204.208-.09.404.114.196.507.838 1.087 1.355.75.668 1.381.874 1.58.98.198.106.315.088.432-.047.117-.134.507-.585.642-.786.134-.2.268-.166.448-.1.18.066 1.139.537 1.334.634.194.098.324.146.371.228.046.082.046.475-.106.903z" />
                        </svg>
                    </div>

                    <div className="flex flex-col text-white">
                        <h3 className="text-[20px] font-semibold mb-1">
                            Need Help? Chat With Us
                        </h3>
                        <p className="text-[15px] text-white/95 mb-5 font-light tracking-wide">
                            We are ready to help you anytime.
                        </p>
                        <button className="bg-white text-[#FA702E] hover:bg-gray-50 transition-colors px-6 py-[10px] rounded-[6px] font-medium flex items-center w-max text-[14px]">
                            Chat on WhatsApp
                            {/* Thin right arrow */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Light Gray Empty Space on Right */}
                {/* <div className="bg-[#F5F5F5] flex-1 hidden md:block"></div> */}
            </div>

            {/* ── Main Dark Footer ── */}
            <div className="w-full bg-[#232F3E] py-[64px] px-8 relative  z-0">
                <div className="w-[calc(100vw-200px)] mx-auto flex flex-col xl:flex-row items-start justify-between gap-12">

                    {/* Left: Logo & Description */}
                    <div className="flex flex-col max-w-sm">
                        <div className="mb-6">
                            <Image
                                src="/footer/logo-white.png"
                                alt="Chapaghor Logo"
                                width={220}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                        <p
                            className="text-white font-light text-[16px] leading-[1.6]"
                            style={{
                                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                letterSpacing: '0.01em'
                            }}
                        >
                            We provide high quality printing services for your business, event and personal needs
                        </p>
                    </div>

                    {/* Right: Payment Gateways */}
                    <div className="flex flex-row items-center gap-4 mt-8 xl:mt-4 overflow-x-auto w-full xl:w-auto">
                        {/* <span
                            className="text-white/80 text-[10px] uppercase whitespace-nowrap"
                            style={{ fontFamily: 'Urbanist, sans-serif' }}
                        >
                            Pay With
                        </span> */}
                        <div className="min-w-[500px] sm:min-w-[700px] shrink-0">
                            <Image
                                src="/footer/payment.png"
                                alt="Payment Methods"
                                width={800}
                                height={50}
                                className="object-contain"
                            />
                        </div>
                        {/* <span
                            className="text-white/80 text-[10px] uppercase whitespace-nowrap"
                            style={{ fontFamily: 'Urbanist, sans-serif' }}
                        >
                            Pay With
                        </span> */}
                    </div>

                </div>
            </div>

        </footer>
    );
}