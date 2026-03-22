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

const groupTypeOptions = [
  'Colegio / Escuela',
  'Empresa - Team Building',
  'Grupo de amigos',
  'Despedida de soltero/a',
  'Otro',
]

const groupSizeOptions = ['5-10 personas', '11-20 personas', '21-30 personas', 'Mas de 30 personas']

const initialState: ContactFormState = {
  success: false,
  message: '',
}

export function GroupContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const [messageLength, setMessageLength] = useState(0)
  const [groupType, setGroupType] = useState('')
  const [groupSize, setGroupSize] = useState('')
  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message)
      } else {
        toast.error(state.message)
      }
    }
  }, [state])

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
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
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Telefono *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+34 600 000 000"
            className="border-gray-200 bg-white"
          />
        </div>

        {/* Group Type */}
        <div className="space-y-2">
          <Label htmlFor="groupType">Tipo de grupo *</Label>
          <Select name="groupType" required value={groupType} onValueChange={setGroupType}>
            <SelectTrigger className="border-gray-200 bg-white">
              <SelectValue placeholder="Selecciona tipo" />
            </SelectTrigger>
            <SelectContent>
              {groupTypeOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="interest" value={`Grupo: ${groupType}`} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Group Size */}
        <div className="space-y-2">
          <Label htmlFor="groupSize">Numero de personas *</Label>
          <Select name="groupSize" required value={groupSize} onValueChange={setGroupSize}>
            <SelectTrigger className="border-gray-200 bg-white">
              <SelectValue placeholder="Selecciona tamano" />
            </SelectTrigger>
            <SelectContent>
              {groupSizeOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Approximate Date */}
        <div className="space-y-2">
          <Label htmlFor="date">Fecha aproximada</Label>
          <Input
            id="date"
            name="date"
            type="text"
            placeholder="ej: julio 2025"
            className="border-gray-200 bg-white"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="message">Cuentanos mas sobre vuestro grupo *</Label>
          <span className="text-xs text-gray-400">{messageLength}/500</span>
        </div>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={500}
          rows={4}
          placeholder="Actividades de interes, objetivos del grupo, edades, necesidades especiales..."
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
          'Solicitar presupuesto'
        )}
      </Button>

      <p className="text-center text-xs text-gray-400">
        Te responderemos en menos de 24 horas laborables
      </p>
    </form>
  )
}
