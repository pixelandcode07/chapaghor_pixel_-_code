import ServiceProductCard from "./components/ServiceProductCard";
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
        <section className="w-full md:max-w-[92vw] xl:max-w-[89vw] 3xl:max-w-[86.56vw] 7xl:max-w-[62vw] 10xl:max-w-[50vw] mx-auto bg-white py-7.25 md:py-10.75 3xl:py-12.75 px-2 md:px-0">
            {/* Title Section */}
            <div className=" flex flex-col items-center justify-center">
                <h4 className="text-[#012C60] text-[16px] md:text-[20px] xl:text-[22px] 3xl:text-[33px] leading-normal font-light uppercase">
                    Our Service
                </h4>
                <h2 className="text-[#511B95] text-[20px] md:text-[32px] xl:text-[31px] 3xl:text-[48px] leading-normal font-normal uppercase">
                    What We Print
                </h2>
            </div>

            {/* Image Grid Section */}
            <div className="my-7.5 md:my-9 xl:my-10.75 3xl:my-14">
                {/* Grid with exact requested gaps */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-6 gap-2.5 lg:gap-x-5.75 lg:gap-y-7 justify-items-center items-start">
                    {products.map((product, index) => {
                        // Check if the item is in an odd column (1, 3, 5...)
                        const isOddIndex = index % 2 !== 0;

                        // Use translate-y to shift ONLY alternate columns down
                        // This prevents grid rows from stretching and eliminates dead padding space
                        const staggerClass = isOddIndex ? ' lg:translate-y-[45px]' : '';

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
            <div className="flex justify-center lg:mt-20">
                <LandingPageBtn />
            </div>
        </section>
    );
}