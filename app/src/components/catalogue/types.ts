// app/src/components/catalogue/types.ts
export type CatalogueFauteuil = {
  id: string;
  brand: string;
  model: string;
  title?: string;
  desc?: string;
  specsTitle?: string;
  specs?: string[];
  image: string; // path public
  href?: string;
};

// app/src/components/catalogue/types.ts

export type CatalogueLightingHero = {
  eyebrow: string; // ex: "OUDIN DENTAIRE"
  title: string; // ex: "UNIQA"
  desc: string;
  // images du bloc du haut
  rightImage: { src: string; alt: string }; // grand visuel à droite
  thumbs: { src: string; alt: string }[]; // 3 visuels en bas à gauche (maquette)
};

export type CatalogueLightingItem = {
  id: string;
  brand: string; // ZENIUM / BELMONT / FARO
  title: string; // TAO / ZYO II / EURUS LIGHT / SIDEREA SUNLIGHT
  desc: string;
  image: { src: string; alt: string };
  href?: string;
};

export type CatalogueFurnitureCard = {
  id: string;
  brand: string;
  title: string;
  desc: string;
  image: string;
  href?: string;
};