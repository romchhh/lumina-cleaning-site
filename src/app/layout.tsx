import type { Metadata, Viewport } from 'next'
import { BRAND } from './brand'
import { buildMetadata } from './lib/seo'
import { SITE_NAME } from './lib/site'
import MetaPixel from './components/MetaPixel'
import MetaPixelPageView from './components/MetaPixelPageView'
import './globals.css'
import './lumina-clean.css'

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${SITE_NAME} — Premium Home Cleaning in New Jersey`,
    path: '/',
  }),
  applicationName: SITE_NAME,
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  category: 'Home Services',
  keywords: [
    'house cleaning',
    'home cleaning',
    'residential cleaning',
    'deep cleaning',
    'move out cleaning',
    'Monmouth County cleaning',
    'Ocean County cleaning',
    'Mercer County cleaning',
    'Burlington County cleaning',
    'New Jersey cleaning service',
    'Royal Glow Cleaning',
  ],
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#1d6ef5',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="lumina-clean">
        <MetaPixel />
        <MetaPixelPageView />
        {children}
      </body>
    </html>
  )
}
