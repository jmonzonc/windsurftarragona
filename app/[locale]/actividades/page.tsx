import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Baby, UserCheck, Waves, ArrowRight, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { activities } from '@/data/activities'

interface ActividadesPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: ActividadesPageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Actividades Nauticas en Tarragona | Kayak, Banana Boat, Paseos en Barco',
    description:
      'Kayak, banana boat, donut, paseos en lancha y esqui acuatico en Playa Larga, Tarragona. Para familias, ninos y grupos. Abierto todo el ano. ☎ 977 23 27 15',
    alternates: {
      canonical: `https://windsurftarragona.com/${locale}/actividades`,
      languages: {
        es: '/es/actividades',
        ca: '/ca/actividades',
        en: '/en/actividades',
        'x-default': '/es/actividades',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : locale === 'ca' ? 'ca_ES' : 'en_US',
      siteName: 'Windsurf Tarragona',
      title: 'Actividades Nauticas en Tarragona | Kayak, Banana Boat, Paseos en Barco',
      description:
        'Kayak, banana boat, donut, paseos en lancha y esqui acuatico en Playa Larga, Tarragona. Para familias, ninos y grupos.',
    },
  }
}

const activityImages: Record<string, string> = {
  kayak: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
  'banana-boat': 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=800&q=80',
  donut: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80',
  'paseos-lancha': 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&q=80',
  'esqui-bus': 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=800&q=80',
}

const targetAudience = [
  {
    icon: Users,
    title: 'Familias',
    description: 'Actividades seguras y divertidas para disfrutar juntos',
  },
  {
    icon: Baby,
    title: 'Ninos (desde 5 anos)',
    description: 'Adaptamos cada actividad a su edad y nivel',
  },
  {
    icon: UserCheck,
    title: 'Grupos',
    description: 'Descuentos especiales para grupos de 10+ personas',
  },
  {
    icon: Waves,
    title: 'Principiantes',
    description: 'No hace falta experiencia previa, te ensenamos todo',
  },
]

const faqs = [
  {
    question: 'Que actividades nauticas hay en Tarragona?',
    answer:
      'En Windsurf Tarragona ofrecemos kayak, banana boat, donut, paseos en lancha y esqui bus. Todas las actividades se realizan en Playa Larga, dentro del Camping Las Palmeras. Reserva llamando al 977 23 27 15.',
  },
  {
    question: 'Donde hacer kayak en Tarragona?',
    answer:
      'El mejor lugar para hacer kayak en Tarragona es Playa Larga, en la Costa Dorada. En Windsurf Tarragona ofrecemos alquiler de kayaks individuales y dobles, con opcion de rutas guiadas por la costa.',
  },
  {
    question: 'Hay actividades acuaticas para ninos en la Costa Dorada?',
    answer:
      'Si, en Windsurf Tarragona tenemos actividades para ninos desde 5 anos: kayak, banana boat y paseos en lancha. Todas incluyen chaleco salvavidas y supervision de monitores titulados.',
  },
  {
    question: 'Que hacer en Playa Larga Tarragona?',
    answer:
      'Playa Larga es ideal para deportes nauticos. En Windsurf Tarragona puedes hacer kayak, banana boat, donut, paseos en lancha, windsurf, kitesurf y mucho mas. Estamos en el Camping Las Palmeras, abiertos todo el ano.',
  },
  {
    question: 'Estan abiertas las actividades nauticas en invierno en Tarragona?',
    answer:
      'Si, Windsurf Tarragona esta abierto los 12 meses del ano. El clima de la Costa Dorada permite disfrutar de actividades acuaticas incluso en invierno. Llamanos al 977 23 27 15 para reservar.',
  },
  {
    question: 'Hace falta reservar con antelacion las actividades?',
    answer:
      'Recomendamos reservar con antelacion, especialmente en verano y fines de semana. Puedes llamarnos al 977 23 27 15 o escribirnos por WhatsApp para confirmar disponibilidad.',
  },
]

