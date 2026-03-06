"use client";

import Image from "next/image";
import type { Tile } from "../types";
import TileShell, { getTileStyles } from "./TitleShell";

type Props = {
  tile: Tile;
};

export default function RadiologieTile({ tile }: Props) {
  const { titleColor, subtitleColor } = getTileStyles(tile.theme);
  const mainImage = tile.images?.[0];
  const secondaryImage = tile.images?.[1];

  return (
    <TileShell
      tile={tile}
      className="min-h-[300px] sm:min-h-[340px] lg:min-h-[390px]"
      buttonVariant="white"
    >
      <div className="flex h-full flex-col p-6 sm:p-8">
        <div className="shrink-0 max-w-[95%]">
          <h3 className={`${titleColor} font-barlow text-4xl sm:text-5xl font-semibold leading-[0.95] tracking-tight`}>
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

        <div className="relative mt-4 flex-1 min-h-[180px] sm:min-h-[220px]">
          {mainImage && (
            <div className="absolute right-0 top-0 w-[62%] sm:w-[56%] lg:w-[58%]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  fill
                  className="object-contain object-right-top"
                  sizes="(max-width: 639px) 52vw, (max-width: 1023px) 30vw, 20vw"
                />
              </div>
            </div>
          )}

          {secondaryImage && (
            <div className="absolute left-2 bottom-1 w-[18%] sm:w-[16%] lg:w-[15%]">
              <div className="relative aspect-[3/5] w-full">
                <Image
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  fill
                  className="object-contain object-left-bottom"
                  sizes="(max-width: 639px) 16vw, (max-width: 1023px) 10vw, 6vw"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </TileShell>
  );
}