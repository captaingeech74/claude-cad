import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Flying Colors | Free FAA Color Vision Screening for Pilots",
  description:
    "Meet updated FAA color vision requirements with confidence. Flying Colors offers the free CAD Colour Vision Screener — the gold-standard test used in aviation worldwide. Results in under 3 minutes.",
  keywords: [
    "FAA color vision test",
    "pilot color blindness test",
    "aviation color vision",
    "FAA medical requirements",
    "colour vision screening",
    "CAD test",
    "color vision deficiency",
    "deuteranopia",
    "protanopia",
    "free screening",
    "flying colors",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Flying Colors | Free FAA Color Vision Screening for Pilots",
    description:
      "Meet updated FAA color vision requirements with confidence. Free, runs in your browser, results in under 3 minutes.",
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
