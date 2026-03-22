import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { GroupContactForm } from '@/components/sections/GroupContactForm'

interface GruposPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: GruposPageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Actividades en Grupo Tarragona | Empresas, Colegios, Despedidas',
    description:
      'Team building nautico, salidas de colegio, grupos de amigos y despedidas en Playa Larga, Tarragona. Presupuesto personalizado. ☎ 977 23 27 15',
    alternates: {
      canonical: `https://windsurftarragona.com/${locale}/grupos`,
      languages: {
        es: '/es/grupos',
        ca: '/ca/grupos',
        en: '/en/grupos',
        'x-default': '/es/grupos',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : locale === 'ca' ? 'ca_ES' : 'en_US',
      siteName: 'Windsurf Tarragona',
      title: 'Actividades en Grupo Tarragona | Empresas, Colegios, Despedidas',
      description:
        'Team building nautico, salidas de colegio, grupos de amigos y despedidas en Playa Larga, Tarragona.',
    },
  }
}

const groupTypes = [
  {
    id: 'colegios',
    title: 'Colegios y Escuelas',
    description:
      'Organizamos salidas escolares y actividades de fin de curso en Playa Larga. Programas adaptados por edades, desde primaria hasta bachillerato. Incluimos transporte, monitores titulados y seguro de responsabilidad civil. Actividades pedagogicas que combinan deporte, naturaleza y trabajo en equipo.',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
  },
  {
    id: 'empresas',
    title: 'Empresas - Team Building',
    description:
      'Fortalece los lazos de tu equipo con actividades nauticas en la Costa Dorada. Retos de equipo, regatas de catamaran, competiciones de kayak y jornadas completas de multiaventura. Catering disponible. Ideal para eventos corporativos, convenciones y premios de empresa.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
  {
    id: 'amigos',
    title: 'Grupos de Amigos',
    description:
      'La excursion perfecta para celebrar con amigos. Combina varias actividades en una jornada inolvidable: kayak, banana boat, esqui bus y mas. Descuentos especiales para grupos de 10 o mas personas. Reserva tu dia de aventura en Tarragona.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
  },
  {
    id: 'despedidas',
    title: 'Despedidas de Soltero/a',
    description:
      'Una despedida diferente, sana y llena de adrenalina. Packs especiales con esqui bus, banana boat, donut y paseo en lancha. Fotos y video incluidos en algunos packs. Organizacion completa para que solo te preocupes de pasarlo bien.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
]

const faqs = [
  {
    question: 'Cual es el precio para grupos?',
    answer:
      'El precio varia segun el numero de personas, las actividades elegidas y la duracion. Contactanos con los detalles de tu grupo y te enviaremos un presupuesto personalizado sin compromiso en menos de 24 horas.',
  },
  {
    question: 'Cual es el tamano minimo del grupo?',
    answer:
      'Para beneficiarte de tarifas de grupo, necesitas un minimo de 10 personas. Para grupos mas pequenos, ofrecemos tarifas individuales con posibilidad de unirse a otros grupos.',
  },
  {
    question: 'Se puede personalizar el programa de actividades?',
    answer:
      'Si, dissenamos programas a medida segun vuestros objetivos, tiempo disponible y presupuesto. Podemos combinar diferentes actividades, anadir catering o adaptar la jornada a vuestras necesidades.',
  },
  {
    question: 'Cuanto tardais en enviar el presupuesto?',
    answer:
      'Respondemos a todas las solicitudes en menos de 24 horas laborables. Para urgencias, puedes llamarnos directamente al 977 23 27 15 o escribirnos por WhatsApp.',
  },
]

export default async function GruposPage({ params }: GruposPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

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
        name: 'Grupos',
        item: `https://windsurftarragona.com/${locale}/grupos`,
      },
    ],
  }

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

  return (
    <main>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />

      {/* HERO */}
      <section className="relative flex h-[60vh] min-h-[400px] items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
          alt="Actividades en grupo en Tarragona"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4A6E]/80 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-16">
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/80">
            <Link href={`/${locale}`} className="hover:text-white">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Grupos</span>
          </nav>

          <h1 className="max-w-3xl font-heading text-4xl font-black text-white md:text-6xl">
            Actividades en Grupo en Tarragona
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            Colegios, empresas, amigos y despedidas
          </p>
        </div>
      </section>

      {/* GROUP TYPES - ALTERNATING */}
      {groupTypes.map((group, index) => {
        const isEven = index % 2 === 0
        return (
          <AnimatedSection key={group.id}>
            <section className={`px-6 py-20 md:px-16 ${isEven ? 'bg-white' : 'bg-[#F0F9FF]'}`}>
              <div className="mx-auto max-w-7xl">
                <div
                  className={`flex flex-col gap-12 md:grid md:grid-cols-2 md:items-center ${isEven ? '' : 'md:[&>*:first-child]:order-2'}`}
                >
                  <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src={group.image}
                      alt={`${group.title} - Windsurf Tarragona`}
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <h2 className="font-heading text-3xl font-black text-[#0F172A] md:text-4xl">
                      {group.title}
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-600">{group.description}</p>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>
        )
      })}

      {/* CONTACT FORM */}
      <AnimatedSection>
        <section id="formulario" className="bg-white px-6 py-20 md:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-black text-[#0F172A] md:text-4xl">
                Solicita tu presupuesto
              </h2>
              <p className="mt-4 text-gray-500">
                Cuentanos sobre tu grupo y te enviaremos una propuesta personalizada en menos de 24h
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-gray-100 bg-[#F0F9FF] p-6 shadow-sm md:p-10">
              <GroupContactForm />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection>
        <section className="bg-[#F0F9FF] px-6 py-20 md:px-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-3xl font-black text-[#0F172A] md:text-4xl">
              Preguntas frecuentes sobre grupos
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
    </main>
  )
}
