"use client";

import Image from "next/image";
import Link from "next/link";

export default function BonsPlansDuMoisSection() {
  
  const deal = {
    titleLeft: "LES BONS PLANS",
    titleRight: "DU MOIS",
    subtitle: "Déstockage du Kavo Uniqa",
    tagLine: "Modèle d’exposition",
    descriptionLines: [
      "Unit Kavo Uniqa 5 instruments comprenant:",
      "1 seringue Kavo – 1 sortie turbine fibrée (sans turbine) – 2 micromoteurs induction KL703 led",
      "1 détartreur Kavo Piezo led + 3 inserts – 1 tablette support plateaux 2 trays – Crachoir avec jet de verre temporisé",
      "Bras d’aspiration 2 canules + seringue assistante – Aspiration sélective 2 filtres",
      "Vanne de crachoir – Système de traitement du circuit d’eau par Oxygenal",
      "Système de nettoyage et décontamination de l’aspiration Dekaseptol – Pédale sans fil",
      "5 programmes disponibles – Têtière double articulations – 2 accoudoirs",
      "Sellerie standard rouge paprika",
      "Scialytique Kavolux 540 led sur unit",
    ],
    price: "29 990€TTC",
    monthly: "soit 444€TTC/mois sur 7 ans",
    oldPricePrefix: "AU LIEU DE",
oldPriceValue: "40 000€ TTC",

    ctaLabel: "CONTACTEZ-NOUS",
    ctaHref: "/contact",
    imageSrc: "/images/bonplan.png", 
    imageAlt: "Kavo Uniqa",
  };

  return (
    <section className="w-full bg-[#f2f2f2] py-10">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[420px_1fr] lg:items-start">
          {/* IMAGE */}
        <div className="overflow-hidden rounded-sm bg-white shadow-2xl lg:h-full">
  <div className="relative h-87.5 lg:h-full w-full">
    <Image
      src={deal.imageSrc}
      alt={deal.imageAlt}
      fill
      className="object-cover"
      sizes="(min-width: 1024px) 420px, 100vw"
      priority
    />
  </div>
</div>

          {/* TEXTE */}
          <div className="flex flex-col gap-0">
            <h2 className="font-oswald text-[44px] font-black  tracking-tight text-black md:text-[56px]">
              {deal.titleLeft}{" "}
              <span className="font-light tracking-[0.2em]">{deal.titleRight}</span>
            </h2>

            <div className="mt-6">
              <p className="text-[22px] font-extrabold text-black md:text-[26px]">
                {deal.subtitle}
              </p>
              <p className="mt-1 text-[18px] font-semibold text-black">{deal.tagLine}</p>

              <div className="mt-3   text-black">
                {deal.descriptionLines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            {/* PRIX + CTA */}
            <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="flex  flex-row items-baseline gap-x-4 gap-y-2 ">
                  <span className="text-xl font-black leading-none text-red md:text-2xl">
                    {deal.price}
                  </span>
                  <span className=" font-semibold text-black">{deal.monthly}</span>
                </div>

               <p className="mt-2 font-black text-black">
  {deal.oldPricePrefix}{" "}
  <span className="line-through">{deal.oldPriceValue}</span>
</p>
              </div>

              <Link
                href={deal.ctaHref}
                className="inline-flex h-12 items-center justify-center rounded-sm bg-red px-10  font-extrabold uppercase  text-white shadow-md transition hover:brightness-110"
              >
                {deal.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}