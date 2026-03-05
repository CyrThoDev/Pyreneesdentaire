// app/offres-produits/page.tsx
import OfferRow from "./OfferRow";
import { OFFERS_PRODUITS } from "../src/lib/offers";

export default function OffresProduitsPage() {
  return (
    <main className="w-full">
      <section className="w-full bg-white">
        {/* HEADER rouge comme /formations */}
        <section className="bg-red text-white font-barlow py-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6">
            <h1 className="text-5xl">NOS OFFRES PRODUITS</h1>
          </div>
        </section>

        {/* INTRO comme /formations */}
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12 font-barlow">
          <div className="max-w-none">
            <p className="font-barlow">
              Pyrénées Dentaire : nos offres produits à télécharger
            </p>

            <p className="m-0 leading-5">
              <br />
              Retrouvez sur cette page l’ensemble de nos dépliants d’offres
              produits. Chaque offre est disponible au format PDF.
              <br />
              <br />
              Si besoin, contactez l’agence pour toute question ou précision sur
              une référence, une disponibilité ou un conseil produit.
            </p>
          </div>
        </div>

        <div className="border-t max-w-6xl mx-auto border-neutral-300" />
      </section>

      {/* LISTE type FormationRow */}
      <section className="w-full font-barlow">
        {OFFERS_PRODUITS.map((offer, index) => (
          <OfferRow key={offer._id} offer={offer} isAlt={index % 2 !== 0} />
        ))}
      </section>
    </main>
  );
}