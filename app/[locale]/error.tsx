'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error('Error:', error)
  }, [error])

  return (
    <main className="flex min-h-dvh items-center justify-center bg-[#F0F9FF] px-6">
      <div className="flex max-w-md flex-col items-center gap-6 text-center">
        {/* Icon */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="h-10 w-10 text-red-600" />
        </div>

        {/* Title */}
        <h1 className="font-heading text-3xl font-black text-[#0F172A]">
          Algo ha ido mal
        </h1>

        {/* Description */}
        <p className="text-gray-500">
          Lo sentimos, ha ocurrido un error inesperado. 
          Puedes intentar recargar la pagina o volver al inicio.
        </p>

        {/* Error details (only in development) */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="w-full rounded-lg bg-red-50 p-4 text-left">
            <p className="font-mono text-sm text-red-800">{error.message}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-4">
          <Button
            onClick={reset}
            className="bg-[#0EA5E9] text-white hover:bg-[#0284C7]"
          >
            Intentar de nuevo
          </Button>
          <Button variant="outline" asChild>
            <Link href="/es">Ir al inicio</Link>
          </Button>
        </div>

        {/* Support */}
        <p className="mt-4 text-sm text-gray-400">
          Si el problema persiste, llamanos al{' '}
          <a href="tel:+34977232715" className="text-[#0EA5E9] hover:underline">
            977 23 27 15
          </a>
        </p>
      </div>
    </main>
  )
}
