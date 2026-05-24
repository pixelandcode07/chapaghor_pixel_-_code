"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const images = [
    { id: 1, src: "/banners/home-banner.jpg", alt: "Cama de casal mariah banner" },
    { id: 2, src: "/banners/home-banner.jpg", alt: "Frete grátis banner" },
    { id: 3, src: "/banners/home-banner.jpg", alt: "Receba suas compras banner" },
];

export default function HeroSection() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );
    const [plugins, setPlugins] = React.useState<any[]>([]);

    React.useEffect(() => {
        setPlugins([plugin.current]);
    }, []);

    React.useEffect(() => {
        if (!api) return;

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        const timer = window.setTimeout(() => {
            setCount(api.scrollSnapList().length);
            setCurrent(api.selectedScrollSnap());
        }, 0);

        api.on("select", handleSelect);

        return () => {
            window.clearTimeout(timer);
            api.off?.("select", handleSelect);
        };
    }, [api]);

    return (
        <section className="w-full py-12 bg-white relative overflow-hidden flex flex-col items-center">
            <div className="w-full max-w-[100vw] relative">
                <Carousel
                    setApi={setApi}
                    plugins={plugins}
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="flex items-center">
                        {images.map((image, index) => {
                            const isActive = index === current;

                            return (
                                <CarouselItem
                                    key={image.id}
                                    // basis-auto রাখা হয়েছে যাতে ভেতরের div এর সাইজ অনুযায়ী আইটেম জায়গা নেয়
                                    className="pl-4 md:pl-6 basis-auto"
                                >
                                    <div
                                        className={`
                                            relative overflow-hidden rounded-3xl transition-all duration-500 ease-in-out
                                            // মূল যাদু এখানে: w-[vw] দিয়ে স্ক্রিনের আনুপাতিক সাইজ এবং aspect ratio ফিক্স করা হয়েছে
                                            w-[85vw] sm:w-[75vw] md:w-[65vw] lg:w-[60vw] max-w-[1200px] 
                                            aspect-[967/307]
                                            ${isActive
                                                    ? "blur-0 opacity-100 scale-100 shadow-xl z-10"
                                                    : "blur-[6px] opacity-60 scale-95 z-0"
                                                }
                                        `}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill // width/height এর বদলে fill ব্যবহার করা হয়েছে aspect ratio এর সাথে কাজ করার জন্য
                                            priority={index === 0}
                                            className="object-cover pointer-events-none"
                                        />
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>

                    {/* বাটনগুলোর পজিশন স্ক্রিনের সাথে সামঞ্জস্য রেখে সেট করা হয়েছে */}
                    <div className="absolute top-1/2 left-[5%] md:left-[8%] lg:left-[12%] xl:left-[15%] -translate-y-1/2 z-20 hidden sm:block">
                        <Button
                            variant="default"
                            size="icon"
                            className="w-10 h-10 md:w-12 md:h-12 bg-[#012C60] hover:bg-[#012C60]/90 text-white rounded-md shadow-lg"
                            onClick={() => api?.scrollPrev()}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                    </div>

                    <div className="absolute top-1/2 right-[5%] md:right-[8%] lg:right-[12%] xl:right-[15%] -translate-y-1/2 z-20 hidden sm:block">
                        <Button
                            variant="default"
                            size="icon"
                            className="w-10 h-10 md:w-12 md:h-12 bg-[#012C60] hover:bg-[#012C60]/90 text-white rounded-md shadow-lg"
                            onClick={() => api?.scrollNext()}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </Carousel>

                    <div className="flex justify-center items-center gap-2 mt-8">
                        {Array.from({ length: count }).map((_, index) => {
                            const isActive = index === current;
                            return (
                                <button
                                    key={index}
                                    onClick={() => api?.scrollTo(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`transition-all duration-300 ease-in-out rounded-full ${isActive
                                        ? "w-8 h-2 bg-[#F05A28]"
                                        : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                                        }`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}