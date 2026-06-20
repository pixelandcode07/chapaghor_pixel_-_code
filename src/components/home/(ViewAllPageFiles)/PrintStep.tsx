import Image from "next/image";

export default function PrintStep() {
    const steps = [
        {
            id: 1,
            imageSrc: "/view-all-product/step/one.png",
            title: "1. Select a Product",
            description:
                "Browse from 1000+ options and pick the one that fits your need and matches your brand perfectly.",
        },
        {
            id: 2,
            imageSrc: "/view-all-product/step/two.png",
            title: "2. Customise Your Design",
            description:
                "Use our design tool to add images, text, colors, and fonts. Or upload your ready-to-print file.",
        },
        {
            id: 3,
            imageSrc: "/view-all-product/step/three.png",
            title: "3. Fast Prints, Faster Delivery",
            description:
                "Place your order, then walk in or get it delivered — your call.",
        },
    ];

    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-4 max-w-[1235px]">
                {/* --- Title Section with Horizontal Lines --- */}
                <div className="relative flex items-center justify-center mb-16">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center">
                        <h2 className="bg-white px-8 text-[32px] font-bold text-[#4B5563] tracking-tight">
                            Get Your Print in 3 Easy Steps
                        </h2>
                    </div>
                </div>

                {/* --- 3 Steps Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center">
                            {/* Image Container */}
                            <div className="relative w-full h-[220px] lg:h-[260px] mb-8 overflow-hidden rounded-sm bg-gray-50 flex-shrink-0">
                                <Image
                                    src={step.imageSrc}
                                    alt={step.title}
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>

                            {/* Text Content */}
                            <h3 className="text-[20px] font-bold text-[#1F2937] mb-4 text-center">
                                {step.title}
                            </h3>
                            <p className="text-[15px] leading-relaxed text-[#4B5563] text-center max-w-[340px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}