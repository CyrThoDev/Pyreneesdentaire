export const dynamic = 'force-dynamic';

import PartnersSection from "@/app/src/components/Partenaires"
import { ProductTile } from "@/app/src/components/products/ProductTile"
import { EnteteDePage } from "@/app/src/components/EnteteDePage"
import { getProduits, getEnteteHygieneSterilisation, getPartenaires } from "@/app/src/lib/sanity/queries"
import type { SanityProduit } from "@/app/src/lib/sanity/types"

function brandIs(item: SanityProduit, brand: string) {
  return item.brand?.toLowerCase() === brand.toLowerCase()
}

function ProductCell({ item, ctaHref }: { item: SanityProduit; ctaHref: string }) {
  return (
    <div className="flex flex-col">
      <p className="text-2xl font-barlow uppercase text-black">
        {item.brand?.toUpperCase()}
      </p>
      <ProductTile item={item} ctaHref={ctaHref} />
    </div>
  )
}

function Spacer({ mdCols = 1 }: { mdCols?: 1 | 2 | 3 }) {
  return <div className={`hidden md:block md:col-span-${mdCols}`} aria-hidden="true" />
}

export default async function HygieneSterilisationPage() {
  const [enTete, produits, partenaires] = await Promise.all([
    getEnteteHygieneSterilisation(),
    getProduits('hygiene-sterilisation'),
    getPartenaires(),
  ])

  const ctaHref = "/contact"

  const melag = produits.filter((i) => brandIs(i, "MELAG")).slice(0, 3)
  const castellini = produits.filter((i) => brandIs(i, "CASTELLINI")).slice(0, 2)
  const euronda = produits.filter((i) => brandIs(i, "EURONDA")).slice(0, 2)
  const nsk = produits.filter((i) => brandIs(i, "NSK")).slice(0, 1)

  const missingCols = (count: number) => {
    const mod = count % 4
    return mod === 0 ? 0 : 4 - mod
  }

  return (
    <main>
      <EnteteDePage enTete={enTete} />

      <div className="mx-auto max-w-7xl px-6 pt-10">
        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">

          {/* MELAG */}
          {melag.map((item) => (
            <ProductCell key={item._id} item={item} ctaHref={ctaHref} />
          ))}
          {missingCols(melag.length) === 1 && <Spacer mdCols={1} />}
          {missingCols(melag.length) === 2 && <Spacer mdCols={2} />}
          {missingCols(melag.length) === 3 && <Spacer mdCols={3} />}

          {/* CASTELLINI + EURONDA */}
          <div className="col-span-full border-t border-black/10 pt-6" />
          {castellini.map((item) => (
            <ProductCell key={item._id} item={item} ctaHref={ctaHref} />
          ))}
          {euronda.map((item) => (
            <ProductCell key={item._id} item={item} ctaHref={ctaHref} />
          ))}

          {/* NSK */}
          <div className="col-span-full border-t border-black/10 pt-6" />
          {nsk.map((item) => (
            <ProductCell key={item._id} item={item} ctaHref={ctaHref} />
          ))}
          {missingCols(nsk.length) === 1 && <Spacer mdCols={1} />}
          {missingCols(nsk.length) === 2 && <Spacer mdCols={2} />}
          {missingCols(nsk.length) === 3 && <Spacer mdCols={3} />}

        </section>
      </div>

      <PartnersSection data={partenaires} />
    </main>
  )
}