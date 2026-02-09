"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "ACCUEIL", href: "/" },
  { label: "MATÉRIEL ET MOBILIER DENTAIRE", href: "/materiel-et-mobilier-dentaire" },
  { label: "NOS FORMATIONS", href: "/formations" },
  { label: "LA SOCIÉTÉ", href: "/societe" },
  { label: "NOS RÉALISATIONS", href: "/realisations" },
  { label: "CONTACT", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

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
          <nav className="hidden lg:flex items-center gap-6 text-[12px] tracking-widest font-semibold text-black/80">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/catalogue"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-none bg-[#B30000] px-4 text-[12px] font-semibold tracking-widest text-white hover:brightness-95 transition"
            >
              CATALOGUE PRODUITS
            </Link>

            {/* Mobile button */}
            <button
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-semibold tracking-widest text-black/80 hover:text-black"
                >
                  {item.label}
                </Link>
              ))}

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
