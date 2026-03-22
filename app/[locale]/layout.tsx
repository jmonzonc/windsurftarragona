import type { Metadata, Viewport } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from '@/components/ui/sonner'
import { routing } from '@/i18n/routing'
import { CookieBanner } from '@/components/CookieBanner'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import '@/app/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://windsurftarragona.com'),
  title: {
    template: '%s | Windsurf Tarragona',
    default: 'Windsurf Tarragona',
  },
  description: 'Escuela náutica en Playa Larga, Tarragona. Cursos de windsurf, kitesurf, catamarán, paddle surf, esquí náutico y más. Costa Dorada.',
  alternates: {
    languages: {
      es: '/es',
      ca: '/ca',
      en: '/en',
      'x-default': '/es',
    },
  },
  other: {
    'geo.region': 'ES-CT',
    'geo.placename': 'Tarragona',
    'geo.position': '41.2172;1.0547',
    ICBM: '41.2172, 1.0547',
  },
}

export const viewport: Viewport = {
  themeColor: '#0EA5E9',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'SportsActivityLocation'],
  name: 'Windsurf Tarragona',
  url: 'https://windsurftarragona.com',
  telephone: '+34977232715',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Carretera N-340, Km 1168, Camping Las Palmeras',
    addressLocality: 'Tarragona',
    postalCode: '43007',
    addressRegion: 'Cataluña',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.2172,
    longitude: 1.0547,
  },
  openingHours: 'Mo-Su 09:00-20:00',
  sameAs: ['https://www.instagram.com/windsurftarragona/'],
  sport: ['Windsurf', 'Kitesurf', 'Catamarán', 'Kayak', 'Paddle Surf', 'Esquí Náutico'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
          <WhatsAppButton />
          <CookieBanner />
          <Toaster richColors position="top-center" />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
