"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, Crown, Heart, Star } from "lucide-react";

const categories = [
    {
        id: 1,
        name: "Earrings",
        image: "/gold-earrings.png",
        productCount: "250+ Designs",
        icon: Sparkles,
    },
    {
        id: 2,
        name: "Rings",
        image: "/diamond-ring.png",
        productCount: "180+ Designs",
        icon: Heart,
    },
    {
        id: 3,
        name: "Necklaces",
        image: "/diamond-necklace.png",
        productCount: "320+ Designs",
        icon: Crown,
    },
    {
        id: 4,
        name: "Mangalsutra",
        image: "/mangalsutra.png",
        productCount: "150+ Designs",
        icon: Heart,
    },
    {
        id: 5,
        name: "Chains",
        image: "/gold-chain.png",
        productCount: "200+ Designs",
        icon: Star,
    },
    {
        id: 6,
        name: "Bridal Sets",
        image: "/bridal-set.png",
        productCount: "100+ Designs",
        icon: Crown,
    },
];

export default function Categories() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">
                        Explore Our Collection
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                        Shop by Category
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Discover handcrafted jewellery for every occasion. From everyday elegance to bridal grandeur.
                    </p>
                </div>

                {/* Categories grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                    {categories.map((category, idx) => (
                        <Link
                            key={category.id}
                            href="#"
                            className="group relative flex flex-col items-center"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            {/* Image container */}
                            <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-secondary to-muted p-2 overflow-hidden hover-lift group-hover:shadow-xl group-hover:shadow-gold/10 transition-all duration-500">
                                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                                </div>
                                {/* Decorative ring */}
                                <div className="absolute inset-0 rounded-full border-2 border-gold/0 group-hover:border-gold/50 transition-colors duration-300" />
                            </div>

                            {/* Category name */}
                            <div className="mt-4 text-center">
                                <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {category.productCount}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
