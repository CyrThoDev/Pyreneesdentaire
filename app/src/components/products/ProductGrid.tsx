// src/components/products/ProductsGrid.tsx
import { Fragment } from "react";
import { ProductTile } from "./ProductTile";
import type { ProductCard } from "../../data/radiologie";

export function ProductsGrid({
  items,
  ctaHref = "/contact",
}: {
  items: ProductCard[];
  ctaHref?: string;
}) {
  return (
    <div className="space-y-10">
      {/* GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const isDesktopDivider = (index + 1) % 4 === 0;
          const isMobileDivider = (index + 1) % 4 === 0;

          return (
            <Fragment key={item.id}>
              <ProductTile item={item} ctaHref={ctaHref} />

              {/* Divider Desktop (après chaque ligne de 4) */}
              {isDesktopDivider && (
                <div className="hidden lg:col-span-4 lg:block">
                  <hr className="mt-6 border-t border-black/15" />
                </div>
              )}

              {/* Divider Mobile (après 4 cartes aussi) */}
              {isMobileDivider && (
                <div className="block col-span-1 sm:col-span-2 lg:hidden">
                  <hr className="mt-6 border-t border-black/15" />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}