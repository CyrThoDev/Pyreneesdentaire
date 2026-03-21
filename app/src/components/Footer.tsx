// app/src/components/Footer.tsx
import Link from "next/link"
import Button from "./ui/Button"
import { getFooterContacts } from "@/app/src/lib/sanity/queries"
import type { SanityFooterContact } from "@/app/src/lib/sanity/types"

export async function Footer() {
  const contacts = await getFooterContacts()

  // 👉 Desktop (4 colonnes comme ton design initial)
  const col1 = contacts.slice(0, 2)
  const col2 = contacts.slice(2, 5)
  const col3 = contacts.slice(5, 8)
  const col4 = contacts.slice(8)

  // 👉 Tablette (2 colonnes équilibrées)
  const mid = Math.ceil(contacts.length / 2)
  const colA = contacts.slice(0, mid)
  const colB = contacts.slice(mid)

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-14">
        <h2 className="text-5xl font-barlow-condensed">Infos pratiques</h2>

        <div className="mt-10 font-barlow">
          
          {/* 📱 MOBILE + 📲 TABLETTE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-x-12 gap-y-8">
            <FooterColumn contacts={colA} />
            <FooterColumn contacts={colB} />
          </div>

          {/* 💻 DESKTOP */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-x-10 gap-y-8">
            <FooterColumn contacts={col1} />
            <FooterColumn contacts={col2} />
            <FooterColumn contacts={col3} />
            <FooterColumn contacts={col4} />
          </div>

        </div>

        {/* Newsletter */}
        <div className="mt-16 flex flex-col items-center justify-end gap-6 lg:flex-row">
          <p className="font-barlow-condensed text-center text-2xl font-light tracking-tight lg:text-left">
            Inscrivez-vous et restez informé avec notre newsletter
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button href="/newsletter" variant="red">
              S&apos;INSCRIRE ICI
            </Button>

            <a
              href="https://www.facebook.com/p/Pyr%C3%A9n%C3%A9es-Dentaire-61561102856487/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-14 w-14 place-items-center rounded-full border-2 border-white/80 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <FacebookIcon className="h-7 w-7" />
            </a>
          </div>
        </div>

        {/* Legal + bottom */}
        <div className="mt-12 border-t border-white/15 pt-6">
          <LegalLinks />

          <div className="mt-4 text-center text-xs text-white/85">
            © PYRENNEES DENTAIRE - 5 route de l'Oussère - 64320 Idron - 05 59 02 28 46
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ contacts }: { contacts: SanityFooterContact[] }) {
  return (
    <div className="space-y-6 text-center lg:text-left">
      {contacts.map((m) => (
        <div key={m._id}>
          <div className="text-lg font-semibold">{m.name}</div>

          <div className="text-sm text-white/85">
            <div className="block whitespace-pre-line">{m.role}</div>

            {m.phone && (
              <a
                href={`tel:${m.phone.replace(/\s/g, "")}`}
                aria-label={`Appeler ${m.name}`}
                className="block mx-auto w-fit transition hover:underline hover:underline-offset-4 lg:mx-0"
              >
                {m.phone}
              </a>
            )}

            {m.email && (
              <a
                href={`mailto:${m.email}`}
                aria-label={`Envoyer un email à ${m.name}`}
                className="block mx-auto w-fit break-all transition hover:underline hover:underline-offset-4 lg:mx-0"
              >
                {m.email}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

function LegalLinks() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-xs text-white/80 sm:flex-row sm:gap-4">
      <Link
        href="/mentions-legales"
        className="font-semibold uppercase tracking-wide underline underline-offset-4 hover:text-white"
      >
        Mentions légales
      </Link>

      <span className="hidden text-white/35 sm:inline">|</span>

      <Link
        href="/confidentialite"
        className="font-semibold uppercase tracking-wide underline underline-offset-4 hover:text-white"
      >
        Politique de confidentialité et cookies
      </Link>
    </div>
  )
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M13.5 22v-8h2.8l.4-3H13.5V9.1c0-.9.3-1.5 1.6-1.5h1.7V5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.6 1.7-4.6 4.8V11H7v3h2.7v8h3.8z" />
    </svg>
  )
}