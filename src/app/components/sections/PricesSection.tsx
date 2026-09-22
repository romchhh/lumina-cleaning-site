'use client'

import { BookingTrigger } from '../../booking'
import { t } from '../../copy'
import { SectionHeading } from './SectionHeading'
import styles from './sections.module.css'

export default function PricesSection() {
  return (
    <section id="prices" className={`${styles.section} ${styles.sectionSurface}`}>
      <div className={styles.inner}>
        <SectionHeading
          title={<>{t.prices.titleBefore}<em>{t.prices.titleEm}</em></>}
          lead={t.prices.lead}
        />

        <div className={styles.pricesGrid}>
          {t.prices.plans.map((plan) => (
            <article
              key={plan.id}
              className={`${styles.priceCard}${'featured' in plan && plan.featured ? ` ${styles.priceCardFeatured}` : ''}`}
            >
              <div className={styles.priceCardHead}>
                <h3 className={styles.priceCardTitle}>{plan.title}</h3>
                <span className={styles.priceQuoteBadge}>{t.prices.quoteBadge}</span>
              </div>
              <p className={styles.priceCardText}>{plan.text}</p>
              <ul className={styles.priceHighlights}>
                {plan.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <BookingTrigger className={styles.priceCta} serviceId={plan.id}>
                {t.prices.book}
              </BookingTrigger>
            </article>
          ))}
        </div>

        <p className={styles.priceDisclaimer}>{t.prices.note}</p>
      </div>
    </section>
  )
}
