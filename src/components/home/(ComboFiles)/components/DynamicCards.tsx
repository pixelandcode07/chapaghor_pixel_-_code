import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BorderBeam } from '@/components/ui/border-beam';
import { useEffect, useState } from 'react';
import { comboData } from '../ComboFile';
import { TakaIcon } from '../../(Navbar)/components/custom/icons';



export default function DynamicCards({ item }: { item: typeof comboData[0] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cycles the layers every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % item.images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [item.images.length]);
    return (
        <div className="relative group cursor-pointer pt-2">

            {/* Background Wrapper with Magic UI BorderBeam */}
            <div className="absolute top-0 left-0 w-full h-[90%] rounded-[18px] bg-white/10 backdrop-blur-md z-0 transition-colors duration-300 group-hover:bg-white/10 overflow-hidden">
                <BorderBeam
                    duration={6}
                    size={400}
                    className="from-transparent via-red-500 to-transparent"
                />
                <BorderBeam
                    duration={6}
                    delay={3}
                    size={400}
                    borderWidth={2}
                    className="from-transparent via-blue-500 to-transparent"
                />
            </div>

            {/* Title */}
            <div className="relative z-10 text-white font-medium text-[16px] 3xl:text-[18px] p-4 mb-12.5 mx-0.5 border-b border-[#686868] flex justify-between items-center">
                <h3>
                    {item.title}
                </h3>
                <h3 className='flex justify-center items-center text-[#FD7034]'>
                    <span>
                       <TakaIcon className='w-6 h-6' />
                    </span>
                    {item.price}
                </h3>
            </div>

            {/* Stacked Image Container */}
            <div className="relative z-10 pb-4 mt-2">
                <div className="relative w-full aspect-5/4.5 mt-4"> {/* mt-4 gives room for back layers to peek out top */}

                    {/* The 3 Image Layers */}
                    {item.images.map((src, index) => {
                        // Logic to calculate which layer is front, middle, or back based on currentIndex
                        const offset = (index - currentIndex + item.images.length) % item.images.length;

                        const isFront = offset === 0;
                        const isMiddle = offset === 1;
                        const isBack = offset === 2;

                        return (
                            <motion.div
                                key={src}
                                initial={false}
                                animate={{
                                    y: isFront ? 0 : isMiddle ? -12 : -24, // Pushes back layers up
                                    scale: isFront ? 1 : isMiddle ? 0.92 : 0.84, // Shrinks back layers
                                    zIndex: isFront ? 30 : isMiddle ? 20 : 10,
                                }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="absolute inset-0 rounded-[20px] overflow-hidden bg-[#000000] shadow-lg origin-top"
                            >
                                <Image
                                    src={src}
                                    alt={`${item.title} slide ${index + 1}`}
                                    fill
                                    className={` object-cover transition-transform duration-700 ${isFront ? 'group-hover:scale-105' : ''}`}
                                />

                                {/* Black Overlay to create depth/shadow for images pushed to the back */}
                                <motion.div
                                    initial={false}
                                    animate={{ opacity: isFront ? 0 : isMiddle ? 0.3 : 0.6 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-black pointer-events-none"
                                />
                            </motion.div>
                        );
                    })}

                    {/* --- Static Front Cutout UI (Always sits on top of all images) --- */}

                    {/* Bottom-right Cutout Block */}
                    <div className="absolute bottom-0 right-0 bg-black w-[76px] h-[76px] rounded-tl-[38px] rounded-br-[18px] z-40 pointer-events-none overflow-hidden">
                        {/* <div className="absolute bottom-0 right-0 bg-black w-[76px] h-[76px] rounded-tl-[38px] z-40 pointer-events-none overflow-hidden"> */}
                        {/* <BorderBeam duration={8} size={100} /> */}
                    </div>

                    {/* Concave Curve (Top edge) */}
                    <div className="absolute bottom-[75px] -right-[0px] w-6 h-6 z-40 pointer-events-none">
                        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-black">
                            <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                        </svg>
                    </div>

                    {/* Concave Curve (Left edge) */}
                    <div className="absolute -bottom-[0.5px] right-[75.5px] w-6 h-6 z-40 pointer-events-none">
                        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-black">
                            <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                        </svg>
                    </div>

                    {/* Orange Arrow Button */}
                    <div className="absolute bottom-[2px] right-[2px] w-[64px] h-[64px] bg-[#F05A28] text-white flex items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 z-50">
                        <ArrowUpRight size={28} strokeWidth={2} />
                    </div>

                </div>
            </div>
        </div>
    )
}
