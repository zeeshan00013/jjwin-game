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
  metadataBase: new URL("https://www.jjwingame.download/"),
  keywords: ["JJ Win", "JJ Win Download", "JJ Win App", "JJ Win Game"],

  title: {
    default: "JJ Win Game Download Updated Version | Top Real Money Apk",

    template: "%s | jj win",
  },
  description:
    "JJ Win Game is Pakistan’s top mobile casino app with slots, crash games, and exclusive bonuses play now and win big anytime, anywhere.",
  author: "zeeshan",
  openGraph: {
    description: "Top gaming app in Pakistan for real money download jj win.",
    url: "https://www.jjwingame.download/",
    image: "/app/Images/jjwin.webp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "jj win game download",
    description:
      "Top todays bet online casino game in pakistan download jj win game ",
    image: "/path/to/twitter-image.jpg",
  },
  alternates: {
    canonical: "https://www.jjwingame.download/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="-p3EC84RVBI0L5cIBKXUUzE4lkaznmh12V4eLThtCgM"
        />
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
