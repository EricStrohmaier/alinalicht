import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Alina Licht",
    default: "Alina Licht",
  },
  description:
    "Alina Licht - Music Producer for movies, TV shows, and commercials",
  generator: "ericstrohmaier.com",
  openGraph: {
    title: "Alina Licht",
    description:
      "Alina Licht - Music Producer for movies, TV shows, and commercials",
    url: "https://alinalicht.com",
    siteName: "Alina Licht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alina Licht",
    description:
      "Alina Licht - Music Producer for movies, TV shows, and commercials",
  },
  itunes: {
    appId: "1691736862",
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
        className={cn(
          geistSans.variable,
          geistMono.variable,
          instrumentSerif.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
