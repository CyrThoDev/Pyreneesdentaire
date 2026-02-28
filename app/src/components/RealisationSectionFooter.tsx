"use client";

import Image from "next/image";
import Link from "next/link";

export default function RealisationsSectionFooter() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* GRID IMAGES */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr] ">
        <div className="relative w-full h-96 md:h-96 group">
          <Image
            src="/images/real1.png"
            alt="Cabinet dentaire 1"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="relative w-full h-[420px] md:h-[380px] group">
          <Image
            src="/images/real2.png"
            alt="Cabinet dentaire 2"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="relative w-full h-[420px] md:h-[380px] group">
          <Image
            src="/images/real3.png"
            alt="Cabinet dentaire 3"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* OVERLAY GLOBAL */}
   

      {/* CONTENU */}
      <div className="absolute inset-0 flex items-center justify-between px-6 md:px-16">
        <h2 className="text-white text-4xl md:text-6xl self-center font-light tracking-wide">
          Nos <span className="font-bold">réalisations</span>
        </h2>

        <Link
          href="/realisations"
          className="bg-white px-8 py-4 text-sm md:text-base font-semibold self-end mb-10  uppercase hover:bg-gray-200 transition"
        >
          Découvrir nos réalisations
        </Link>
      </div>
    </section>
  );
}