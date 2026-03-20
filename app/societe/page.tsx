import { PortableText } from '@portabletext/react'
import { urlFor } from '../src/lib/sanity/images'
import { getPageSociete, getEquipe, getPartenaires } from "@/app/src/lib/sanity/queries"
import PartnersSection from "@/app/src/components/Partenaires"

export default async function SocietePage() {
  const [page, equipe, partenaires] = await Promise.all([
    getPageSociete(),
    getEquipe(),
    getPartenaires(),
  ])

  return (
    <>
      {/* EN-TÊTE */}
      <section className="bg-red text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-14">
          <h1 className="text-5xl">{page?.titre}</h1>
        </div>
      </section>

      {/* INTRO */}
      {page?.intro && (
        <section className="mx-auto max-w-7xl px-6 py-16 font-barlow">
          <div className="space-y-5 leading-5 text-gray-700">
            <PortableText value={page.intro} />
          </div>
        </section>
      )}

      {/* ÉQUIPE */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-14 text-3xl font-light tracking-wide">
          L'ÉQUIPE DE PYRÉNÉES DENTAIRE
        </h2>
        <div className="font-barlow grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          {equipe.map((member) => (
            <div key={member._id} className="space-y-4">
              <div className="flex justify-center">
               {member.photo ? (
  <img
    src={urlFor(member.photo).width(160).height(160).url()}
    alt={member.name}
    className="h-40 w-40 rounded-full object-cover"
  />
) : (
  <div className="h-40 w-40 rounded-full bg-black/10 flex items-center justify-center">
    <span className="text-3xl text-black/30">
      {member.name.charAt(0)}
    </span>
  </div>
)}
              </div>
              <div className="leading-none text-center">
                <p className="font-semibold">{member.name}</p>
                <p className="text-gray-600">{member.role}</p>
                <a  
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="block text-gray-600 hover:underline hover:text-black transition cursor-pointer"
                >
                  {member.phone}
                </a>
                <a  
                  href={`mailto:${member.email}`}
                  className="block text-gray-600 hover:underline hover:text-black transition cursor-pointer"
                >
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PartnersSection data={partenaires} />
    </>
  )
}