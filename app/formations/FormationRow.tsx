"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { SanityFormationDetail } from "../src/lib/sanity/types";

const ptComponents = {
  block: {
    h3: ({ children }: any) => (
      <h3 className="font-bold text-neutral-500 mt-4">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <p className="text-red font-semibold mt-5">{children}</p>
    ),
    normal: ({ children }: any) => (
      <p className="text-neutral-700">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-neutral-900">{children}</strong>
    ),
    em: ({ children }: any) => <em>{children}</em>,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-5 space-y-1 leading-none">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
  },
};

export default function FormationRow({
  f,
  isAlt,
}: {
  f: SanityFormationDetail;
  isAlt: boolean;
}) {
  const bgClass = isAlt ? "bg-gray" : "bg-white";

  return (
    <article id={f._id} className={`${bgClass} w-full scroll-mt-28 py-14`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-[360px_1fr] md:gap-14">

          {/* AFFICHE */}
          {f.posterUrl && (
            <div className="w-full">
              <div className="block lg:hidden">
                <Image
                  src={f.posterUrl}
                  alt={f.posterAlt ?? ""}
                  width={1200}
                  height={1700}
                  className="w-full h-auto"
                  sizes="100vw"
                />
              </div>
              <div className="hidden lg:block relative aspect-3/4 w-full overflow-hidden">
                <Image
                  src={f.posterUrl}
                  alt={f.posterAlt ?? ""}
                  fill
                  className="object-contain"
                  sizes="360px"
                />
              </div>
            </div>
          )}

          {/* TEXTE */}
          <div className="flex flex-col justify-start pt-1">

            {/* Date */}
            <p className="text-xl font-bold text-neutral-600">{f.dateLine}</p>

            {/* Titre */}
            <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
              {f.titreTop && <span className="block">{f.titreTop}</span>}
              <span className="block">{f.titre}</span>
            </h2>

            {/* Horaires */}
            {f.horaires && (
              <p className="mt-2 text-red font-semibold">
                {[f.horaires.debut, f.horaires.fin].filter(Boolean).join(" → ")}
                {f.horaires.notes && ` — ${f.horaires.notes}`}
              </p>
            )}

            {/* Programme */}
            {f.programme && f.programme.length > 0 && (
              <div className="mt-5 max-w-2xl">
                <PortableText value={f.programme} components={ptComponents} />
              </div>
            )}

            {/* Contacts */}
            {f.contacts && f.contacts.length > 0 && (
              <div className="mt-5">
                <p className="font-bold text-neutral-900">INSCRIPTION</p>
                {f.contacts.map((c, idx) => (
                  <p key={idx} className="mt-2 text-neutral-700">
                    {c.nom}
                    {c.email && (
                      <>{" — "}<a href={`mailto:${c.email}`} className="underline underline-offset-2 hover:text-neutral-900">{c.email}</a></>
                    )}
                    {c.telephone && (
                      <>{" — "}<a href={`tel:${c.telephone.replace(/\s/g, "")}`} className="underline underline-offset-2 hover:text-neutral-900">{c.telephone}</a></>
                    )}
                  </p>
                ))}
              </div>
            )}

            {/* CTA */}
            {f.ctaLabel && f.ctaHref && (
              <div className="mt-5">
                <a href={f.ctaHref} className="inline-block bg-neutral-800 text-white px-6 py-3 text-sm font-bold hover:bg-neutral-700 transition-colors">
                  {f.ctaLabel}
                </a>
              </div>
            )}

          </div>
        </div>
      </div>
    </article>
  );
}
