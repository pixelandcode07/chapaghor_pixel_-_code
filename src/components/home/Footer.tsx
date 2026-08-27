import Image from 'next/image';
import {
    FaWhatsapp,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaPinterest,
    FaYoutube,
    FaArrowUp,
    FaArrowRight
} from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';

export default function Footer() {
    return (
        <div className="w-full relative font-sans">
            {/* ================= TOP BANNER SECTION ================= */}
            <div className="w-full md:max-w-[90vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto absolute top-[177px] relative z-20 -mb-12">
                <div className="flex flex-col md:flex-row w-full shadow-lg  overflow-hidden">

                    {/* Left Side - WhatsApp Help */}
                    <div className="bg-[#FD7034] text-white p-8 md:w-[40%] 3xl:w-[430px] 3xl:h-[177px] rounded-t-[19px] flex items-start gap-4">
                        <FaWhatsapp className="text-5xl mt-1 flex-shrink-0" />
                        <div className="flex flex-col gap-3">
                            <div>
                                <h3 className="font-medium text-[15px] 3xl:text-[20px] mb-1">Need Help? Chat With Us</h3>
                                <p className="font-medium text-[12px] 3xl:text-[17px] text-[#FFFFFF]">We are ready to help you anytime.</p>
                            </div>
                            <button className="bg-white text-[#fe6e35] font-medium text-[12px] 3xl:text-[17px] px-4 py-2 rounded flex items-center justify-between w-[200px] hover:bg-gray-50 transition-colors">
                                Chat on WhatsApp
                                <FaArrowRight className="text-sm" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Custom Order */}
                    <div className="bg-[#FFE0D085] p-8 md:w-[60%] 3xl:w-[1219px] h-[177px] rounded-t-[19px] flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="max-w-[590px]">
                            <h3 className="text-[#012C60] xl:text-3xl 3xl:text-[40px] font-medium mb-2">Custom Order Inquiry</h3>
                            <p className="text-[#012C60] font-light text-[16px] 3xl:text-[21px] leading-relaxed">
                                Looking for a product we don't offer yet? Send us your custom specifications and we will take it forward from there.
                            </p>
                        </div>
                        <div className="bg-white rounded shadow-sm flex items-center overflow-hidden h-[84px] w-[300px] md:w-auto rounded-[8px] rounded-br-[17px]">
                            <span className="text-[#012C60] font-medium 3xl:text-[25px] px-6 whitespace-nowrap">
                                Send Request
                            </span>
                            <button className="bg-[#c94a24] text-white w-[64px] h-[64px] px-5 mr-2 rounded-[4px] rounded-br-[13px] hover:bg-[#a73c1c] transition-colors">
                                <FaArrowRight className='size-5' />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* ================= MAIN FOOTER SECTION ================= */}
            <footer className=" bg-gradient-to-r from-[#79301A] via-[#151515] to-[#762F1A] text-white mt-56 pt-24 pb-8 relative overflow-hidden">
                 

                {/* Background Watermark Text */}
                <div className="absolute -bottom-15 lg: xl md: left-15 max-w-[90vw] mx-auto flex justify-center items-center pointer-events-none select-none">
                    <h1 className="text-[10vw] font-black tracking-widest m-0 leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">
                        CHAPAGHOR.COM
                    </h1>
                </div>
                

                <div className="w-full md:max-w-[90vw]  7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto relative z-10">

                    {/* Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-dashed border-gray-600 pb-[27px]">

                        {/* Column 1: Brand & Subscribe */}
                        <div className="md:col-span-4 md:pr-8 md:border-r border-dashed border-gray-600">
                            <div className="mb-4 xl:w-48 3xl:w-[319px] relative xl:h-12 3xl:h-[77px]">
                                {/* Replace with your actual logo */}
                                <Image
                                    src="/footer/logo-white.png"
                                    alt="Chapaghor"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <p className="text-[#FFFFFF] text-[14px] 3xl:text-[19px] font-medium leading-relaxed mb-6 pr-4">
                                We provide high quality printing services for you business, event and personal needs
                            </p>

                            {/* Subscribe Input */}
                            <div className="flex h-11 w-full max-w-sm">
                                <div className="bg-white flex items-center px-3 rounded-l w-full">
                                    <MdOutlineMailOutline className="text-gray-400 text-lg mr-2" />
                                    <input
                                        type="email"
                                        placeholder="youremail123@gmail.com"
                                        className="w-full text-black text-xs outline-none bg-transparent"
                                    />
                                </div>
                                <button className="bg-[#7c3aed] text-white text-xs font-semibold px-4 rounded-r tracking-wide hover:bg-[#6d28d9] transition-colors">
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>

                        {/* Column 2: Information */}
                        <div className="md:col-span-2 md:pl-4 md:border-r border-dashed border-gray-600">
                            <h4 className="text-[#FFFFFF] text-[14px] 3xl:text-[19px] font-medium mb-6">Information</h4>
                            <ul className="flex flex-col gap-0 text-[#8F8080] text-[14px] 3xl:text-[19px] font-medium">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Order Information</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Artwork Instructions</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Print Templates</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Support */}
                        <div className="md:col-span-2 md:pl-4 md:border-r border-dashed border-gray-600">
                            <h4 className="text-[#FFFFFF] text-[14px] 3xl:text-[19px] font-medium mb-6">Support</h4>
                            <ul className="flex flex-col gap-0 text-[#8F8080] text-[14px] 3xl:text-[19px] font-medium">
                                <li><a href="#" className="hover:text-white transition-colors">Help Business</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Solutions Find</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Stores My Account</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Important Links */}
                        <div className="md:col-span-2 md:pl-4 md:border-r border-dashed border-gray-600">
                            <h4 className="text-[#FFFFFF] text-[14px] 3xl:text-[19px] font-medium mb-6">Important Links</h4>
                            <ul className="flex flex-col gap-0 text-[#8F8080] text-[14px] 3xl:text-[19px] font-medium">
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Delivery & Return Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms & conditions</a></li>
                            </ul>
                        </div>

                        {/* Column 5: Contact */}
                        <div className="md:col-span-2 md:pl-4">
                            <h4 className="text-[#FFFFFF] text-[14px] 3xl:text-[19px] font-medium mb-6">Contact</h4>
                            <div className="flex flex-col gap-0 text-[#8F8080] text-[14px] 3xl:text-[19px] font-medium mb-6">
                                <p>Dhaka, Bangladesh.</p>
                                <p>01818992244</p>
                                <p>info@chapaghor.com</p>
                            </div>

                            <h5 className="text-[#FFFFFF] text-[14px] 3xl:text-[19px] font-medium mb-3">Follow us:</h5>
                            <div className="flex items-center gap-3 text-lg text-[#FFFFFF]">
                                <a href="#" className="hover:text-gray-300 transition-colors"><FaFacebook /></a>
                                <a href="#" className="hover:text-gray-300 transition-colors"><FaInstagram /></a>
                                <a href="#" className="hover:text-gray-300 transition-colors"><FaLinkedin /></a>
                                <a href="#" className="hover:text-gray-300 transition-colors"><FaPinterest /></a>
                                <a href="#" className="hover:text-gray-300 transition-colors"><FaYoutube /></a>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Copyright Bar */}
                    <div className=" py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[#FFFFFF] text-[14px] 3xl:text-[16px] font-medium">
                            Copyright © 2026. Chapaghor. All rights reserved.
                        </p>
                        <div className="flex items-center gap-3">
                            {/* <span className="text-xs text-gray-400">Pay With</span> */}
                            <div className="relative ">
                                {/* Replace with your actual payment icons image */}
                                <Image
                                    src="/footer/payment.png"
                                    alt="Payment Methods"
                                    // fill
                                    width={400}
                                    height={50}
                                    className="object-contain object-right"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}