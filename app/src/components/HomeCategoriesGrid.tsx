"use client";

import Image, { type StaticImageData } from "next/image";
import Button from "./ui/Button";

type Tile = {
  title: string;
  subtitle_1?: string;
  subtitle_2?: string;
  href: string;
  theme: "light" | "dark" | "red";
  layout: "classic" | "hygiene" | "bottomRightTitle";
  titleVariant: "stackedSmallSubtitles" | "inlineDesktop" | "stackedSingleSubtitle";
  ctaAlign?: "br" | "bl";
  images?: {
    src: string | StaticImageData;
    alt: string;
  }[];
};

const tiles: Tile[] = [
  {
    title: "FAUTEUIL,",
    subtitle_1: "MOBILIER",
    subtitle_2: "ET ÉCLAIRAGE",
    href: "/materiel-et-mobilier-dentaire/fauteuils-eclairages-mobilier",
    theme: "light",
    layout: "classic",
    titleVariant: "stackedSmallSubtitles",
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
    layout: "classic",
    titleVariant: "inlineDesktop",
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
    titleVariant: "stackedSingleSubtitle",
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
    layout: "bottomRightTitle",
    titleVariant: "stackedSingleSubtitle",
    ctaAlign: "br",
    images: [],
  },
];

function TileHeading({
  tile,
  titleColor,
  subtitleColor,
  align = "left",
}: {
  tile: Tile;
  titleColor: string;
  subtitleColor: string;
  align?: "left" | "right";
}) {
  const textAlign = align === "right" ? "text-right items-end" : "text-left items-start";

  if (tile.titleVariant === "stackedSmallSubtitles") {
    return (
      <div className={`flex flex-col gap-2 ${textAlign}`}>
        <h3
          className={`${titleColor} font-oswald font-semibold text-5xl uppercase leading-none tracking-tight`}
          
        >
          {tile.title}
        </h3>

        {tile.subtitle_1 && (
          <p
            className={`${titleColor} font-oswald  text-xl font-semibold uppercase leading-none tracking-tight`}
            
          >
            {tile.subtitle_1}
          </p>
        )}

        {tile.subtitle_2 && (
          <p
            className={`${titleColor} font-oswald font-semibold text-3xl uppercase leading-none tracking-tight`}
           
          >
            {tile.subtitle_2}
          </p>
        )}
      </div>
    );
  }

  if (tile.titleVariant === "inlineDesktop") {
    return (
      <div className={`flex flex-col ${textAlign}`}>
        <h3
          className={`${titleColor} font-barlow text-5xl font-semibold leading-[0.95] tracking-tight`}
          
        >
          <span className="block lg:inline ">{tile.title}</span>
          {tile.subtitle_1 && (
            <span
              className={`block lg:inline text-lg lg:ml-2 tracking-normal  ${subtitleColor} font-semibold`}
              
            >
              {tile.subtitle_1}
            </span>
          )}
        </h3>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${textAlign} gap-1`}>
      <h3
        className={`${titleColor} font-barlow text-5xl font-semibold leading-none`}
       
      >
        {tile.title}
      </h3>

      {tile.subtitle_1 && (
        <p
          className={`${subtitleColor} mt-1 font-barlow block lg:inline text-lg lg:ml-2 tracking-normal font-semibold leading-none`}
          
        >
          {tile.subtitle_1}
        </p>
      )}
    </div>
  );
}
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
  const tileHeight = "min-h-[300px] sm:min-h-[340px] lg:min-h-[390px]";

  if (tile.layout === "hygiene") {
   return (
  <article className={`relative ${bg} ${tileHeight} overflow-hidden`}>
    <div className="flex h-full flex-col p-6 sm:p-8">
      <div className="flex min-h-0 flex-1 items-center justify-between gap-6">
        {/* images à gauche */}
        <div className="grid w-full grid-cols-2 items-end gap-4 sm:gap-0">
          {tile.images?.map((img, idx) => (
            <div
              key={`${typeof img.src === "string" ? img.src : img.src.src}-${idx}`}
              className="relative w-full"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain "
                  sizes="(min-width: 1024px) 14vw, 36vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* texte à droite */}
        <div className="flex w-[38%]  items-end text-right">
          <TileHeading
            tile={tile}
            titleColor={titleColor}
            subtitleColor={subtitleColor}
            align="right"
          />
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
    <div className="h-full p-6 sm:p-8" />

    <div className="absolute right-8 bottom-20">
      <TileHeading
        tile={tile}
        titleColor={titleColor}
        subtitleColor={subtitleColor}
        align="right"
      />
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
    <div className="flex h-full flex-col p-6 sm:p-8">
      {/* titre */}
      <div className="shrink-0">
        <TileHeading
          tile={tile}
          titleColor={titleColor}
          subtitleColor={subtitleColor}
          align="left"
        />
      </div>

      {/* zone images */}
      <div className="flex min-h-0 flex-1 items-end justify-center pt-4 sm:pt-6">
        {tile.images?.length === 2 ? (
          <div className="grid w-full grid-cols-2 items-end gap-3 sm:gap-6">
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={tile.images[0]!.src}
                  alt={tile.images[0]!.alt}
                  fill
                  className="object-contain object-left-bottom"
                  sizes="(min-width: 1024px) 18vw, 42vw"
                />
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[260px]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={tile.images[1]!.src}
                  alt={tile.images[1]!.alt}
                  fill
                  className="object-contain object-top-right"
                  
                />
              </div>
            </div>
          </div>
        ) : tile.images?.length === 1 ? (
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