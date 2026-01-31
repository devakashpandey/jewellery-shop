"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Search,
    Heart,
    User,
    ShoppingBag,
    MapPin,
    Menu,
    X,
    ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const categories = [
    { name: "All Jewellery", href: "#" },
    { name: "Gold", href: "#" },
    { name: "Diamond", href: "#" },
    { name: "Earrings", href: "#" },
    { name: "Rings", href: "#" },
    { name: "Necklaces", href: "#" },
    { name: "Bangles", href: "#" },
    { name: "Mangalsutra", href: "#" },
    { name: "Wedding", href: "#" },
    { name: "Gifting", href: "#" },
];

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Top announcement bar */}
            <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
                <p>✨ Free Shipping on orders above ₹50,000 | 100% Certified Jewellery ✨</p>
            </div>

            {/* Main navbar */}
            <nav className="glass border-b border-border">
                <div className="container mx-auto px-4">
                    {/* Upper section with logo and icons */}
                    <div className="flex items-center justify-between py-4">
                        {/* Mobile/Desktop menu trigger */}
                        <div className="flex items-center">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" className="flex items-center gap-2 hover:bg-gold/10">
                                        <Menu className="h-6 w-6" />
                                        <span className="hidden md:inline-block font-medium">Catalogue</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-full sm:max-w-md p-0 bg-card border-r-gold/20">
                                    <div className="flex flex-col h-full">
                                        <div className="p-6 border-b border-border/50 shadow-sm bg-secondary/20">
                                            <SheetHeader className="text-left">
                                                <SheetTitle className="font-serif text-3xl">
                                                    <span className="text-gold-gradient">Jyoti</span>
                                                    <span className="block text-[10px] tracking-[0.4em] text-muted-foreground uppercase mt-1 font-sans font-normal">Jewellers</span>
                                                </SheetTitle>
                                            </SheetHeader>
                                        </div>

                                        <div className="flex-1 overflow-y-auto px-6 py-8 custom-scrollbar">
                                            {/* Search in Menu */}
                                            <div className="relative mb-8 md:hidden">
                                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    type="text"
                                                    placeholder="Search jewellery..."
                                                    className="pl-10 h-11 bg-secondary/50 border-none rounded-lg"
                                                />
                                            </div>

                                            {/* Collections Section */}
                                            <div className="mb-10">
                                                <h3 className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold mb-6">Explore Collections</h3>
                                                <div className="grid grid-cols-1 gap-4">
                                                    {[
                                                        { name: "All Jewellery", count: "2500+", icon: "✨" },
                                                        { name: "Gold Collection", count: "1200+", icon: "🟡" },
                                                        { name: "Diamond Elegance", count: "800+", icon: "💎" },
                                                        { name: "Bridal Couture", count: "350+", icon: "👰" },
                                                    ].map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href="#"
                                                            className="group flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-gold/5 border border-transparent hover:border-gold/20 transition-all duration-300"
                                                        >
                                                            <div className="flex items-center gap-4">
                                                                <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                                                                <div>
                                                                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</p>
                                                                    <p className="text-[10px] text-muted-foreground">{item.count} Designs</p>
                                                                </div>
                                                            </div>
                                                            <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Categories List */}
                                            <div className="mb-10">
                                                <h3 className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold mb-6">Shop By Category</h3>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {categories.slice(3).map((category) => (
                                                        <Link
                                                            key={category.name}
                                                            href={category.href}
                                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                                                        >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-primary transition-colors" />
                                                            <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                                                                {category.name}
                                                            </span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Quick Links */}
                                            <div className="space-y-4 pt-6 border-t border-border/50">
                                                <Link href="#" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors">
                                                    <MapPin className="h-4 w-4" /> Store Locator
                                                </Link>
                                                <Link href="#" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors">
                                                    <Heart className="h-4 w-4" /> My Wishlist
                                                </Link>
                                                <Link href="#" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors">
                                                    <User className="h-4 w-4" /> My Account
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Footer in Drawer */}
                                        <div className="p-6 bg-secondary/20 border-t border-border/50">
                                            <div className="flex flex-col gap-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-xs font-medium text-muted-foreground">Need Assistance?</p>
                                                    <Link href="tel:+911234567890" className="text-xs font-semibold text-primary font-sans underline underline-offset-4">
                                                        Call Us Now
                                                    </Link>
                                                </div>
                                                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg h-11 text-sm font-medium">
                                                    Book an Appointment
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex flex-col items-center">
                                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide text-gold-gradient">
                                    JYOTI
                                </span>
                                <span className="text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground uppercase">
                                    Jewellers
                                </span>
                            </div>
                        </Link>

                        {/* Search bar - Desktop */}
                        <div className="hidden lg:flex flex-1 max-w-md mx-8">
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Search for gold jewellery, diamonds..."
                                    className="pl-10 pr-4 py-2 w-full bg-secondary/50 border-none focus:ring-2 focus:ring-gold/30"
                                />
                            </div>
                        </div>

                        {/* Right icons */}
                        <div className="flex items-center gap-1 lg:gap-4">
                            {/* Mobile search toggle */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden"
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                            >
                                <Search className="h-5 w-5" />
                            </Button>

                            {/* <Button
                                variant="ghost"
                                size="icon"
                                className="hidden lg:flex flex-col items-center gap-0.5 h-auto py-2"
                            >
                                <MapPin className="h-5 w-5" />
                                <span className="text-xs">Stores</span>
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="flex flex-col items-center gap-0.5 h-auto py-2"
                            >
                                <Heart className="h-5 w-5" />
                                <span className="text-xs hidden lg:block">Wishlist</span>
                            </Button> */}

                            <Button
                                variant="ghost"
                                size="icon"
                                className="flex flex-col items-center gap-0.5 h-auto py-2"
                            >
                                <User className="h-5 w-5" />
                                <span className="text-xs hidden lg:block">Account</span>
                            </Button>

                            {/* <Button
                                variant="ghost"
                                size="icon"
                                className="flex flex-col items-center gap-0.5 h-auto py-2 relative"
                            >
                                <ShoppingBag className="h-5 w-5" />
                                <span className="text-xs hidden lg:block">Cart</span>
                                <span className="absolute -top-1 -right-1 lg:top-0 lg:right-0 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    0
                                </span>
                            </Button> */}
                        </div>
                    </div>

                    {/* Mobile search bar */}
                    {isSearchOpen && (
                        <div className="lg:hidden pb-4 animate-fade-in-up">
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Search for gold jewellery, diamonds..."
                                    className="pl-10 pr-4 py-2 w-full bg-secondary/50 border-none"
                                />
                            </div>
                        </div>
                    )}


                </div>
            </nav>
        </header>
    );
}
