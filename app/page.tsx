import Image from "next/image";
import { HomeHero } from "./src/components/HomeHero";
import { HomeCategoriesGrid } from "./src/components/HomeCategoriesGrid";
import FormationsSection from "./src/components/FormationsSection";
import OffreProduitsSection from "./src/components/OffresAccueil";
import BonsPlansDuMoisSection from "./src/components/BonsPlansDuMois";

export default function Home() {
  return (
    <>
  <HomeHero />
  <HomeCategoriesGrid />  
  <FormationsSection />
<OffreProduitsSection />
<BonsPlansDuMoisSection />
  </>
  );  
}
