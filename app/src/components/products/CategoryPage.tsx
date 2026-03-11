// src/components/products/CategoryPage.tsx
import { ProductsGrid } from "./ProductGrid";
import type { ProductCard } from "../../data/products";

export function CategoryPage({
  title,
  subtitle,
  items,
  ctaHref = "/contact",
}: {
  title: string;
  subtitle?: string;
  items: ProductCard[];
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