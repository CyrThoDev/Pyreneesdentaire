"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href: string; children: { label: string; href: string }[] };

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "ACCUEIL", href: "/" },
      {
        label: "MATÉRIEL ET MOBILIER DENTAIRE",
        href: "/materiel-et-mobilier-dentaire",
        children: [
          {
            label: "Les fauteuils, l’éclairages et le mobilier",
            href: "/materiel-et-mobilier-dentaire/fauteuils-eclairages-mobilier",
          },
          {
            label: "La radiologie et la prise d’empreinte",
            href: "/materiel-et-mobilier-dentaire/radiologie-prise-empreinte",
          },
          {
            label: "L’hygiène et la stérilisation",
            href: "/materiel-et-mobilier-dentaire/hygiene-sterilisation",
          },
          {
            label: "La chirurgie et la prophylaxie",
            href: "/materiel-et-mobilier-dentaire/chirurgie-prophylaxie",
          },
        ],
      },
      { label: "NOS FORMATIONS", href: "/formations" },
      { label: "LA SOCIÉTÉ", href: "/societe" },
      { label: "NOS RÉALISATIONS", href: "/realisations" },
      { label: "CONTACT", href: "/contact" },
    ],
    []
  );

  const materielItem = navItems.find(
    (i) => i.href === "/materiel-et-mobilier-dentaire"
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo-pyrenees-dentaires.png"
              alt="Pyrénées Dentaires"
              width={44}
              height={44}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden font-barlow-condensed lg:flex items-center gap-6 text-xl font-bold text-black">
            {navItems.map((item) => {
              // Item simple
              if (!("children" in item)) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              }

              // Item avec dropdown
              return (
             <div key={item.href} className="relative group">
  <Link
    href={item.href}
    className="inline-flex items-center gap-2  transition-colors"
  >
    {item.label}
    <span className="text-base leading-none opacity-70">▾</span>
  </Link>

  {/* Dropdown */}
  <div
    className="
      absolute left-0 top-full
      pt-2
      invisible opacity-0 translate-y-1
      group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
      group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0
      transition
      z-50
    "
  >
    <div className="w-fit min-w-[320px] max-w-[520px] bg-white shadow-md pb-2">
      

 

      {/* Sous catégories */}
      {item.children?.map((child, index) => (
<Link
  key={child.href}
  href={child.href}
  className={`
    block px-2 py-2 text-lg font-semibold
    transition-colors
    
    hover:text-red
  `}
>
  {index !== 0 && (
    <span className="block mx-auto mb-2 w-[97%] border-t border-black/40"></span>
  )}

  {child.label}
</Link>
      ))}
    </div>
  </div>
</div>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/catalogue"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-none bg-red px-4 text-[12px] font-semibold tracking-widest text-white hover:brightness-95 transition"
            >
              CATALOGUE PRODUITS
            </Link>

            {/* Mobile button */}
            <button
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => {
                setOpen((v) => !v);
                // Quand on ferme le menu, on ferme aussi le sous-menu
                if (open) setMobileSubOpen(false);
              }}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-black/15"
            >
              <span className="text-xl leading-none">{open ? "×" : "≡"}</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-2 pt-2">
              {navItems.map((item) => {
                // Item simple
                if (!("children" in item)) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="py-2 text-sm font-semibold tracking-widest text-black/80 hover:text-black"
                    >
                      {item.label}
                    </Link>
                  );
                }

                // Item avec accordéon
                return (
                  <div key={item.href} className="pt-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="py-2 text-sm font-semibold tracking-widest text-black/80 hover:text-black"
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        aria-label="Afficher les sous-catégories"
                        aria-expanded={mobileSubOpen}
                        onClick={() => setMobileSubOpen((v) => !v)}
                        className="h-9 w-9 border border-black/15 inline-flex items-center justify-center"
                      >
                        <span className="text-lg leading-none">
                          {mobileSubOpen ? "−" : "+"}
                        </span>
                      </button>
                    </div>

                    {mobileSubOpen && item.children && (
                      <div className="mt-1 ml-3 border-l border-black/10 pl-3 flex flex-col">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => {
                              setOpen(false);
                              setMobileSubOpen(false);
                            }}
                            className="py-2 text-sm font-semibold text-black/70 hover:text-black"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                href="/catalogue"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-10 items-center justify-center bg-[#B30000] px-4 text-[12px] font-semibold tracking-widest text-white"
              >
                CATALOGUE PRODUITS
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}