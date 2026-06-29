// import { KineticText } from "@/components/ui/kinetic-text";
// import { CoolMode } from "@/components/ui/cool-mode";
import { Button } from "@/components/ui/button";
import ServiceProductCard from "./components/ServiceProductCard";
import Link from "next/dist/client/link";

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
        // <section className="max-w-[60vw] mx-auto w-full bg-white">
        <section className="container xl:w-full mx-auto py-3.75 px-1 md:px-2.5 bg-white">
            {/* Title Section */}
            <div className="pt-[64px] pb-[37px] flex flex-col items-center justify-center">
                <h4
                    style={{
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        fontWeight: 300,
                        fontSize: '25px',
                        lineHeight: '100%',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                    }}
                    className="text-[#E06045] uppercase mb-2">
                    Our Service
                </h4>
                <h2
                    style={{
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        fontWeight: 300,
                        fontSize: '36px',
                        lineHeight: '100%',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                    }}
                    className="text-[#1C3E6E] uppercase">
                    What We Print
                </h2>
                {/* <KineticText text="Our Service" className="text-[#E06045] uppercase mb-2"
                    style={{
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        fontWeight: 300,
                        fontSize: '25px',
                        lineHeight: '100%',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                    }} /> */}
                {/* <KineticText text="What We Print" className="text-[#1C3E6E] uppercase"
                    style={{
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        fontWeight: 300,
                        fontSize: '36px',
                        lineHeight: '100%',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                    }} /> */}
            </div>

            {/* Image Grid Section */}
            <div className="">
                {/* Grid with exact requested gaps */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-x-[10px] gap-y-[20px] lg:gap-x-[30px] lg:gap-y-[40px] justify-items-center items-start">
                    {products.map((product, index) => {
                        // Determine if the item is in the 1st, 3rd, or 5th column (0-indexed: 0, 2, 4)
                        const isOddColumn = index % 5 === 0 || index % 5 === 2 || index % 5 === 4;

                        // Apply padding top for 1st, 3rd, 5th and padding bottom for 2nd, 4th
                        const staggerClass = isOddColumn ? 'pt-[44px]' : 'pb-[44px]';

                        return (
                            <div key={product.id} className={`${staggerClass} w-full flex justify-center`}>
                                {/* 2. Render the isolated ProductCard component */}
                                <ServiceProductCard product={product} />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Button Section */}
            <div className="flex justify-center mt-12 pb-16">
                {/* <CoolMode> */}
                <Link href={'/view-all-product'}>
                    <Button
                        variant={"landing_page_view_btn"}
                        size={"landing_page_view_btn_size"}
                    >
                        View All Products
                    </Button>
                </Link>
                {/* </CoolMode> */}
            </div>
        </section>
    );
}