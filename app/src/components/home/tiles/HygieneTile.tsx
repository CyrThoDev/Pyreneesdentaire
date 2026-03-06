"use client";

import Image from "next/image";
import type { Tile } from "../types";
import TileShell, { getTileStyles } from "./TitleShell"

type Props = {
  tile: Tile;
};

export default function HygieneTile({ tile }: Props) {
  const { titleColor, subtitleColor } = getTileStyles(tile.theme);

  return (
    <TileShell
      tile={tile}
      className="min-h-[300px] sm:min-h-[340px] lg:min-h-[390px]"
      buttonVariant="white"
    >
      <div className="flex h-full flex-col p-6 sm:p-8">
        <div className="flex min-h-0 flex-1 items-center justify-between gap-4 sm:gap-6">
          <div className="grid w-[58%] grid-cols-2 items-end gap-3 sm:gap-4 lg:gap-2">
            {tile.images?.map((img, idx) => (
              <div
                key={`${typeof img.src === "string" ? img.src : img.src.src}-${idx}`}
                className="relative w-full"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain object-bottom"
                    sizes="(max-width: 639px) 24vw, (max-width: 1023px) 18vw, 14vw"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-[38%] items-center justify-end text-right">
            <div className="flex flex-col items-end gap-1">
              <h3 className={`${titleColor} font-barlow text-4xl sm:text-5xl font-semibold leading-none`}>
                {tile.title}
              </h3>

              {tile.subtitle_1 && (
                <p className={`${subtitleColor} mt-1 font-barlow text-base sm:text-lg font-semibold leading-none`}>
                  {tile.subtitle_1}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </TileShell>
  );
}