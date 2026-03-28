// RealisationsGrid.tsx
// Composant galerie réalisations — Pyrénées Dentaire
// Stack : Next.js + Tailwind CSS
//
// Placer les 12 images dans /public/realisations/
// renommées : realisation1.jpg … realisation12.jpg
//
// Layout desktop — grille 12 cols × 6 sous-rangées :
//
//  rows 1-2  │ p0 : col 1-7            │ p1 : col 8-10, row 1   │ p2 : col 11-13, row 1
//            │                         │ p3 : col 8-13,  row 2
//  rows 3-4  │ p4 : col 1-4,  row 3   │ p6 : col 4-7,  rows 3-4 │ p7 : col 7-13, rows 3-4
//            │ p5 : col 1-4,  row 4   │
//  rows 5-6  │ p8 : col 1-7,  rows 5-6 │ p9  : col 7-10, row 5   │ p11 : col 10-13, rows 5-6
//            │                         │ p10 : col 7-10, row 6   │
//
// Mobile : enfilade flex column

import Image from "next/image";

export interface RealisationPhoto {
  src: string;
  alt: string;
}

const DEFAULT_PHOTOS: RealisationPhoto[] = [
  { src: "/images/realisations/realisation7.png",  alt: "Cabinet dentaire – double salle avec cloison bois" },
  { src: "/images/realisations/realisation11.jpg", alt: "Fauteuil beige sur sol bleu" },
  { src: "/images/realisations/realisation6.png",  alt: "Cabinet gris avec lustre circulaire" },
  { src: "/images/realisations/realisation2.jpeg", alt: "Plan de travail dentaire moderne" },
  { src: "/images/realisations/realisation9.jpg",  alt: "Cabinet blanc avec fauteuil noir" },
  { src: "/images/realisations/realisation1.jpg",  alt: "Cabinet dentaire – fauteuil bleu ciel" },
  { src: "/images/realisations/realisation8.jpg",  alt: "Fauteuil bleu avec fresque murale" },
  { src: "/images/realisations/realisation12.jpg", alt: "Cabinet avec plafond décoratif fleuri" },
  { src: "/images/realisations/realisation5.jpg",  alt: "Fauteuil dentaire bleu marine" },
  { src: "/images/realisations/realisation4.jpg",  alt: "Cabinet avec mobilier orange" },
  { src: "/images/realisations/realisation10.jpg", alt: "Cabinet vert émeraude" },
  { src: "/images/realisations/realisation3.jpg",  alt: "Salle de soins avec lustre annulaire" },
];

interface Props {
  photos?: RealisationPhoto[];
}

// Cellule générique : position relative, overflow hidden, hover zoom
function Cell({
  photo,
  className,
}: {
  photo: RealisationPhoto;
  className: string;
}) {
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover transition-transform duration-500 ease-out "
      />
    </div>
  );
}

export default function RealisationsGrid({ photos = DEFAULT_PHOTOS }: Props) {
  const p = photos.slice(0, 12);

  return (
    <section className="max-w-7xl mx-auto lg:py-16">

      {/* ── Mobile : enfilade ── */}
      <div className="flex flex-col gap-1 md:hidden">
        {p.map((photo, i) => (
          <div key={i} className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* ── Desktop : grille CSS ── */}
      {/*
        12 colonnes égales, 6 rangées.
        Chaque "bloc visuel" occupe 2 rangées.
        Les hauteurs sont définies en px via grid-template-rows arbitraire.
        gap-1 = 4px entre les cellules.
      */}
  <div
        className="
          hidden md:grid
          grid-cols-12
          gap-3
          [grid-template-rows:300px_300px_260px_260px_280px_280px]
        "
      >
        {/* ── Bloc 1 ── */}
 
        {/* p0 : grande gauche, pleine hauteur bloc 1 */}
        <Cell
          photo={p[0]}
          className="[grid-column:1/7] [grid-row:1/3]"
        />
 
        {/* p1 : petite haut-droite */}
        <Cell
          photo={p[1]}
          className="[grid-column:7/10] [grid-row:1/2]"
        />
 
        {/* p2 : petite haut-droite (2e colonne) */}
        <Cell
          photo={p[2]}
          className="[grid-column:10/13] [grid-row:1/2]"
        />
 
        {/* p3 : grande bas-droite bloc 1 */}
        <Cell
          photo={p[3]}
          className="[grid-column:7/13] [grid-row:2/3]"
        />
 
        {/* ── Bloc 2 ── */}
 
        {/* p4 : petite gauche haut */}
        <Cell
          photo={p[4]}
          className="[grid-column:1/4] [grid-row:3/4]"
        />
 
        {/* p5 : petite gauche bas */}
        <Cell
          photo={p[5]}
          className="[grid-column:1/4] [grid-row:4/5]"
        />
 
        {/* p6 : moyenne centre, pleine hauteur bloc 2 */}
        <Cell
          photo={p[6]}
          className="[grid-column:4/7] [grid-row:3/5]"
        />
 
        {/* p7 : grande droite, pleine hauteur bloc 2 */}
        <Cell
          photo={p[7]}
          className="[grid-column:7/13] [grid-row:3/5]"
        />
 
        {/* ── Bloc 3 ── */}
 
        {/* p8 : grande gauche, pleine hauteur bloc 3 */}
        <Cell
          photo={p[8]}
          className="[grid-column:1/7] [grid-row:5/7]"
        />
 
        {/* p9 : petite centre haut */}
        <Cell
          photo={p[9]}
          className="[grid-column:7/10] [grid-row:5/6]"
        />
 
        {/* p10 : petite centre bas */}
        <Cell
          photo={p[10]}
          className="[grid-column:7/10] [grid-row:6/7]"
        />
 
        {/* p11 : grande droite, pleine hauteur bloc 3 */}
        <Cell
          photo={p[11]}
          className="[grid-column:10/13] [grid-row:5/7]"
        />
 
      </div>
    </section>
  );
}