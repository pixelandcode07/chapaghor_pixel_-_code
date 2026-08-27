// import ServiceProductCard from "./components/ServiceProductCard";
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
// ];

// export default function OurService() {
//     return (
//         <section className="container-custom bg-white py-7.25 md:py-10.75 3xl:py-12.75 px-2 md:px-0">
//             {/* Title Section */}
//             <div className=" flex flex-col items-center justify-center">
//                 <h4 className="text-[#012C60] text-[16px] md:text-[20px] xl:text-[22px] 3xl:text-[33px] leading-normal font-light uppercase">
//                     Our Service
//                 </h4>
//                 <h2 className="text-[#511B95] text-[20px] md:text-[32px] xl:text-[31px] 3xl:text-[48px] leading-normal font-normal uppercase">
//                     What We Print
//                 </h2>
//             </div>

//             {/* Image Grid Section */}
//             <div className="my-7.5 md:my-9 xl:my-10.75 3xl:my-14">
//                 {/* Grid with exact requested gaps */}
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-6 gap-2.5 lg:gap-x-6 lg:gap-y-7 justify-items-center items-start">
//                     {products.map((product, index) => {
//                         // Check if the item is in an odd column (1, 3, 5...)
//                         const isOddIndex = index % 2 !== 0;

//                         // Use translate-y to shift ONLY alternate columns down
//                         // This prevents grid rows from stretching and eliminates dead padding space
//                         const staggerClass = isOddIndex ? ' lg:translate-y-[45px]' : '';

//                         return (
//                             <div key={product.id} className={`${staggerClass} w-full flex justify-center transition-transform duration-300`}>
//                                 {/* Render the isolated ProductCard component */}
//                                 <ServiceProductCard product={product} />
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>

//             {/* Button Section */}
//             <div className="flex justify-center lg:mt-20">
//                 <LandingPageBtn href="/view">
//                 {/* Desktop & LG */}
//                 <span className="hidden xl:flex">View All Template</span>
//                 {/* Tablet */}
//                 <span className="hidden md:flex xl:hidden">Load More Template</span>
//                 {/* Mobile */}
//                 <span className="md:hidden">Load  More Resources</span>
//                 </LandingPageBtn>
//             </div>
//         </section>
//     );
// }


import ServiceProductCard from "./components/ServiceProductCard";
import LandingPageBtn from "../LandingPageBtn";

const products = [
    { id: 1, title: "Business Card", imageUrl: "/our-service/Bcard.png" },
    { id: 2, title: "Letterhead", imageUrl: "/our-service/letter.jpg" },
    { id: 3, title: "Envelope", imageUrl: "/our-service/envolap.jpg" },
    { id: 4, title: "Mug", imageUrl: "/our-service/mug.jpg" },
    { id: 5, title: "Photo Frame", imageUrl: "/our-service/frame.png" },
    { id: 6, title: "Business Card", imageUrl: "/our-service/Bcard.png" },
    { id: 7, title: "Letterhead", imageUrl: "/our-service/letter.jpg" },
    { id: 8, title: "Envelope", imageUrl: "/our-service/envolap.jpg" },
    { id: 9, title: "Mug", imageUrl: "/our-service/mug.jpg" },
    { id: 10, title: "Photo Frame", imageUrl: "/our-service/frame.png" },
    { id: 11, title: "Photo Frame", imageUrl: "/our-service/frame.png" },
    { id: 12, title: "Photo Frame", imageUrl: "/our-service/frame.png" },
];

export default function OurService() {
    return (
        <section className="container-custom bg-white py-[20px] md:pt-[19px] md:pb-[38px] md:pt-[43px] xl:pb-[35px] xl:pt-12 1xl:pb-10 1xl:pt-[55px] 1xl:pb-10 1xl:pt-[55px] 3xl:pb-13.5 3xl:pt-18.25 px-5 md:px-8 xl:px-0">

            {/* Title Section */}
            <div className="flex flex-col items-center justify-center gap-2.5 md:gap-3.5 xl:gap-2.5 1xl:gap-2.75 3xl:gap-4">
                <h4 className="text-[#012C60] text-[16px] md:text-[16px] xl:text-[22px] 3xl:text-[33px] leading-none font-light uppercase">
                    Our Service
                </h4>

                <h2 className="text-[#511B95] text-[20px] md:text-[32px] xl:text-[31px] 3xl:text-[48px] leading-none font-normal uppercase">
                    What We Print
                </h2>
            </div>

            {/* Image Grid Section */}
            <div className="mt-[30px] mb-[28px] md:mt-[32px] md:mb-[32px] xl:mt-[46px] xl:mb-[37px] 1xl:mt-[54px] 1xl:mb-[44px] 3xl:mt-[57px] 3xl:mb-[71px]">
                <div
                    className="
                        grid
                        grid-cols-2
                        md:grid-cols-3
                        xl:grid-cols-6
                        gap-2.5
                        lg:gap-x-6.25
                        lg:gap-y-7
                        justify-items-center
                        items-start
                    "
                >
                    {products.map((product, index) => {
                        /*
                         * Responsive visibility:
                         *
                         * Mobile (<768px)
                         * → Show first 8 cards (index 0-7)
                         *
                         * Tablet (768px - 1279px)
                         * → Show only first 6 cards (index 0-5)
                         *
                         * Desktop (1280px+)
                         * → Show all 12 cards
                         */
                        const visibilityClass =
                            index >= 8
                                ? "hidden xl:flex"
                                : index >= 6
                                    ? "flex md:hidden xl:flex"
                                    : "flex";

                        /*
                         * Desktop only:
                         * Alternate cards move down by 45px.
                         *
                         * No stagger on mobile/tablet.
                         */
                        const staggerClass =
                            index % 2 !== 0
                                ? "xl:translate-y-[45px]"
                                : "";

                        return (
                            <div
                                key={product.id}
                                className={`
                                    ${visibilityClass}
                                    ${staggerClass}
                                    w-full
                                    justify-center
                                    transition-transform
                                    duration-300
                                `}
                            >
                                <ServiceProductCard product={product} />
                            </div>
                        );
                    })}
                </div>
            </div>

             {/* Button Section */}
            <div className="flex justify-center lg:mt-[126px]">
                <LandingPageBtn href="/view">
                {/* Desktop & LG */}
                <span className="hidden xl:flex">View All Template</span>
                {/* Tablet */}
                <span className="hidden md:flex xl:hidden">Load More Template</span>
                {/* Mobile */}
                <span className="md:hidden">Load  More Resources</span>
                </LandingPageBtn>
            </div>

        </section>
    );
}