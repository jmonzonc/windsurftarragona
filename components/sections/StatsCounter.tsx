'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, Users, Compass, Calendar } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Stat {
  value: number
  suffix: string
  label: string
  icon: LucideIcon
}

const stats: Stat[] = [
  { value: 20, suffix: '+', label: 'Años de experiencia', icon: Award },
  { value: 10000, suffix: '+', label: 'Alumnos formados', icon: Users },
  { value: 9, suffix: '', label: 'Disciplinas náuticas', icon: Compass },
  { value: 12, suffix: '', label: 'Meses abiertos al año', icon: Calendar },
]

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Ease out function
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start])

  return count
}

function StatItem({ stat, isVisible }: { stat: Stat; isVisible: boolean }) {
  const count = useCountUp(stat.value, 2000, isVisible)
  const Icon = stat.icon

  return (
    <div className="flex flex-col items-center gap-2">
      <Icon className="h-8 w-8 text-white/80" />
      <span className="font-heading text-5xl font-black text-white">
        {count.toLocaleString()}{stat.suffix}
      </span>
      <span className="text-center font-sans text-sm font-medium text-white/80">
        {stat.label}
      </span>
    </div>
  )
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="stats"
      className="grid grid-cols-2 gap-8 bg-[#0EA5E9] px-6 py-12 md:grid-cols-4 md:px-16"
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} isVisible={isVisible} />
      ))}
    </section>
  )
}
