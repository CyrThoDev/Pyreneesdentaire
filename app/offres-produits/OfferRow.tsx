// app/offres-produits/OfferRow.tsx
"use client";

import Image from "next/image";
import Button from "../src/components/ui/Button";
import type { SanityOffreProduit } from "../src/lib/sanity/types";

export default function OfferRow({
  offer,
  isAlt,
}: {
  offer: SanityOffreProduit;
  isAlt: boolean;
}) {
  const bgClass = isAlt ? "bg-gray" : "bg-white";

  return (
    <article className={`${bgClass} w-full py-14`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-[500px_1fr] md:gap-14">
          {/* VISUELS (colonne gauche) */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative w-full bg-neutral-100 aspect-3/4 overflow-hidden">
                <Image
                  src={offer.leftVisual.src}
                  alt={offer.leftVisual.alt ?? ""}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 180px"
                />
              </div>

              <div className="relative w-full bg-white border border-neutral-200 aspect-3/4 overflow-hidden">
                <Image
                  src={offer.rightVisual.src}
                  alt={offer.rightVisual.alt ?? ""}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 180px"
                />
              </div>
            </div>
          </div>

          {/* TEXTE (colonne droite) */}
          <div className="flex flex-col justify-start pt-1">
            <p className="text-lg text-neutral-600">Dépliant PDF</p>

            <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
              {offer.title}
            </h2>

            {offer.subtitle ? (
              <p className="mt-3 text-neutral-600">{offer.subtitle}</p>
            ) : null}

            <div className="mt-5">
              <Button
                href={offer.downloadHref}
                variant="gray"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Télécharger l'offre : ${offer.title}`}
              >
                Télécharger l&apos;offre
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
