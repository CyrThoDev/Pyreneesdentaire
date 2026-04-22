export const dynamic = 'force-dynamic';

// app/offres-produits/page.tsx
import OfferRow from "./OfferRow";
import { getOffresProduits, getPageOffresProduits } from "../src/lib/sanity/queries";

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
          <div className="max-w-none leading-none">
            {page?.description ? (
              <p className="whitespace-pre-line">{page.description}</p>
            ) : (
              <>
                <p>Pyrénées Dentaire : nos offres produits à télécharger.</p>
                <p className="m-0 leading-none">
                  <br />
                  Retrouvez sur cette page l'ensemble de nos dépliants d'offres
                  produits. Chaque offre est disponible au format PDF.
                  <br />
                  <br />
                  Si besoin, contactez l'agence pour toute question ou précision
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
