// "use client";

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { ArrowUpRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { BorderBeam } from '@/components/ui/border-beam';
// import ImagesBox from './components/ImagesBox';

// // Updated data array to include 3 images per card for the slideshow
// const comboData = [
//     { id: 1, title: 'Exclusive', images: ['/combo/one.jpg', '/combo/two.jpg', '/combo/three.jpg'] },
//     { id: 2, title: 'Combo', images: ['/combo/two.jpg', '/combo/three.jpg', '/combo/four.jpg'] },
//     { id: 3, title: 'Business Card', images: ['/combo/three.jpg', '/combo/four.jpg', '/combo/five.jpg'] },
//     { id: 4, title: 'Letterhead', images: ['/combo/four.jpg', '/combo/five.jpg', '/combo/one.jpg'] },
//     { id: 5, title: 'Letterhead', images: ['/combo/five.jpg', '/combo/one.jpg', '/combo/two.jpg'] },
// ];

// // Extracted Card Component to manage its own slideshow state and timer
// const ComboFile = ({ item }: { item: typeof comboData[0] }) => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
//         }, 5000); // 5 seconds interval

//         return () => clearInterval(timer);
//     }, [item.images.length]);

//     return (
//         <div className="relative group cursor-pointer pt-2">

//             {/* Dark Translucent Wrapper */}
//             <div className="absolute top-0 left-[14.5px] w-[92%] h-[96.5%] rounded-[18px] bg-white/5 backdrop-blur-md z-0 transition-colors duration-300 group-hover:bg-white/10 overflow-hidden">
//                 <BorderBeam
//                     duration={6}
//                     size={400}
//                     className="from-transparent via-red-500 to-transparent"
//                 />
//                 <BorderBeam
//                     duration={6}
//                     delay={3}
//                     size={400}
//                     borderWidth={2}
//                     className="from-transparent via-blue-500 to-transparent"
//                 />
//             </div>

//             {/* Title */}
//             <h3 className="relative z-10 text-white font-medium text-[15px] px-6 pt-5 pb-10">
//                 {item.title}
//             </h3>

//             {/* Stacked Image Container */}
//             <div className="relative z-10 px-4 pb-4 mt-2">

//                 {/* Layer 1 (Darkest Gray - Back) */}
//                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[82%] h-full bg-[#404040] rounded-[16px] -z-20 transition-transform duration-500 group-hover:-translate-y-2" />

//                 {/* Layer 3 (Front Image Box wrapper) */}
//                 <div className="relative w-full aspect-5/4 mt-2">

//                     {/* Inner image box handling the framer-motion slideshow */}
//                     <div className="absolute inset-0 rounded-[20px] overflow-hidden bg-[#E5E5E5]">
//                         <AnimatePresence mode="popLayout">
//                             <motion.div
//                                 key={currentImageIndex}
//                                 initial={{ opacity: 0, scale: 0.85 }} // Comes from back (small and transparent)
//                                 animate={{ opacity: 1, scale: 1 }} // Normal state
//                                 exit={{ opacity: 0, scale: 0.85 }} // Goes back (shrinks and fades)
//                                 transition={{ duration: 0.8, ease: "easeInOut" }}
//                                 className="absolute inset-0 w-full h-full"
//                             >
//                                 <Image
//                                     src={item.images[currentImageIndex]}
//                                     alt={`${item.title} slide ${currentImageIndex + 1}`}
//                                     fill
//                                     className="object-cover group-hover:scale-105 transition-transform duration-700"
//                                 />
//                             </motion.div>
//                         </AnimatePresence>

//                         {/* Block for the cutout */}
//                         <div className="absolute bottom-0 right-0 bg-black w-[76px] h-[76px] rounded-tl-[38px] z-10 pointer-events-none overflow-hidden">
//                             <BorderBeam duration={8} size={100} />
//                         </div>

//                         {/* Concave curve (Top edge) */}
//                         <div className="absolute bottom-[75px] -right-0.5 w-6 h-6 z-10 pointer-events-none">
//                             <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#000000]">
//                                 <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
//                             </svg>
//                         </div>

//                         {/* Concave curve (Left edge) */}
//                         <div className="absolute bottom-0 right-[75px] w-6 h-6 z-10 pointer-events-none">
//                             <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#000000]">
//                                 <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
//                             </svg>
//                         </div>
//                     </div>

//                     {/* Circular Button */}
//                     <div className="absolute bottom-[2px] right-[2px] w-[64px] h-[64px] bg-[#F05A28] text-white flex items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 z-20">
//                         <ArrowUpRight size={28} strokeWidth={2} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default function Combo() {
//     return (
//         <section className="relative w-full overflow-hidden bg-[#111111]">

//             {/* Background Image */}
//             <div className="absolute inset-0 z-0">
//                 <Image
//                     src="/banners/combo-bg.jpg"
//                     alt="Combo Background"
//                     fill
//                     className="object-fill opacity-60"
//                     priority
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
//             </div>

//             {/* Main Content Container */}
//             <div className="relative z-10 w-[calc(100vw-150px)] mx-auto pt-[52px] pb-[83px]">

//                 {/* Header Section */}
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
//                     <div className="flex gap-2.5">
//                         <h1 className="text-[36px] md:text-[46px] font-normal text-white leading-tight tracking-wide">
//                             Exclusive Combo <span className="text-[#F05A28]">Deals</span>
//                         </h1>
//                     </div>
//                     <h4 className="text-gray-300 text-[18px] md:text-[16px] font-medium max-w-[400px] leading-relaxed"
//                         style={{
//                             fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
//                             fontWeight: 400,
//                             letterSpacing: '-0.015em',
//                         }}>
//                         We provide high quality printing services for you business, event and personal needs
//                     </h4>
//                 </div>

//                 {/* Cards Grid Section */}
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.5">
//                     {comboData.map((item) => (
//                         <ComboFile key={item.id} item={item} />
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }


