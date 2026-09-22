export type ServiceTheme = 'dark' | 'photo' | 'photoAlt' | 'light'

export type ServiceItem = {
  id: string
  theme: ServiceTheme
  image: string
  imagePosition?: string
  includes: string[]
  note?: string
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'standard',
    theme: 'photo',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
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
    note: 'Ideal for weekly, biweekly, or monthly maintenance. Quote based on home size and condition.',
  },
  {
    id: 'deep',
    theme: 'dark',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=900&q=80',
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
    note: 'We recommend starting recurring service with a deep clean. Exact price confirmed after we review the scope.',
  },
  {
    id: 'move',
    theme: 'photoAlt',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
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
    note: 'Add-ons available: interior windows, garage, balcony, or carpet care — included in your quote when needed.',
  },
  {
    id: 'laundry',
    theme: 'light',
    image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=900&q=80',
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
    note: 'Laundry volume is confirmed with you and priced into your custom quote.',
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
