// app/formations/types.ts

export type EventBg = "gray" | "white";

export type EventAudience =
  | "chirurgiens-dentistes"
  | "laboratoires"
  | "assistantes"
  | "etudiants"
  | "tous";

export type EventStatus = "draft" | "published" | "cancelled" | "sold_out";

export type TextBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "subheading"; text: string }
  | { kind: "quote"; text: string };

export type ProgramLine =
  | { kind: "time_range"; label: string; start: string; end: string } // ex: Matinée / Après-midi
  | { kind: "time_point"; time: string; label: string } // ex: 12h30 Pause déjeuner
  | { kind: "text"; text: string }
  | { kind: "bullets"; items: string[] };

export type ProgramSection = {
  id: string;
  title?: string; // "Partie théorique", "Partie pratique", etc.
  accent?: "red" | "neutral"; // pour styliser (optionnel)
  lines: ProgramLine[];
};

export type ContactPerson = {
  name: string;
  role?: string;
  phone?: string; // affichage humain
  phoneHref?: string; // tel:+33...
  email?: string;
  emailHref?: string; // mailto:...
};

export type Partner = {
  name: string;
  logoSrc?: string;
  websiteHref?: string;
};

export type EventMedia = {
  posterSrc: string;
  posterAlt: string;
  brochurePdfHref?: string; // si tu veux un dépliant téléchargeable
  gallery?: { src: string; alt: string }[];
};

export type EventMeta = {
  id: string;
  slug: string;

  status: EventStatus;
  featured?: boolean;

  // En-tête (ce que tu affiches en haut à droite de l’affiche)
  dateLine: string; // ex: "Jeudi 21 Mai 2026 - Casino Capbreton"
  titleTop?: string; // ex: "360°" (optionnel)
  titleMain: string; // ex: "SUR LA RESTAURATION DU SOURIRE"

  // Infos structurées (utile back-office + filtres)
  startDate?: string; // ISO "2026-05-21" (si tu veux filtrer/trier)
  endDate?: string;   // ISO
  city?: string;
  venue?: string;     // "Casino Capbreton"
  address?: string;
  capacity?: number;
  audience?: EventAudience[];
  tags?: string[];

  // CTA
  ctaLabel: string;
  ctaHref: string;

  // Style alterné
  bg?: EventBg;
};

export type EventContent = {
  // Intro courte (le “Texte...” actuel, mais flexible)
  summary?: string;

  // Description riche (plusieurs blocs)
  descriptionBlocks?: TextBlock[];

  // Programme structuré (comme sur ta capture)
  program?: {
    title?: string; // "PROGRAMME"
    sections: ProgramSection[];
  };

  // Infos pratiques (horaires globaux)
  timeInfo?: {
    label?: string; // ex: "De 9h à 17h"
    start?: string; // "09:00"
    end?: string;   // "17:00"
    notes?: string; // "avec 1h de pause déjeuner"
  };

  // Intervenants / organisation
  speakers?: { name: string; title?: string; org?: string }[];

  // Inscription : contacts
  registration?: {
    title?: string; // "INSCRIPTION"
    contacts: ContactPerson[];
    extraNote?: string;
  };

  // Partenaires
  partners?: Partner[];
};

export type EventItem = {
  meta: EventMeta;
  media: EventMedia;
  content: EventContent;
};