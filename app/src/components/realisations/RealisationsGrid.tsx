"use client";

import Image from "next/image";

const mobileImages = [
  "/images/realisations/realisation1.png",
  "/images/realisations/realisation2.png",
  "/images/realisations/realisation3.png",
  "/images/realisations/realisation4.png",
  "/images/realisations/realisation5.png",
  "/images/realisations/realisation6.png",
  "/images/realisations/realisation7.png",
  "/images/realisations/realisation8.png",
  "/images/realisations/realisation9.png",
  "/images/realisations/realisation10.png",
  "/images/realisations/realisation11.png",
];

export default function RealisationsGrid() {
  return (
    <section className="w-full">
      <div className="">

        {/* 🖥 DESKTOP → montage unique */}
        <div className="hidden lg:block p-20">
          <Image
            src="/images/realisations/Masonry.png"
            alt="Réalisations"
            width={2000}
            height={2000}
            className="block w-full h-auto object-contain"
          />
        </div>

        {/* 📱 MOBILE & TABLET → masonry */}
        <div className="lg:hidden columns-1 gap-0">
          {mobileImages.map((src, index) => (
            <div key={index} className="break-inside-avoid">
              <Image
                src={src}
                alt={`Réalisation ${index + 1}`}
                width={800}
                height={1000}
                className="block w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}