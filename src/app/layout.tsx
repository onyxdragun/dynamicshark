import React, { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DynamicShark | Tyler Ingram Portfolio",
  description: "Web Development portfolio of Tyler Ingram, specializing in React, Next.js, Node.js, and modern web technologies.",
  metadataBase: new URL("https://dynamicshark.com"),
};

export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VBP7EDZB8H"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-VBP7EDZB8H');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "DynamicShark",
            url: "https://dynamicshark.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Comox Valley",
              addressRegion: "BC",
              addressCountry: "CA"
            },
            description: "Freelance web developer specializing in React, Next.js, and modern web solutions.",
            email: "info@dynamicshark.com"
          })
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-blue-700 via-blue-900 to-black min-h-screen`}
      >
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
