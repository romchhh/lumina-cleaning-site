'use client'

import { t } from '../../copy'
import { REVIEWS } from '../../data/siteContent'
import styles from './sections.module.css'

function GoogleIcon() {
  return (
    <div className={styles.reviewGoogleIcon} aria-hidden="true">
      <svg width="28" height="28" viewBox="0 0 24 24" role="img" aria-label="Google">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    </div>
  )
}

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`${count} / 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className={`${styles.section} ${styles.sectionSurface}`}>
      <div className={styles.inner}>
        <div className={styles.reviewsIntro}>
          <h2 className={`section-heading ${styles.reviewsHeading}`}>
            {t.reviews.titleBefore}<em>{t.reviews.titleEm}</em>
            <span className={styles.reviewsLeadSep}> — </span>
            <span className={styles.reviewsLeadInline}>{t.reviews.lead}</span>
          </h2>
        </div>

        <div className={styles.reviewsRow}>
          {REVIEWS.map((item) => (
            <article key={item.id} className={styles.reviewCard}>
              <div className={styles.reviewContent}>
                <div className={styles.reviewHead}>
                  <GoogleIcon />
                  <div className={styles.reviewMeta}>
                    <p className={styles.reviewAuthor}>{item.name}</p>
                    <Stars count={item.rating} />
                  </div>
                </div>
                <p className={styles.reviewText}>
                  <span className={styles.reviewQuote} aria-hidden="true">&ldquo;</span>
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
