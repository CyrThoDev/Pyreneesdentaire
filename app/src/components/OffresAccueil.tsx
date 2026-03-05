"use client";

import Button from "./ui/Button";
import OfferCard from "./offres/OfferCard";
import { OFFERS_PRODUITS } from "../lib/offers";

export default function OffreProduitsSection() {
  const title = "OFFRE PRODUITS";

  return (
    <section className="w-full bg-white font-barlow">
      <div className="relative mx-auto max-w-7xl px-6 py-10 pb-28">
        <h2 className="text-5xl tracking-tight font-barlow">
          <span className="font-light">{title.split(" ")[0]} </span>
          <span className="font-extrabold">
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {OFFERS_PRODUITS.map((o) => (
            <OfferCard key={o._id} offer={o} />
          ))}
        </div>

        <Button
          href="/offres-produits"
          variant="red"
          className="absolute right-6 bottom-10"
        >
          VOIR LES OFFRES
        </Button>
      </div>
    </section>
  );
}