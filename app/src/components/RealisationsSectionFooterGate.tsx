"use client";

import { usePathname } from "next/navigation";
import RealisationsSectionFooter from "./RealisationSectionFooter";

export default function RealisationsSectionFooterGate() {
  const pathname = usePathname();

  // cache aussi /realisations/* si tu as des sous-pages
  const isRealisationsPage = pathname === "/realisations" || pathname.startsWith("/realisations/");

  if (isRealisationsPage) return null;

  return <RealisationsSectionFooter />;
}