export const dynamic = 'force-dynamic';

// app/offres-produits/page.tsx
import OfferRow from "./OfferRow";
import { getOffresProduits, getPageOffresProduits } from "../src/lib/sanity/queries";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";

const ptComponents: PortableTextComponents = {
  block: {
    h2:     ({ children }) => <h2 className="text-2xl font-extrabold text-neutral-900 mt-4 mb-1">{children}</h2>,
    h3:     ({ children }) => <h3 className="text-lg font-bold text-neutral-700 mt-3 mb-1">{children}</h3>,
    normal: ({ children }) => <p className="text-neutral-700 leading-relaxed">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-neutral-900">{children}</strong>,
    em:     ({ children }) => <em>{children}</em>,
  },
};

export default async function OffresProduitsPage() {
  const [page, offres] = await Promise.all([
    getPageOffresProduits(),
    getOffresProduits(),
  ]);

  return (
    <main className="w-full">
      <section className="w-full bg-white">
        <section className="bg-red text-white font-barlow py-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6">
            <h1 className="text-5xl">{page?.titre ?? "NOS OFFRES PRODUITS"}</h1>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12 font-barlow">
          <div className="max-w-none flex flex-col gap-1">
            {page?.description && page.description.length > 0 ? (
              <PortableText value={page.description} components={ptComponents} />
            ) : (
              <>
                <p className="text-neutral-700 leading-relaxed">Pyrénées Dentaire : nos offres produits à télécharger.</p>
                <p className="text-neutral-700 leading-relaxed">
                  Retrouvez sur cette page l&apos;ensemble de nos dépliants d&apos;offres
                  produits. Chaque offre est disponible au format PDF.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Si besoin, contactez l&apos;agence pour toute question ou précision
                  sur une référence, une disponibilité ou un conseil produit.
                </p>
              </>
            )}
          </div>
        </div>

        <div className="border-t max-w-6xl mx-auto border-neutral-300" />
      </section>

      <section className="w-full font-barlow">
        {offres.map((offre, index) => (
          <OfferRow key={offre._id} offer={offre} isAlt={index % 2 !== 0} />
        ))}
      </section>
    </main>
  );
}
