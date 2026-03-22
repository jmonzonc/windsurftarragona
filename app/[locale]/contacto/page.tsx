import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import { MapPin, Phone, Clock, Car, Bus, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/AnimatedSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { ContactForm } from '@/components/sections/ContactForm'

interface ContactoPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: ContactoPageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Contacto | Windsurf Tarragona - Escuela Nautica Playa Larga',
    description:
      'Contacta con Windsurf Tarragona. Escuela nautica en Playa Larga. ☎ 977 23 27 15 - WhatsApp - Email. Respondemos en menos de 24h.',
    alternates: {
      canonical: `https://windsurftarragona.com/${locale}/contacto`,
      languages: {
        es: '/es/contacto',
        ca: '/ca/contacto',
        en: '/en/contacto',
        'x-default': '/es/contacto',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : locale === 'ca' ? 'ca_ES' : 'en_US',
      siteName: 'Windsurf Tarragona',
      title: 'Contacto | Windsurf Tarragona - Escuela Nautica Playa Larga',
      description:
        'Contacta con Windsurf Tarragona. Escuela nautica en Playa Larga. Respondemos en menos de 24h.',
    },
  }
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export default async function ContactoPage({ params }: ContactoPageProps) {
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
        name: 'Contacto',
        item: `https://windsurftarragona.com/${locale}/contacto`,
      },
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://windsurftarragona.com/#organization',
    name: 'Windsurf Tarragona',
    image: 'https://windsurftarragona.com/og-image.jpg',
    telephone: '+34977232715',
    email: 'info@windsurftarragona.com',
    url: 'https://windsurftarragona.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carretera N-340, Km 1168, Camping Las Palmeras',
      addressLocality: 'Tarragona',
      postalCode: '43007',
      addressRegion: 'Cataluna',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0867,
      longitude: 1.2108,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '20:00',
    },
    priceRange: '$$',
    sameAs: ['https://instagram.com/windsurftarragona'],
  }

  return (
    <main className="min-h-screen bg-[#F0F9FF]">
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={localBusinessSchema} />

      {/* Header */}
      <section className="bg-gradient-to-br from-[#0C4A6E] to-[#0369A1] px-6 pb-12 pt-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/80">
            <Link href={`/${locale}`} className="hover:text-white">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Contacto</span>
          </nav>

          <h1 className="font-heading text-4xl font-black text-white md:text-5xl">
            Contacta con Windsurf Tarragona
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Respondemos a todas las consultas en menos de 24 horas
          </p>
        </div>
      </section>

      {/* Main Content */}
      <AnimatedSection>
        <section className="px-6 py-16 md:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left: Contact Info + Map (on desktop), shown first on mobile */}
              <div className="order-1 flex flex-col gap-8 lg:order-2">
                {/* Contact Info Card */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="font-heading text-2xl font-bold text-[#0F172A]">
                    Informacion de contacto
                  </h2>

                  <div className="mt-6 flex flex-col gap-5">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9]/10">
                        <MapPin className="h-5 w-5 text-[#0EA5E9]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#0F172A]">Direccion</p>
                        <p className="text-gray-600">
                          Carretera N-340, Km 1168
                          <br />
                          Camping Las Palmeras
                          <br />
                          43007 Tarragona
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9]/10">
                        <Phone className="h-5 w-5 text-[#0EA5E9]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#0F172A]">Telefono</p>
                        <a
                          href="tel:+34977232715"
                          className="text-[#0EA5E9] hover:underline"
                        >
                          +34 977 23 27 15
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9]/10">
                        <Clock className="h-5 w-5 text-[#0EA5E9]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#0F172A]">Horario de atencion</p>
                        <p className="text-gray-600">Lunes a Domingo: 9:00 - 20:00h</p>
                      </div>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9]/10">
                        <InstagramIcon className="h-5 w-5 text-[#0EA5E9]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#0F172A]">Instagram</p>
                        <a
                          href="https://instagram.com/windsurftarragona"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0EA5E9] hover:underline"
                        >
                          @windsurftarragona
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Button */}
                  <Button
                    size="lg"
                    className="mt-8 w-full bg-[#25D366] font-bold text-white hover:bg-[#20BD5A]"
                    asChild
                  >
                    <a
                      href="https://wa.me/34609874869"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Escribenos por WhatsApp
                    </a>
                  </Button>
                </div>

                {/* How to Get There */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                  <h3 className="font-heading text-xl font-bold text-[#0F172A]">Como llegar</h3>

                  <div className="mt-6 flex flex-col gap-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
                        <Car className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium text-[#0F172A]">En coche</p>
                        <p className="text-gray-600">
                          Autovia A-7/AP-7, salida Tarragona Sur. Direccion Camping Las Palmeras,
                          Playa Larga. Aparcamiento gratuito.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
                        <Bus className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium text-[#0F172A]">Transporte publico</p>
                        <p className="text-gray-600">
                          Bus linea L1 desde el centro de Tarragona. Parada: Camping Las Palmeras.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

{/* Google Maps */}
  <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
    <iframe
      src="https://maps.google.com/maps?q=41.0867,1.2108&z=15&output=embed"
      className="h-full w-full rounded-2xl"
      loading="lazy"
      title="Ubicacion Windsurf Tarragona"
    />
  </div>
              </div>

              {/* Right: Contact Form (on desktop), shown second on mobile */}
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="font-heading text-2xl font-bold text-[#0F172A]">
                    Envianos un mensaje
                  </h2>
                  <p className="mt-2 text-gray-500">
                    Completa el formulario y te responderemos lo antes posible
                  </p>

                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
