"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { Tile } from "../types";
import TileShell, { getTileStyles } from "./TitleShell";

type Props = {
  tile: Tile;
};

export default function RadiologieTile({ tile }: Props) {
  const { titleColor, subtitleColor } = getTileStyles(tile.theme);

  const autoplay = Autoplay({
    delay: 2500,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay]
  );

  return (
    <TileShell
      tile={tile}
      className="min-h-[340px] sm:min-h-[380px] lg:min-h-[500px]"
      buttonVariant="white"
    >
      <div className="flex h-full flex-col p-6 sm:p-8">
        <div className="shrink-0 max-w-[95%]">
          <h3
            className={`${titleColor} font-barlow text-4xl sm:text-5xl font-semibold leading-[0.95] tracking-tight`}
          >
            <span className="block lg:inline">{tile.title}</span>
            {tile.subtitle_1 && (
              <span
                className={`block lg:inline text-base sm:text-lg lg:ml-2 tracking-[0.02em] ${subtitleColor} font-semibold`}
              >
                {tile.subtitle_1}
              </span>
            )}
          </h3>
        </div>

        <div className="mt-6 flex-1 min-h-[180px] sm:min-h-[220px] overflow-hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {tile.images?.map((image, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%] flex items-center justify-center"
                >
                  <div className="relative h-[180px] w-full sm:h-[450px]">
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