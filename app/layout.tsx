import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins, Beth_Ellen } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import HeroNav from "./components/HeroNav";

// Font files can be colocated inside of `pages`
const seasons = localFont({
  src: "./fonts/theseasons-reg-webfont.woff2",
  variable: "--font-the-seasons",
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const beth_ellen = Beth_Ellen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-beth-ellen",
});

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
      <body
        className={`${seasons.variable} font-serif, ${beth_ellen.variable} font-sans, ${poppins.variable}, font-mono`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
