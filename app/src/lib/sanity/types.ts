// src/lib/sanity/types.ts
import { SanityImageSource } from "@sanity/image-url"

export type SanityFauteuil = {
  _id: string
  brand: string
  model: string
  desc: string
  specsTitle: string
  specs: string[]
  image: SanityImageSource
  href: string
}

export type SanityEclairage = {
  _id: string
  brand: string
  title: string
  desc: string
  image: SanityImageSource
  href: string
}

export type SanityEclairageHero = {
  eyebrow: string
  desc: string
  thumb1: SanityImageSource
  thumb2: SanityImageSource
  thumb3: SanityImageSource
}

export type SanityEnteteDePage = {
  titre: string
  description: string
}

export type SanityMobilier = {
  _id: string
  brand: string
  title: string
  desc: string
  image: SanityImageSource
}

export type SanityPartenaires = {
  liste: string[]
}

export type SanityProduit = {
  _id: string
  brand: string
  model: string
  headline?: string
  lines?: string[]
  description?: string
  image: SanityImageSource
}

export type SanityPageRadiologieEmpreinte = {
  titre: string
  description: string
}

export type SanityMembreEquipe = {
  _id: string
  name: string
  role: string
  phone: string
  email: string
  photo?: SanityImageSource
  afficherDansSociete?: boolean
  afficherDansFooter?: boolean
}

export type SanityPageSociete = {
  titre: string
  intro: any[]  // portable text
}

export type SanityFooterContact = {
  _id: string
  name: string
  role?: string
  phone?: string
  email?: string
}

// ─── ACCUEIL ─────────────────────────────────────────────────────────────────

export type SanityAccueilHero = {
  videoUrl?: string
  titre: string
  sousTitre: string
  texte: string
  services: string[]
  ctaLabel: string
  ctaLien: string
}

export type SanityImagesBlock = {
  images: { src: string; alt?: string }[]
}

export type SanityAccueilCategories = {
  fauteuils:  SanityImagesBlock | null
  chirurgie:  SanityImagesBlock | null
  hygiene:    SanityImagesBlock | null
  radiologie: SanityImagesBlock | null
}




export type SanityFormationSubtitleLine = {
  text: string
  bold?: boolean
}

export type SanityFormation = {
  dayLabel: string
  title: string
  subtitleLines: SanityFormationSubtitleLine[]
  dateLine: string
  placeLine: string
  href: string
}

export type SanityAccueilFormations = {
  formations: SanityFormation[]
  afficheUrl?: string
  afficheAlt?: string
}

// dans types.ts
export type SanityOffreItem = {
  title: string
  subtitle?: string
  leftVisual: { src: string; alt?: string }
  rightVisual: { src: string; alt?: string }
  downloadHref: string
}

export type SanityAccueilOffres = {
  offres: SanityOffreItem[]
}

export type SanityRealisation = {
  _id: string
  title?: string
  image: SanityImageSource
  alt?: string
  ordre?: number
}

export type BlocPhoto = { src: string; alt: string }

export type SanityBlocRealisation = {
  _key: string
  grandeCote: 'gauche' | 'droite'
  disposition: 'carres-bandeau' | 'carres-vertical'
  grande: BlocPhoto
  photo2: BlocPhoto
  photo3: BlocPhoto
  photo4: BlocPhoto
}

export type SanityRealisationsPage = {
  blocs: SanityBlocRealisation[]
}

export type SanityPageOffresProduits = {
  titre: string
  description?: any[]
}

export type SanityPageFormations = {
  titre: string
  description?: any[]
}

export type SanityFormationContact = {
  nom: string
  email?: string
  telephone?: string
}

export type SanityFormationDetail = {
  _id: string
  dateLine: string
  titreTop?: string
  titre: string
  posterUrl?: string
  posterAlt?: string
  horaires?: { debut?: string; fin?: string; notes?: string }
  programme?: any[]
  contacts?: SanityFormationContact[]
  ctaLabel?: string
  ctaHref?: string
}

export type SanityOffreProduit = {
  _id: string
  title: string
  subtitle?: string
  leftVisual: { src: string; alt?: string }
  rightVisual: { src: string; alt?: string }
  downloadHref: string
}

export type SanityAccueilBonPlan = {
  subtitle: string
  description?: any[] 
  price?: string
  monthly?: string
  oldPricePrefix?: string
  oldPriceValue?: string
  ctaLabel: string
  ctaHref: string
  imageSrc?: string
  imageAlt?: string
}