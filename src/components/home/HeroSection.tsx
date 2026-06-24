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
    { id: 2, src: "/banners/home-banner2.jpg", alt: "Frete grátis banner" },
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
        <section className="container mx-auto pb-12 bg-white relative overflow-hidden flex flex-col items-center">
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
                    <CarouselContent className="flex items-center -ml-2 md:-ml-4">
                        {images.map((image, index) => {
                            const isActive = index === current;

                            return (
                                <CarouselItem
                                    key={image.id}
                                    className="pl-2 md:pl-4 basis-auto"
                                >
                                    <div
                                        className={`relative overflow-hidden rounded-3xl transition-all duration-500 ease-in-out w-[85vw] sm:w-[75vw] md:w-[65vw] lg:w-[60vw] max-w-[1200px] aspect-[967/307] ${isActive
                                            ? "blur-0 opacity-100 scale-100 shadow-xl z-10"
                                            : "blur-[6px] opacity-40 scale-95 z-0"
                                            }`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            priority={index === 0}
                                            className="object-cover pointer-events-none"
                                        />
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] sm:w-[75vw] md:w-[65vw] lg:w-[60vw] max-w-[1200px] h-0 pointer-events-none z-20 hidden sm:flex items-center justify-between ">
                    <Button
                        variant="default"
                        size="icon"
                        className="pointer-events-auto w-10 h-10 xl:w-12 xl:h-12 bg-[#ffffff]  text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => api?.scrollPrev()}
                    >
                        <ChevronLeft className="h-6 w-6 text-[#797272]" />
                    </Button>

                    <Button
                        variant="default"
                        size="icon"
                        className="pointer-events-auto w-10 h-10 xl:w-12 xl:h-12 bg-[#ffffff]  text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => api?.scrollNext()}
                    >
                        <ChevronRight className="h-6 w-6 text-[#797272]" />
                    </Button>
                </div>

                <div className="flex justify-center items-center gap-2">
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