'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email invalido'),
  phone: z.string().optional(),
  interest: z.string().min(1, 'Selecciona una actividad'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(500, 'El mensaje no puede superar los 500 caracteres'),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar la politica de privacidad' }),
  }),
})

export type ContactFormState = {
  success: boolean
  message: string
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone') || undefined,
    interest: formData.get('interest'),
    message: formData.get('message'),
    privacyAccepted: formData.get('privacyAccepted') === 'on',
  }

  const validatedData = contactSchema.safeParse(rawData)

  if (!validatedData.success) {
    return {
      success: false,
      message: validatedData.error.errors[0]?.message || 'Error de validacion',
    }
  }

  // Check if Resend API key is configured
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    // In development without Resend configured, return success
    // This allows testing the form without email functionality
    return {
      success: true,
      message: 'Mensaje enviado correctamente. Te responderemos en menos de 24h.',
    }
  }

  try {
    // Send email using Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Windsurf Tarragona <noreply@windsurftarragona.com>',
        to: ['info@windsurftarragona.com'],
        subject: `Nueva consulta: ${validatedData.data.interest}`,
        html: `
          <h2>Nueva consulta desde la web</h2>
          <p><strong>Nombre:</strong> ${validatedData.data.name}</p>
          <p><strong>Email:</strong> ${validatedData.data.email}</p>
          ${validatedData.data.phone ? `<p><strong>Telefono:</strong> ${validatedData.data.phone}</p>` : ''}
          <p><strong>Interes:</strong> ${validatedData.data.interest}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${validatedData.data.message}</p>
        `,
      }),
    })

    if (!response.ok) {
      throw new Error('Error sending email')
    }

    return {
      success: true,
      message: 'Mensaje enviado correctamente. Te responderemos en menos de 24h.',
    }
  } catch {
    return {
      success: false,
      message: 'Error al enviar el mensaje. Llamanos al +34 977 23 27 15',
    }
  }
}
