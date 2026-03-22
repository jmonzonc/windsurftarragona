import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const metadata: Metadata = {
  title: 'Politica de Cookies | Windsurf Tarragona',
  description: 'Informacion sobre las cookies utilizadas en el sitio web de Windsurf Tarragona y como gestionarlas.',
  alternates: {
    canonical: 'https://windsurftarragona.com/es/cookies',
    languages: {
      es: '/es/cookies',
      ca: '/ca/cookies',
      en: '/en/cookies',
      'x-default': '/es/cookies',
    },
  },
}

const cookies = [
  {
    name: 'wt_cookie_consent',
    provider: 'Windsurf Tarragona',
    purpose: 'Almacena las preferencias de cookies del usuario',
    duration: '1 ano',
    type: 'Tecnica',
  },
  {
    name: '_ga',
    provider: 'Google Analytics',
    purpose: 'Distinguir usuarios unicos para analisis de trafico',
    duration: '2 anos',
    type: 'Analitica',
  },
  {
    name: '_ga_*',
    provider: 'Google Analytics',
    purpose: 'Mantener el estado de la sesion de analisis',
    duration: '2 anos',
    type: 'Analitica',
  },
  {
    name: '_gid',
    provider: 'Google Analytics',
    purpose: 'Distinguir usuarios durante las ultimas 24 horas',
    duration: '24 horas',
    type: 'Analitica',
  },
  {
    name: 'NID',
    provider: 'Google Maps',
    purpose: 'Almacenar preferencias y mostrar mapas correctamente',
    duration: '6 meses',
    type: 'Terceros',
  },
  {
    name: '1P_JAR',
    provider: 'Google Maps',
    purpose: 'Recopilar estadisticas de uso de mapas',
    duration: '1 mes',
    type: 'Terceros',
  },
]

export default function CookiesPage() {
  return (
    <main className="bg-[#F0F9FF] px-6 py-20 md:px-16">
      <article className="prose prose-slate mx-auto max-w-4xl prose-headings:font-heading prose-headings:text-[#0F172A] prose-a:text-[#0EA5E9]">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500 not-prose">
          <Link href="/es" className="hover:text-[#0EA5E9]">Inicio</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-[#0F172A]">Politica de Cookies</span>
        </nav>

        <h1>Politica de Cookies</h1>

        <p className="lead">
          Esta web utiliza cookies propias y de terceros para mejorar tu experiencia de navegacion 
          y ofrecerte contenidos adaptados a tus intereses.
        </p>

        <h2>Que son las cookies?</h2>
        <p>
          Las cookies son pequenos archivos de texto que los sitios web almacenan en tu dispositivo 
          cuando los visitas. Permiten que el sitio recuerde tus acciones y preferencias durante 
          un periodo de tiempo.
        </p>

        <h2>Tipos de cookies que utilizamos</h2>
        
        <h3>Cookies tecnicas (exentas de consentimiento)</h3>
        <p>
          Son necesarias para el funcionamiento basico del sitio web. Sin ellas, no podrias 
          navegar correctamente por la pagina ni utilizar sus funciones principales.
        </p>

        <h3>Cookies analiticas</h3>
        <p>
          Nos permiten analizar el uso que hacen los usuarios de la web para mejorar nuestros 
          servicios. Utilizamos Google Analytics 4 para este proposito.
        </p>

        <h3>Cookies de terceros</h3>
        <p>
          Son establecidas por servicios externos como Google Maps para mostrar mapas 
          interactivos de nuestra ubicacion.
        </p>

        <h2>Listado de cookies</h2>
        
        <div className="not-prose overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cookie</TableHead>
                <TableHead>Proveedor</TableHead>
                <TableHead>Finalidad</TableHead>
                <TableHead>Duracion</TableHead>
                <TableHead>Tipo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cookies.map((cookie) => (
                <TableRow key={cookie.name}>
                  <TableCell className="font-mono text-sm">{cookie.name}</TableCell>
                  <TableCell>{cookie.provider}</TableCell>
                  <TableCell>{cookie.purpose}</TableCell>
                  <TableCell>{cookie.duration}</TableCell>
                  <TableCell>
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                      cookie.type === 'Tecnica' 
                        ? 'bg-green-100 text-green-800' 
                        : cookie.type === 'Analitica'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {cookie.type}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <h2>Como gestionar las cookies?</h2>
        <p>
          Puedes configurar tus preferencias de cookies en cualquier momento haciendo clic 
          en el boton &ldquo;Configurar cookies&rdquo; del banner de cookies que aparece al visitar 
          nuestra web.
        </p>
        <p>
          Tambien puedes gestionar las cookies desde la configuracion de tu navegador:
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>

        <h2>Actualizaciones</h2>
        <p>
          Esta politica puede ser modificada segun exigencias legislativas o por cambios 
          en nuestras practicas. Te recomendamos revisarla periodicamente.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Ultima actualizacion: Marzo 2026
        </p>
      </article>
    </main>
  )
}
