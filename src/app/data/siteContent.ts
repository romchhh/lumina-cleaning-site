export type ServiceTheme = 'dark' | 'photo' | 'photoAlt' | 'light'

export type PriceTier = {
  label: string
  price: string
}

export type ServiceItem = {
  id: string
  theme: ServiceTheme
  image: string
  imagePosition?: string
  priceFrom: string
  tiers: PriceTier[]
  includes: string[]
  note?: string
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'standard',
    theme: 'photo',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    priceFrom: 'from $120',
    tiers: [
      { label: '1 bed / 1 bath', price: 'from $120' },
      { label: '2 bed / 1–2 bath', price: 'from $150' },
      { label: '3 bed / 2 bath', price: 'from $200' },
      { label: '4 bed / 2+ bath', price: 'from $250' },
    ],
    includes: [
      'Dusting accessible surfaces',
      'Vacuuming carpets and sweeping floors',
      'Mopping hard floors',
      'Wiping furniture, mirrors, and glass',
      'Kitchen counters, sink, and stovetop',
      'Exterior of appliances',
      'Bathroom tub, shower, toilet, and sink',
      'Trash removal',
      'Bed making upon request',
    ],
    note: 'Ideal for weekly, biweekly, or monthly maintenance.',
  },
  {
    id: 'deep',
    theme: 'dark',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=900&q=80',
    priceFrom: 'from $200',
    tiers: [
      { label: '1 bed / 1 bath', price: 'from $200' },
      { label: '2 bed / 1–2 bath', price: 'from $280' },
      { label: '3 bed / 2 bath', price: 'from $350' },
      { label: '4 bed / 2+ bath', price: 'from $450' },
    ],
    includes: [
      'Everything in standard cleaning',
      'Detailed baseboards, doors, and handles',
      'Accessible windowsills, blinds, and vents',
      'Tile, grout, and shower door scrub',
      'Soap scum and hard water removal',
      'Exterior of cabinets, hood, and appliances',
      'Corners, edges, and hard-to-reach spots',
      'Light fixtures, frames, and decor dusting',
    ],
    note: 'We recommend starting recurring service with a deep clean.',
  },
  {
    id: 'move',
    theme: 'photoAlt',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    priceFrom: 'from $220',
    tiers: [
      { label: '1 bed / 1 bath', price: 'from $220' },
      { label: '2 bed / 1–2 bath', price: 'from $320' },
      { label: '3 bed / 2 bath', price: 'from $420' },
      { label: '4 bed / 2+ bath', price: 'from $550' },
    ],
    includes: [
      'Everything in deep cleaning',
      'Inside kitchen cabinets and drawers',
      'Inside fridge, oven, and microwave',
      'Inside bathroom vanities',
      'Shelves, closets, and pantry',
      'Door, switch, and wall mark removal',
      'Detailed floor care in every room',
      'Final walkthrough quality check',
    ],
    note: 'Add-ons: interior windows, garage, balcony, or carpet cleaning.',
  },
  {
    id: 'laundry',
    theme: 'light',
    image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=900&q=80',
    priceFrom: 'from $280',
    tiers: [
      { label: '2 bed / 1–2 bath', price: 'from $280' },
      { label: '3 bed / 2 bath', price: 'from $350' },
      { label: '4 bed / 2+ bath', price: 'from $450' },
      { label: '5+ bedrooms', price: 'custom quote' },
    ],
    includes: [
      'Full standard clean of all rooms',
      'Kitchen and bathroom detail',
      'Vacuum, sweep, and mop',
      'Dusting mirrors and surfaces',
      'Trash removal',
      'Wash, dry, and fold laundry',
      'Sort and place items in rooms or baskets',
      'Linen change upon request',
    ],
    note: 'Includes up to 2 washer loads. Additional loads from $20 each.',
  },
]

export const REVIEWS = [
  {
    id: 'r1',
    rating: 5,
    name: 'Sarah M.',
    text: 'Our home literally glows after every visit. Punctual, detail-oriented, and they always ask about our preferences.',
  },
  {
    id: 'r2',
    rating: 5,
    name: 'Mike T.',
    text: 'Booked move-out cleaning — the apartment looked brand new. Landlord was impressed and we got our full deposit back.',
  },
  {
    id: 'r3',
    rating: 5,
    name: 'Jennifer R.',
    text: 'Deep clean before the holidays was the best decision. Kitchen and bathrooms have never looked this good.',
  },
  {
    id: 'r4',
    rating: 5,
    name: 'James W.',
    text: 'Six months of biweekly service. Consistent quality every single time. Easy to communicate with too.',
  },
  {
    id: 'r5',
    rating: 5,
    name: 'Anna K.',
    text: 'The laundry add-on is a lifesaver for our busy family. Clothes folded and put away — worth every penny.',
  },
  {
    id: 'r6',
    rating: 5,
    name: 'Peter L.',
    text: 'Fast response, flexible scheduling, fair pricing. No surprises on the invoice. Highly recommend.',
  },
]

export function getServiceById(id: string) {
  return SERVICES.find((s) => s.id === id)
}
