"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

/**
 * ✅ Shape "Sanity-ready"
 * - slug: Sanity a souvent { current: string }
 * - image: on anticipe une ref Sanity (asset._ref) OU une url locale
 * - pricing: champs optionnels
 */
type SanitySlug = { current: string };

type ProductImage =
  | { kind: "local"; src: string; alt: string }
  | { kind: "sanity"; assetRef: string; alt: string }; // + tard: urlFor(assetRef)

type ProductCardData = {
  _id: string; // futur _id Sanity
  title: string;
  subtitle?: string;
  slug: SanitySlug;
  image: ProductImage;
  pricing?: {
    promoLabel?: string;
    oldLabel?: string;
  };
};

function hrefFromSlug(slug: SanitySlug) {
  return `/offres/${slug.current}`;
}

function ProductCard({ product }: { product: ProductCardData }) {
  const href = hrefFromSlug(product.slug);

  // ✅ Pour l’instant : on ne supporte que l’image locale dans le rendu.
  // Quand tu brancheras Sanity, tu remplaceras cette partie par urlFor(...)
  const imageSrc =
    product.image.kind === "local" ? product.image.src : "/images/placeholder.jpg";
  const imageAlt = product.image.alt;

  return (
    <article className="w-full">
      <div className="relative aspect-video w-full border border-neutral-300">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="mt-5">
        <h3 className="truncate text-xl font-extrabold text-neutral-900">
          {product.title}
        </h3>

        {product.subtitle ? (
          <p className="mt-1 text-sm text-neutral-600">{product.subtitle}</p>
        ) : null}

        {(product.pricing?.promoLabel || product.pricing?.oldLabel) && (
          <div className="mt-3 flex justify-end">
            <div className="flex items-baseline gap-2 text-right">
              {product.pricing?.promoLabel ? (
                <span className="text-2xl font-extrabold text-red-700">
                  {product.pricing.promoLabel}
                </span>
              ) : null}

              {product.pricing?.oldLabel ? (
                <span className="text-base text-neutral-800 line-through">
                  {product.pricing.oldLabel}
                </span>
              ) : null}
            </div>
          </div>
        )}
      </div>

      <div className="mt-3 flex justify-end">
        <Button
  href={href}
  variant="white"

>
  En savoir plus
</Button>
      </div>
    </article>
  );
}

export default function OffreProduitsSection() {
  // ✅ Données locales, mais déjà au format que tu récupèreras depuis Sanity plus tard
  const title = "OFFRE PRODUITS";

  const products: ProductCardData[] = [
    {
      _id: "p1",
      title: "Produit 1",
      subtitle: "Description courte",
      slug: { current: "produit-1" },
      image: { kind: "local", src: "/images/p1.jpg", alt: "Produit 1" },
      pricing: { promoLabel: "PROMO 120€", oldLabel: "340€" },
    },
    {
      _id: "p2",
      title: "Post Graduate in implant",
      subtitle: "Post Graduate in implant surgery and dental",
      slug: { current: "post-graduate-implant" },
      image: { kind: "local", src: "/images/p2.jpg", alt: "Post Graduate in implant" },
      pricing: { promoLabel: "PROMO 120€", oldLabel: "340€" },
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-5xl tracking-tight">
          <span className="font-light">{title.split(" ")[0]} </span>
          <span className="font-extrabold">{title.split(" ").slice(1).join(" ")}</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Button
  href="/offres"
  variant="red"
 
>
  VOIR LES OFFRES
</Button>
        </div>
      </div>
    </section>
  );
}