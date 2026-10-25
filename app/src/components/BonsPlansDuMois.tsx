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
        <div className="grid gap-10 lg:grid-cols-[460px_1fr] lg:items-stretch">

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

            {data.ficheTechniqueHref && (
              <a
                href={data.ficheTechniqueHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 font-extrabold text-black hover:underline"
              >
                {">"}Télécharger la fiche technique
              </a>
            )}

            {/* PRIX + CTA */}
            <div className="mt-6 flex flex-col gap-4">
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
                className="text-center inline-flex w-fit"
              >
                {data.ctaLabel}
              </Button>
            </div>
          </div>

          {/* IMAGES */}
          {data.images && data.images.length > 0 && (
            <div className="grid grid-cols-3 grid-rows-2 gap-2 h-87.5 lg:h-auto">
              {data.images.slice(0, 5).map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden bg-white shadow-2xl ${
                    index === 0 ? "row-span-2" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt ?? ""}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}