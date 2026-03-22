import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ArrowRight, Shield, Zap, MapPin, Calendar, Users, Award, Phone } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { AnimatedSection } from '@/components/AnimatedSection'
import { StatsCounter } from '@/components/sections/StatsCounter'
import { HeroContent } from '@/components/sections/HeroContent'
import { Gallery } from '@/components/sections/Gallery'
import { ContactForm } from '@/components/sections/ContactForm'
import { services } from '@/data/services'
import { activities } from '@/data/activities'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Windsurf Tarragona · Escuela Nautica y Actividades en Costa Dorada',
    description:
      'Escuela de windsurf, kitesurf, catamaran y actividades nauticas en Tarragona. Playa Larga, monitores titulados FVE/RFEV. Abierto todo el ano. ☎ 977 23 27 15',
    keywords: [
      'windsurf tarragona',
      'escuela nautica tarragona',
      'kitesurf tarragona',
      'deportes acuaticos tarragona',
      'actividades nauticas costa dorada',
      'cursos windsurf tarragona',
      'playa larga tarragona',
      'costa dorada windsurf',
    ],
    alternates: {
      canonical: `https://windsurftarragona.com/${locale}`,
      languages: {
        es: '/es',
        ca: '/ca',
        en: '/en',
        'x-default': '/es',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : locale === 'ca' ? 'ca_ES' : 'en_US',
      siteName: 'Windsurf Tarragona',
      title: 'Windsurf Tarragona · Escuela Nautica y Actividades en Costa Dorada',
      description:
        'Escuela de windsurf, kitesurf, catamaran y actividades nauticas en Tarragona. Playa Larga, monitores titulados FVE/RFEV.',
    },
  }
}

const unsplashImages: Record<string, string> = {
  windsurf: 'https://images.unsplash.com/photo-1517699418036-fb5d179fef0c?w=800&q=80',
  kitesurf: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  catamaran: 'https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?w=800&q=80',
  'patin-catalan': 'https://images.unsplash.com/photo-1534397860164-120c97f4db0b?w=800&q=80',
  'paddle-surf': 'https://images.unsplash.com/photo-1526188717906-ab4a2f949f46?w=800&q=80',
  'esqui-nautico': 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=800&q=80',
  'wake-board': 'https://images.unsplash.com/photo-1601024445121-0f152cde6098?w=800&q=80',
  surf: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80',
  'wing-foil': 'https://images.unsplash.com/photo-1621879092997-c491ce55d8a3?w=800&q=80',
}

const activityImages: Record<string, string> = {
  kayak: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
  'banana-boat': 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=800&q=80',
  donut: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80',
  'paseos-lancha': 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&q=80',
  'esqui-bus': 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=800&q=80',
}

const groupCards = [
  {
    emoji: '🏫',
    title: 'Colegios',
    description:
      'Actividades nauticas pedagogicas adaptadas a cada edad. Presupuesto especial para grupos escolares y salidas de fin de curso.',
  },
  {
    emoji: '🏢',
    title: 'Empresas - Team Building',
    description:
      'Fortalece tu equipo con el desafio del mar. Actividades personalizadas para empresas de cualquier tamano.',
  },
  {
    emoji: '👥',
    title: 'Grupos de amigos',
    description:
      'La aventura nautica perfecta. Combinamos actividades a medida para una jornada inolvidable en la Costa Dorada.',
  },
  {
    emoji: '💍',
    title: 'Despedidas de soltero/a',
    description:
      'Una despedida diferente, sana y emocionante. Organizacion completa en Playa Larga, Tarragona.',
  },
]

