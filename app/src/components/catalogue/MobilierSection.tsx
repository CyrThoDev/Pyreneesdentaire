// app/src/components/catalogue/MobilierSection.tsx
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
  return (
    <section>
      <div className="bg-black/5">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <h2 className="font-barlow text-3xl font-semibold text-black/60">{title}</h2>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((x) => (
            <article key={x.id} className="border border-black/10 bg-white">
              <div className="relative aspect-[4/3] w-full bg-black/5">
                <Image src={x.image} alt={x.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <p className="text-xs font-semibold uppercase text-black/60">{x.brand}</p>
                <h3 className="text-sm font-bold">{x.title}</h3>
                <p className="text-sm/6 text-black/70">{x.desc}</p>
              </div>
            </article>
          ))}
        </div>
        {/* CTA */}
        <div className="flex justify-end pt-8">
          <Button variant="red">
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}