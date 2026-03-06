"use client";

import type { ReactNode } from "react";
import Button from "@/app/src/components/ui/Button";
import type { Tile } from "../types";

export function getTileStyles(theme: Tile["theme"]) {
  const isRed = theme === "red";
  const isDark = theme === "dark";

  return {
    bg: isRed ? "bg-red" : isDark ? "bg-black" : "bg-gray",
    titleColor: isRed || isDark ? "text-white" : "text-black",
    subtitleColor: isRed || isDark ? "text-white/85" : "text-black/70",
  };
}

type TileShellProps = {
  tile: Tile;
  children: ReactNode;
  className?: string;
  buttonVariant?: "white" | "red" | "black" | "gray";
};

export default function TileShell({
  tile,
  children,
  className = "",
  buttonVariant = "white",
}: TileShellProps) {
  const { bg } = getTileStyles(tile.theme);

  const ctaPos =
    tile.ctaAlign === "bl" ? "left-6 bottom-6 sm:left-8 sm:bottom-8" : "right-6 bottom-6 sm:right-8 sm:bottom-8";

  return (
    <article className={`relative overflow-hidden ${bg} ${className}`}>
      {children}

      <div className={`absolute ${ctaPos} z-10`}>
        <Button
          href={tile.href}
          variant={buttonVariant}
          className="px-5 py-3 text-[11px] sm:px-6 sm:text-xs font-bold"
        >
          EN SAVOIR PLUS
        </Button>
      </div>
    </article>
  );
}