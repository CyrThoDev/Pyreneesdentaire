import { urlFor } from "../../lib/sanity/images";
import type { SanityProduit } from "@/app/src/lib/sanity/types"
import { Card, CardContent } from "../ui/Card";
import Image from "next/image";
import Button from "../ui/Button";

export function ProductTile({
  item,
  ctaHref,
  ctaLabel = "CONTACTEZ-NOUS",
}: {
  item: SanityProduit;
  ctaHref: string;
  ctaLabel?: string;
}) {
  return (
    <Card className="h-full font-barlow">
      <CardContent className="flex h-full flex-col">
      {item.image && (
  <div className="mb-5 overflow-hidden">
    <div className="relative aspect-[4/3] w-full">
      <Image
        src={urlFor(item.image).width(400).fit("max").auto("format").url()}
        alt={item.model}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-contain"
      />
    </div>
  </div>
)}
        <h3 className="text-lg leading-none font-bold">{item.model}</h3>
        {item.headline && (
          <p className="mt-1 font-semibold leading-none text-black/80">{item.headline}</p>
        )}
        {item.lines?.length ? (
          <ul className="mt-1 list-disc leading-none space-y-1 pl-5 text-black/75">
            {item.lines.map((l, idx) => (
              <li key={`${item._id}-l-${idx}`}>{l}</li>
            ))}
          </ul>
        ) : null}
        {item.description && (
          <p className="mt-0 leading-none text-black/75 whitespace-pre-line">{item.description}</p>
        )}
        <div className="mt-auto pt-6 text-center">
          <Button variant="red">
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}