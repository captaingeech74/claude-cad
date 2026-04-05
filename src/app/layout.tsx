import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CAD Colour Vision Screener | Free Color Blindness Test",
  description:
    "Take the free CAD Colour Vision Screener developed by City University London. Screen for red-green and yellow-blue color vision deficiencies in under 3 minutes.",
  keywords: [
    "color blindness test",
    "colour vision",
    "CAD test",
    "color vision deficiency",
    "deuteranopia",
    "protanopia",
    "tritanopia",
    "free screening",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "CAD Colour Vision Screener | Free Color Blindness Test",
    description:
      "Screen for color vision deficiencies in under 3 minutes with the gold-standard CAD test from City University London.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
