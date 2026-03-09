import { StaticImageData } from "next/image";

export type Tile = {
  title: string;
  subtitle_1?: string;
  subtitle_2?: string;
  href: string;
  theme: "light" | "dark" | "red";
  layout: "fauteuil" | "radiologie" | "hygiene" | "chirurgie";
  ctaAlign?: "br" | "bl";
  images?: {
    src: string | StaticImageData;
    alt: string;
  }[];
};