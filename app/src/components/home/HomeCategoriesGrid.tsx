"use client";

import type { SanityAccueilCategories } from "../../lib/sanity/types";
import type { Tile } from "./types";
import FauteuilTile   from "./tiles/FauteuilTile";
import ChirurgieTile  from "./tiles/ChirurgieTile";
import HygieneTile    from "./tiles/HygieneTile";
import RadiologieTile from "./tiles/RadiologieTile";

type Props = { data: SanityAccueilCategories | null }

function TileCard({ tile }: { tile: Tile }) {
  switch (tile.layout) {
    case "fauteuil":   return <FauteuilTile tile={tile} />;
    case "chirurgie":  return <ChirurgieTile tile={tile} />;
    case "hygiene":    return <HygieneTile tile={tile} />;
    case "radiologie": return <RadiologieTile tile={tile} />;
    default:           return null;
  }
}

export function HomeCategoriesGrid({ data }: Props) {
  if (!data) return null

  const tiles: Tile[] = [
    {
      title: "Fauteuil,", subtitle_1: "Mobilier", subtitle_2: "et Éclairage",
      href: "/materiel-et-mobilier-dentaire/fauteuils-eclairages-mobilier",
      lien: "/materiel-et-mobilier-dentaire/fauteuils-eclairages-mobilier",
      theme: "light", layout: "fauteuil", ctaAlign: "br",
      images: data.fauteuils?.images ?? [],
    },
    {
      title: "Chirurgie", subtitle_1: "et Prophylaxie",
      href: "/materiel-et-mobilier-dentaire/chirurgie-prophylaxie",
      lien: "/materiel-et-mobilier-dentaire/chirurgie-prophylaxie",
      theme: "red", layout: "chirurgie", ctaAlign: "br",
      images: data.chirurgie?.images ?? [],
    },
    {
      title: "Hygiène", subtitle_1: "et stérilisation",
      href: "/materiel-et-mobilier-dentaire/hygiene-sterilisation",
      lien: "/materiel-et-mobilier-dentaire/hygiene-sterilisation",
      theme: "dark", layout: "hygiene", ctaAlign: "bl",
      images: data.hygiene?.images ?? [],
    },
    {
      title: "Radiologie", subtitle_1: "et prise d'empreinte",
      href: "/materiel-et-mobilier-dentaire/radiologie-empreinte",
      lien: "/materiel-et-mobilier-dentaire/radiologie-empreinte",
      theme: "light", layout: "radiologie", ctaAlign: "br",
      images: data.radiologie?.images ?? [],
    },
  ]

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {tiles.map((tile) => (
          <TileCard key={tile.href} tile={tile} />
        ))}
      </div>
    </section>
  )
}