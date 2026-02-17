import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./src/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pyrenées Dentaires",
  description:
    "Pyrénées Dentaire vous propose des solutions efficaces ainsi qu’un accompagnement sur-mesure pour la conception et la réalisation de votre cabinet dentaire.",
  robots:
    process.env.VERCEL_ENV !== "production"
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
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
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
