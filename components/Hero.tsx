"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const slides = [
    {
        id: 1,
        title: "Bridal Collection 2025",
        subtitle: "Make Your Special Day Unforgettable",
        description:
            "Discover our exquisite bridal collection featuring handcrafted pieces that celebrate the beauty of tradition.",
        image: "/bridal-set.png",
        cta: "Explore Collection",
        bgColor: "bg-gradient-to-r from-[#2d1f1f] to-[#1a1515]",
    },
    {
        id: 2,
        title: "Season of Style '25",
        subtitle: "From India's Most Loved Designs",
        description:
            "A tribute to the elegance and joy that captured hearts. Designs that defined the year.",
        image: "/hero-jewelry.png",
        cta: "Explore Now",
        bgColor: "bg-gradient-to-r from-[#3d2525] to-[#2d1f1f]",
    },
    {
        id: 3,
        title: "Diamond Elegance",
        subtitle: "Brilliance That Lasts Forever",
        description:
            "Handpicked diamonds set in exquisite designs. Each piece tells a story of timeless beauty.",
        image: "/diamond-necklace.png",
        cta: "Shop Diamonds",
        bgColor: "bg-gradient-to-r from-[#1a1a2e] to-[#16213e]",
    },
];

export default function Hero() {
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

    return (
        <section className="relative w-full">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {slides.map((slide) => (
                        <CarouselItem key={slide.id}>
                            <div
                                className={`relative h-[500px] md:h-[600px] lg:h-[700px] w-full ${slide.bgColor} overflow-hidden`}
                            >
                                {/* Background pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(201,169,97,0.3)_0%,_transparent_50%)]" />
                                </div>

                                <div className="container mx-auto px-4 h-full">
                                    <div className="grid lg:grid-cols-2 gap-8 h-full items-center">
                                        {/* Content */}
                                        <div className="flex flex-col justify-center text-white z-10 py-8 lg:py-0 order-2 lg:order-1 text-center lg:text-left">
                                            <div className="animate-fade-in-up">
                                                <p className="text-gold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 md:mb-4">
                                                    {slide.subtitle}
                                                </p>
                                                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 md:mb-6 leading-tight">
                                                    {slide.title}
                                                </h1>
                                                <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 mb-6 md:mb-8 leading-relaxed">
                                                    {slide.description}
                                                </p>
                                                <Button
                                                    size="lg"
                                                    className="bg-gold hover:bg-gold/90 text-black font-semibold px-6 md:px-8 py-4 md:py-6 text-sm md:text-base rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
                                                >
                                                    {slide.cta}
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Image */}
                                        <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-full flex items-center justify-center order-1 lg:order-2">
                                            <div className="relative w-full h-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] max-h-[500px] animate-float">
                                                <Image
                                                    src={slide.image}
                                                    alt={slide.title}
                                                    fill
                                                    className="object-contain drop-shadow-2xl"
                                                    priority
                                                />
                                            </div>
                                            {/* Decorative glow */}
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(201,169,97,0.2)_0%,_transparent_60%)]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation arrows */}
                <CarouselPrevious className="left-4 lg:left-8 h-12 w-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
                <CarouselNext className="right-4 lg:right-8 h-12 w-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />

                {/* Dots indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-colors"
                        />
                    ))}
                </div>
            </Carousel>
        </section>
    );
}
