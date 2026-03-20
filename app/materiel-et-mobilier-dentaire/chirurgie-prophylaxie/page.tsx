import { EnteteDePage } from "@/app/src/components/EnteteDePage"
import { CategoryPage } from "@/app/src/components/products/CategoryPage"
import { getProduits, getEnteteChirurgieProphylaxie, getPartenaires } from "@/app/src/lib/sanity/queries"
import PartnersSection from "@/app/src/components/Partenaires"

export default async function ChirurgieProphylaxiePage() {
  const [enTete, produits, partenaires] = await Promise.all([
    getEnteteChirurgieProphylaxie(),
    getProduits('chirurgie-prophylaxie'),
    getPartenaires(),
  ])

  return (
    <>
      <EnteteDePage enTete={enTete} />
      <CategoryPage
        title="Chirurgie & prophylaxie"
        items={produits}
        ctaHref="/contact"
      />
      <PartnersSection data={partenaires} />
    </>
  )
}