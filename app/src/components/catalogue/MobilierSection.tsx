"use client";

import Image from "next/image";
import Button from "../ui/Button";
import type { CatalogueFurnitureCard } from "@/app/src/components/catalogue/types";

export function MobilierSection({
  title,
  items,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  items: CatalogueFurnitureCard[];
  ctaLabel: string;
  ctaHref: string;
}) {
  const visible = items.slice(0, 4);

  return (
    <section>
      {/* Bandeau titre */}
      <div className="bg-black/5">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <h2 className="font-barlow text-3xl font-semibold text-black/60">
            {title}
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-8">
        <div className="flex flex-col gap-6">
          
          {/* Ligne marques */}
          <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((x) => (
              <div key={`${x.id}-brand`} className="flex flex-col gap-3">
                
                <p className="text-2xl font-semibold uppercase text-black">
                  {x.brand}
                </p>
              </div>
            ))}
          </div>

          {/* Cartes */}
          <div className=" font-barlow grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((x) => (
              <article key={x.id} className="flex h-full flex-col gap-4">
                
                {/* Image */}
                <div className="relative h-[140px] lg:h-[250px] w-full overflow-hidden bg-white">
                  <Image
                    src={x.image.src}
                    alt={x.image.alt}
                    fill
                    className="object-contain transition-transform duration-500 lg:hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 240px, 50vw"
                  />
                </div>

                {/* Texte */}
                <div className="flex flex-1 flex-col gap-0">
                  <h4 className="font-semibold text-black">
                    {x.title}
                  </h4>

                  <p className="text-black/70 leading-none whitespace-pre-line">
                    {x.desc}
                  </p>
                </div>

              </article>
            ))}
          </div>

          {/* CTA */}
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