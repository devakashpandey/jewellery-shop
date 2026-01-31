import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jyoti Jewellers | Exquisite Gold & Diamond Jewellery",
  description:
    "Discover handcrafted gold, diamond, and bridal jewellery at Jyoti. Shop our exclusive collections featuring traditional and contemporary designs. Free shipping on orders above ₹50,000.",
  keywords:
    "jewellery, gold jewellery, diamond jewellery, bridal jewellery, Indian jewellery, necklace, earrings, rings, bangles, mangalsutra",
  openGraph: {
    title: "Jyoti Jewellers | Exquisite Gold & Diamond Jewellery",
    description:
      "Discover handcrafted gold, diamond, and bridal jewellery at Jyoti.",
    type: "website",
    locale: "en_IN",
    siteName: "Jyoti Jewellers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
