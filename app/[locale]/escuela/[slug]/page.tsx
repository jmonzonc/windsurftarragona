import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Check, Clock, Users, Award, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { services } from '@/data/services'
import { routing } from '@/i18n/routing'
import { AnimatedSection } from '@/components/AnimatedSection'
import { ContactForm } from '@/components/sections/ContactForm'

export const revalidate = 3600

type Params = Promise<{ locale: string; slug: string }>

export async function generateStaticParams(): Promise<{ locale: string; slug: string }[]> {
  const params: { locale: string; slug: string }[] = []

  for (const locale of routing.locales) {
    for (const service of services) {
      params.push({ locale, slug: service.slug })
    }
  }

  return params
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return {
      title: 'Curso no encontrado',
    }
  }

  const ogLocale = locale === 'es' ? 'es_ES' : locale === 'ca' ? 'ca_ES' : 'en_US'

  return {
    title: `Curso de ${service.name} en Tarragona | Windsurf Tarragona`,
    description: `Aprende ${service.name} en Tarragona con monitores titulados FVE/RFEV. Todos los niveles en Playa Larga, Costa Dorada. Abierto todo el ano. Tel 977 23 27 15`,
    alternates: {
      canonical: `https://windsurftarragona.com/${locale}/escuela/${slug}`,
      languages: {
        es: `https://windsurftarragona.com/es/escuela/${slug}`,
        ca: `https://windsurftarragona.com/ca/escuela/${slug}`,
        en: `https://windsurftarragona.com/en/escuela/${slug}`,
        'x-default': `https://windsurftarragona.com/es/escuela/${slug}`,
      },
    },
    openGraph: {
      title: `Curso de ${service.name} en Tarragona | Windsurf Tarragona`,
      description: `Aprende ${service.name} en Tarragona con monitores titulados FVE/RFEV.`,
      url: `https://windsurftarragona.com/${locale}/escuela/${slug}`,
      type: 'website',
      locale: ogLocale,
    },
  }
}

