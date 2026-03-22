import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aviso Legal | Windsurf Tarragona',
  description: 'Aviso legal e informacion del titular de Windsurf Tarragona. Condiciones de uso del sitio web.',
  alternates: {
    canonical: 'https://windsurftarragona.com/es/aviso-legal',
    languages: {
      es: '/es/aviso-legal',
      ca: '/ca/aviso-legal',
      en: '/en/aviso-legal',
      'x-default': '/es/aviso-legal',
    },
  },
}

// TODO: completar datos fiscales antes de publicar
export default function AvisoLegalPage() {
  return (
    <main className="bg-[#F0F9FF] px-6 py-20 md:px-16">
      <article className="prose prose-slate mx-auto max-w-3xl prose-headings:font-heading prose-headings:text-[#0F172A] prose-a:text-[#0EA5E9]">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500 not-prose">
          <Link href="/es" className="hover:text-[#0EA5E9]">Inicio</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-[#0F172A]">Aviso Legal</span>
        </nav>

        <h1>Aviso Legal</h1>

        <h2>1. Datos identificativos del titular</h2>
        <p>En cumplimiento del deber de informacion establecido en la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informacion y comercio electronico (LSSI-CE), se facilitan los siguientes datos:</p>
        
        <ul>
          <li><strong>Titular:</strong> [TODO: nombre fiscal completo]</li>
          <li><strong>NIF:</strong> [TODO: completar NIF/CIF]</li>
          <li><strong>Domicilio:</strong> Carretera N-340, Km 1168, Camping Las Palmeras, 43007 Tarragona</li>
          <li><strong>Actividad:</strong> Escuela nautica y actividades acuaticas</li>
          <li><strong>Email:</strong> info@windsurftarragona.com</li>
          <li><strong>Telefono:</strong> +34 977 23 27 15</li>
        </ul>

        <h2>2. Objeto</h2>
        <p>
          Este sitio web tiene como finalidad informar sobre los servicios de escuela nautica 
          y actividades acuaticas que ofrece Windsurf Tarragona en Playa Larga, Tarragona.
        </p>

        <h2>3. Condiciones de uso</h2>
        <p>
          El acceso y uso de este sitio web atribuye la condicion de usuario e implica 
          la aceptacion plena de todas las condiciones incluidas en este Aviso Legal.
        </p>
        <p>El usuario se compromete a:</p>
        <ul>
          <li>Hacer un uso adecuado de los contenidos y servicios ofrecidos</li>
          <li>No realizar actividades ilicitas o contrarias a la buena fe</li>
          <li>No difundir contenidos o propaganda de caracter racista, xenofobo, pornografico, de apologia del terrorismo o que atenten contra los derechos humanos</li>
          <li>No provocar danos en los sistemas fisicos y logicos del sitio web</li>
        </ul>

        <h2>4. Propiedad intelectual</h2>
        <p>
          Todos los contenidos de este sitio web (textos, fotografias, graficos, imagenes, 
          iconos, tecnologia, software, enlaces y demas contenidos audiovisuales o sonoros), 
          asi como su diseno grafico y codigos fuente, son propiedad intelectual de Windsurf Tarragona 
          o de terceros que han autorizado su uso.
        </p>
        <p>
          Queda prohibida la reproduccion, distribucion, comunicacion publica y transformacion 
          de estos contenidos sin autorizacion expresa.
        </p>

        <h2>5. Exclusion de responsabilidad</h2>
        <p>Windsurf Tarragona no se hace responsable de:</p>
        <ul>
          <li>La falta de disponibilidad, mantenimiento y efectivo funcionamiento del sitio web</li>
          <li>Los danos que puedan causarse por fallos de seguridad del sitio web</li>
          <li>El contenido de las paginas web de terceros a las que se pueda acceder desde este sitio</li>
          <li>La presencia de virus o elementos daninos en los contenidos</li>
        </ul>

        <h2>6. Enlaces externos</h2>
        <p>
          Este sitio web puede contener enlaces a paginas externas. Windsurf Tarragona 
          no asume ninguna responsabilidad por el contenido de dichas paginas.
        </p>

        <h2>7. Legislacion aplicable</h2>
        <p>
          Este Aviso Legal se rige por la legislacion espanola. Para cualquier controversia 
          que pudiera surgir, las partes se someten a los Juzgados y Tribunales de Tarragona.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Ultima actualizacion: Marzo 2026
        </p>
      </article>
    </main>
  )
}
