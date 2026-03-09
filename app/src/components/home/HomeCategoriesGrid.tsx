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
      { src: "/images/fauteuils/Belmont_S6.png", alt: "Belmont S6" },
      { src: "/images/fauteuils/220_0_castellini_skema-6.png", alt: "Castellini SKEMA 6" },     
      { src: "/images/fauteuils/fauteuil_k2.png", alt: "Fauteuil K2" },
       { src: "/images/fauteuils/KaVo-uniQa_S-LED-HD_7h-transparent01.png", alt: "KAVO" },
    ],
  },
  {
    title: "Chirurgie",
    subtitle_1: "et Prophylaxie",
    href: "/materiel-et-mobilier-dentaire/chirurgie-prophylaxie",
    theme: "red",
    layout: "chirurgie",
    ctaAlign: "br",
    images: [{ src: "/images/chirurgie/AFMP_front_169.png", alt: "Belmont S6" },{ src: "/images/chirurgie/1700751-001_Chiropro PLUS_F_2019_MO+CA1.2.5_15CM.tif", alt: "Belmont S6" }
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
    title: "Radiologie",
    subtitle_1: "et prise d’empreinte",
    href: "/materiel-et-mobilier-dentaire/radiologie-empreinte",
    theme: "light",
    layout: "radiologie",
    ctaAlign: "br",
    images: [
      { src: "/images/radiologie/DEXIS-IS-3800W_vertical_Charging_Product_Smaller.png.webp", alt: "Radiologie dentaire" },
      { src: "/images/radiologie/IMAX-3D-CEPH-SHOT06-1.webp", alt: "Prise d’empreinte" },
       { src: "/images/radiologie/Myray_9304-Photoroom.png", alt: "Prise d’empreinte" },
       { src: "/images/radiologie/x-mindprime2.png", alt: "Prise d’empreinte" },
    ],
  }
  
];

function TileCard({ tile }: { tile: Tile }) {
  switch (tile.layout) {
    case "fauteuil":
      return <FauteuilTile tile={tile} />;
      case "chirurgie":
      return <ChirurgieTile tile={tile} />;

    

    case "hygiene":
      return <HygieneTile tile={tile} />;

    case "radiologie":
      return <RadiologieTile tile={tile} />;

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