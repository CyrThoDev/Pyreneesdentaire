export type TileImage = {
  src: string
  alt?: string
}

export type Tile = {
  title: string
  subtitle_1?: string
  subtitle_2?: string
  href: string
  theme: "light" | "dark" | "red"
  layout: "fauteuil" | "chirurgie" | "hygiene" | "radiologie"
  ctaAlign: "br" | "bl"
  images?: TileImage[]
  lien: string
}