import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center text-white">
        <span className="text-8xl font-black">404</span>
        <h1 className="font-heading text-4xl font-black md:text-5xl">
          Pagina no encontrada
        </h1>
        <p className="max-w-md text-lg text-white/80">
          Parece que esta pagina se ha ido a navegar. 
          No te preocupes, te ayudamos a encontrar lo que buscas.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-[#0C4A6E] hover:bg-white/90"
            asChild
          >
            <Link href="/es">Volver al inicio</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white/10"
            asChild
          >
            <Link href="/es/escuela">Ver nuestros cursos</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
