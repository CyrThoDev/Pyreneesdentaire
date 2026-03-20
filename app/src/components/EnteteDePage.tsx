// app/src/components/EnteteDePage.tsx
import type { SanityEnteteDePage } from "@/app/src/lib/sanity/types"

export function EnteteDePage({ enTete }: { enTete: SanityEnteteDePage }) {
  return (
    <section className="bg-red text-white font-barlow">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8">
        <h1 className="text-5xl">{enTete.titre}</h1>
        {enTete.description && (
          <p className="max-w-7xl text-lg opacity-95 leading-5">{enTete.description}</p>
        )}
      </div>
    </section>
  )
}