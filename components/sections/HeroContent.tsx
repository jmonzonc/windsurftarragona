'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface HeroContentProps {
  locale: string
}

const staggerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
}

export function HeroContent({ locale }: HeroContentProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative z-10 flex max-w-2xl flex-col justify-center gap-6 px-6 md:px-16">
      <motion.div
        initial="hidden"
        animate="visible"
        custom={0}
        variants={staggerVariants}
      >
        <Badge className="w-fit bg-white/20 text-white hover:bg-white/30">
          Playa Larga, Tarragona - Costa Dorada
        </Badge>
      </motion.div>

      <motion.h1
        initial="hidden"
        animate="visible"
        custom={0.1}
        variants={staggerVariants}
        className="font-heading font-black leading-[1.1] text-white"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
      >
        Aprende a navegar.
        <br />
        Vive el Mediterráneo.
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        custom={0.2}
        variants={staggerVariants}
        className="max-w-xl font-sans text-lg font-medium text-white/90 md:text-xl"
      >
        Escuela náutica en Tarragona - Windsurf, Kitesurf, Catamarán y actividades
        acuáticas para todos los niveles. Monitores titulados FVE/RFEV.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        custom={0.3}
        variants={staggerVariants}
        className="flex flex-wrap gap-4"
      >
        <Button
          size="lg"
          className="bg-[#0EA5E9] text-white hover:bg-[#0EA5E9]/90"
          onClick={() => scrollTo('escuela')}
        >
          Ver cursos
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white bg-transparent text-white hover:bg-white/20"
          onClick={() => scrollTo('actividades')}
        >
          Ver actividades
        </Button>
      </motion.div>
    </div>
  )
}
