"use client";

import type { Tile } from "./types";
import FauteuilTile from "./tiles/FauteuilTile";
import RadiologieTile from "./tiles/RadiologieTile"
import HygieneTile from "./tiles/HygieneTile";
import ChirurgieTile from "./tiles/ChirurgieTile";

const tiles: Tile[] = [
  {
    title: "FAUTEUIL,",
    subtitle_1: "MOBILIER",
    subtitle_2: "ET ÉCLAIRAGE",
    href: "/materiel-et-mobilier-dentaire/fauteuils-eclairages-mobilier",
    theme: "light",
    layout: "fauteuil",
    ctaAlign: "br",
    images: [
      { src: "/images/fauteuils/Belmont_S6.png", alt: "Fauteuil dentaire" },
      { src: "/images/fauteuils/fauteuil_k2.png", alt: "Mobilier et éclairage dentaire" },
    ],
  },
  {
    title: "Radiologie",
    subtitle_1: "et prise d’empreinte",
    href: "/materiel-et-mobilier-dentaire/radiologie-empreinte",
    theme: "red",
    layout: "radiologie",
    ctaAlign: "br",
    images: [
      { src: "/images/categories/radiologie.png", alt: "Radiologie dentaire" },
      { src: "/images/categories/empreinte.png", alt: "Prise d’empreinte" },
    ],
  },
  {
    title: "Hygiène",
    subtitle_1: "et stérilisation",
    href: "/materiel-et-mobilier-dentaire/hygiene-sterilisation",
    theme: "dark",
    layout: "hygiene",
    ctaAlign: "bl",
    images: [
      { src: "/images/hygiene/mt20-frontal-2-1.png", alt: "Équipement d’hygiène" },
      { src: "/images/hygiene/Miniature-E10.png", alt: "Stérilisation" },
    ],
  },
  {
    title: "Chirurgie",
    subtitle_1: "et Prophylaxie",
    href: "/materiel-et-mobilier-dentaire/chirurgie-prophylaxie",
    theme: "light",
    layout: "chirurgie",
    ctaAlign: "br",
    images: [],
  },
];

function TileCard({ tile }: { tile: Tile }) {
  switch (tile.layout) {
    case "fauteuil":
      return <FauteuilTile tile={tile} />;

    case "radiologie":
      return <RadiologieTile tile={tile} />;

    case "hygiene":
      return <HygieneTile tile={tile} />;

    case "chirurgie":
      return <ChirurgieTile tile={tile} />;

    default:
      return null;
  }
}

export function HomeCategoriesGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {tiles.map((tile) => (
          <TileCard key={tile.href} tile={tile} />
        ))}
      </div>
    </section>
  );
}