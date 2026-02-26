"use client";

import Image from "next/image";
import Link from "next/link";

export default function OffreProduitsSection() {
  // ✅ Données gérées ici (tu remplaceras par ton fetch / CMS plus tard)
  const title = "OFFRE PRODUITS";

  const leftCard = {
    title: "Produit 1",
    subtitle: "Description courte",
    imageSrc: "/images/p1.jpg",
    imageAlt: "Produit 1",
    promoPriceLabel: "PROMO 120€", // optionnel
    oldPriceLabel: "340€", // optionnel
    href: "/offres/produit-1",
  };

  const rightCard = {
    title: "Post Graduate in implant",
    subtitle: "Post Graduate in implant surgery and dental",
    imageSrc: "/images/p2.jpg",
    imageAlt: "Post Graduate in implant",
    promoPriceLabel: "PROMO 120€",
    oldPriceLabel: "340€",
    href: "/offres/post-graduate-implant",
  };

  const ctaLabel = "VOIR LES OFFRES";
  const ctaHref = "/offres";

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Title */}
        <h2 className="text-5xl tracking-tight">
          <span className="font-light">OFFRE </span>
          <span className="font-extrabold">PRODUITS</span>
        </h2>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* LEFT */}
          <article className="w-full">
            <div className="relative aspect-[16/9] w-full border border-neutral-300">
              <Image
                src={leftCard.imageSrc}
                alt={leftCard.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="mt-5 flex items-start justify-between gap-6">
              <div className="min-w-0">
                <h3 className="truncate text-xl font-extrabold text-neutral-900">
                  {leftCard.title}
                </h3>
                {leftCard.subtitle ? (
                  <p className="mt-1 text-sm text-neutral-600">
                    {leftCard.subtitle}
                  </p>
                ) : null}
              </div>

              {(leftCard.promoPriceLabel || leftCard.oldPriceLabel) && (
                <div className="shrink-0 text-right">
                  {leftCard.promoPriceLabel ? (
                    <div className="text-2xl font-extrabold text-red-700">
                      {leftCard.promoPriceLabel}
                    </div>
                  ) : null}
                  {leftCard.oldPriceLabel ? (
                    <div className="mt-1 text-base text-neutral-800 line-through">
                      {leftCard.oldPriceLabel}
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            <div className="mt-3 flex justify-end">
              <Link
                href={leftCard.href}
                className="text-xs font-extrabold uppercase tracking-widest text-red-700 underline underline-offset-4 hover:text-red-800"
              >
                En savoir plus
              </Link>
            </div>
          </article>

          {/* RIGHT */}
          <article className="w-full">
            <div className="relative aspect-[16/9] w-full border border-neutral-300">
              <Image
                src={rightCard.imageSrc}
                alt={rightCard.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="mt-5 flex items-start justify-between gap-6">
              <div className="min-w-0">
                <h3 className="truncate text-xl font-extrabold text-neutral-900">
                  {rightCard.title}
                </h3>
                {rightCard.subtitle ? (
                  <p className="mt-1 text-sm text-neutral-600">
                    {rightCard.subtitle}
                  </p>
                ) : null}
              </div>

              {(rightCard.promoPriceLabel || rightCard.oldPriceLabel) && (
                <div className="shrink-0 text-right">
                  {rightCard.promoPriceLabel ? (
                    <div className="text-2xl font-extrabold text-red-700">
                      {rightCard.promoPriceLabel}
                    </div>
                  ) : null}
                  {rightCard.oldPriceLabel ? (
                    <div className="mt-1 text-base text-neutral-800 line-through">
                      {rightCard.oldPriceLabel}
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            <div className="mt-3 flex justify-end">
              <Link
                href={rightCard.href}
                className="text-xs font-extrabold uppercase tracking-widest text-red-700 underline underline-offset-4 hover:text-red-800"
              >
                En savoir plus
              </Link>
            </div>
          </article>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-end">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center bg-red-700 px-10 py-4 text-sm font-extrabold uppercase tracking-wide text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}