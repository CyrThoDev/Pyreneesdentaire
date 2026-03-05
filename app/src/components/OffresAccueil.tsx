"use client";

import Image from "next/image";
import Button from "./ui/Button";

type SanitySlug = { current: string };

type ProductImage =
  | { kind: "local"; src: string; alt: string }
  | { kind: "sanity"; assetRef: string; alt: string };

type OfferCardData = {
  _id: string;
  title: string;
  subtitle?: string;
  slug: SanitySlug;

  // 2 visuels (comme ta maquette)
  leftVisual: ProductImage; // portrait (feels like kulzer)
  rightVisual: ProductImage; // dépliant

  // CTA téléchargement (PDF)
  downloadHref: string;
};

function imgSrc(img: ProductImage) {
  return img.kind === "local" ? img.src : "/images/placeholder.jpg";
}

function OfferCard({ offer }: { offer: OfferCardData }) {
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
          <p className=" text-sm text-neutral-600">{offer.subtitle}</p>
        ) : null}
      </div>

      {/* bouton rouge */}
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

export default function OffreProduitsSection() {
  const title = "OFFRE PRODUITS";

  /**
   * IMPORTANT :
   * - Place tes images dans /public/images/...
   * - Place tes PDFs dans /public/pdfs/...
   *   (comme ça downloadHref = "/pdfs/xxx.pdf" fonctionne direct)
   */
  const offers: OfferCardData[] = [
    {
      _id: "kulzer-labo",
      title: "KULZER LABORATOIRE",
      subtitle: "Feels like kulzer",
      slug: { current: "kulzer-laboratoire" },
      leftVisual: {
        kind: "local",
        src: "/images/offres-accueil/labo1.png",
        alt: "Kulzer Laboratoire - visuel",
      },
      rightVisual: {
        kind: "local",
        src: "/images/offres-accueil/labo02.png",
        alt: "Kulzer Laboratoire - dépliant offres",
      },
      downloadHref: "/pdfs/depliant-offres-laboratoire-q1-2026-bd.pdf",
    },
    {
      _id: "kulzer-cabinet",
      title: "KULZER CABINET",
      subtitle: "Post Graduate in implant surgery and dental",
      slug: { current: "kulzer-cabinet" },
      leftVisual: {
        kind: "local",
        src: "/images/offres-accueil/cabinet01.png",
        alt: "Kulzer Cabinet - visuel",
      },
      rightVisual: {
        kind: "local",
        src: "/images/offres-accueil/cabinet02.png",
        alt: "Kulzer Cabinet - dépliant offres",
      },
      downloadHref:
        "/pdfs/depliant-offres-cabinet-dentaire-q1-2026-bd.pdf",
    },
  ];

  return (
    <section className="w-full bg-white font-barlow">
      <div className="relative mx-auto max-w-7xl px-6 py-10 pb-28">
        <h2 className="text-5xl tracking-tight font-barlow">
          <span className="font-light">{title.split(" ")[0]} </span>
          <span className="font-extrabold">
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {offers.map((o) => (
            <OfferCard key={o._id} offer={o} />
          ))}
        </div>
       <Button
          href="/offres-produits"
          variant="red"
          className="absolute  right-6 bottom-10"
        >
          VOIR LES OFFRES
        </Button>
      </div>

       
    </section>
  );
}