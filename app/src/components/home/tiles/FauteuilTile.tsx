"use client";

import Image from "next/image";
import type { Tile } from "../types";
import TileShell, { getTileStyles } from "./TitleShell";

type Props = {
  tile: Tile;
};

export default function FauteuilTile({ tile }: Props) {
  const { titleColor } = getTileStyles(tile.theme);
  const mainImage = tile.images?.[0];
  const secondaryImage = tile.images?.[1];

  return (
    <TileShell
      tile={tile}
      className="min-h-[340px] sm:min-h-[380px] lg:min-h-[430px]"
      buttonVariant="white"
    >
      <div className="flex h-full flex-col p-6 sm:p-8">
        <div className="shrink-0">
          <div className="flex flex-col items-start gap-1">
            <h3 className={`${titleColor} font-oswald text-4xl sm:text-5xl font-semibold uppercase leading-none tracking-tight`}>
              {tile.title}
            </h3>

            {tile.subtitle_1 && (
              <p className={`${titleColor} font-oswald text-lg sm:text-xl font-semibold uppercase leading-none tracking-tight`}>
                {tile.subtitle_1}
              </p>
            )}

            {tile.subtitle_2 && (
              <p className={`${titleColor} font-oswald text-lg sm:text-xl font-semibold uppercase leading-none tracking-tight`}>
                {tile.subtitle_2}
              </p>
            )}
          </div>
        </div>

        <div className="relative mt-4 flex-1 min-h-[180px] sm:min-h-[220px]">
          {mainImage && (
            <div className="absolute left-0 bottom-0 w-[72%] sm:w-[68%] lg:w-[70%]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  fill
                  className="object-contain object-left-bottom"
                  sizes="(max-width: 639px) 60vw, (max-width: 1023px) 38vw, 28vw"
                />
              </div>
            </div>
          )}

          {secondaryImage && (
            <div className="absolute right-0 top-1 w-[42%] sm:w-[38%] lg:w-[36%]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  fill
                  className="object-contain object-right-top"
                  sizes="(max-width: 639px) 34vw, (max-width: 1023px) 24vw, 14vw"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </TileShell>
  );
}