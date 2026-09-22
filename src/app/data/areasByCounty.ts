import { SERVICE_CITIES } from './cities'

export const SERVICE_COUNTIES = [
  { id: 'monmouth', label: 'Monmouth' },
  { id: 'ocean', label: 'Ocean' },
  { id: 'mercer', label: 'Mercer' },
  { id: 'burlington', label: 'Burlington' },
] as const

export type CountyId = (typeof SERVICE_COUNTIES)[number]['id']

const OCEAN_CITIES = new Set([
  'Lakewood', 'Lakehurst', 'Manchester Township', 'Toms River', 'Brick', 'Bayville', 'Beachwood',
  'Brielle', 'Forked River', 'Island Heights', 'Lanoka Harbor', 'Lavallette', 'Manasquan',
  'Mantoloking', 'Ocean Gate', 'Pine Beach', 'Point Pleasant Beach', 'Sea Girt', 'Seaside Heights',
  'Seaside Park', 'Waretown', 'Barnegat', 'Barnegat Light', 'New Egypt',
  'Joint Base McGuire-Dix-Lakehurst',
])

const MERCER_CITIES = new Set([
  'Hightstown', 'Cranbury', 'Plainsboro', 'Princeton', 'Princeton Junction', 'Rocky Hill',
  'Windsor', 'Wrightstown', 'Trenton', 'Lawrence Township',
])

const BURLINGTON_CITIES = new Set([
  'Bordentown', 'Chesterfield', 'Florence', 'Roebling', 'Cookstown', 'Burlington', 'Browns Mills',
  'Chatsworth', 'Columbus', 'Jobstown', 'Juliustown', 'Hainesport', 'Lumberton', 'Mount Holly',
  'New Lisbon', 'Pemberton', 'Willingboro', 'Riverside', 'Rancocas',
])

function cityCounty(city: string): CountyId {
  if (OCEAN_CITIES.has(city)) return 'ocean'
  if (MERCER_CITIES.has(city)) return 'mercer'
  if (BURLINGTON_CITIES.has(city)) return 'burlington'
  return 'monmouth'
}

export const CITIES_BY_COUNTY: Record<CountyId, string[]> = {
  monmouth: [],
  ocean: [],
  mercer: [],
  burlington: [],
}

for (const city of SERVICE_CITIES) {
  CITIES_BY_COUNTY[cityCounty(city)].push(city)
}
