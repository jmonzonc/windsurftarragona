import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Anchor, Award, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { services } from '@/data/services'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Escuela Nautica Tarragona | Windsurf, Kitesurf, Catamaran y mas',
  description:
    'Aprende windsurf, kitesurf, catamaran, paddle surf y mas en nuestra escuela nautica en Playa Larga, Tarragona. Monitores titulados FVE/RFEV.',
  alternates: {
    canonical: 'https://windsurftarragona.com/es/escuela',
    languages: {
      es: 'https://windsurftarragona.com/es/escuela',
      ca: 'https://windsurftarragona.com/ca/escuela',
      en: 'https://windsurftarragona.com/en/escuela',
      'x-default': 'https://windsurftarragona.com/es/escuela',
    },
  },
  openGraph: {
    title: 'Escuela Nautica Tarragona | Windsurf Tarragona',
    description:
      'Aprende windsurf, kitesurf, catamaran, paddle surf y mas en Playa Larga, Tarragona.',
    url: 'https://windsurftarragona.com/es/escuela',
    type: 'website',
  },
}

export default function EscuelaPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cursos de la Escuela Nautica Windsurf Tarragona',
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `Curso de ${service.name}`,
      url: `https://windsurftarragona.com/es/escuela/${service.slug}`,
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://windsurftarragona.com/es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Escuela',
        item: 'https://windsurftarragona.com/es/escuela',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
          alt="Escuela Nautica en Tarragona - Playa Larga"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0C4A6E]/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          {/* Breadcrumb Visual */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-sm text-white/80"
          >
            <Link href="/es" className="hover:text-white">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <span className="text-white">Escuela</span>
          </nav>

          <h1 className="font-heading text-4xl font-black text-white md:text-5xl lg:text-6xl">
            Escuela Nautica en Tarragona
          </h1>
          <p className="mt-4 text-lg text-white/90 md:text-xl">
            Aprende deportes nauticos con los mejores profesionales de la Costa Dorada
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-[var(--wt-bg)] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <AnimatedSection>
            <div className="mb-8 flex items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <Anchor className="h-8 w-8 text-[#0EA5E9]" />
                <span className="mt-2 text-sm text-gray-600">Playa Larga</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="h-8 w-8 text-[#F59E0B]" />
                <span className="mt-2 text-sm text-gray-600">FVE/RFEV</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 text-[#0EA5E9]" />
                <span className="mt-2 text-sm text-gray-600">Todos los niveles</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Nuestra escuela nautica en Tarragona lleva mas de 20 anos formando a navegantes de
              todas las edades y niveles. Ubicados en Playa Larga, junto al Camping Las Palmeras,
              disfrutamos de unas condiciones privilegiadas en la Costa Dorada: aguas tranquilas,
              viento termico constante y mas de 300 dias de sol al ano.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg leading-relaxed text-gray-700">
              Todos nuestros monitores estan titulados por la Federacion de Vela de Espana (FVE) y
              la Real Federacion Espanola de Vela (RFEV). Ofrecemos cursos de windsurf, kitesurf,
              catamaran, patin catalan, paddle surf, esqui nautico, wakeboard, surf y wing foil.
              Desde iniciacion hasta perfeccionamiento, encontraras el curso perfecto para ti.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-[var(--wt-deep)] md:text-4xl">
              Nuestros Cursos
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={service.slug} delay={index * 0.05}>
                <Link href={`/es/escuela/${service.slug}`}>
                  <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80`}
                        alt={`Curso de ${service.name} en Tarragona - Playa Larga`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      {service.minAge && (
                        <Badge className="absolute right-3 top-3 bg-white/90 text-[#0C4A6E]">
                          +{service.minAge} anos
                        </Badge>
                      )}
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="font-heading text-xl font-bold text-white">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="line-clamp-2 text-sm text-gray-600">{service.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          {service.levels.length} niveles
                        </span>
                        <span className="flex items-center text-sm font-medium text-[#0EA5E9]">
                          Ver curso
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
