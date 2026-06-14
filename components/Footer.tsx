"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    MapPin,
    Phone,
    Mail,
    Send,
} from "lucide-react";

const footerLinks = {
    shop: [
        { name: "All Jewellery", href: "#" },
        { name: "Gold", href: "#" },
        { name: "Diamond", href: "#" },
        { name: "Platinum", href: "#" },
        { name: "Silver", href: "#" },
        { name: "Gemstones", href: "#" },
    ],
    categories: [
        { name: "Necklaces", href: "#" },
        { name: "Earrings", href: "#" },
        { name: "Rings", href: "#" },
        { name: "Bangles", href: "#" },
        { name: "Mangalsutra", href: "#" },
        { name: "Bridal Sets", href: "#" },
    ],
    services: [
        { name: "Store Locator", href: "#" },
        { name: "Book Appointment", href: "#" },
        { name: "Virtual Try-On", href: "#" },
        { name: "Gold Exchange", href: "#" },
        { name: "Jewellery Care", href: "#" },
        { name: "EMI Options", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Our Heritage", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press & Media", href: "#" },
        { name: "Contact Us", href: "#" },
    ],
    help: [
        { name: "Track Order", href: "#" },
        { name: "Shipping Info", href: "#" },
        { name: "Returns & Exchange", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Size Guide", href: "#" },
        { name: "Payment Options", href: "#" },
    ],
};

const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            {/* Newsletter section */}
            <div className="border-b border-white/10">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="font-serif text-2xl md:text-3xl mb-2">
                                Subscribe to Our Newsletter
                            </h3>
                            <p className="text-white/70">
                                Get exclusive offers, new arrivals, and jewellery inspiration delivered to your inbox.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold"
                            />
                            <Button className="bg-gold hover:bg-gold/90 text-black font-semibold px-8 rounded-md">
                                <Send className="h-4 w-4 mr-2" />
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main footer content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
                    {/* Brand section */}
                    <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
                        <Link href="/" className="block mb-6">
                            <div className="flex flex-col">
                                <span className="font-serif text-2xl font-semibold text-gold-gradient">
                                    JYOTI
                                </span>
                                <span className="text-xs tracking-[0.3em] text-white/60 uppercase">
                                    Jewellers
                                </span>
                            </div>
                        </Link>
                        <p className="text-white/70 text-sm mb-6">
                            Crafting timeless jewellery since 1999. Every piece tells a story of tradition, artistry, and elegance.
                        </p>
                        {/* Social links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-black flex items-center justify-center transition-colors"
                                >
                                    <social.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Shop links */}
                    <div>
                        <h4 className="font-semibold text-gold mb-4">Shop</h4>
                        <ul className="space-y-3">
                            {footerLinks.shop.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-gold transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories links */}
                    <div>
                        <h4 className="font-semibold text-gold mb-4">Categories</h4>
                        <ul className="space-y-3">
                            {footerLinks.categories.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-gold transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services links */}
                    <div>
                        <h4 className="font-semibold text-gold mb-4">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-gold transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company links */}
                    <div>
                        <h4 className="font-semibold text-gold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-gold transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help links */}
                    <div>
                        <h4 className="font-semibold text-gold mb-4">Help</h4>
                        <ul className="space-y-3">
                            {footerLinks.help.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-gold transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact info */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm text-white/60">Visit Us</p>
                                <p className="text-sm">Mumbai, Delhi, Bangalore, Chennai</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm text-white/60">Call Us</p>
                                <p className="text-sm">1800-123-4567 (Toll Free)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm text-white/60">Email Us</p>
                                <p className="text-sm">care@samplejewellers.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-black/20">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-white/60 text-center md:text-left">
                            © {new Date().getFullYear()} Sample Jewellers. All rights reserved.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                            <Link
                                href="#"
                                className="text-sm text-white/60 hover:text-gold transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-white/60 hover:text-gold transition-colors"
                            >
                                Terms & Conditions
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-white/60 hover:text-gold transition-colors"
                            >
                                Refund Policy
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-white/60 hover:text-gold transition-colors"
                            >
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
