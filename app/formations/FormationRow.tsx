// app/formations/FormationRow.tsx
"use client";

import Image from "next/image";
import Button from "../src/components/ui/Button";
import type { Formation } from "./formationData";

export default function FormationRow({
  f,
  isAlt,
}: {
  f: Formation;
  isAlt: boolean;
}) {
  const bgClass = f.bg
    ? f.bg === "gray"
      ? "bg-gray"
      : "bg-white"
    : isAlt
      ? "bg-gray"
      : "bg-white";

  return (
    <article className={`${bgClass} w-full py-14`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-[360px_1fr] md:gap-14">
          {/* POSTER */}
<div className="w-full">
  {/* Mobile: ratio naturel (pas de whitespace forcé) */}
  <div className="block lg:hidden">
    <Image
      src={f.posterSrc}
      alt={f.posterAlt}
      width={1200}          // valeur “logique” (ex: largeur réelle de l'affiche si tu la connais)
      height={1700}         // valeur “logique” (hauteur réelle)
      className="w-full h-auto"
      sizes="100vw"
      priority={false}
    />
  </div>

  {/* Desktop: tu peux garder ton rendu actuel si tu veux */}
  <div className="hidden lg:block relative aspect-[3/4] w-full overflow-hidden">
    <Image
      src={f.posterSrc}
      alt={f.posterAlt}
      fill
      className="object-contain"
      sizes="360px"
    />
  </div>

  {/* Texte en dessous */}
  <div className="mt-4">
    {/* ton texte */}
  </div>
</div>

          {/* TEXTE */}
          <div className="flex flex-col justify-start pt-1">
            <p className="text-xl font-bold text-neutral-600">{f.dateLine}</p>

            <h2 className=" text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
              {f.titleTop ? <span className="block">{f.titleTop}</span> : null}
              <span className="block">{f.titleMain}</span>
            </h2>

            <div className="mt-5 max-w-2xl">{f.content}</div>

            <div className="mt-5">
              <Button
                href={f.ctaHref}
                variant="red"
                aria-label={`${f.ctaLabel} : ${f.titleTop ?? ""} ${f.titleMain}`}
              >
                {f.ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}