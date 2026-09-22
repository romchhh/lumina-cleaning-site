import type { MetadataRoute } from 'next'
import { ALL_LEGAL_PAGES } from './data/legalPages'
import { SITE_URL } from './lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const legalEntries = ALL_LEGAL_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...legalEntries,
  ]
}
