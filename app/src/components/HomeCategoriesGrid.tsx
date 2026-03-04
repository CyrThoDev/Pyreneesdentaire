"use client";

import Image, { type StaticImageData } from "next/image";
import Button from "./ui/Button";

type Tile = {
  title: string;
  subtitle?: string;
  href: string;
  theme: "light" | "dark" | "red";
  layout: "classic" | "hygiene" | "bottomRightTitle";
  ctaAlign?: "br" | "bl";
  images?: {
    src: string | StaticImageData;
    alt: string;
  }[];
};

const tiles: Tile[] = [
  {
    title: "FAUTEUIL,",
    subtitle: "MOBILIER\nET ÉCLAIRAGE",
    href: "/materiel-et-mobilier-dentaire/fauteuils-eclairages-mobilier",
    theme: "light",
    layout: "classic",
    ctaAlign: "br",
    images: [{ src: "/images/fauteuil_k2.png", alt: "Fauteuil et mobilier dentaire" }],
  },
  {
    title: "Radiologie",
    subtitle: "et prise d’empreinte",
    href: "/materiel-et-mobilier-dentaire/radiologie-empreinte",
    theme: "red",
    layout: "classic",
    ctaAlign: "br",
    images: [{ src: "/images/categories/radiologie.png", alt: "Radiologie dentaire" }],
  },
  {
    title: "Hygiene",
    subtitle: "et stérilisation",
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
    subtitle: "et Prophylaxie",
    href: "/materiel-et-mobilier-dentaire/chirurgie-prophylaxie",
    theme: "light",
    layout: "bottomRightTitle",
    ctaAlign: "br",
    images: [],
  },
];

function TileCard({ tile }: { tile: Tile }) {
  const isRed = tile.theme === "red";
  const isDark = tile.theme === "dark";

  const bg =
    tile.theme === "red"
      ? "bg-red"
      : tile.theme === "dark"
        ? "bg-black"
        : "bg-gray"; // ton gris “maquette”

  const titleColor = isRed || isDark ? "text-white" : "text-black";
  const subtitleColor = isRed || isDark ? "text-white/85" : "text-black/70";

  const ctaPos =
    tile.ctaAlign === "bl"
      ? "left-8 bottom-8"
      : "right-8 bottom-8";

  // Hauteur type “bloc maquette”
  const tileHeight =
    "min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]";

  if (tile.layout === "hygiene") {
    return (
      <article className={`relative ${bg} ${tileHeight} overflow-hidden`}>
        <div className="h-full p-8">
          <div className="flex h-full items-center gap-10">
            {/* visuels à gauche */}
            <div className="flex w-[80%] items-end justify-between gap-6">
              {tile.images?.map((img, idx) => (
                <div key={`${typeof img.src === "string" ? img.src : img.src.src}-${idx}`} className="relative w-1/2">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 20vw, 45vw"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* texte à droite */}
            <div className="flex w-[45%] flex-col items-start">
              <h3
                className={`${titleColor} font-extrabold tracking-tight leading-none`}
                style={{ fontSize: "clamp(30px, 3.2vw, 44px)" }}
              >
                {tile.title}
              </h3>
              {tile.subtitle ? (
                <p
                  className={`${subtitleColor} mt-2 font-semibold`}
                  style={{
                    whiteSpace: "pre-line",
                    fontSize: "clamp(14px, 1.4vw, 18px)",
                  }}
                >
                  {tile.subtitle}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className={`absolute ${ctaPos} z-10`}>
          <Button href={tile.href} variant="white" className="px-6 py-3 text-xs font-bold">
            EN SAVOIR PLUS
          </Button>
        </div>
      </article>
    );
  }

  if (tile.layout === "bottomRightTitle") {
    return (
      <article className={`relative ${bg} ${tileHeight} overflow-hidden`}>
        <div className="h-full p-8" />

        {/* texte en bas à droite comme la maquette */}
        <div className="absolute right-8 bottom-20 text-right">
          <h3
            className={`${titleColor} font-extrabold tracking-tight leading-none`}
            style={{ fontSize: "clamp(30px, 3.2vw, 44px)" }}
          >
            {tile.title}
          </h3>
          {tile.subtitle ? (
            <p
              className={`${subtitleColor} mt-2 font-semibold`}
              style={{ fontSize: "clamp(14px, 1.4vw, 18px)" }}
            >
              {tile.subtitle}
            </p>
          ) : null}
        </div>

        <div className={`absolute ${ctaPos} z-10`}>
          <Button href={tile.href} variant="white" className="px-6 py-3 text-xs font-bold">
            EN SAVOIR PLUS
          </Button>
        </div>
      </article>
    );
  }

  // classic (fauteuil / radiologie)
  return (
    <article className={`relative ${bg} ${tileHeight} overflow-hidden`}>
      <div className="h-full p-8 pb-24">
        <div className="flex h-full flex-col">
          <div>
            <h3
              className={`${titleColor} font-extrabold tracking-tight leading-none`}
              style={{ fontSize: "clamp(30px, 3.2vw, 44px)" }}
            >
              {tile.title}
            </h3>

            {tile.subtitle ? (
              <p
                className={`${subtitleColor} mt-2 font-semibold`}
                style={{
                  whiteSpace: "pre-line",
                  fontSize: "clamp(14px, 1.4vw, 18px)",
                }}
              >
                {tile.subtitle}
              </p>
            ) : null}
          </div>

          {/* visuel centré */}
          {tile.images?.length ? (
            <div className="mt-6 flex flex-1 items-center justify-center">
              <div className="relative w-[78%] max-w-[520px]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={tile.images[0]!.src}
                    alt={tile.images[0]!.alt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 40vw, 90vw"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>

      <div className={`absolute ${ctaPos} z-10`}>
        <Button href={tile.href} variant="white" className="px-6 py-3 text-xs font-bold">
          EN SAVOIR PLUS
        </Button>
      </div>
    </article>
  );
}

export function HomeCategoriesGrid() {
  return (
    <section className="w-full">
      {/* 2x2 comme la maquette (lg+) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {tiles.map((tile) => (
          <TileCard key={tile.href} tile={tile} />
        ))}
      </div>
    </section>
  );
}