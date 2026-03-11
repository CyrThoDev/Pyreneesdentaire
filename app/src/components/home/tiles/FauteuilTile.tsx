"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { Tile } from "../types";
import TileShell, { getTileStyles } from "./TitleShell";

type Props = {
  tile: Tile;
};

export default function FauteuilTile({ tile }: Props) {
  const { titleColor } = getTileStyles(tile.theme);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
    },
    [
      Autoplay({
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <TileShell
      tile={tile}
      className="min-h-[340px] sm:min-h-[380px] lg:min-h-[500px]"
      buttonVariant="white"
    >
      <div className="flex h-full flex-col p-6 sm:p-8">
        <div className="shrink-0">
          <div className="flex flex-col items-start gap-1">
            <h3
              className={`${titleColor} font-barlow text-4xl sm:text-5xl font-bold uppercase leading-none tracking-tight`}
            >
              {tile.title}
            </h3>

            {tile.subtitle_1 && (
              <p
                className={`${titleColor} font-barlow text-lg sm:text-xl font-bold uppercase leading-none tracking-tight`}
              >
                {tile.subtitle_1}
              </p>
            )}

            {tile.subtitle_2 && (
              <p
                className={`${titleColor} font-barlow text-2xl sm:text-4xl font-bold uppercase leading-none tracking-tight`}
              >
                {tile.subtitle_2}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 flex-1 min-h-[180px] sm:min-h-[220px] overflow-hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {tile.images?.map((image, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%] flex items-center justify-center"
                >
                  <div className="relative h-[180px] w-full sm:h-[300px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 639px) 80vw, (max-width: 1023px) 40vw, 28vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TileShell>
  );
}