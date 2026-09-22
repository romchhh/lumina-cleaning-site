import HomePageClient from './HomePageClient'
import JsonLd from './components/JsonLd'
import { buildMetadata, localBusinessJsonLd, webSiteJsonLd } from './lib/seo'
import { SITE_NAME } from './lib/site'

export const metadata = buildMetadata({
  title: `${SITE_NAME} — Premium Home Cleaning in New Jersey`,
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={webSiteJsonLd()} />
      <HomePageClient />
    </>
  )
}
