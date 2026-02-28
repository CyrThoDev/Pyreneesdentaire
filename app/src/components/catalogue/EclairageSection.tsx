// app/src/components/catalogue/EclairageSection.tsx
"use client";

import Image from "next/image";
import Button from "../ui/Button";
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
        {/* ====== BLOC HERO (haut) ====== */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch">
          {/* gauche : texte + visuels */}
          <div className="flex w-full flex-col gap-6 lg:w-[58%]">
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-semibold uppercase text-black">
                {hero.eyebrow}
              </p>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">{hero.title}</h3>
                <p className="max-w-2xl  text-black/70">{hero.desc}</p>
              </div>
            </div>

            {/* THUMBS */}
            <div className="flex w-full flex-col gap-6 sm:flex-row">
              {hero.thumbs.map((t, idx) => (
                <div
                  key={`${t.src}-${idx}`}
                  className="
                    relative w-full overflow-hidden bg-white
                    h-[200px] sm:h-[260px] lg:h-[300px]
                    sm:basis-1/2
                  "
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    className="object-contain transition-transform duration-500 lg:hover:scale-[1.03]"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* droite : grand visuel */}
          <div className="flex w-full lg:w-[42%]">
            <div className="relative w-full overflow-hidden bg-white">
              <div className="relative h-[280px] sm:h-[360px] lg:h-[400px] xl:h-[460px] w-full">
                <Image
                  src={hero.rightImage.src}
                  alt={hero.rightImage.alt}
                  fill
                  className="object-contain transition-transform duration-500 lg:hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 520px, 100vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ====== GRILLE 4 colonnes (bas) ====== */}
        <div className="flex flex-col gap-6">
          {/* ligne marques */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.slice(0, 4).map((x) => (
              <div key={`${x.id}-brand`} className="flex flex-col gap-3">
                <div className="h-px w-[60%] bg-black/10" />
                <p className="text-2xl font-semibold uppercase text-black">
                  {x.brand}
                </p>
              </div>
            ))}
          </div>

          {/* cartes */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {items.slice(0, 4).map((x) => (
              <article key={x.id} className="flex h-full flex-col gap-4">
                {/* image */}
                <div className="relative h-[140px] lg:h-[160px] w-full overflow-hidden bg-white">
                  <Image
                    src={x.image.src}
                    alt={x.image.alt}
                    fill
                    className="object-contain transition-transform duration-500 lg:hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 240px, 50vw"
                  />
                </div>

                {/* texte */}
                <div className="flex flex-1 flex-col gap-2">
                  <h4 className="font-semibold text-black">{x.title}</h4>
                  <p className=" text-black/70">{x.desc}</p>
                </div>
              </article>
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