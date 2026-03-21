"use client";

import Image from "next/image";
import Button from "./ui/Button";
import { PortableText } from "@portabletext/react";
import type { SanityAccueilBonPlan } from "../lib/sanity/types";

const TITLE_LEFT = "LES BONS PLANS";
const TITLE_RIGHT = "DU MOIS";

type Props = { data: SanityAccueilBonPlan | null }

export default function BonsPlansDuMoisSection({ data }: Props) {
  if (!data) return null

  return (
    <section className="w-full bg-gray py-10 font-barlow">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[420px_1fr] lg:items-start">

          {/* IMAGE */}
          {data.imageSrc && (
            <div className="overflow-hidden rounded-sm bg-white shadow-2xl lg:h-full">
              <div className="relative h-87.5 lg:h-full w-full">
                <Image
                  src={data.imageSrc}
                  alt={data.imageAlt ?? ""}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 420px, 100vw"
                  priority
                />
              </div>
            </div>
          )}

          {/* TEXTE */}
          <div className="flex flex-col gap-0">
            <h2 className="text-5xl font-black text-black md:text-[56px]">
              {TITLE_LEFT}{" "}
              <span className="font-light">{TITLE_RIGHT}</span>
            </h2>

            <p className="text-2xl font-extrabold text-black md:text-[26px]">
              {data.subtitle}
            </p>

            {data.description && (
              <div className="text-black text-lg leading-none [&_p]:mb-1">
                <PortableText value={data.description} />
              </div>
            )}

            {/* PRIX + CTA */}
            <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="flex flex-row items-baseline gap-x-2 gap-y-1">
                  <span className="text-xl font-black leading-none text-red md:text-3xl">
                    {data.price}
                  </span>
                  <span className="font-semibold">{data.monthly}</span>
                </div>

                {data.oldPriceValue && (
                  <p className="mt-2 font-black">
                    {data.oldPricePrefix}{" "}
                    <span className="line-through">{data.oldPriceValue}</span>
                  </p>
                )}
              </div>

              <Button
                href={data.ctaHref}
                variant="red"
                className="text-center inline-flex"
              >
                {data.ctaLabel}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}