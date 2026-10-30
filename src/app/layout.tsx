import type { Metadata } from "next";
import { Inter, Playfair_Display, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-shippori",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Experience the Power of Spiritual Harmony | Vancouver Spiritual Center",
  description:
    "Vancouver Spiritual Center (Burnaby, BC) - Experience the Power of Spiritual Harmony. A welcoming space for deep mental rest and spiritual maintenance through Divine Light.",
  keywords: [
    "Vancouver Spiritual Center",
    "World Divine Light Organization",
    "Canada dojo",
    "Burnaby spiritual sanctuary",
    "Divine Light session",
    "Tekazashi",
    "spiritual maintenance",
    "Federal Non-Profit Corporation in Canada",
  ],
  openGraph: {
    title: "Experience the Power of Spiritual Harmony | Vancouver Spiritual Center",
    description:
      "A welcoming space in Burnaby, BC to release daily stress, find inner peace, and elevate your true self through gentle Divine Light sessions.",
    images: [
      {
        url: "https://cxsrxsl81gypjazj.public.blob.vercel-storage.com/media/Gemini_Generated_Image_pfspvtpfspvtpfsp-Y0Eld5zmZoXDcWnGqymefDWc8tE1V9.jpg",
        width: 1200,
        height: 630,
        alt: "Vancouver Spiritual Center",
      },
    ],
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${shippori.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-[#C09040] selection:text-[#14110C] pb-16 md:pb-0">
        {children}
      </body>
    </html>
  );
}
