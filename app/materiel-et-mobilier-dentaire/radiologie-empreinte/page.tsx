export const dynamic = 'force-dynamic';

import { EnteteDePage } from "@/app/src/components/EnteteDePage"
import { CategoryPage } from "@/app/src/components/products/CategoryPage"
import { getProduits, getEnteteRadiologieEmpreinte, getPartenaires } from "@/app/src/lib/sanity/queries"
import PartnersSection from "@/app/src/components/Partenaires"

export default async function RadiologieEmpreintePage() {
  const [enTete, produits, partenaires] = await Promise.all([
    getEnteteRadiologieEmpreinte(),
    getProduits('radiologie-empreinte'),
    getPartenaires(),
  ])

  return (
    <>
      <EnteteDePage enTete={enTete} />
      <CategoryPage
        title="Radiologie & prise d'empreinte"
        subtitle="Sélection de solutions d'imagerie et de scanners intra-oraux."
        items={produits}
        ctaHref="/contact"
      />
      <PartnersSection data={partenaires} />
    </>
  )
}