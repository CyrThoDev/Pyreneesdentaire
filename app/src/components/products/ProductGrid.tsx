// src/components/products/ProductsGrid.tsx
import { Fragment } from "react";
import { ProductTile } from "./ProductTile";
import type { ProductCard } from "../../data/products";

export function ProductsGrid({
  items,
  ctaHref = "mailto:michaut.g@wanadoo.fr",
}: {
  items: ProductCard[];
  ctaHref?: string;
}) {
  return (
    <div className="space-y-10">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {items.map((item, index) => {
          const isEndOfRowDesktop = (index + 1) % 4 === 0;
          const isEndOfRowMobile = (index + 1) % 4 === 0;

          // ✅ ne pas afficher de ligne après la dernière carte
          const hasMoreItems = index < items.length - 1;

          return (
            <Fragment key={item.id}>
              {/* ✅ Brand au-dessus de CHAQUE produit (dans la cellule) */}
              <div className="flex flex-col">
                <p className="text-2xl font-barlow font-semibold uppercase text-black">
                  {item.brand.toUpperCase()}
                </p>

                <ProductTile item={item} ctaHref={ctaHref} />
              </div>

              {/* ✅ UNE seule ligne après chaque rangée de 4 (desktop), sauf la dernière */}
              {hasMoreItems && isEndOfRowDesktop && (
                <div className="hidden md:col-span-4 md:block">
                  <hr className="mt-6 border-t border-black/15" />
                </div>
              )}

              {/* ✅ Mobile : ligne après 4 (si tu la veux), sauf la dernière */}
              {hasMoreItems && isEndOfRowMobile && (
                <div className="block col-span-1 sm:col-span-2 md:hidden">
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