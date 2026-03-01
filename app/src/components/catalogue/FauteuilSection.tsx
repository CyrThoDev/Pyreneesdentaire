// app/src/components/catalogue/FauteuilSection.tsx
"use client";

import Image from "next/image";
import { useId, useState } from "react";
import Button from "../ui/Button";
import type { CatalogueFauteuil } from "@/app/src/components/catalogue/types";

export function FauteuilSection({
  title,
  items,
  ctaLabel,
}: {
  title: string;
  items: CatalogueFauteuil[];
  ctaLabel: string;
}) {
  return (
    <section>
      <div className="bg-black/5 ">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <h2 className="font-barlow text-3xl font-semibold text-black/60">{title}</h2>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 font-barlow">
        <div className="divide-y divide-black/10">
          {items.map((item) => (
            <FauteuilRow key={item.id} item={item} ctaLabel={ctaLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FauteuilRow({ item, ctaLabel }: { item: CatalogueFauteuil; ctaLabel: string }) {
  const [zoomed, setZoomed] = useState(false);
  const contentId = useId();

  return (
    <article className="py-10">
      <div
        className={[
          "flex flex-col gap-6",
          zoomed ? "flex-col" : "lg:flex-row lg:items-stretch",
        ].join(" ")}
      >
        {/* COLONNE GAUCHE */}
        <div
          id={contentId}
          className={[
            "min-w-0",
            zoomed ? "order-2 w-full" : "lg:order-1 lg:w-[58%]",
            "flex flex-col gap-3",
          ].join(" ")}
        >
          <div className="flex flex-col gap-1">
            <p className=" text-2xl font-semibold uppercase text-black">{item.brand}</p>
            <h3 className="text-lg font-bold">{item.model}</h3>
            {item.title ? <p className=" font-semibold text-black/60">{item.title}</p> : null}
          </div>

          {item.desc ? <p className="max-w-2xl  text-black/70">{item.desc}</p> : null}

          {item.specs?.length ? (
            <div className="flex flex-col gap-2">
              {item.specsTitle ? (
                <p className=" font-bold uppercase text-black">{item.specsTitle}</p>
              ) : null}

              <ul className="flex flex-col gap-1  text-black/70">
                {item.specs.map((s, i) => (
                  <li key={`${item.id}-spec-${i}`}>• {s.replace(/^•\s?/, "")}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {/* COLONNE DROITE (même hauteur) */}
        <div
          className={[
            zoomed ? "order-1 w-full" : "lg:order-2 lg:w-[42%]",
            "flex flex-col",
          ].join(" ")}
        >
          {/* IMAGE en haut */}
          <button
            type="button"
            onClick={() => setZoomed((v) => !v)}
            aria-controls={contentId}
            aria-expanded={zoomed}
            className={[
              "group relative w-full overflow-hidden  bg-white",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
              zoomed ? "cursor-zoom-out" : "cursor-zoom-in",
            ].join(" ")}
          >
            <div
              className={[
                "relative w-full transition-[height] duration-500",
                zoomed
                  ? "h-[360px] sm:h-[460px] lg:h-[520px]"
                  : "h-[240px] sm:h-[280px] lg:h-[260px]",
              ].join(" ")}
            >
              <Image
                src={item.image}
                alt={`${item.brand} ${item.model}`}
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className={[
                  "object-contain transition-transform duration-500",
                  zoomed ? "scale-[1.04]" : "group-hover:scale-[1.03]",
                ].join(" ")}
              />
            </div>

            <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1  font-semibold text-white">
              {zoomed ? "Réduire" : "Zoom"}
            </div>
          </button>

          {/* BOUTON collé en bas (sans mt-auto, via flex-1) */}
          <div className="flex flex-1 items-end justify-end pt-4">
            <Button variant="red">
              <a href={item.href ?? "#"}>{ctaLabel}</a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}