import { IMAGE_WIDTH, unsplashImage } from './lib/images'

export const BRAND = {
  name: 'Royal Glow Cleaning',
  shortName: 'Royal Glow',
  tagline: 'When your home truly glows',
  phone: '(908) 733-6768',
  phoneTel: '+19087336768',
  email: 'royalglowcleaning01@gmail.com',
  whatsapp: 'https://wa.me/19087336768',
  address: 'Monmouth, Ocean, Mercer & Burlington Counties',
  city: 'New Jersey, USA',
  hero: unsplashImage('photo-1628177142898-93e36e4e3a50', IMAGE_WIDTH.hero),
  contactImage: unsplashImage('photo-1556911220-bff31c812dba', IMAGE_WIDTH.contact),
  aboutTeam: unsplashImage('photo-1581578731548-c64695cc6952', IMAGE_WIDTH.about),
  aboutCta: unsplashImage('photo-1527515637462-cff94eecc1ac', IMAGE_WIDTH.about),
} as const

export const ZIP_PATTERN = /^\d{5}(?:-\d{4})?$/
