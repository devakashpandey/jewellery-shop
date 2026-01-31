"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const collections = [
    {
        id: 1,
        name: "Bridal Collection",
        description: "Timeless pieces for your special day",
        image: "/bridal-set.png",
        href: "#",
        bgColor: "bg-gradient-to-br from-rose-50 to-rose-100",
    },
    {
        id: 2,
        name: "Daily Wear",
        description: "Elegant designs for everyday elegance",
        image: "/gold-earrings.png",
        href: "#",
        bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
    },
    {
        id: 3,
        name: "Festive Edit",
        description: "Celebrate traditions with grandeur",
        image: "/hero-jewelry.png",
        href: "#",
        bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
    {
        id: 4,
        name: "Minimalist",
        description: "Modern simplicity, timeless appeal",
        image: "/diamond-ring.png",
        href: "#",
        bgColor: "bg-gradient-to-br from-slate-50 to-slate-100",
    },
];

export default function Collections() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">
                        Curated For You
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                        Our Collections
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Explore our specially curated collections, designed for every occasion and style.
                    </p>
                </div>

                {/* Collections grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {collections.map((collection) => (
                        <Link
                            key={collection.id}
                            href={collection.href}
                            className="group relative rounded-2xl overflow-hidden hover-lift"
                        >
                            <div
                                className={`${collection.bgColor} aspect-[3/4] relative overflow-hidden`}
                            >
                                {/* Image */}
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={collection.image}
                                            alt={collection.name}
                                            fill
                                            className="object-contain group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                                    <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                                        {collection.name}
                                    </h3>
                                    <p className="text-white/80 text-sm mb-3">
                                        {collection.description}
                                    </p>
                                    <div className="flex items-center text-gold text-sm font-medium">
                                        Explore Collection
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
