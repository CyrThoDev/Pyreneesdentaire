// app/src/components/catalogue/EclairageSection.tsx
"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { urlFor } from "../../lib/sanity/images"; // ← chemin corrigé
import type {
  CatalogueLightingHero,
  CatalogueLightingItem,
} from "@/app/src/components/catalogue/types";

export function EclairageSection({
  title,
  hero,
  items,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  hero: CatalogueLightingHero;
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

        {/* BLOC HERO */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-2xl uppercase text-black">{hero.eyebrow}</p>
            <p className="leading-none text-black/70">{hero.desc}</p>
          </div>

          <div className="flex w-full flex-col gap-4 sm:flex-row">
            {[hero.thumb1, hero.thumb2, hero.thumb3].map((thumb, idx) => (
              <div
                key={idx}
                className="relative w-full overflow-hidden bg-white h-[200px] sm:h-[260px] lg:h-[320px] sm:basis-1/3"
              >
               <Image
  src={urlFor(thumb).width(1200).fit("max").url()}
  alt={`${hero.eyebrow} ${idx + 1}`}
  fill
  className="object-contain transition-transform duration-500 lg:hover:scale-[1.03]"
  sizes="(min-width: 640px) 33vw, 100vw"
/>
              </div>
            ))}
          </div>
        </div>

        {/* GRILLE 4 colonnes */}
        <div className="flex flex-col gap-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {items.slice(0, 4).map((x) => (
              <div key={x._id} className="flex h-full flex-col gap-4"> {/* ← _id */}
                <div className="flex flex-col gap-3">
                  <div className="h-px w-[60%] bg-black/10" />
                  <p className="text-2xl uppercase text-black">{x.brand}</p>
                </div>

                <article className="flex h-full flex-col gap-4">
                  <div className="relative h-[140px] w-full overflow-hidden bg-white lg:h-[160px]">
                    <Image
  src={urlFor(x.image).width(500).fit("max").auto("format").url()}
  alt={x.title}
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