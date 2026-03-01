// src/data/products.ts
export type ProductCard = {
  id: string;
  brand: string;
  model: string;
  headline?: string;
  lines?: string[];
  description?: string;
  imageSrc: string;
  imageAlt: string;
};
