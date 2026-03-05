"use client";

import Image from "next/image";
import Button from "../ui/Button";
import type { OfferCardData , ProductImage} from "../../lib/offers";

function imgSrc(img: ProductImage) {
  return img.kind === "local" ? img.src : "/images/placeholder.jpg";
}

export default function OfferCard({ offer }: { offer: OfferCardData }) {
  return (
    <article className="w-full">
      {/* 2 visuels */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* visuel portrait */}
        <div className="relative w-full bg-neutral-100 aspect-[3/4] md:h-[420px] md:aspect-auto">
          <Image
            src={imgSrc(offer.leftVisual)}
            alt={offer.leftVisual.alt}
            fill
            className="object-contain md:object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* dépliant */}
        <div className="relative w-full bg-white border-t md:border-t-0 md:border-l border-neutral-200 aspect-[3/4] md:h-[420px] md:aspect-auto">
          <Image
            src={imgSrc(offer.rightVisual)}
            alt={offer.rightVisual.alt}
            fill
            className="object-contain md:object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* textes */}
      <div className="mt-5">
        <h3 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-900">
          {offer.title}
        </h3>

        {offer.subtitle ? (
          <p className="text-sm text-neutral-600">{offer.subtitle}</p>
        ) : null}
      </div>

      {/* bouton */}
      <div className="mt-4">
        <Button
          href={offer.downloadHref}
          variant="gray"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger l'offre
        </Button>
      </div>
    </article>
  );
}