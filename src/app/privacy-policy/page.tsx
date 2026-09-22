import LegalPage from '../components/legal/LegalPage'
import SiteShell from '../components/SiteShell'
import { LEGAL_PAGES } from '../data/legalPages'
import { buildMetadata } from '../lib/seo'

const page = LEGAL_PAGES.privacy

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
})

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <LegalPage page={page} />
    </SiteShell>
  )
}
