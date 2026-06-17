import Image from "next/image";
import { Button } from "../ui/button";
import { CoolMode } from "../ui/cool-mode";
import { KineticText } from "../ui/kinetic-text";

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
];

export default function OurService() {
    return (
        <section className="max-w-[60vw] mx-auto w-full bg-white">
            {/* Title Section */}
            <div className="pt-[64px] pb-[37px] flex flex-col items-center justify-center">
                <KineticText text="Our Service" className="text-[#E06045] uppercase mb-2"
                    style={{
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        fontWeight: 300,
                        fontSize: '25px',
                        lineHeight: '100%',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                    }} />
                <KineticText text="What We Print" className="text-[#1C3E6E] uppercase"
                    style={{
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        fontWeight: 300,
                        fontSize: '36px',
                        lineHeight: '100%',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                    }} />

            </div>

            {/* Image Grid Section */}
            <div className="">
                {/* Grid with exact requested gaps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-[30px] gap-y-[40px] justify-items-center items-start">
                    {products.map((product, index) => {
                        // Determine if the item is in the 1st, 3rd, or 5th column (0-indexed: 0, 2, 4)
                        const isOddColumn = index % 5 === 0 || index % 5 === 2 || index % 5 === 4;

                        // Apply padding top for 1st, 3rd, 5th and padding bottom for 2nd, 4th
                        const staggerClass = isOddColumn ? 'pt-[44px]' : 'pb-[44px]';

                        return (
                            <div key={product.id} className={`${staggerClass} w-full flex justify-center`}>
                                <div
                                    className="relative overflow-hidden border-[#E5E5E5] bg-gray-100 shadow-sm flex flex-col justify-end transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl cursor-pointer"
                                    style={{
                                        width: '230px',
                                        height: '234px',
                                        borderRadius: '10px',
                                        borderWidth: '1.03px',
                                        opacity: 1,
                                    }}
                                >
                                    {/* Product Image */}
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.title}
                                        fill
                                        className="absolute inset-0 w-full h-full object-cover z-0"
                                    />

                                    {/* Gradient Overlay for Text Readability */}
                                    <div className="absolute top-36 inset-0 bg-linear-to-t from-[#FF6633] via-[#EA4335] to-transparent z-10 opacity-90"/>

                                    {/* Inside Image Text */}
                                    <span
                                        className="relative z-20 text-white pb-5 drop-shadow-md"
                                        style={{
                                            fontFamily: 'Rubik, sans-serif',
                                            fontWeight: 700,
                                            fontSize: '18.23px',
                                            lineHeight: '150%',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {product.title}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Button Section */}
            <div className="flex justify-center mt-12 pb-16">
                <CoolMode>
                    <Button
                        variant={"landing_page_view_btn"}
                        size={"landing_page_view_btn_size"}
                    >
                        View All Products
                    </Button>
                </CoolMode>
            </div>
        </section>
    )
}