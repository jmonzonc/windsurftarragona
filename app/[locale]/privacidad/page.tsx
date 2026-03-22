import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Politica de Privacidad | Windsurf Tarragona',
  description: 'Politica de privacidad y proteccion de datos de Windsurf Tarragona. Informacion sobre el tratamiento de datos personales conforme al RGPD.',
  alternates: {
    canonical: 'https://windsurftarragona.com/es/privacidad',
    languages: {
      es: '/es/privacidad',
      ca: '/ca/privacidad',
      en: '/en/privacidad',
      'x-default': '/es/privacidad',
    },
  },
}

export default function PrivacidadPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://windsurftarragona.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Politica de Privacidad',
        item: 'https://windsurftarragona.com/es/privacidad',
      },
    ],
  }

  return (
    <main className="bg-[#F0F9FF] px-6 py-20 md:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="prose prose-slate mx-auto max-w-3xl prose-headings:font-heading prose-headings:text-[#0F172A] prose-a:text-[#0EA5E9]">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500 not-prose">
          <Link href="/es" className="hover:text-[#0EA5E9]">Inicio</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-[#0F172A]">Politica de Privacidad</span>
        </nav>

        <h1>Politica de Privacidad</h1>
        
        <p className="lead">
          En Windsurf Tarragona nos tomamos muy en serio la proteccion de tus datos personales. 
          Esta politica describe como recopilamos, usamos y protegemos tu informacion.
        </p>

        <h2>1. Responsable del tratamiento</h2>
        <ul>
          <li><strong>Responsable:</strong> Windsurf Tarragona</li>
          <li><strong>Direccion:</strong> Carretera N-340, Km 1168, Camping Las Palmeras, 43007 Tarragona</li>
          <li><strong>Email:</strong> info@windsurftarragona.com</li>
          <li><strong>Telefono:</strong> +34 977 23 27 15</li>
        </ul>

        <h2>2. Datos que recopilamos</h2>
        <p>A traves del formulario de contacto de nuestra web, recopilamos:</p>
        <ul>
          <li>Nombre completo</li>
          <li>Direccion de correo electronico</li>
          <li>Numero de telefono (opcional)</li>
          <li>Mensaje de consulta</li>
        </ul>

        <h2>3. Finalidad del tratamiento</h2>
        <p>
          Utilizamos tus datos personales exclusivamente para responder a tus consultas 
          y proporcionarte informacion sobre nuestros servicios y actividades nauticas.
        </p>

        <h2>4. Base legal</h2>
        <p>
          El tratamiento de tus datos se basa en tu consentimiento expreso (Art. 6.1.a del RGPD), 
          otorgado al marcar la casilla de aceptacion en el formulario de contacto.
        </p>

        <h2>5. Plazo de conservacion</h2>
        <p>
          Conservaremos tus datos durante un periodo maximo de 3 anos desde tu ultima interaccion 
          con nosotros, o hasta que solicites su supresion.
        </p>

        <h2>6. Tus derechos</h2>
        <p>Conforme al RGPD, tienes derecho a:</p>
        <ul>
          <li><strong>Acceso:</strong> Solicitar informacion sobre tus datos personales</li>
          <li><strong>Rectificacion:</strong> Corregir datos inexactos</li>
          <li><strong>Supresion:</strong> Solicitar la eliminacion de tus datos</li>
          <li><strong>Oposicion:</strong> Oponerte al tratamiento de tus datos</li>
          <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
          <li><strong>Limitacion:</strong> Solicitar la limitacion del tratamiento</li>
        </ul>
        <p>
          Para ejercer estos derechos, contactanos en{' '}
          <a href="mailto:info@windsurftarragona.com">info@windsurftarragona.com</a>.
        </p>

        <h2>7. Seguridad</h2>
        <p>
          Implementamos medidas tecnicas y organizativas apropiadas para proteger tus datos 
          personales contra el acceso no autorizado, la alteracion, divulgacion o destruccion.
        </p>

        <h2>8. Actualizaciones</h2>
        <p>
          Esta politica puede ser actualizada periodicamente. Te recomendamos revisarla 
          regularmente para estar informado de cualquier cambio.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Ultima actualizacion: Marzo 2026
        </p>
      </article>
    </main>
  )
}
