import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://jjwingame.download"),
  title: {
    default:
      "JJWin Download Best Online Casino Top Earing App in Pakistan 2025",

    template: "%s | jjwin",
  },
  description:
    "Join JJWin for the best online casino game, mobile gaming, and exclusive bonuses in Pakistan. Play slots, crash games, and more. Download the JJWin app now",
  keywords: [
    "JJWin",
    "JJWin Download",
    "JJWin App",
    "JJWin Pakistan",
    "JJWin Slots",
    "JJWin Real Money",
    "JJWin Bonuses",
  ],
  author: "zeeshan",
  openGraph: {
    description: "Top gaming app in Pakistan for real money download jjwin.",
    url: "https://jjwingame.download",
    image: "/app/Images/jjwin.webp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Create Next App",
    description: "Next.js app for building scalable applications",
    image: "/path/to/twitter-image.jpg",
  },
  alternates: {
    canonical: "https://jjwingame.download",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a]`}
        cz-shortcut-listen="true"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
