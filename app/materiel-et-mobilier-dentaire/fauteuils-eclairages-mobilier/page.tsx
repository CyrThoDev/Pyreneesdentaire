export const dynamic = 'force-dynamic';

// app/(site)/catalogue/page.tsx
import { FauteuilSection } from "@/app/src/components/catalogue/FauteuilSection";
import { EclairageSection } from "@/app/src/components/catalogue/EclairageSection";
import { MobilierSection } from "@/app/src/components/catalogue/MobilierSection";
import { getEclairageHero, getFauteuils, getEclairages, getEnteteFauteuilsEclairagesMobilier, getMobilier, getPartenaires } from "@/app/src/lib/sanity/queries";
import PartnersSection from "@/app/src/components/Partenaires";
import { EnteteDePage } from "@/app/src/components/EnteteDePage";

export default async function CataloguePage() {

  const [fauteuils, eclairages, eclairageHero, enTete, mobilier, partenaires] = await Promise.all([
    getFauteuils(),
    getEclairages(),
    getEclairageHero(),
    getEnteteFauteuilsEclairagesMobilier(),
     getMobilier(),
     getPartenaires(),
  ])

  return (
    <div className="min-h-screen bg-white text-black">
      <EnteteDePage enTete={enTete} />
      <FauteuilSection title="Les fauteuils" items={fauteuils} ctaLabel="CONTACTEZ NOUS" />
      <EclairageSection
        title="L'éclairage"
        hero={eclairageHero}
        items={eclairages}
        ctaLabel="CONTACTEZ-NOUS"
        ctaHref="/contact"
      />
      <MobilierSection
        title="Le mobilier"
        items={mobilier}
        ctaLabel="CONTACTEZ NOUS"
        ctaHref="/contact"
      />
      <PartnersSection data={partenaires} />
    </div>
  );
}