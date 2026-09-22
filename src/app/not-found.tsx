import Link from 'next/link'
import SiteShell from './components/SiteShell'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <SiteShell>
      <section className={styles.wrap}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Head back home to book your next clean.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primary}>Back to home</Link>
          <Link href="/#book" className={styles.secondary}>Book a cleaning</Link>
        </div>
      </section>
    </SiteShell>
  )
}
