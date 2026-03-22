export interface FAQ {
  question: string
  answer: string
}

export interface ServiceLevel {
  name: string
  description: string
  duration: string
  included: string[]
}

export interface Service {
  slug: string
  name: string
  nameEn: string
  nameCa: string
  description: string
  longDescription: string
  unsplashQuery: string
  levels: ServiceLevel[]
  included: string[]
  minAge?: number
  faqs: FAQ[]
  relatedSlugs: string[]
}

export interface Activity {
  slug: string
  name: string
  description: string
  emoji: string
  minAge?: number
  unsplashQuery: string
  faqs: FAQ[]
}

export interface Testimonial {
  id: string
  name: string
  city: string
  country: string
  rating: number
  text: string
  avatarQuery: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  interest: string
  message: string
  privacyAccepted: boolean
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'paid'

export interface Booking {
  id: string
  service: string
  date: string
  slots: number
  customerName: string
  customerEmail: string
  customerPhone: string
  status: BookingStatus
  totalAmount?: number
  stripePaymentId?: string
}

export interface TimeSlot {
  date: string
  available: boolean
  booked: boolean
}
