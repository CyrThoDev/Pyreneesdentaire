// src/components/products/ProductsGrid.tsx
import { Fragment } from "react";
import { ProductTile } from "./ProductTile";
import type { SanityProduit } from "@/app/src/lib/sanity/types";

export function ProductsGrid({
  items,
  ctaHref = "/contact",
}: {
  items: SanityProduit[];
  ctaHref?: string;
}) {
  return (
    <div className="space-y-10">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {items.map((item, index) => {
          const isEndOfRowDesktop = (index + 1) % 4 === 0;
          const isEndOfRowMobile = (index + 1) % 4 === 0;
          const hasMoreItems = index < items.length - 1;

          return (
            <Fragment key={item._id}>
              <div className="flex flex-col">
                <p className="text-2xl font-barlow uppercase text-black">
                  {item.brand.toUpperCase()}
                </p>
                <ProductTile item={item} ctaHref={ctaHref} />
              </div>

              {hasMoreItems && isEndOfRowDesktop && (
                <div className="hidden md:col-span-4 md:block">
                  <hr className="mt-6 border-t border-black/15" />
                </div>
              )}

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