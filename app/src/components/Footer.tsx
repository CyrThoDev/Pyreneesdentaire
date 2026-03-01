// app/components/Footer.tsx (ou src/components/Footer.tsx)
import Link from "next/link";
import Button from "./ui/Button";

type ContactBlock = {
  title: string;
  lines: { label: string; href?: string }[];
};

export function Footer() {
  // ✅ Données gérées dans le composant (comme tu veux)
  const columns: ContactBlock[] = [
    {
      title: "Agence",
      lines: [
        { label: "05 59 02 28 46", href: "tel:+33559022846" },
        { label: "michaut.g@wanadoo.fr", href: "mailto:michaut.g@wanadoo.fr" },
      ],
    },
    {
      title: "Service comptabilité",
      lines: [
        { label: "05 59 02 28 46", href: "tel:+33559022846" },
        {
          label: "nadege.michaut@gmail.com",
          href: "mailto:nadege.michaut@gmail.com",
        },
      ],
    },
    {
      title: "Laurent DEPIESSE",
      lines: [
        { label: "Technico-commercial" },
        { label: "06 83 11 51 80", href: "tel:+33683115180" },
        {
          label: "laurentdepiesse@gmail.com",
          href: "mailto:laurentdepiesse@gmail.com",
        },
      ],
    },
    {
      title: "Agata GAUTRY",
      lines: [
        { label: "Responsable commerciale matériel" },
        { label: "06 38 65 75 87", href: "tel:+33638657587" },
        {
          label: "agata.pyreneesdentaire@gmail.com",
          href: "mailto:agata.pyreneesdentaire@gmail.com",
        },
      ],
    },
    {
      title: "Julien DELMOND",
      lines: [
        { label: "Responsable commercial consommable" },
        { label: "Cabinet/Laboratoire" },
        { label: "06 77 11 91 21", href: "tel:+33677119121" },
        {
          label: "julien.delmond@icloud.com",
          href: "mailto:julien.delmond@icloud.com",
        },
      ],
    },
    {
      title: "Richard DIAZ",
      lines: [
        { label: "Technicien" },
        { label: "06 07 63 61 36", href: "tel:+33607636136" },
        {
          label: "richard.pyrenees@orange.fr",
          href: "mailto:richard.pyrenees@orange.fr",
        },
      ],
    },
    {
      title: "Jean-Marie ROCTY",
      lines: [
        { label: "Technicien" },
        { label: "06 48 22 58 07", href: "tel:+33648225807" },
        {
          label: "jmarie.pyreneesdentaire@gmail.com",
          href: "mailto:jmarie.pyreneesdentaire@gmail.com",
        },
      ],
    },
    {
      title: "Jean-Marc LACOUR",
      lines: [
        { label: "Technicien" },
        { label: "06 20 28 83 66", href: "tel:+33620288366" },
        {
          label: "lacour.pyreneesdentaire@orange.fr",
          href: "mailto:lacour.pyreneesdentaire@orange.fr",
        },
      ],
    },
    {
      title: "Service informatique",
      lines: [
        { label: "Fabrice RIBAS" },
        { label: "Service informatique" },
        { label: "06 77 75 25 01", href: "tel:+33677752501" },
        { label: "p.m.i@wanadoo.fr", href: "mailto:p.m.i@wanadoo.fr" },
      ],
    },
  ];

  // Mise en page proche de la maquette : 4 colonnes visuelles.
  const col1 = [columns[0], columns[1]];
  const col2 = [columns[2], columns[3], columns[4]];
  const col3 = [columns[5], columns[6], columns[7]];
  const col4 = [columns[8]];

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-14">
        {/* Title */}
        <h2 className="text-5xl font-barlow-condensed">Infos pratiques</h2>

        {/* 4 columns */}
        <div className="mt-10 grid gap-10 lg:grid-cols-4 font-barlow">
          <FooterColumn blocks={col1} />
          <FooterColumn blocks={col2} />
          <FooterColumn blocks={col3} />
          <FooterColumn blocks={col4} />
        </div>

        {/* Newsletter band */}
        <div className="mt-16 flex flex-col items-center justify-end gap-6 lg:flex-row">
          <p className="font-barlow-condensed text-right text-2xl font-light tracking-tight lg:text-left">
            Inscrivez-vous et restez informé avec notre newsletter
          </p>

          <div className="flex items-center gap-10">
            {/* CTA newsletter */}
            <Button href="/newsletter" variant="red">
              S&apos;INSCRIRE ICI
            </Button>

            {/* Facebook */}
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
            © PYRENNEES DENTAIRE - 5 route de l’Oussère - 64320 Idron - 05 59 02
            28 46
          </div>
        </div>
      </div>
    </footer>
  );
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

      {/* Optionnel si tu crées une page dédiée plus tard */}
      {/* 
      <Link
        href="/politique-de-confidentialite"
        className="font-semibold uppercase tracking-wide underline underline-offset-4 hover:text-white"
      >
        Politique de confidentialité
      </Link>
      */}
    </div>
  );
}

function FooterColumn({ blocks }: { blocks: ContactBlock[] }) {
  return (
    <div className="space-y-9">
      {blocks.map((b) => (
        <div key={b.title}>
          <div className="text-lg font-semibold">{b.title}</div>

          <div className="text-sm text-white/85">
            {b.lines.map((l, idx) => {
              if (l.href) {
                return (
                  <a
                    key={`${b.title}-${idx}`}
                    href={l.href}
                    className="block w-fit hover:text-white"
                  >
                    {l.label}
                  </a>
                );
              }
              return (
                <div key={`${b.title}-${idx}`} className="block">
                  {l.label}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
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
  );
}