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
          <h2 className="font-barlow text-3xl font-semibold text-black/60">
            {title}
          </h2>
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

function ZoomIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </svg>
  );
}

function FauteuilRow({
  item,
  ctaLabel,
}: {
  item: CatalogueFauteuil;
  ctaLabel: string;
}) {
  const [zoomed, setZoomed] = useState(false);
  const contentId = useId();

  function toggleZoomDesktopOnly() {
    // ✅ pas de zoom en mobile/tablette : uniquement lg+
    if (typeof window === "undefined") return;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    setZoomed((v) => !v);
  }

  return (
    <article className="py-3">
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
            "flex flex-col gap-0",
          ].join(" ")}
        >
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-semibold uppercase text-black">
              {item.brand}
            </p>
            <h3 className="text-lg font-bold">{item.model}</h3>
            {item.title ? (
              <p className="font-semibold text-black/60">{item.title}</p>
            ) : null}
          </div>

          {item.desc ? (
            <p className="max-w-2xl text-black/70 leading-none">{item.desc}</p>
          ) : null}

          {item.specs?.length ? (
            <div className="flex flex-col ">
              {item.specsTitle ? (
                <p className="mt-3 font-bold uppercase text-black">
                  {item.specsTitle}
                </p>
              ) : null}

              <ul className="flex flex-col leading-none text-black/70">
                {item.specs.map((s, i) => (
                  <li key={`${item.id}-spec-${i}`}>
                    - {s.replace(/^•\s?/, "")}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {/* COLONNE DROITE */}
        <div
          className={[
            zoomed ? "order-1 w-full" : "lg:order-2 lg:w-[42%]",
            "flex flex-col",
          ].join(" ")}
        >
          {/* IMAGE */}
          <button
            type="button"
            onClick={toggleZoomDesktopOnly}
            aria-controls={contentId}
            aria-expanded={zoomed}
            disabled={false}
            className={[
              "group relative w-full overflow-hidden bg-white",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
              // ✅ mobile: pas d’UI zoom / pas de curseur zoom
              "cursor-default lg:cursor-zoom-in",
              zoomed ? "lg:cursor-zoom-out" : "",
            ].join(" ")}
          >
            <div
              className={[
                "relative w-full transition-[height] duration-500",
                zoomed
                  ? "lg:h-[520px] h-[240px] sm:h-[280px]"
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
                  // ✅ hover zoom seulement desktop
                  zoomed ? "lg:scale-[1.04]" : "lg:group-hover:scale-[1.03]",
                ].join(" ")}
              />
            </div>

            {/* ✅ Badge uniquement desktop */}
           <div className="absolute bottom-3 right-3 hidden lg:block pointer-events-none">
  {zoomed ? (
    <ZoomOutIcon className="h-6 w-6 text-black drop-shadow-md" />
  ) : (
    <ZoomInIcon className="h-6 w-6 text-black drop-shadow-md" />
  )}
</div>
          </button>

          {/* CTA */}
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

function ZoomInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </svg>
  );
}

function ZoomOutIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
      <path d="M8 11h6" />
    </svg>
  );
}