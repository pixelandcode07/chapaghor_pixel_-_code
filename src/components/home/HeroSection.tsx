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

    // 1. Set to 3 seconds (3000ms) 
    // 2. stopOnInteraction: false ensures manual clicking doesn't permanently kill the autoplay
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );
    // Avoid accessing ref.current during render — initialize plugins state in effect
    const [plugins, setPlugins] = React.useState<any[]>([]);
    React.useEffect(() => {
        setPlugins([plugin.current]);
        // plugin ref won't change, so empty deps
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
            <div className="">
                <div className="container mx-auto xl:w-full relative">
                    <Carousel
                        setApi={setApi}
                        // Provide plugins from state to avoid reading ref during render
                        plugins={plugins}
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        className="w-full"
                    // COMPLETELY REMOVED onMouseEnter and onMouseLeave here. 
                    // Now your mouse cursor cannot accidentally pause it!
                    >
                        <CarouselContent className="flex items-center">
                            {images.map((image, index) => {
                                const isActive = index === current;

                                return (
                                    <CarouselItem
                                        key={image.id}
                                        className="pl-4 md:pl-6 basis-auto"
                                    >
                                        <div
                                            className={`
                                            relative overflow-hidden rounded-3xl transition-all duration-500 ease-in-out
                                            w-[967px] h-[307px]
                                            max-w-[85vw] sm:max-w-[967px] sm:h-[307px]
                                            ${isActive
                                                    ? "blur-0 opacity-100 scale-100 shadow-xl z-10"
                                                    : "blur-[6px] opacity-60 scale-95 z-0"
                                                }
                                        `}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={967}
                                                height={307}
                                                priority={index === 0}
                                                className="object-cover w-full h-full pointer-events-none"
                                            />
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>

                        <div className="absolute top-1/2 left-[5%] md:left-[10%] lg:left-[15%] -translate-y-1/2 z-20 hidden sm:block">
                            <Button
                                variant="default"
                                size="icon"
                                className="w-10 h-10 md:w-12 md:h-12 bg-[#012C60] hover:bg-[#012C60]/90 text-white rounded-md shadow-lg"
                                onClick={() => api?.scrollPrev()}
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </Button>
                        </div>

                        <div className="absolute top-1/2 right-[5%] md:right-[10%] lg:right-[15%] -translate-y-1/2 z-20 hidden sm:block">
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