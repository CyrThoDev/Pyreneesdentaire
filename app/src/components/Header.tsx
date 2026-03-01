"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Button from "./ui/Button";

type NavLink = { type: "link"; label: string; href: string };

type NavMenu = {
  type: "menu";
  label: string;
  children: { label: string; href: string }[];
};

type NavItem = NavLink | NavMenu;

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { type: "link", label: "ACCUEIL", href: "/" },
      {
        type: "menu",
        label: "MATÉRIEL ET MOBILIER DENTAIRE",
        children: [
          {
            label: "Les fauteuils, l’éclairages et le mobilier",
            href: "/materiel-et-mobilier-dentaire/fauteuils-eclairages-mobilier",
          },
          {
            label: "La radiologie et la prise d’empreinte",
            href: "/materiel-et-mobilier-dentaire/radiologie-empreinte",
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
      { type: "link", label: "NOS FORMATIONS", href: "/formations" },
      { type: "link", label: "LA SOCIÉTÉ", href: "/societe" },
      { type: "link", label: "NOS RÉALISATIONS", href: "/realisations" },
      { type: "link", label: "CONTACT", href: "/contact" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/LogoPY.svg"
              alt="Pyrénées Dentaires"
              width={60}
              height={60}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden font-barlow-condensed lg:flex items-center gap-6 text-xl font-bold text-black">
            {navItems.map((item) => {
              // Lien simple
              if (item.type === "link") {
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

              // Menu dropdown (parent non cliquable)
              return (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 transition-colors"
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <span className="text-base leading-none opacity-70">▾</span>
                  </button>

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
                    <div className="w-fit min-w-[320px] max-w-130 bg-white shadow-md pb-2">
                      {item.children.map((child, index) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-2 py-2 text-lg font-semibold transition-colors hover:text-red"
                        >
                          {index !== 0 && (
                            <span className="block mx-auto mb-2 w-[97%] border-t border-black/40" />
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
           <Button
                href="/catalogue"
                variant="red"
              >
                CATALOGUE PRODUITS
              </Button>

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
                // Lien simple
                if (item.type === "link") {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="py-2 text-sm font-semibold text-black/80 hover:text-black"
                    >
                      {item.label}
                    </Link>
                  );
                }

                // Menu accordéon (parent non cliquable)
                return (
                  <div key={item.label} className="pt-1">
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        className="py-2 text-sm font-semibold text-black/80 hover:text-black text-left"
                        aria-expanded={mobileSubOpen}
                        onClick={() => setMobileSubOpen((v) => !v)}
                      >
                        {item.label}
                      </button>

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

                    {mobileSubOpen && (
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

              <Button
                href="/catalogue"
                onClick={() => setOpen(false)}
              
                variant="red"
              >
                CATALOGUE PRODUITS
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}