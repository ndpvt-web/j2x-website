import type { Metadata } from "next";
import { DM_Serif_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "J2X | The Marketplace for Private Deals",
    template: "%s | J2X",
  },
  description:
    "Live pricing, AI intelligence, and real-time collaboration for investors, intermediaries, and deal makers. Built for Deal Makers.",
  openGraph: {
    type: "website",
    siteName: "J2X",
    title: "J2X | The Marketplace for Private Deals",
    description:
      "Live pricing, AI intelligence, and real-time collaboration for investors, intermediaries, and deal makers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-body text-gray-700 bg-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
