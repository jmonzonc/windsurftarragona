'use client'

import { useActionState, useEffect, useState } from 'react'
import Link from 'next/link'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Spinner } from '@/components/ui/spinner'
import { submitContactForm, type ContactFormState } from '@/app/actions/contact'

const interestOptions = [
  'Windsurf',
  'Kitesurf',
  'Catamaran',
  'Patin Catalan',
  'Paddle Surf',
  'Esqui Nautico',
  'Wake-board',
  'Surf',
  'Wing Foil',
  'Kayak',
  'Banana Boat',
  'Donut',
  'Paseos en Lancha',
  'Actividad en grupo',
  'Otro',
]

const initialState: ContactFormState = {
  success: false,
  message: '',
}

interface ContactFormProps {
  defaultInterest?: string
}

export function ContactForm({ defaultInterest }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const [messageLength, setMessageLength] = useState(0)
  const [selectedInterest, setSelectedInterest] = useState(defaultInterest || '')
  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message + ' 🌊')
      } else {
        toast.error(state.message)
      }
    }
  }, [state])

  return (
    <form action={formAction} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Nombre completo *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          placeholder="Tu nombre"
          className="border-gray-200 bg-white"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
          className="border-gray-200 bg-white"
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">Telefono</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+34 600 000 000"
          className="border-gray-200 bg-white"
        />
      </div>

      {/* Interest */}
      <div className="space-y-2">
        <Label htmlFor="interest">Actividad de interes *</Label>
        <Select
          name="interest"
          required
          value={selectedInterest}
          onValueChange={setSelectedInterest}
        >
          <SelectTrigger className="border-gray-200 bg-white">
            <SelectValue placeholder="Selecciona una actividad" />
          </SelectTrigger>
          <SelectContent>
            {interestOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input type="hidden" name="interest" value={selectedInterest} />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="message">Mensaje *</Label>
          <span className="text-xs text-gray-400">{messageLength}/500</span>
        </div>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={500}
          rows={4}
          placeholder="Cuentanos que te interesa..."
          className="resize-none border-gray-200 bg-white"
          onChange={(e) => setMessageLength(e.target.value.length)}
        />
      </div>

      {/* Privacy */}
      <div className="flex items-start gap-3">
        <Checkbox
          id="privacyAccepted"
          name="privacyAccepted"
          required
          checked={privacyAccepted}
          onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
        />
        <Label htmlFor="privacyAccepted" className="text-sm leading-relaxed text-gray-600">
          Acepto la{' '}
          <Link href="/es/privacidad" className="text-[#0EA5E9] underline hover:no-underline">
            Politica de Privacidad
          </Link>{' '}
          *
        </Label>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-[#0EA5E9] font-bold text-white hover:bg-[#0284C7]"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Spinner className="mr-2 h-4 w-4" />
            Enviando...
          </>
        ) : (
          'Enviar mensaje'
        )}
      </Button>

      <p className="text-center text-xs text-gray-400">
        Los campos marcados con * son obligatorios
      </p>
    </form>
  )
}
