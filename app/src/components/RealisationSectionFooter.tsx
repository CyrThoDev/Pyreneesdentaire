"use client";

import Image from "next/image";
import Link from "next/link";

export default function RealisationsSectionFooter() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ✅ GRID RESPONSIVE : mobile = 1 colonne / md+ = 3 colonnes avec hauteur fixe */}
      <div
        className="
          grid grid-cols-1
          md:h-[380px] md:grid-cols-[1.5fr_1fr_1.5fr]
          lg:grid-cols-[1.8fr_1fr_2.5fr]
        "
      >
        {/* ✅ IMAGE 1 (mobile un peu moins haute) */}
        <div className="relative w-full h-[300px] md:h-full overflow-hidden group">
          <Image
            src="/images/real1.png"
            alt="Cabinet dentaire 1"
            fill
            sizes="(min-width: 1024px) 35vw, (min-width: 768px) 40vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={false}
          />
        </div>

        {/* ✅ IMAGE 2 (mobile plus haute pour effet full) */}
        <div className="relative w-full h-[420px] md:h-full overflow-hidden group">
          <Image
            src="/images/real2.png"
            alt="Cabinet dentaire 2"
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 768px) 20vw, 100vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            priority={false}
          />
        </div>

        {/* ✅ IMAGE 3 (mobile un peu moins haute) */}
        <div className="relative w-full h-[300px] md:h-full overflow-hidden group">
          <Image
            src="/images/real3.png"
            alt="Cabinet dentaire 3"
            fill
            sizes="(min-width: 1024px) 45vw, (min-width: 768px) 40vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={false}
          />
        </div>
      </div>

      {/* ✅ OVERLAY TEXTE + CTA */}
      <div className="absolute inset-0 flex items-center justify-between px-6 md:px-16">
        <h2 className="text-white text-4xl md:text-6xl self-center font-light tracking-wide">
          Nos <span className="font-bold">réalisations</span>
        </h2>

        <Link
          href="/realisations"
          className="bg-white px-8 py-4 text-sm md:text-base font-semibold self-end mb-10 uppercase hover:bg-gray-200 transition"
        >
          Découvrir nos réalisations
        </Link>
      </div>
    </section>
  );
}