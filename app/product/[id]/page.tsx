"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Check, Shield, Truck, RefreshCcw, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { products } from "@/components/FeaturedProducts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function formatPrice(price: number) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(price);
}

export default function ProductDetailPage() {
    const params = useParams();
    const productId = Number(params.id);

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return (
            <main>
                <Navbar />
                <div className="container mx-auto px-4 py-24 text-center">
                    <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
                    <p className="text-muted-foreground mb-8">The product you are looking for does not exist.</p>
                    <Link href="/">
                        <Button>Go Back Home</Button>
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    // Get similar products (same category, excluding current product)
    const similarProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    // If not enough similar products, add some random ones
    const additionalProducts = products
        .filter((p) => p.id !== product.id && !similarProducts.includes(p))
        .slice(0, 4 - similarProducts.length);

    const relatedProducts = [...similarProducts, ...additionalProducts];

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Breadcrumb */}
            <div className="bg-secondary/30 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/#" className="hover:text-primary transition-colors">{product.category}</Link>
                        <span>/</span>
                        <span className="text-foreground">{product.name}</span>
                    </div>
                </div>
            </div>

            {/* Product Details Section */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                        {/* Product Image */}
                        <div className="relative">
                            <div className="sticky top-24">
                                <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted/30 shadow-lg">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                                        {product.isNew && (
                                            <Badge className="bg-gold text-black hover:bg-gold">New Arrival</Badge>
                                        )}
                                        {product.isBestSeller && (
                                            <Badge className="bg-primary text-white hover:bg-primary">Best Seller</Badge>
                                        )}
                                        {product.originalPrice && (
                                            <Badge className="bg-green-600 text-white hover:bg-green-600">
                                                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col">
                            {/* Category */}
                            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2">
                                {product.category}
                            </p>

                            {/* Title */}
                            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                                {product.name}
                            </h1>

                            {/* Metal & Weight */}
                            <p className="text-muted-foreground mb-6">
                                {product.metal} • {product.weight}
                            </p>

                            {/* Price */}
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-3xl md:text-4xl font-semibold text-foreground">
                                    {formatPrice(product.price)}
                                </span>
                                {product.originalPrice && (
                                    <span className="text-xl text-muted-foreground line-through">
                                        {formatPrice(product.originalPrice)}
                                    </span>
                                )}
                                {product.originalPrice && (
                                    <Badge variant="outline" className="border-green-600 text-green-600">
                                        Save {formatPrice(product.originalPrice - product.price)}
                                    </Badge>
                                )}
                            </div>

                            <Separator className="mb-8" />

                            {/* Description */}
                            <div className="mb-8">
                                <h3 className="font-serif text-xl mb-4">Description</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="mb-8">
                                <h3 className="font-serif text-xl mb-4">Features</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                                            <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                                                <Check className="h-3 w-3 text-gold" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Separator className="mb-8" />

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full h-14 text-base">
                                    <Phone className="h-5 w-5 mr-2" />
                                    Enquire Now
                                </Button>
                                <Button size="lg" variant="outline" className="flex-1 border-gold text-gold hover:bg-gold hover:text-black rounded-full h-14 text-base">
                                    Book Store Visit
                                </Button>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-secondary/30 rounded-2xl">
                                <div className="flex flex-col items-center text-center gap-2">
                                    <Shield className="h-6 w-6 text-gold" />
                                    <p className="text-xs text-muted-foreground">100% Certified</p>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <Truck className="h-6 w-6 text-gold" />
                                    <p className="text-xs text-muted-foreground">Free Shipping</p>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <RefreshCcw className="h-6 w-6 text-gold" />
                                    <p className="text-xs text-muted-foreground">Lifetime Exchange</p>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <Check className="h-6 w-6 text-gold" />
                                    <p className="text-xs text-muted-foreground">BIS Hallmark</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Similar Products Section */}
            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">
                                You May Also Like
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                                Similar Products
                            </h2>
                        </div>
                        <Link
                            href="/"
                            className="text-primary hover:text-gold transition-colors font-medium flex items-center gap-2"
                        >
                            View All
                            <span className="text-xl">→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {relatedProducts.map((relatedProduct) => (
                            <Card
                                key={relatedProduct.id}
                                className="group relative bg-card border-none shadow-sm hover-lift overflow-hidden"
                            >
                                {/* Badges */}
                                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                                    {relatedProduct.isNew && (
                                        <Badge className="bg-gold text-black hover:bg-gold">New</Badge>
                                    )}
                                    {relatedProduct.isBestSeller && (
                                        <Badge className="bg-primary text-white hover:bg-primary">
                                            Best Seller
                                        </Badge>
                                    )}
                                </div>

                                {/* Product image */}
                                <Link href={`/product/${relatedProduct.id}`} className="block relative aspect-square overflow-hidden bg-muted/30">
                                    <Image
                                        src={relatedProduct.image}
                                        alt={relatedProduct.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* View Details overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                        <Button
                                            size="sm"
                                            className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black hover:bg-gold hover:text-black gap-2 rounded-full px-6 translate-y-4 group-hover:translate-y-0"
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </Link>

                                <CardContent className="p-4">
                                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                                        {relatedProduct.category}
                                    </p>
                                    <Link href={`/product/${relatedProduct.id}`}>
                                        <h3 className="font-serif text-base md:text-lg text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                                            {relatedProduct.name}
                                        </h3>
                                    </Link>
                                    <p className="text-xs text-muted-foreground mb-3">
                                        {relatedProduct.metal} • {relatedProduct.weight}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-semibold text-foreground">
                                            {formatPrice(relatedProduct.price)}
                                        </span>
                                        {relatedProduct.originalPrice && (
                                            <span className="text-sm text-muted-foreground line-through">
                                                {formatPrice(relatedProduct.originalPrice)}
                                            </span>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
