const UNSPLASH_HOST = 'https://images.unsplash.com'

/**
 * Unsplash source URLs sized for layout; Next.js Image serves AVIF/WebP and caches on the server/CDN.
 * @param photoId e.g. photo-1628177142898-93e36e4e3a50
 */
export function unsplashImage(photoId: string, width: number, quality = 75) {
  return `${UNSPLASH_HOST}/${photoId}?auto=format&fit=crop&w=${width}&q=${quality}`
}

/** Width presets aligned with `sizes` on each section */
export const IMAGE_WIDTH = {
  hero: 1920,
  contact: 960,
  about: 840,
  serviceCard: 720,
  serviceModal: 640,
} as const
