"use client";

import type { Tile } from "../types";
import TileShell, { getTileStyles } from "./TitleShell";

type Props = {
  tile: Tile;
};

export default function ChirurgieTile({ tile }: Props) {
  const { titleColor, subtitleColor } = getTileStyles(tile.theme);

  return (
    <TileShell
      tile={tile}
      className="min-h-[300px] sm:min-h-[340px] lg:min-h-[390px]"
      buttonVariant="white"
    >
      <div className="h-full p-6 sm:p-8" />

      <div className="absolute right-6 bottom-20 text-right sm:right-8 sm:bottom-24">
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
    </TileShell>
  );
}