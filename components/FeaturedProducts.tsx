"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const products = [
    {
        id: 1,
        name: "Traditional Kundan Necklace Set",
        price: 245000,
        originalPrice: 275000,
        image: "/hero-jewelry.png",
        category: "Necklace",
        metal: "22K Gold",
        weight: "45g",
        isNew: true,
        isBestSeller: false,
        description: "A stunning traditional Kundan necklace set featuring intricate craftsmanship with precious stones. This timeless piece is perfect for weddings and special occasions.",
        features: ["Hallmarked 22K Gold", "Natural Kundan Stones", "Handcrafted Design", "Includes Matching Earrings"],
    },
    {
        id: 2,
        name: "Diamond Halo Engagement Ring",
        price: 185000,
        originalPrice: null,
        image: "/diamond-ring.png",
        category: "Ring",
        metal: "18K White Gold",
        weight: "5.2g",
        isNew: false,
        isBestSeller: true,
        description: "An elegant halo engagement ring featuring a brilliant round-cut center diamond surrounded by a halo of smaller diamonds. Perfect for that special proposal.",
        features: ["IGI Certified Diamond", "18K White Gold", "Premium Cut Quality", "Lifetime Warranty"],
    },
    {
        id: 3,
        name: "Antique Gold Jhumka Earrings",
        price: 78500,
        originalPrice: 85000,
        image: "/gold-earrings.png",
        category: "Earrings",
        metal: "22K Gold",
        weight: "18g",
        isNew: true,
        isBestSeller: false,
        description: "Beautiful antique-finish gold jhumka earrings with traditional motifs. These earrings add a touch of heritage to any outfit.",
        features: ["BIS Hallmarked", "Antique Matt Finish", "Secure Lock System", "Lightweight Design"],
    },
    {
        id: 4,
        name: "Traditional Black Bead Mangalsutra",
        price: 125000,
        originalPrice: null,
        image: "/mangalsutra.png",
        category: "Mangalsutra",
        metal: "22K Gold",
        weight: "25g",
        isNew: false,
        isBestSeller: true,
        description: "A classic mangalsutra with black beads and a beautifully crafted gold pendant. Symbolizes eternal love and commitment.",
        features: ["22K Pure Gold", "Natural Black Onyx Beads", "Adjustable Length", "Traditional Design"],
    },
    {
        id: 5,
        name: "Diamond Pendant Necklace",
        price: 320000,
        originalPrice: 350000,
        image: "/diamond-necklace.png",
        category: "Necklace",
        metal: "18K White Gold",
        weight: "12g",
        isNew: false,
        isBestSeller: false,
        description: "A sophisticated diamond pendant necklace featuring a stunning solitaire diamond on a delicate chain. Perfect for everyday elegance.",
        features: ["VVS Clarity Diamond", "18K White Gold Chain", "Rhodium Plated", "Gift Box Included"],
    },
    {
        id: 6,
        name: "Heavy Gold Chain",
        price: 195000,
        originalPrice: null,
        image: "/gold-chain.png",
        category: "Chain",
        metal: "22K Gold",
        weight: "35g",
        isNew: true,
        isBestSeller: false,
        description: "A bold and luxurious heavy gold chain crafted from pure 22K gold. Makes a statement and showcases your refined taste.",
        features: ["BIS Hallmarked 22K", "Italian Box Chain Design", "Premium Clasp", "Tarnish Resistant"],
    },
    {
        id: 7,
        name: "Complete Bridal Jewellery Set",
        price: 850000,
        originalPrice: 950000,
        image: "/bridal-set.png",
        category: "Bridal Set",
        metal: "22K Gold",
        weight: "150g",
        isNew: false,
        isBestSeller: true,
        description: "A complete bridal jewellery set including necklace, earrings, maang tikka, and bangles. Designed to make your special day unforgettable.",
        features: ["Complete 5-Piece Set", "Kundan & Polki Work", "Customizable Fit", "Premium Gift Packaging"],
    },
    {
        id: 8,
        name: "Elegant Diamond Solitaire Ring",
        price: 275000,
        originalPrice: null,
        image: "/diamond-ring.png",
        category: "Ring",
        metal: "Platinum",
        weight: "4.5g",
        isNew: true,
        isBestSeller: false,
        description: "A classic platinum solitaire ring featuring a brilliant-cut diamond. The epitome of timeless elegance and sophistication.",
        features: ["0.5 Carat Diamond", "Platinum 950", "IGI Certified", "Free Resizing"],
    },
];

function formatPrice(price: number) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(price);
}

export default function FeaturedProducts() {
    return (
        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
                    <div>
                        <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">
                            Handpicked For You
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
                            Trending Now
                        </h2>
                    </div>
                    <Link
                        href="#"
                        className="mt-4 md:mt-0 text-primary hover:text-gold transition-colors font-medium flex items-center gap-2"
                    >
                        View All Products
                        <span className="text-xl">→</span>
                    </Link>
                </div>

                {/* Products grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            className="group relative bg-card border-none shadow-sm hover-lift overflow-hidden"
                        >
                            {/* Badges */}
                            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 flex flex-col gap-1 sm:gap-2">
                                {product.isNew && (
                                    <Badge className="bg-gold text-black hover:bg-gold text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">New</Badge>
                                )}
                                {product.isBestSeller && (
                                    <Badge className="bg-primary text-white hover:bg-primary text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">
                                        Best Seller
                                    </Badge>
                                )}
                                {product.originalPrice && (
                                    <Badge className="bg-green-600 text-white hover:bg-green-600 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">
                                        {Math.round(
                                            ((product.originalPrice - product.price) /
                                                product.originalPrice) *
                                            100
                                        )}
                                        % Off
                                    </Badge>
                                )}
                            </div>

                            {/* Product image */}
                            <Link href={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-muted/30">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* View Details overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                    <Button
                                        size="sm"
                                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black hover:bg-gold hover:text-black gap-2 rounded-full px-6 translate-y-4 group-hover:translate-y-0"
                                    >
                                        <Eye className="h-4 w-4" />
                                        View Details
                                    </Button>
                                </div>
                            </Link>

                            <CardContent className="p-2.5 sm:p-4">
                                {/* Category */}
                                <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide mb-0.5 sm:mb-1">
                                    {product.category}
                                </p>

                                {/* Product name */}
                                <Link href={`/product/${product.id}`}>
                                    <h3 className="font-serif text-sm sm:text-base md:text-lg text-foreground line-clamp-2 mb-1 sm:mb-2 group-hover:text-primary transition-colors cursor-pointer leading-tight">
                                        {product.name}
                                    </h3>
                                </Link>

                                {/* Metal & Weight */}
                                <p className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 sm:mb-3 hidden sm:block">
                                    {product.metal} • {product.weight}
                                </p>

                                {/* Price */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                                    <span className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
                                        {formatPrice(product.price)}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-[10px] sm:text-sm text-muted-foreground line-through">
                                            {formatPrice(product.originalPrice)}
                                        </span>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Load more button */}
                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-primary text-primary hover:bg-primary hover:text-white px-12 rounded-full"
                    >
                        Load More Products
                    </Button>
                </div>
            </div>
        </section>
    );
}
