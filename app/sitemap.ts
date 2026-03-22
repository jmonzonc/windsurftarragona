import type { MetadataRoute } from 'next'

const baseUrl = 'https://windsurftarragona.com'
const locales = ['es', 'ca', 'en'] as const

const routes = [
  { path: '', freq: 'weekly' as const, priority: 1.0 },
  { path: '/escuela', freq: 'weekly' as const, priority: 0.9 },
  { path: '/escuela/windsurf', freq: 'weekly' as const, priority: 0.9 },
  { path: '/escuela/kitesurf', freq: 'weekly' as const, priority: 0.9 },
  { path: '/escuela/catamaran', freq: 'weekly' as const, priority: 0.8 },
  { path: '/escuela/patin-catalan', freq: 'weekly' as const, priority: 0.8 },
  { path: '/escuela/paddle-surf', freq: 'weekly' as const, priority: 0.8 },
  { path: '/escuela/esqui-nautico', freq: 'weekly' as const, priority: 0.8 },
  { path: '/escuela/wake-board', freq: 'weekly' as const, priority: 0.8 },
  { path: '/escuela/surf', freq: 'weekly' as const, priority: 0.8 },
  { path: '/escuela/wing-foil', freq: 'weekly' as const, priority: 0.8 },
  { path: '/actividades', freq: 'weekly' as const, priority: 0.9 },
  { path: '/actividades/kayak', freq: 'monthly' as const, priority: 0.7 },
  { path: '/actividades/banana-boat', freq: 'monthly' as const, priority: 0.7 },
  { path: '/actividades/paseos-lancha', freq: 'monthly' as const, priority: 0.7 },
  { path: '/grupos', freq: 'monthly' as const, priority: 0.8 },
  { path: '/contacto', freq: 'monthly' as const, priority: 0.7 },
  { path: '/privacidad', freq: 'monthly' as const, priority: 0.3 },
  { path: '/aviso-legal', freq: 'monthly' as const, priority: 0.3 },
  { path: '/cookies', freq: 'monthly' as const, priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.freq,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${route.path}`])
        ),
      },
    }))
  )
}
