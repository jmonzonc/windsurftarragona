'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ZoomIn, X } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/components/AnimatedSection'

interface GalleryImage {
  src: string
  alt: string
  caption: string
  aspectRatio: 'square' | 'portrait' | 'landscape'
}

const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1517699418036-fb5d179fef0c?w=800&q=80',
    alt: 'Windsurf en acción en Playa Larga, Tarragona',
    caption: 'Windsurf en acción',
    aspectRatio: 'landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    alt: 'Salto de kitesurf en Playa Larga, Tarragona',
    caption: 'Kitesurf - salto espectacular',
    aspectRatio: 'portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    alt: 'Kayak en cala de Playa Larga, Tarragona',
    caption: 'Kayak en aguas cristalinas',
    aspectRatio: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=800&q=80',
    alt: 'Familia en banana boat en Playa Larga, Tarragona',
    caption: 'Diversión en familia',
    aspectRatio: 'landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?w=800&q=80',
    alt: 'Catamarán al atardecer en Playa Larga, Tarragona',
    caption: 'Catamarán al atardecer',
    aspectRatio: 'portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1526188717906-ab4a2f949f46?w=800&q=80',
    alt: 'Grupo de paddle surf en Playa Larga, Tarragona',
    caption: 'Paddle Surf en grupo',
    aspectRatio: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    alt: 'Vista panorámica de Playa Larga, Tarragona',
    caption: 'Playa Larga - Costa Dorada',
    aspectRatio: 'landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80',
    alt: 'Instructor y alumno de surf en Playa Larga, Tarragona',
    caption: 'Aprendiendo con los mejores',
    aspectRatio: 'portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1601024445121-0f152cde6098?w=800&q=80',
    alt: 'Wakeboard en Playa Larga, Tarragona',
    caption: 'Wakeboard - adrenalina pura',
    aspectRatio: 'square',
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

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const getAspectClass = (ratio: GalleryImage['aspectRatio']) => {
    switch (ratio) {
      case 'portrait':
        return 'aspect-[3/4]'
      case 'landscape':
        return 'aspect-video'
      default:
        return 'aspect-square'
    }
  }

  return (
    <AnimatedSection>
      <section id="galeria" className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <Badge className="rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] hover:bg-[#0EA5E9]/10">
              GALERIA
            </Badge>
            <h2 className="text-balance font-heading text-4xl font-black text-[#0F172A] md:text-5xl">
              Vivelo en primera persona
            </h2>
            <p className="max-w-2xl text-lg text-gray-500">
              Momentos reales en Playa Larga
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative mb-4 cursor-pointer overflow-hidden rounded-xl break-inside-avoid ${getAspectClass(image.aspectRatio)}`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                  <ZoomIn className="h-10 w-10 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              asChild
            >
              <a
                href="https://instagram.com/windsurftarragona"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="h-5 w-5" />
                Ver mas en Instagram @windsurftarragona
              </a>
            </Button>
          </div>
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
            <DialogTitle className="sr-only">
              {selectedImage?.caption || 'Imagen de galeria'}
            </DialogTitle>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20"
              aria-label="Cerrar"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <Image
                  src={selectedImage.src.replace('w=800', 'w=1600')}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-center text-lg font-medium text-white">
                    {selectedImage.caption}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </AnimatedSection>
  )
}
