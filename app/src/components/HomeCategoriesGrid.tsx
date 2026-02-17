import Image from "next/image";
import Link from "next/link";


import type { StaticImageData } from "next/image";

type Tile = {
  title: string;
  subtitle?: string;
  href: string;
  theme: "light" | "dark" | "red";
  images?: { src: string | StaticImageData; alt: string; className?: string }[];
};

const tiles: Tile[] = [
  {
    title: "FAUTEUIL,",
    subtitle: "MOBILIER\nET ÉCLAIRAGE",
    href: "/materiel/fauteuil-mobilier-eclairage",
    theme: "light",
    images: [
      {
        src: "/images/fauteuil_k2.png",
        alt: "Fauteuil et mobilier dentaire",
        className: "w-[78%] max-w-[520px]",
      },
    ],
  },
  {
    title: "Radiologie",
    subtitle: "et prise d’empreinte",
    href: "/materiel/radiologie",
    theme: "red",
    images: [
      {
        src: "/images/categories/radiologie.png",
        alt: "Radiologie dentaire",
        className: "w-[78%] max-w-[520px]",
      },
    ],
  },
  {
    title: "Hygiene",
    subtitle: "et stérilisation",
    href: "/materiel/hygiene",
    theme: "dark",
    images: [
      {
        src: "/images/categories/hygiene-1.png",
        alt: "Équipement d’hygiène",
        className: "w-[44%] max-w-[260px]",
      },
      {
        src: "/images/categories/hygiene-2.png",
        alt: "Stérilisation",
        className: "w-[44%] max-w-[260px]",
      },
    ],
  },
  {
    title: "Chirurgie",
    subtitle: "et Prophylaxie",
    href: "/materiel/chirurgie",
    theme: "light",
    images: [
      // Optionnel : si tu veux un visuel ici, ajoute une image
      // { src: "/images/categories/chirurgie.png", alt: "Chirurgie dentaire" }
    ],
  },
];

function TileCard({ tile }: { tile: Tile }) {
  const isRed = tile.theme === "red";
  const isDark = tile.theme === "dark";

  const bg =
    tile.theme === "red"
      ? "bg-[#B30000]"
      : tile.theme === "dark"
        ? "bg-black"
        : "bg-[#E9E9E9]";

  const titleColor = isRed || isDark ? "text-white" : "text-black";
  const subtitleColor = isRed || isDark ? "text-white/85" : "text-black/80";

  return (
    <article className={`relative ${bg} `}>
      {/* Contenu */}
     
<div className="inset-0 p-8 pb-20">
  <div className="flex h-full flex-col">
    {/* Titre */}
    <div>
      <h3
        className={`${titleColor} font-extrabold tracking-tight leading-none`}
        style={{ fontSize: "clamp(28px, 3.2vw, 44px)" }}
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

    {/* Visuels */}
    {tile.images?.length ? (
      <div
        className={[
          "mt-6 flex-1",
          tile.images.length === 2
            ? "flex items-center justify-between gap-6"
            : "flex items-center justify-center",
        ].join(" ")}
      >
        {tile.images.map((img, idx) => {
  const srcKey = typeof img.src === "string" ? img.src : img.src.src;

  return (
    <div
      key={`${srcKey}-${idx}`}
      className={img.className ?? "w-[70%] max-w-[520px]"}
    >
      <div className="relative aspect-4/3 w-full">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-contain"
          sizes="(min-width: 1024px) 40vw, 90vw"
        />
      </div>
    </div>
  );
})}

      </div>
    ) : (
      <div className="flex-1" />
    )}
  </div>
</div>


<div className="absolute bottom-6 right-6 z-10">
  <Link
    href={tile.href}
    className="inline-flex h-10 items-center justify-center px-8 text-xs font-semibold uppercase tracking-widest bg-white text-[#B30000] hover:brightness-95 transition"
  >
    EN SAVOIR PLUS
  </Link>
</div>

    </article>
  );
}

export function HomeCategoriesGrid() {
  return (
    <section className="w-full">
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {tiles.map((tile) => (
            <TileCard key={tile.href} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