export default async function CoursePage({ params }: { params: Params }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const relatedServices = services.filter((s) => service.relatedSlugs.includes(s.slug))

  // Append location FAQ
  const allFaqs = [
    ...service.faqs,
    {
      question: `Donde se imparte el curso de ${service.name} en Tarragona?`,
      answer: `El curso de ${service.name} se imparte en Playa Larga, Tarragona, junto al Camping Las Palmeras (Carretera N-340, Km 1168). Las coordenadas son 41.2172 N, 1.0547 E. Contacta con nosotros en el 977 23 27 15.`,
    },
  ]

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `Curso de ${service.name} en Tarragona`,
    description: service.longDescription,
    provider: {
      '@type': 'Organization',
      name: 'Windsurf Tarragona',
      url: 'https://windsurftarragona.com',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      location: {
        '@type': 'Place',
        name: 'Playa Larga',
        address: 'Carretera N-340 Km 1168, 43007 Tarragona',
      },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
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
        item: 'https://windsurftarragona.com/es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Escuela',
        item: 'https://windsurftarragona.com/es/escuela',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `https://windsurftarragona.com/es/escuela/${service.slug}`,
      },
    ],
  }

  const levelIcons: Record<string, React.ReactNode> = {
    Iniciacion: <Users className="h-5 w-5" />,
    Intermedio: <Award className="h-5 w-5" />,
    Avanzado: <Star className="h-5 w-5" />,
  }

  const levelColors: Record<string, string> = {
    Iniciacion: 'bg-green-100 text-green-800',
    Intermedio: 'bg-amber-100 text-amber-800',
    Avanzado: 'bg-red-100 text-red-800',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* SECTION 1 - Hero */}
      <section className="relative flex h-[60vh] min-h-[500px] items-center justify-center">
        <Image
          src={`https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80`}
          alt={`Curso de ${service.name} en Tarragona - Playa Larga`}
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
            className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm text-white/80"
          >
            <Link href="/es" className="hover:text-white">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <Link href="/es/escuela" className="hover:text-white">
              Escuela
            </Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <span className="text-white">{service.name}</span>
          </nav>

          <h1 className="font-heading text-4xl font-black text-white md:text-5xl lg:text-6xl">
            Curso de {service.name} en Tarragona
          </h1>
          <p className="mt-4 text-lg text-white/90 md:text-xl">{service.description}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white font-bold text-[#0C4A6E] hover:bg-white/90"
              asChild
            >
              <a href="#contacto">Solicitar informacion</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <Link href="/es/escuela">Ver todos los cursos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Description */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <AnimatedSection>
            <h2 className="mb-8 font-heading text-3xl font-bold text-[var(--wt-deep)]">
              Que es el {service.name}?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{service.longDescription}</p>
              <p>
                En nuestra escuela de {service.name} en Tarragona, contamos con mas de 20 anos de
                experiencia formando a navegantes de todos los niveles. Las condiciones de Playa
                Larga, en la Costa Dorada, son ideales para la practica de este deporte durante todo
                el ano.
              </p>
              <p>
                Nuestro equipo de monitores titulados FVE/RFEV te guiara paso a paso, adaptando cada
                sesion a tu nivel y objetivos. Utilizamos material de ultima generacion para
                garantizar tu seguridad y progresion.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg bg-[var(--wt-bg)] p-4">
                <Check className="h-5 w-5 shrink-0 text-[#0EA5E9]" />
                <span className="text-gray-700">Para todos los niveles</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-[var(--wt-bg)] p-4">
                <Check className="h-5 w-5 shrink-0 text-[#0EA5E9]" />
                <span className="text-gray-700">Material incluido</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-[var(--wt-bg)] p-4">
                <Check className="h-5 w-5 shrink-0 text-[#0EA5E9]" />
                <span className="text-gray-700">Monitores titulados FVE/RFEV</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 - Levels */}
      <section className="bg-[var(--wt-bg)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-[var(--wt-deep)]">
              Niveles disponibles
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {service.levels.map((level, index) => (
              <AnimatedSection key={level.name} delay={index * 0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <Badge className={`mb-2 w-fit ${levelColors[level.name] || 'bg-gray-100'}`}>
                      <span className="mr-1">{levelIcons[level.name]}</span>
                      {level.name}
                    </Badge>
                    <CardTitle className="font-heading text-xl">{level.name}</CardTitle>
                    <p className="text-sm text-gray-600">{level.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{level.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {level.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0EA5E9]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="mt-6 w-full bg-[#0EA5E9] text-white hover:bg-[#0284C7]"
                      asChild
                    >
                      <a href="#contacto">Solicitar info</a>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - What's Included */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <AnimatedSection>
            <h2 className="mb-8 font-heading text-3xl font-bold text-[var(--wt-deep)]">
              Que incluye el curso?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0EA5E9]" />
                <span className="text-gray-700">Material de ultima generacion</span>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0EA5E9]" />
                <span className="text-gray-700">Traje de neopreno</span>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0EA5E9]" />
                <span className="text-gray-700">Monitor titulado FVE/RFEV</span>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0EA5E9]" />
                <span className="text-gray-700">Seguro de actividad</span>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm md:col-span-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0EA5E9]" />
                <span className="text-gray-700">
                  Instalaciones Camping Las Palmeras, Playa Larga, Tarragona
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 - FAQ */}
      <section className="bg-[var(--wt-bg)] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <AnimatedSection>
            <h2 className="mb-8 font-heading text-3xl font-bold text-[var(--wt-deep)]">
              Preguntas frecuentes sobre el {service.name} en Tarragona
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {allFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-[#0EA5E9]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 - Related Courses */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <AnimatedSection>
              <h2 className="mb-12 text-center font-heading text-3xl font-bold text-[var(--wt-deep)]">
                Tambien te puede interesar
              </h2>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedServices.map((related, index) => (
                <AnimatedSection key={related.slug} delay={index * 0.1}>
                  <Link href={`/es/escuela/${related.slug}`}>
                    <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={`https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80`}
                          alt={`Curso de ${related.name} en Tarragona`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        {related.minAge && (
                          <Badge className="absolute right-3 top-3 bg-white/90 text-[#0C4A6E]">
                            +{related.minAge} anos
                          </Badge>
                        )}
                        <div className="absolute bottom-3 left-3 right-3">
                          <h3 className="font-heading text-xl font-bold text-white">
                            {related.name}
                          </h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="line-clamp-2 text-sm text-gray-600">{related.description}</p>
                        <div className="mt-4 flex items-center text-sm font-medium text-[#0EA5E9]">
                          Ver curso
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 7 - Contact Form */}
      <section id="contacto" className="bg-[var(--wt-bg)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl">
            <AnimatedSection>
              <h2 className="mb-4 text-center font-heading text-3xl font-bold text-[var(--wt-deep)]">
                Solicita informacion sobre {service.name}
              </h2>
              <p className="mb-8 text-center text-gray-600">
                Completa el formulario y te contactaremos en menos de 24 horas
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="p-6">
                <ContactForm defaultInterest={service.name} />
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
