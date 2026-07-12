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
    { id: 1, src: "/banners/Banner-Design.gif", alt: "Cama de casal mariah banner" },
    { id: 2, src: "/banners/Banner-Design.gif", alt: "Frete grátis banner" },
    { id: 3, src: "/banners/Banner-Design.gif", alt: "Receba suas compras banner" },
    { id: 4, src: "/banners/Banner-Design.gif", alt: "Receba suas compras banner" },
    { id: 5, src: "/banners/Banner-Design.gif", alt: "Receba suas compras banner" },
    { id: 6, src: "/banners/Banner-Design.gif", alt: "Receba suas compras banner" },
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
        <section className="w-full bg-white pb-[84px] relative overflow-hidden flex flex-col items-center">
            <div className="w-full relative group flex flex-col items-center">
                <Carousel
                    setApi={setApi}
                    plugins={plugins}
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="flex items-center -ml-2 md:-ml-3">
                        {images.map((image, index) => {
                            const isActive = index === current;

                            return (
                                <CarouselItem
                                    key={image.id}
                                    className="pl-2 md:pl-3 basis-auto"
                                >
                                    <div
                                        className={`relative overflow-hidden rounded-[24px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-[92vw] sm:w-[85vw] md:w-[75vw] aspect-[967/307] lg:w-[967px] lg:aspect-[967/307] 3xl:w-[1288px] 3xl:aspect-[1288/400] ${
                                            isActive
                                                ? "blur-0 opacity-100 scale-100 z-20"
                                                : "blur-[5px] opacity-40 scale-100 z-0"
                                        }`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            priority={index === 0}
                                            className="object-fill pointer-events-none"
                                        />
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>

                {/* Nav Arrows - Positioned EXACTLY on the middle edges */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] sm:w-[85vw] md:w-[75vw] lg:w-[850px] xl:w-[967px] 3xl:w-[1288px] h-0 pointer-events-none z-40 hidden sm:flex items-center justify-between">
                    
                    {/* Left Arrow (iPhone Glassmorphism Style) */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="pointer-events-auto w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-[6px] hover:backdrop-blur-xl border-[1.5px] border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_0_12px_rgba(255,255,255,0.4)] text-gray-700 hover:text-[#F05A28] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 active:scale-95 -ml-6 mb-8"
                        onClick={() => api?.scrollPrev()}
                    >
                        <ChevronLeft className="h-6 w-6 xl:h-7 xl:w-7" strokeWidth={2.5} />
                    </Button>

                    {/* Right Arrow (iPhone Glassmorphism Style) */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="pointer-events-auto w-12 h-12 xl:w-10 xl:h-10 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-[6px] hover:backdrop-blur-xl border-[1.5px] border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_0_12px_rgba(255,255,255,0.4)] text-gray-700 hover:text-[#F05A28] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 active:scale-95 -mr-6 xl:-mr-7 mb-8"
                        onClick={() => api?.scrollNext()}
                    >
                        <ChevronRight className="h-6 w-6 xl:h-7 xl:w-7" strokeWidth={2.5} />
                    </Button>
                </div>

                {/* Dots Indicator */}
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
        </section>
    );
}