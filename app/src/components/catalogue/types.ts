// app/src/components/catalogue/types.ts
import type { SanityFauteuil, SanityEclairage, SanityEclairageHero } from '@/app/src/lib/sanity/types'

export type CatalogueFauteuil = SanityFauteuil
export type CatalogueLightingItem = SanityEclairage
export type CatalogueLightingHero = SanityEclairageHero
export type CatalogueImage = {
  src: string;
  alt: string;
};

export type CatalogueFurnitureCard = {
  id: string;
  brand: string;
  title: string;
  desc: string;
  image: CatalogueImage;
};

