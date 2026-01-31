"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        location: "Mumbai",
        rating: 5,
        text: "Bought my wedding jewellery from Jyoti. The craftsmanship is exceptional and the service was beyond expectations. Every piece was exactly as shown online.",
        avatar: "PS",
        purchase: "Bridal Set",
    },
    {
        id: 2,
        name: "Anita Gupta",
        location: "Delhi",
        rating: 5,
        text: "I've been a loyal customer for 5 years. Their gold jewellery is always pure and the designs are so unique. Highly recommend for anyone looking for quality.",
        avatar: "AG",
        purchase: "Gold Necklace",
    },
    {
        id: 3,
        name: "Meera Krishnan",
        location: "Chennai",
        rating: 5,
        text: "The diamond ring I purchased for my engagement was absolutely stunning. The sparkle is mesmerizing. Thank you Jyoti for making our moment special!",
        avatar: "MK",
        purchase: "Diamond Ring",
    },
    {
        id: 4,
        name: "Sneha Patel",
        location: "Ahmedabad",
        rating: 5,
        text: "Amazing collection of traditional and contemporary designs. The staff helped me choose the perfect mangalsutra. Will definitely shop again!",
        avatar: "SP",
        purchase: "Mangalsutra",
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">
                        Customer Love
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of happy customers who trust us with their precious moments.
                    </p>
                </div>

                {/* Testimonials grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="group bg-card border-none shadow-sm hover-lift relative overflow-hidden"
                        >
                            <CardContent className="p-6">
                                {/* Quote icon */}
                                <div className="absolute top-4 right-4 text-gold/20">
                                    <Quote className="h-10 w-10" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-gold text-gold"
                                        />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center text-white font-semibold">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.location} • {testimonial.purchase}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Trust badges */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    <div className="text-center">
                        <div className="font-serif text-4xl md:text-5xl text-gold font-semibold">
                            50K+
                        </div>
                        <p className="text-muted-foreground mt-1">Happy Customers</p>
                    </div>
                    <div className="text-center">
                        <div className="font-serif text-4xl md:text-5xl text-gold font-semibold">
                            25+
                        </div>
                        <p className="text-muted-foreground mt-1">Years of Trust</p>
                    </div>
                    <div className="text-center">
                        <div className="font-serif text-4xl md:text-5xl text-gold font-semibold">
                            100%
                        </div>
                        <p className="text-muted-foreground mt-1">Certified Jewellery</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
