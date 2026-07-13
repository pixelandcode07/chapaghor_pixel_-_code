// // import { KineticText } from "@/components/ui/kinetic-text";
// // import { CoolMode } from "@/components/ui/cool-mode";
// import { Button } from "@/components/ui/button";
// import ServiceProductCard from "./components/ServiceProductCard";
// import Link from "next/dist/client/link";
// import LandingPageBtn from "../LandingPageBtn";

// const products = [
//     { id: 1, title: 'Business Card', imageUrl: '/our-service/Bcard.png' },
//     { id: 2, title: 'Letterhead', imageUrl: '/our-service/letter.jpg' },
//     { id: 3, title: 'Envelope', imageUrl: '/our-service/envolap.jpg' },
//     { id: 4, title: 'Mug', imageUrl: '/our-service/mug.jpg' },
//     { id: 5, title: 'Photo Frame', imageUrl: '/our-service/frame.png' },
//     { id: 6, title: 'Business Card', imageUrl: '/our-service/Bcard.png' },
//     { id: 7, title: 'Letterhead', imageUrl: '/our-service/letter.jpg' },
//     { id: 8, title: 'Envelope', imageUrl: '/our-service/envolap.jpg' },
//     { id: 9, title: 'Mug', imageUrl: '/our-service/mug.jpg' },
//     { id: 10, title: 'Photo Frame', imageUrl: '/our-service/frame.png' },
//     { id: 11, title: 'Photo Frame', imageUrl: '/our-service/frame.png' },
//     { id: 12, title: 'Photo Frame', imageUrl: '/our-service/frame.png' },
//     // { id: 13, title: 'Photo Frame', imageUrl: '/our-service/frame.png' },
//     // { id: 14, title: 'Photo Frame', imageUrl: '/our-service/frame.png' },
//     // { id: 15, title: 'Photo Frame', imageUrl: '/our-service/frame.png' },
//     // { id: 16, title: 'Photo Frame', imageUrl: '/our-service/frame.png' },
//     // { id: 17, title: 'Photo Frame', imageUrl: '/our-service/frame.png' },
// ];



// export default function OurService() {
//     return (
//         <section className="w-full md:max-w-[90vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto bg-white xl:pt-[64px] 3xl:pt-[70px] xl:pb-[37px] 3xl:pb-[111px]">
//             {/* Title Section */}
//             <div className="pb-[100px] flex flex-col items-center justify-center">
//                 <h4 className="text-[#012C60] lg:text-[25px] 3xl:text-[33px] leading-normal font-light uppercase mb-2">
//                     Our Service
//                 </h4>
//                 <h2 className="text-[#511B95] xl:text-[36px] 3xl:text-[48px] leading-normal font-normal uppercase">
//                     What We Print
//                 </h2>
//             </div>

//             {/* Image Grid Section */}
//             <div className="">
//                 {/* Grid with exact requested gaps */}
//                 <div className="grid grid-cols-3 md:grid-cols-5 3xl:grid-cols-6 gap-x-[10px] gap-y-[20px] lg:gap-x-[23px] lg:gap-y-[28px] justify-items-center items-start">
//                     {products.map((product, index) => {
//                         // Determine if the item is in the 1st, 3rd, or 5th column (0-indexed: 0, 2, 4)
//                         const isOddColumn = index % 6 === 0 || index % 6 === 2 || index % 6 === 4;

//                         // Apply padding top for 1st, 3rd, 5th and padding bottom for 2nd, 4th
//                         const staggerClass = isOddColumn ? 'pb-[53px]' : 'pt-[53px]';

//                         return (
//                             <div key={product.id} className={`${staggerClass} w-full flex justify-center`}>
//                                 {/* 2. Render the isolated ProductCard component */}
//                                 <ServiceProductCard product={product} />
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>

//             {/* Button Section */}
//             <div className="flex justify-center mt-24.25">
//                 <LandingPageBtn />
//             </div>
//         </section>
//     );
// }


// import { KineticText } from "@/components/ui/kinetic-text";
// import { CoolMode } from "@/components/ui/cool-mode";
import { Button } from "@/components/ui/button";
import ServiceProductCard from "./components/ServiceProductCard";
import Link from "next/dist/client/link";
import LandingPageBtn from "../LandingPageBtn";

const products = [
    { id: 1, title: 'Business Card', imageUrl: '/our-service/Bcard.png' },
    { id: 2, title: 'Letterhead', imageUrl: '/our-service/letter.jpg' },
    { id: 3, title: 'Envelope', imageUrl: '/our-service/envolap.jpg' },
    { id: 4, title: 'Mug', imageUrl: '/our-service/mug.jpg' },
    { id: 5, title: 'Photo Frame', imageUrl: '/our-service/frame.png' },
    { id: 6, title: 'Business Card', imageUrl: '/our-service/Bcard.png' },
    { id: 7, title: 'Letterhead', imageUrl: '/our-service/letter.jpg' },
    { id: 8, title: 'Envelope', imageUrl: '/our-service/envolap.jpg' },
    { id: 9, title: 'Mug', imageUrl: '/our-service/mug.jpg' },
    { id: 10, title: 'Photo Frame', imageUrl: '/our-service/frame.png' },
    { id: 11, title: 'Photo Frame', imageUrl: '/our-service/frame.png' },
    { id: 12, title: 'Photo Frame', imageUrl: '/our-service/frame.png' },
];

export default function OurService() {
    return (
        <section className="w-full md:max-w-[90vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto bg-white xl:pt-[64px] 3xl:pt-[70px] xl:pb-[37px] 3xl:pb-[111px]">
            {/* Title Section */}
            <div className="pb-[100px] flex flex-col items-center justify-center">
                <h4 className="text-[#012C60] lg:text-[25px] 3xl:text-[33px] leading-normal font-light uppercase mb-2">
                    Our Service
                </h4>
                <h2 className="text-[#511B95] xl:text-[36px] 3xl:text-[48px] leading-normal font-normal uppercase">
                    What We Print
                </h2>
            </div>

            {/* Image Grid Section */}
            <div className="">
                {/* Grid with exact requested gaps */}
                <div className="grid grid-cols-3 md:grid-cols-5 3xl:grid-cols-6 gap-x-[10px] gap-y-[20px] lg:gap-x-[23px] lg:gap-y-[28px] justify-items-center items-start">
                    {products.map((product, index) => {
                        // Check if the item is in an odd column (1, 3, 5...)
                        const isOddIndex = index % 2 !== 0;

                        // Use translate-y to shift ONLY alternate columns down
                        // This prevents grid rows from stretching and eliminates dead padding space
                        const staggerClass = isOddIndex ? 'translate-y-[35px] lg:translate-y-[45px]' : '';

                        return (
                            <div key={product.id} className={`${staggerClass} w-full flex justify-center transition-transform duration-300`}>
                                {/* Render the isolated ProductCard component */}
                                <ServiceProductCard product={product} />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Button Section */}
            <div className="flex justify-center mt-24.25">
                <LandingPageBtn />
            </div>
        </section>
    );
}