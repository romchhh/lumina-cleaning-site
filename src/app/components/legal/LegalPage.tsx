import Link from 'next/link'
import type { LegalPageData } from '../../data/legalPages'
import styles from './LegalPage.module.css'

type Props = {
  page: LegalPageData
}

export default function LegalPage({ page }: Props) {
  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.title}>{page.title}</h1>
        <p className={styles.updated}>Last updated: {page.updated}</p>
      </header>

      <div className={styles.content}>
        {page.sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.list && (
              <ul className={styles.list}>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <Link href="/" className={styles.back}>
        ← Back to home
      </Link>
    </article>
  )
}