const whyUsFeatures = [
  {
    icon: Shield,
    title: 'Monitores titulados FVE/RFEV',
    description: 'Formacion oficial y experiencia probada',
  },
  {
    icon: Zap,
    title: 'Material de ultima generacion',
    description: 'Equipos modernos para el mejor aprendizaje',
  },
  {
    icon: MapPin,
    title: 'Ubicacion privilegiada',
    description: 'Camping Las Palmeras, Playa Larga, Tarragona',
  },
  {
    icon: Calendar,
    title: 'Abiertos todo el ano',
    description: '12 meses, sin importar la temporada',
  },
  {
    icon: Users,
    title: 'Para todas las edades',
    description: 'Desde ninos hasta adultos, todos bienvenidos',
  },
  {
    icon: Award,
    title: '+20 anos de experiencia',
    description: 'Referentes en nautica en Tarragona',
  },
]

const testimonials = [
  {
    name: 'Maria G.',
    city: 'Barcelona',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    text: 'Hice el curso de windsurf en agosto y fue una experiencia increible. Los monitores son super pacientes y profesionales. Volvere el proximo verano!',
  },
  {
    name: 'Jordi P.',
    city: 'Tarragona',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    text: 'Llevamos a los ninos al banana boat y al kayak. Se lo pasaron genial. La organizacion perfecta y Playa Larga es preciosa.',
  },
  {
    name: 'Sophie M.',
    city: 'Lyon, France',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    text: 'Fantastic windsurfing school near Tarragona. Very professional instructors, great equipment and beautiful location. Highly recommended!',
  },
]

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

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Donde hacer windsurf en Tarragona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La mejor escuela de windsurf en Tarragona es Windsurf Tarragona, ubicada en Playa Larga, dentro del Camping Las Palmeras. Ofrecemos cursos para todos los niveles con monitores titulados FVE/RFEV. Llamanos al 977 23 27 15.',
        },
      },
      {
        '@type': 'Question',
        name: 'Que actividades nauticas ofrece Windsurf Tarragona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ofrecemos 9 disciplinas nauticas (windsurf, kitesurf, catamaran, patin catalan, paddle surf, esqui nautico, wakeboard, surf y wing foil) mas actividades recreativas como kayak, banana boat, donut y paseos en lancha. Todo en Playa Larga, Costa Dorada.',
        },
      },
      {
        '@type': 'Question',
        name: 'Esta abierto Windsurf Tarragona todo el ano?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Si, estamos abiertos los 12 meses del ano. El clima de la Costa Dorada permite practicar deportes nauticos durante todas las estaciones. Reserva tu actividad llamando al 977 23 27 15.',
        },
      },
      {
        '@type': 'Question',
        name: 'Necesito experiencia previa para hacer windsurf?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, en Windsurf Tarragona ofrecemos cursos de iniciacion para principiantes absolutos. Nuestros monitores titulados te ensenaran desde cero con material adaptado a tu nivel.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hay actividades nauticas para grupos en Tarragona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Si, en Windsurf Tarragona organizamos actividades para colegios, empresas (team building), grupos de amigos y despedidas. Presupuestos personalizados en Playa Larga. Contactanos: 977 23 27 15.',
        },
      },
    ],
  }

  return (
    <main>
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SECTION 1: HERO */}
      <section className="relative flex h-dvh items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1517699418036-fb5d179fef0c?w=1920&q=80"
          alt="Windsurf en Playa Larga, Tarragona - Escuela Windsurf Tarragona"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4A6E]/75 to-transparent" />

        {/* Hero Content */}
        <HeroContent locale={locale} />

        {/* Experience Badge */}
        <div className="absolute bottom-8 right-8 hidden rounded-full border border-white/30 bg-white/15 px-4 py-2 backdrop-blur md:flex">
          <span className="font-medium text-white">+20 anos de experiencia</span>
        </div>

        {/* Scroll Chevron */}
        <a
          href="#stats"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to statistics"
        >
          <ChevronDown className="h-8 w-8 text-white/70" />
        </a>
      </section>

      {/* SECTION 2: STATS BAR */}
      <StatsCounter />

      {/* SECTION 3: ESCUELA NAUTICA */}
      <AnimatedSection>
        <section id="escuela" className="bg-[#F0F9FF] px-6 py-20 md:px-16">
          <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge className="rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] hover:bg-[#0EA5E9]/10">
                NUESTRA ESCUELA
              </Badge>
              <h2 className="text-balance font-heading text-4xl font-black text-[#0F172A] md:text-5xl">
                Aprende con los mejores
              </h2>
              <p className="max-w-2xl text-lg text-gray-500">
                Monitores titulados FVE/RFEV con material de ultima generacion en Playa Larga,
                Tarragona
              </p>
            </div>

            {/* Courses Grid */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.slug}
                  className="group overflow-hidden border-0 bg-white shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  {/* Course Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={
                        unsplashImages[service.slug] ||
                        `https://images.unsplash.com/photo-1517699418036-fb5d179fef0c?w=800&q=80`
                      }
                      alt={`Curso de ${service.name} en Tarragona - Windsurf Tarragona`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <CardContent className="pt-4">
                    <Badge className="bg-[#0EA5E9]/10 text-xs text-[#0EA5E9] hover:bg-[#0EA5E9]/10">
                      Todos los niveles
                    </Badge>
                    <h3 className="mt-2 font-heading text-lg font-bold text-[#0F172A]">
                      {service.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-gray-500">{service.description}</p>
                    <Link
                      href={`/${locale}/escuela/${service.slug}`}
                      className="group/link mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#0EA5E9] transition-all hover:gap-2"
                    >
                      Ver curso
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SECTION 4: ACTIVIDADES */}
      <AnimatedSection>
        <section id="actividades" className="bg-white px-6 py-20 md:px-16">
          <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge className="rounded-full bg-[#F59E0B]/10 text-[#F59E0B] hover:bg-[#F59E0B]/10">
                ACTIVIDADES
              </Badge>
              <h2 className="text-balance font-heading text-4xl font-black text-[#0F172A] md:text-5xl">
                Descubre la costa desde el mar!
              </h2>
              <p className="max-w-2xl text-lg text-gray-500">
                Diversion garantizada para todas las edades en Playa Larga, Tarragona
              </p>
            </div>

            {/* Activities */}
            <div className="mt-12 flex flex-col gap-16">
              {activities.map((activity, index) => {
                const isEven = index % 2 === 0
                return (
                  <div
                    key={activity.slug}
                    className={`flex flex-col gap-8 md:grid md:grid-cols-2 md:items-center ${isEven ? '' : 'md:[&>*:first-child]:order-2'}`}
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden rounded-2xl">
                      <Image
                        src={
                          activityImages[activity.slug] ||
                          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80'
                        }
                        alt={`${activity.name} en Tarragona`}
                        fill
                        sizes="50vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4">
                      <span className="text-5xl">{activity.emoji}</span>
                      <h3 className="font-heading text-2xl font-bold text-[#0F172A]">
                        {activity.name}
                      </h3>
                      <p className="text-gray-500">{activity.description}</p>
                      {activity.minAge && (
                        <Badge className="w-fit rounded-full bg-amber-100 text-amber-800 hover:bg-amber-100">
                          Edad minima: {activity.minAge} anos
                        </Badge>
                      )}
                      <Link
                        href={`/${locale}/actividades/${activity.slug}`}
                        className="mt-2 inline-flex items-center gap-1 font-medium text-[#0EA5E9] transition-all hover:gap-2"
                      >
                        Mas info
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SECTION 5: GRUPOS */}
      <AnimatedSection>
        <section className="bg-gradient-to-br from-[#0C4A6E] to-[#0369A1] px-6 py-20 text-white md:px-16">
          <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/10">
                VENIS EN GRUPO?
              </Badge>
              <h2 className="text-balance font-heading text-4xl font-black text-white md:text-5xl">
                Actividades para grupos y empresas
              </h2>
            </div>

            {/* Group Cards */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {groupCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
                >
                  <span className="text-4xl">{card.emoji}</span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/80">{card.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <Button
                size="lg"
                className="bg-[#F59E0B] font-bold text-white hover:bg-[#D97706]"
                asChild
              >
                <a href="#contacto">Pide presupuesto personalizado</a>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SECTION 6: POR QUE NOSOTROS */}
      <AnimatedSection>
        <section className="bg-[#F0F9FF] px-6 py-20 md:px-16">
          <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <h2 className="text-balance text-center font-heading text-4xl font-black text-[#0F172A] md:text-5xl">
              Por que elegir Windsurf Tarragona?
            </h2>

            {/* Features Grid */}
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {whyUsFeatures.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0EA5E9]/10">
                    <feature.icon className="h-8 w-8 text-[#0EA5E9]" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0F172A]">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SECTION 7: GALERIA */}
      <Gallery />

      {/* SECTION 8: TESTIMONIOS */}
      <AnimatedSection>
        <section className="bg-white px-6 py-20 md:px-16">
          <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge className="rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] hover:bg-[#0EA5E9]/10">
                LO QUE DICEN NUESTROS ALUMNOS
              </Badge>
              <h2 className="text-balance font-heading text-4xl font-black text-[#0F172A] md:text-5xl">
                Mas de 10.000 alumnos satisfechos
              </h2>
            </div>

            {/* Testimonials Grid */}
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="rounded-2xl border p-6 shadow-sm">
                  <CardContent className="flex flex-col gap-4 p-0">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400">
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="leading-relaxed text-gray-600">&ldquo;{testimonial.text}&rdquo;</p>

                    {/* Author */}
                    <div className="mt-2 flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-[#0F172A]">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.city}</p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="ml-auto bg-green-50 text-xs text-green-700"
                      >
                        ✓ Google
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Rating Badge */}
            <div className="mt-8 flex justify-center">
              <Badge className="rounded-full bg-amber-50 px-6 py-3 text-amber-800 hover:bg-amber-50">
                ⭐ 4.8/5 en Google · +150 resenas verificadas
              </Badge>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SECTION 9: UBICACION */}
      <AnimatedSection>
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
            alt="Playa Larga Tarragona - Windsurf Tarragona"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0C4A6E]/80" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <h2 className="font-heading text-4xl font-black text-white md:text-5xl">
              Estamos en Playa Larga, Tarragona
            </h2>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0" />
                <span>Carretera N-340, Km 1168, Camping Las Palmeras, 43007 Tarragona</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <span>+34 977 23 27 15</span>
              </div>
              <div className="flex items-center gap-3">
                <InstagramIcon className="h-5 w-5 shrink-0" />
                <span>@windsurftarragona</span>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <Button className="bg-white text-[#0C4A6E] hover:bg-white/90" asChild>
                <a href="tel:+34977232715">📞 Llamar ahora</a>
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/10"
                asChild
              >
                <a
                  href="https://maps.google.com/?q=41.2172,1.0547"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🗺️ Como llegar
                </a>
              </Button>
            </div>

{/* Google Maps */}
  <div className="mt-8 w-full max-w-4xl px-4">
    <iframe
      src="https://maps.google.com/maps?q=41.2172,1.0547&z=15&output=embed"
      className="h-64 w-full rounded-2xl shadow-2xl"
      loading="lazy"
      title="Ubicacion Windsurf Tarragona"
    />
  </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SECTION 10: CONTACTO */}
      <AnimatedSection>
        <section id="contacto" className="bg-[#F0F9FF] px-6 py-20 md:px-16">
          <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-balance font-heading text-4xl font-black text-[#0F172A] md:text-5xl">
                Tienes dudas? Escribenos
              </h2>
              <p className="max-w-2xl text-lg text-gray-500">
                Te respondemos en menos de 24 horas · Tambien puedes llamarnos al 977 23 27 15
              </p>
            </div>

            {/* Contact Form */}
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
              <ContactForm />
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