export default async function ActividadesPage({ params }: ActividadesPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
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
        item: `https://windsurftarragona.com/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Actividades',
        item: `https://windsurftarragona.com/${locale}/actividades`,
      },
    ],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Actividades Nauticas en Tarragona',
    itemListElement: activities.map((activity, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: activity.name,
      url: `https://windsurftarragona.com/${locale}/actividades/${activity.slug}`,
    })),
  }

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Actividades Nauticas Playa Larga Tarragona',
    description:
      'Kayak, banana boat, donut, paseos en lancha y esqui bus en Playa Larga, Costa Dorada. Para familias, ninos y grupos.',
    startDate: '2025-06-21',
    endDate: '2025-09-21',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Playa Larga, Tarragona',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Carretera N-340, Km 1168, Camping Las Palmeras',
        addressLocality: 'Tarragona',
        postalCode: '43007',
        addressCountry: 'ES',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Windsurf Tarragona',
      url: 'https://windsurftarragona.com',
    },
  }

  return (
    <main>
      <JsonLd schema={faqSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={itemListSchema} />
      <JsonLd schema={eventSchema} />

      {/* HERO */}
      <section className="relative flex h-[60vh] min-h-[400px] items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
          alt="Actividades nauticas en Playa Larga, Tarragona"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4A6E]/80 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-16">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/80">
            <Link href={`/${locale}`} className="hover:text-white">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Actividades</span>
          </nav>

          <h1 className="max-w-3xl font-heading text-4xl font-black text-white md:text-6xl">
            Actividades Nauticas en Tarragona
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">Playa Larga, Costa Dorada</p>
        </div>
      </section>

      {/* INTRO SEO */}
      <AnimatedSection>
        <section className="bg-[#F0F9FF] px-6 py-16 md:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg leading-relaxed text-gray-600">
              Descubre las mejores <strong>actividades nauticas en Tarragona</strong> en{' '}
              <strong>Playa Larga</strong>, corazon de la <strong>Costa Dorada</strong>. En{' '}
              <strong>Windsurf Tarragona</strong>, ubicados en el{' '}
              <strong>Camping Las Palmeras</strong>, ofrecemos experiencias acuaticas para{' '}
              <strong>familias</strong>, <strong>ninos</strong> y <strong>grupos</strong>. Kayak,
              banana boat, donut, paseos en lancha y esqui bus disponibles{' '}
              <strong>todo el ano</strong>. Monitores titulados y material de primera calidad para
              garantizar tu seguridad y diversion.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ACTIVITIES GRID */}
      <AnimatedSection>
        <section className="bg-white px-6 py-20 md:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge className="rounded-full bg-[#F59E0B]/10 text-[#F59E0B] hover:bg-[#F59E0B]/10">
                NUESTRAS ACTIVIDADES
              </Badge>
              <h2 className="text-balance font-heading text-3xl font-black text-[#0F172A] md:text-4xl">
                Diversion para todas las edades
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activities.map((activity) => (
                <Card
                  key={activity.slug}
                  className="group overflow-hidden border-0 bg-white shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={
                        activityImages[activity.slug] ||
                        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80'
                      }
                      alt={`${activity.name} en Tarragona - Windsurf Tarragona`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="text-4xl">{activity.emoji}</span>
                    </div>
                  </div>

                  <CardContent className="pt-4">
                    {activity.minAge && (
                      <Badge className="bg-amber-100 text-xs text-amber-800 hover:bg-amber-100">
                        Desde {activity.minAge} anos
                      </Badge>
                    )}
                    <h3 className="mt-2 font-heading text-lg font-bold text-[#0F172A]">
                      {activity.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-gray-500">{activity.description}</p>
                    <Link
                      href={`/${locale}/actividades/${activity.slug}`}
                      className="group/link mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#0EA5E9] transition-all hover:gap-2"
                    >
                      Ver actividad
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* TARGET AUDIENCE */}
      <AnimatedSection>
        <section className="bg-[#F0F9FF] px-6 py-20 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-heading text-3xl font-black text-[#0F172A] md:text-4xl">
              Para quien son nuestras actividades?
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {targetAudience.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9]/10">
                    <item.icon className="h-6 w-6 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#0F172A]">{item.title}</h3>
                    <p className="mt-1 text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection>
        <section className="bg-white px-6 py-20 md:px-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-3xl font-black text-[#0F172A] md:text-4xl">
              Preguntas frecuentes
            </h2>

            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-heading text-lg font-semibold text-[#0F172A]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="bg-gradient-to-br from-[#0C4A6E] to-[#0369A1] px-6 py-16 text-center md:px-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">
              Tienes dudas? Escribenos
            </h2>
            <p className="mt-4 text-white/80">
              Te ayudamos a elegir la actividad perfecta para ti y tu grupo
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-[#F59E0B] font-bold text-white hover:bg-[#D97706]"
                asChild
              >
                <Link href={`/${locale}/contacto`}>Contactar</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent font-bold text-white hover:bg-white/10"
                asChild
              >
                <a href="https://wa.me/34609874869" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
