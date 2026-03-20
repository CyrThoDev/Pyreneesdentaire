// src/components/products/CategoryPage.tsx
import { ProductsGrid } from "./ProductGrid";
import type { ProductCard } from "../../data/products";
import { SanityProduit } from "../../lib/sanity/types";

export function CategoryPage({
  title,
  subtitle,
  items,
  ctaHref = "/contact",
}: {
  title: string;
  subtitle?: string;
  items: SanityProduit[];  
  ctaHref?: string;
}) {
  return (
    <main className="min-h-screen ">
      <section className="mx-auto max-w-7xl px-6 py-12 ">
        

        <ProductsGrid items={items} ctaHref={ctaHref} />
      </section>
    </main>
  );
}