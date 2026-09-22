import { BRAND } from '../brand'

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://royalglowcleaning.com').replace(/\/$/, '')

export const SITE_NAME = BRAND.name

export const DEFAULT_DESCRIPTION =
  'Professional residential cleaning in Monmouth, Ocean, Mercer & Burlington Counties, NJ. Standard, deep, move-in/out & laundry services. Book online or call for a free quote.'

export const LEGAL_PATHS = {
  privacy: '/privacy-policy',
  terms: '/terms-and-conditions',
  cancellation: '/cancellation-policy',
  cookies: '/cookies-policy',
  subscription: '/subscription-terms',
} as const

export const OPENING_HOURS = {
  weekdays: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
  weekend: { days: ['Saturday', 'Sunday'], opens: '08:00', closes: '18:00' },
} as const