"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BorderBeam } from '@/components/ui/border-beam';

// Data array now holds 3 images per card for the stacked rotation
const comboData = [
    { id: 1, title: 'Exclusive', images: ['/combo/one.jpg', '/combo/two.jpg', '/combo/three.jpg'] },
    { id: 2, title: 'Combo', images: ['/combo/two.jpg', '/combo/three.jpg', '/combo/four.jpg'] },
    { id: 3, title: 'Business Card', images: ['/combo/three.jpg', '/combo/four.jpg', '/combo/five.jpg'] },
    { id: 4, title: 'Letterhead', images: ['/combo/four.jpg', '/combo/five.jpg', '/combo/one.jpg'] },
    { id: 5, title: 'Letterhead', images: ['/combo/five.jpg', '/combo/one.jpg', '/combo/two.jpg'] },
];

// Extracted Card Component to manage its own 3D stack timer
const ComboFile = ({ item }: { item: typeof comboData[0] }) => {
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
            <div className="absolute top-0 left-[14.5px] w-[92%] h-[96.5%] rounded-[18px] bg-white/5 backdrop-blur-md z-0 transition-colors duration-300 group-hover:bg-white/10 overflow-hidden">
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
            <h3 className="relative z-10 text-white font-medium text-[15px] px-6 pt-5 pb-10">
                {item.title}
            </h3>

            {/* Stacked Image Container */}
            <div className="relative z-10 px-4 pb-4 mt-2">
                <div className="relative w-full aspect-5/4 mt-4"> {/* mt-4 gives room for back layers to peek out top */}

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
                                    y: isFront ? 0 : isMiddle ? -18 : -36, // Pushes back layers up
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
                    <div className="absolute bottom-[75px] -right-[0.2px] w-6 h-6 z-40 pointer-events-none">
                        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-black">
                            <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                        </svg>
                    </div>

                    {/* Concave Curve (Left edge) */}
                    <div className="absolute bottom-0 right-[75px] w-6 h-6 z-40 pointer-events-none">
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
    );
};

export default function Combo() {
    return (
        <section className="relative w-full overflow-hidden bg-[#111111]">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/banners/combo-bg.jpg"
                    alt="Combo Background"
                    fill
                    className="object-fill opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-[calc(100vw-150px)] mx-auto pt-[52px] pb-[83px]">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                    <div className="flex gap-2.5">
                        <h1 className="text-[36px] md:text-[46px] font-normal text-white leading-tight tracking-wide">
                            Exclusive Combo <span className="text-[#F05A28]">Deals</span>
                        </h1>
                    </div>
                    <h4 className="text-gray-300 text-[18px] md:text-[16px] font-medium max-w-[400px] leading-relaxed"
                        style={{
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            letterSpacing: '-0.015em',
                        }}>
                        We provide high quality printing services for you business, event and personal needs
                    </h4>
                </div>

                {/* Cards Grid Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.5">
                    {comboData.map((item) => (
                        <ComboFile key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </section>
    );
}