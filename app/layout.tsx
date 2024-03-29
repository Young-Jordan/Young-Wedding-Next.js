import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Urbanist, Beth_Ellen } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Script from "next/script";
import Footer from "./footer";

 
// Font files can be colocated inside of `pages`
const seasons = localFont({ 
  src: './fonts/theseasons-reg-webfont.woff2',
  variable: '--font-the-seasons'
})

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist"
})

const beth_ellen = Beth_Ellen({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-beth-ellen"
})

export const metadata: Metadata = {
  title: "Jordan + Nikole",
  description: "Jordan + Nikole are getting married!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${seasons.variable} font-serif, ${beth_ellen.variable} font-sans, ${urbanist.variable}, font-mono`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
