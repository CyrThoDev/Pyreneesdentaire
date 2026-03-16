// app/src/components/catalogue/EclairageSection.tsx
"use client";

import Image from "next/image";
import Button from "../ui/Button";
import type {
  // CatalogueLightingHero,
  CatalogueLightingItem,
} from "@/app/src/components/catalogue/types";

export function EclairageSection({
  title,
  // hero,
  items,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  // hero: CatalogueLightingHero;
  items: CatalogueLightingItem[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section>
      {/* Bande titre (gris) */}
      <div className="bg-black/5">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4">
          <h2 className="font-barlow text-3xl font-semibold text-black/60">{title}</h2>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 font-barlow">
        {/* ====== BLOC HERO (haut) ====== */}
      

        {/* ====== GRILLE 4 colonnes (bas) ====== */}
<div className="flex flex-col gap-6">
  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    {items.slice(0, 4).map((x) => (
      <div key={x.id} className="flex h-full flex-col gap-4">
        {/* ligne + marque */}
        <div className="flex flex-col gap-3">
        
          <p className="text-2xl  uppercase text-black">
            {x.brand}
          </p>
        </div>

        {/* carte */}
        <article className="flex h-full flex-col gap-4">
          <div className="relative h-[140px] w-full overflow-hidden bg-white lg:h-[160px]">
            <Image
              src={x.image.src}
              alt={x.image.alt}
              fill
              className="object-contain transition-transform duration-500 lg:hover:scale-[1.04]"
              sizes="(min-width: 1024px) 240px, 50vw"
            />
          </div>

          <div>
            <h4 className="font-semibold text-xl text-black">{x.title}</h4>
            <p className="leading-none text-black/70">{x.desc}</p>
          </div>
        </article>
      </div>
    ))}
  </div>

  {/* CTA bas droite */}
  <div className="flex justify-end">
    <Button variant="red">
      <a href={ctaHref}>{ctaLabel}</a>
    </Button>
  </div>
</div>
      </div>
    </section>
  );
}