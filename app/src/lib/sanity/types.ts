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
export type SanityAccueilFormation = {
  dateAffichee: string
  date?: string
  titrePrincipal: string
  sousTitre?: string
  animateur?: string
  lieu?: string
  ancre?: { current: string }
  affiche?: SanityImageSource
  visible: boolean
}

export type SanityAccueilFormations = {
  formations: SanityAccueilFormation[]
  affichePrincipale?: SanityImageSource
}

export type SanityAccueilOffre = {
  titre: string
  sousTitre?: string
  imageVisuel?: { src: string; alt?: string }
  imageDepliant?: { src: string; alt?: string }
  fichierPdfUrl?: string
  ctaLabel: string
}

export type SanityAccueilOffres = {
  offres: SanityAccueilOffre[]
}

export type SanityAccueilBonPlan = {
  image?: { src: string; alt?: string }
  titre: string
  sousTitre?: string
  description?: any[]  // portable text
  prix?: string
  prixMensuel?: string
  prixBarre?: string
  ctaLabel: string
  ctaLien: string
}

export type SanityAccueilRealisations = {
  photos: { src: string; alt?: string }[]
  ctaLabel: string
  ctaLien: string
}