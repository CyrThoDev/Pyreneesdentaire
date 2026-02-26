import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "./src/components/Header";

/* ===== Fonts ===== */

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

/* ===== Metadata ===== */

export const metadata: Metadata = {
  title: "Pyrénées Dentaires",
  description:
    "Pyrénées Dentaire vous propose des solutions efficaces ainsi qu’un accompagnement sur-mesure pour la conception et la réalisation de votre cabinet dentaire.",
  robots:
    process.env.VERCEL_ENV !== "production"
      ? { index: false, follow: false }
      : { index: true, follow: true },
};

/* ===== Layout ===== */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr" className={`${barlow.variable} ${barlowCondensed.variable} ${oswald.variable} antialiased ` }
    >
      <body >
        <Header />
        {children}
      </body>
    </html>
  );
}