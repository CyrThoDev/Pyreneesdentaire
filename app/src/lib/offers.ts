// src/lib/offers.ts

export type SanitySlug = { current: string };

export type ProductImage =
  | { kind: "local"; src: string; alt: string }
  | { kind: "sanity"; assetRef: string; alt: string };

export type OfferCardData = {
  _id: string;
  title: string;
  subtitle?: string;
  slug: SanitySlug;
  leftVisual: ProductImage;
  rightVisual: ProductImage;
  downloadHref: string;
};

export const OFFERS_PRODUITS: OfferCardData[] = [
  {
    _id: "kulzer-labo",
    title: "KULZER LABORATOIRE",
    subtitle: "Feels like kulzer",
    slug: { current: "kulzer-laboratoire" },
    leftVisual: {
      kind: "local",
      src: "/images/offres-accueil/labo1.png",
      alt: "Kulzer Laboratoire - visuel",
    },
    rightVisual: {
      kind: "local",
      src: "/images/offres-accueil/labo02.png",
      alt: "Kulzer Laboratoire - dépliant offres",
    },
    downloadHref: "/pdfs/depliant-offres-laboratoire-q1-2026-bd.pdf",
  },
  {
    _id: "kulzer-cabinet",
    title: "KULZER CABINET",
    subtitle: "Post Graduate in implant surgery and dental",
    slug: { current: "kulzer-cabinet" },
    leftVisual: {
      kind: "local",
      src: "/images/offres-accueil/cabinet01.png",
      alt: "Kulzer Cabinet - visuel",
    },
    rightVisual: {
      kind: "local",
      src: "/images/offres-accueil/cabinet02.png",
      alt: "Kulzer Cabinet - dépliant offres",
    },
    downloadHref: "/pdfs/depliant-offres-cabinet-dentaire-q1-2026-bd.pdf",
  },
];