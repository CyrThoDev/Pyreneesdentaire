"use client";

import Image from "next/image";
import type { Tile } from "../types";
import TileShell, { getTileStyles } from "./TitleShell";

type Props = {
  tile: Tile;
};

export default function ChirurgieTile({ tile }: Props) {
  const { titleColor, subtitleColor } = getTileStyles(tile.theme);

  const leftImage = tile.images?.[0];
  const rightImage = tile.images?.[1];

  return (
    <TileShell
      tile={tile}
      className="relative min-h-[300px] sm:min-h-[340px] lg:min-h-[450px]"
      buttonVariant="white"
    >
      <div className="grid h-full grid-cols-2 gap-4 p-6 sm:gap-6 sm:p-8">
        {/* COLONNE GAUCHE */}
        <div className="flex h-full items-start">
          {leftImage && (
            <div className="relative w-full">
              <div className="relative aspect-square w-full">
                <Image
                  src={leftImage.src}
                  alt={leftImage.alt}
                  fill
                  className="object-cover "
                  
                />
              </div>
            </div>
          )}
        </div>

        {/* COLONNE DROITE */}
        <div className="flex h-full flex-col ">
          <div className="flex ">
            {rightImage && (
              <div className="relative w-full ">
                <div className="relative aspect-square w-full">
                  <Image
                    src={rightImage.src}
                    alt={rightImage.alt}
                    fill
                    className="object-contain"
                    
                  />
                </div>
              </div>
            )}
          </div>

          <div className="text-right">
            <h3
              className={`${titleColor} font-barlow text-4xl font-semibold leading-none sm:text-5xl`}
            >
              {tile.title}
            </h3>

            {tile.subtitle_1 && (
              <p
                className={`${subtitleColor} mt-1 font-barlow text-base font-semibold leading-none sm:text-lg`}
              >
                {tile.subtitle_1}
              </p>
            )}
          </div>
        </div>
      </div>
    </TileShell>
  );
}