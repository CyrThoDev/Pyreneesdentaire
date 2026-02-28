// src/components/products/ProductTile.tsx
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import type { ProductCard } from "../../data/radiologie";

export function ProductTile({
  item,
  ctaHref,
  ctaLabel = "CONTACTEZ-NOUS",
}: {
  item: ProductCard;
  ctaHref: string;
  ctaLabel?: string;
}) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col">
        <div className="mb-5 overflow-hidden ">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-contain p-4"
            />
          </div>
        </div>

        <p className="text-xs font-semibold uppercase tracking-wide text-black/50">
          {item.brand}
        </p>

        <h3 className="mt-1 text-base font-extrabold uppercase leading-tight text-black">
          {item.model}
        </h3>

        {item.headline ? (
          <p className="mt-2 text-sm font-semibold text-black/80">{item.headline}</p>
        ) : null}

        {item.lines?.length ? (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-black/75">
            {item.lines.map((l, idx) => (
              <li key={`${item.id}-l-${idx}`}>{l}</li>
            ))}
          </ul>
        ) : null}

        {item.description ? (
          <p className="mt-3 text-sm leading-relaxed text-black/75">{item.description}</p>
        ) : null}

        {/* ✅ bouton aligné en bas */}
        <div className="mt-auto pt-6 text-center ">
        <Button variant="red">
                     <a href={ctaHref}>{ctaLabel}</a>
                   </Button>
        </div>
      </CardContent>
    </Card>
  );
}