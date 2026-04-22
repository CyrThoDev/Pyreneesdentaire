import Image from "next/image";
import type { CSSProperties } from "react";
import type { SanityBlocRealisation, BlocPhoto } from "@/app/src/lib/sanity/types";

const DEFAULT_BLOCS: SanityBlocRealisation[] = [
  {
    _key: "d1",
    grandeCote: "gauche",
    disposition: "carres-bandeau",
    grande: { src: "/images/realisations/realisation7.png",  alt: "Cabinet dentaire – double salle avec cloison bois" },
    photo2: { src: "/images/realisations/realisation11.jpg", alt: "Fauteuil beige sur sol bleu" },
    photo3: { src: "/images/realisations/realisation6.png",  alt: "Cabinet gris avec lustre circulaire" },
    photo4: { src: "/images/realisations/realisation2.jpeg", alt: "Plan de travail dentaire moderne" },
  },
  {
    _key: "d2",
    grandeCote: "droite",
    disposition: "carres-vertical",
    grande: { src: "/images/realisations/realisation12.jpg", alt: "Cabinet avec plafond décoratif fleuri" },
    photo2: { src: "/images/realisations/realisation9.jpg",  alt: "Cabinet blanc avec fauteuil noir" },
    photo3: { src: "/images/realisations/realisation1.jpg",  alt: "Cabinet dentaire – fauteuil bleu ciel" },
    photo4: { src: "/images/realisations/realisation8.jpg",  alt: "Fauteuil bleu avec fresque murale" },
  },
  {
    _key: "d3",
    grandeCote: "gauche",
    disposition: "carres-vertical",
    grande: { src: "/images/realisations/realisation5.jpg",  alt: "Fauteuil dentaire bleu marine" },
    photo2: { src: "/images/realisations/realisation4.jpg",  alt: "Cabinet avec mobilier orange" },
    photo3: { src: "/images/realisations/realisation10.jpg", alt: "Cabinet vert émeraude" },
    photo4: { src: "/images/realisations/realisation3.jpg",  alt: "Salle de soins avec lustre annulaire" },
  },
];

const ROW_HEIGHT = 280;

function Cell({ photo, style }: { photo: BlocPhoto; style: CSSProperties }) {
  return (
    <div className="relative overflow-hidden" style={style}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover transition-transform duration-500 ease-out"
      />
    </div>
  );
}

/**
 * 4 dispositions possibles selon grandeCote × disposition :
 *
 * GAUCHE + carres-bandeau        GAUCHE + carres-vertical
 * ┌──────────┬─────┬─────┐      ┌──────────┬─────┬──────┐
 * │          │  p2 │  p3 │      │          │  p2 │      │
 * │  grande  ├─────┴─────┤      │  grande  ├─────┤  p4  │
 * │          │    p4     │      │          │  p3 │      │
 * └──────────┴───────────┘      └──────────┴─────┴──────┘
 *
 * DROITE + carres-bandeau        DROITE + carres-vertical
 * ┌─────┬─────┬──────────┐      ┌──────┬─────┬──────────┐
 * │  p2 │  p3 │          │      │      │  p2 │          │
 * ├─────┴─────┤  grande  │      │  p4  ├─────┤  grande  │
 * │    p4     │          │      │      │  p3 │          │
 * └───────────┴──────────┘      └──────┴─────┴──────────┘
 */
function renderBloc(bloc: SanityBlocRealisation, i: number): React.ReactNode[] {
  const r1 = 2 * i + 1;
  const r2 = 2 * i + 2;
  const r3 = 2 * i + 3;
  const { grande, photo2, photo3, photo4, grandeCote, disposition } = bloc;

  if (grandeCote === "gauche") {
    const grandeStyle: CSSProperties = { gridColumn: "1/7", gridRow: `${r1}/${r3}` };

    if (disposition === "carres-bandeau") {
      return [
        <Cell key={`${i}-g`}  photo={grande} style={grandeStyle} />,
        <Cell key={`${i}-p2`} photo={photo2} style={{ gridColumn: "7/10",  gridRow: `${r1}/${r2}` }} />,
        <Cell key={`${i}-p3`} photo={photo3} style={{ gridColumn: "10/13", gridRow: `${r1}/${r2}` }} />,
        <Cell key={`${i}-p4`} photo={photo4} style={{ gridColumn: "7/13",  gridRow: `${r2}/${r3}` }} />,
      ];
    } else {
      // carres-vertical
      return [
        <Cell key={`${i}-g`}  photo={grande} style={grandeStyle} />,
        <Cell key={`${i}-p2`} photo={photo2} style={{ gridColumn: "7/10",  gridRow: `${r1}/${r2}` }} />,
        <Cell key={`${i}-p3`} photo={photo3} style={{ gridColumn: "7/10",  gridRow: `${r2}/${r3}` }} />,
        <Cell key={`${i}-p4`} photo={photo4} style={{ gridColumn: "10/13", gridRow: `${r1}/${r3}` }} />,
      ];
    }
  } else {
    // grande droite
    const grandeStyle: CSSProperties = { gridColumn: "7/13", gridRow: `${r1}/${r3}` };

    if (disposition === "carres-bandeau") {
      return [
        <Cell key={`${i}-p2`} photo={photo2} style={{ gridColumn: "1/4",  gridRow: `${r1}/${r2}` }} />,
        <Cell key={`${i}-p3`} photo={photo3} style={{ gridColumn: "4/7",  gridRow: `${r1}/${r2}` }} />,
        <Cell key={`${i}-p4`} photo={photo4} style={{ gridColumn: "1/7",  gridRow: `${r2}/${r3}` }} />,
        <Cell key={`${i}-g`}  photo={grande} style={grandeStyle} />,
      ];
    } else {
      // carres-vertical
      return [
        <Cell key={`${i}-p4`} photo={photo4} style={{ gridColumn: "1/4",  gridRow: `${r1}/${r3}` }} />,
        <Cell key={`${i}-p2`} photo={photo2} style={{ gridColumn: "4/7",  gridRow: `${r1}/${r2}` }} />,
        <Cell key={`${i}-p3`} photo={photo3} style={{ gridColumn: "4/7",  gridRow: `${r2}/${r3}` }} />,
        <Cell key={`${i}-g`}  photo={grande} style={grandeStyle} />,
      ];
    }
  }
}

interface Props {
  blocs?: SanityBlocRealisation[];
}

export default function RealisationsGrid({ blocs }: Props) {
  const data = blocs && blocs.length > 0 ? blocs : DEFAULT_BLOCS;

  const gridTemplateRows = Array.from(
    { length: data.length * 2 },
    () => `${ROW_HEIGHT}px`
  ).join(" ");

  return (
    <section className="max-w-7xl mx-auto lg:py-16">

      {/* Mobile : enfilade */}
      <div className="flex flex-col gap-1 md:hidden">
        {data.flatMap((bloc, i) =>
          [bloc.grande, bloc.photo2, bloc.photo3, bloc.photo4].map((photo, j) => (
            <div key={`${i}-${j}`} className="relative w-full aspect-[4/3] overflow-hidden">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
            </div>
          ))
        )}
      </div>

      {/* Desktop : grille CSS dynamique */}
      <div
        className="hidden md:grid grid-cols-12 gap-3"
        style={{ gridTemplateRows }}
      >
        {data.flatMap((bloc, i) => renderBloc(bloc, i))}
      </div>

    </section>
  );
}
