import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";
import Collections from "@/components/Collections";
import Testimonials from "@/components/Testimonials";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <PromoBanner />
      <Collections />
      <Testimonials />

      <Footer />
    </main>
  );
}
