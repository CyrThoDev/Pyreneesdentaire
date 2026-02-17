import Image from "next/image";
import { HomeHero } from "./src/components/HomeHero";
import { HomeCategoriesGrid } from "./src/components/HomeCategoriesGrid";

export default function Home() {
  return (
    <>
  <HomeHero />
  <HomeCategoriesGrid />  
  </>
  );  
}
