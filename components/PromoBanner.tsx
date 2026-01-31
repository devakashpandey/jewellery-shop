"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function PromoBanner() {
    return (
        <section className="py-0 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {/* Gold Collection Banner */}
                    <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group hover-lift">
                        <Image
                            src="/hero-jewelry.png"
                            alt="Gold Collection"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                        <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-center">
                            <p className="text-gold text-[10px] md:text-sm tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
                                <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                                Limited Time Offer
                            </p>
                            <h3 className="font-serif text-2xl md:text-4xl text-white mb-2 md:mb-3">
                                Gold Collection
                            </h3>
                            <p className="text-gray-200 text-xs md:text-base mb-4 md:mb-6 max-w-[200px] md:max-w-sm">
                                Making charges starting at just 8%.
                            </p>
                            <div>
                                <Button size="sm" className="bg-gold hover:bg-gold/90 text-black font-semibold rounded-full px-6 md:px-8">
                                    Shop Gold
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Diamond Collection Banner */}
                    <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group hover-lift">
                        <Image
                            src="/diamond-necklace.png"
                            alt="Diamond Collection"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                        <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-center">
                            <p className="text-gold text-[10px] md:text-sm tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
                                <Sparkles className="h-3 w-3 md:h-4 md:h-4" />
                                New Arrivals
                            </p>
                            <h3 className="font-serif text-2xl md:text-4xl text-white mb-2 md:mb-3">
                                Diamond Elegance
                            </h3>
                            <p className="text-gray-200 text-xs md:text-base mb-4 md:mb-6 max-w-[200px] md:max-w-sm">
                                Certified diamonds with lifetime exchange.
                            </p>
                            <div>
                                <Button size="sm" className="bg-white hover:bg-gray-100 text-black font-semibold rounded-full px-6 md:px-8">
                                    Explore Diamonds
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
