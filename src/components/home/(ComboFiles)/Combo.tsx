import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
// import { KineticText } from '@/components/ui/kinetic-text';
// import Text3DFlip from '@/components/ui/text-3d-flip';
import { BorderBeam } from '@/components/ui/border-beam';
import ImagesBox from './components/ImagesBox';

const comboData = [
    { id: 1, title: 'Exclusive', image: '/combo/one.jpg' },
    { id: 2, title: 'Combo', image: '/combo/two.jpg' },
    { id: 3, title: 'Business Card', image: '/combo/three.jpg' },
    { id: 4, title: 'Letterhead', image: '/combo/four.jpg' },
    { id: 5, title: 'Letterhead', image: '/combo/five.jpg' },
];

export default function Combo() {
    return (
        <section className="relative w-full overflow-hidden bg-[#111111]">
            {/* ── Background Image ── */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/banners/combo-bg.jpg" // Replace with your actual dark wavy background image path
                    alt="Combo Background"
                    fill
                    className="object-fill opacity-60"
                    priority
                />
                {/* Optional dark gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
            </div>

            {/* ── Main Content Container ── */}
            <div className="relative z-10 w-[calc(100vw-150px)] mx-auto pt-[52px] pb-[83px]">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                    <div className="flex gap-2.5">
                        {/* Left Title */}
                        <h1 className="text-[36px] md:text-[46px] font-normal text-white leading-tight tracking-wide">Exclusive Combo <span className="text-[36px] md:text-[46px] font-normal text-[#F05A28] leading-tight tracking-wide">Deals</span></h1>
                        {/* <KineticText text="Exclusive Combo" className="text-[36px] md:text-[46px] font-normal text-white leading-tight tracking-wide" />
                        <KineticText text="Deals" className="text-[36px] md:text-[46px] font-normal text-[#F05A28] leading-tight tracking-wide" /> */}
                    </div>
                    {/* Right Title */}
                    <h4 className="text-gray-300 text-[18px] md:text-[16px] font-medium max-w-[400px] leading-relaxed"
                        style={{
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '127%',
                            letterSpacing: '-0.015em',
                        }}>
                        We provide high quality printing services for you business, event and personal needs
                    </h4>
                    {/* <Text3DFlip
                        className="text-gray-300 text-[18px] md:text-[16px] font-medium max-w-[400px] leading-relaxed"
                        style={{
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '127%',
                            letterSpacing: '-0.015em',
                        }}
                    >
                        We provide high quality printing services for you business, event and personal needs
                    </Text3DFlip> */}
                </div>

                {/* Cards Grid Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.5">
                    {comboData.map((item) => (
                        <div key={item.id} className="relative group cursor-pointer pt-2">

                            {/* Dark Translucent Wrapper (Top Box) */}
                            {/* REMOVED: border-2 border-red-500 | ADDED: overflow-hidden & BorderBeam */}
                            <div className="absolute top-0 left-[14.5px] w-[92%] h-[96.5%] rounded-[18px] bg-white/5 backdrop-blur-md z-0 transition-colors duration-300 group-hover:bg-white/10 overflow-hidden">
                                {/* <BorderBeam duration={8} size={100} /> */}
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
                            <h3 className="relative z-10 text-white font-medium text-[15px] px-6 pt-5 pb-10 ">
                                {item.title}
                            </h3>

                            {/* Stacked Image Container */}
                            <div className="relative z-10 px-4 pb-4 mt-2">

                                {/* Layer 1 (Darkest Gray - Back) */}
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[82%] h-full bg-[#404040] rounded-[16px] -z-20 transition-transform duration-500 group-hover:-translate-y-2" />

                                {/* ── Layer 3 (Front Image Box wrapper) ── */}
                                <div className="relative w-full aspect-5/4 mt-2">

                                    {/* Inner image box (overflow hidden handles the outer rounded corners) */}
                                    <div className="absolute inset-0 rounded-[20px] overflow-hidden bg-[#E5E5E5] ">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Block for the cutout (Darkened to match background) */}
                                        {/* REMOVED: border-2 border-red-500 | ADDED: overflow-hidden & BorderBeam */}
                                        <div className="absolute bottom-0 right-0 bg-black w-[76px] h-[76px] rounded-tl-[38px] z-10 pointer-events-none overflow-hidden">
                                            <BorderBeam duration={8} size={100} />
                                        </div>

                                        {/* Concave curve (Top edge) */}
                                        <div className="absolute bottom-[75px] -right-0.5 w-6 h-6 z-10 pointer-events-none ">
                                            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#000000] ">
                                                <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                                            </svg>
                                        </div>

                                        {/* Concave curve (Left edge) */}
                                        <div className="absolute bottom-0 right-[75px] w-6 h-6 z-10 pointer-events-none ">
                                            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#000000]">
                                                <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Circular Button (Placed OUTSIDE the overflow-hidden box, but inside the aspect container) */}
                                    <div className="absolute bottom-[2px] right-[2px] w-[64px] h-[64px] bg-[#F05A28] text-white flex items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 z-20 ">
                                        <ArrowUpRight size={28} strokeWidth={2} />
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>



               

            </div>
        </section>
    );
}


 {/* <ImagesBox /> */}


                <div className='my-12 flex justify-center items-center text-white text-6xl'>
                    Part 2
                </div>

                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.5">
                    {comboData.map((item) => (
                        <div key={item.id} className="relative group cursor-pointer pt-2">

                            {/* Dark Translucent Wrapper (Top Box) */}
                            {/* REMOVED: border-2 border-red-500 | ADDED: overflow-hidden & BorderBeam */}
                            <div className="absolute top-0 left-[9px] w-[95%] h-[98%] rounded-[18px] bg-white/5 backdrop-blur-md z-0 transition-colors duration-300 group-hover:bg-white/10 overflow-hidden">
                                {/* <BorderBeam duration={8} size={100} /> */}
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
                            <h3 className="relative z-10 text-white font-medium text-[15px] px-6 pt-5 pb-10 ">
                                {item.title}
                            </h3>

                            {/* Stacked Image Container */}
                            <div className="relative z-10 px-4 pb-4 mt-2">

                                {/* Layer 1 (Darkest Gray - Back) */}
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[82%] h-full bg-[#404040] rounded-[16px] -z-20 transition-transform duration-500 group-hover:-translate-y-2" />

                                {/* ── Layer 3 (Front Image Box wrapper) ── */}
                                <div className="relative w-full aspect-5/4 mt-2">

                                    {/* Inner image box (overflow hidden handles the outer rounded corners) */}
                                    <div className="absolute inset-0 rounded-[20px] overflow-hidden bg-[#E5E5E5] ">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Block for the cutout (Darkened to match background) */}
                                        {/* REMOVED: border-2 border-red-500 | ADDED: overflow-hidden & BorderBeam */}
                                        <div className="absolute bottom-0 right-0 bg-black w-[76px] h-[76px] rounded-tl-[38px] z-10 pointer-events-none overflow-hidden">
                                            {/* <BorderBeam duration={8} size={100} /> */}
                                        </div>

                                        {/* Concave curve (Top edge) */}
                                        <div className="absolute bottom-[75px] -right-0.5 w-6 h-6 z-10 pointer-events-none ">
                                            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#000000] ">
                                                <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                                            </svg>
                                        </div>

                                        {/* Concave curve (Left edge) */}
                                        <div className="absolute bottom-0 right-[75px] w-6 h-6 z-10 pointer-events-none ">
                                            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#000000]">
                                                <path d="M0 32 A 32 32 0 0 0 32 0 L 32 32 Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Circular Button (Placed OUTSIDE the overflow-hidden box, but inside the aspect container) */}
                                    <div className="absolute bottom-[2px] right-[2px] w-[64px] h-[64px] bg-[#F05A28] text-white flex items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 z-20 ">
                                        <ArrowUpRight size={28} strokeWidth={2} />
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>