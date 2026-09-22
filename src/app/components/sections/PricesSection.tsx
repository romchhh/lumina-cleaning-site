'use client'

import { BookingTrigger } from '../../booking'
import { SERVICE_COPY, t } from '../../copy'
import { SERVICES } from '../../data/siteContent'
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
          {SERVICES.map((service) => {
            const copy = SERVICE_COPY[service.id]
            return (
              <article key={service.id} className={styles.priceCard}>
                <div className={styles.priceCardHead}>
                  <h3 className={styles.priceCardTitle}>{copy.title}</h3>
                  <span className={styles.priceFrom}>{service.priceFrom}</span>
                </div>
                <div className={styles.tierList}>
                  {service.tiers.map((tier) => (
                    <div key={tier.label} className={styles.tierItem}>
                      <span>{tier.label}</span>
                      <strong>{tier.price}</strong>
                    </div>
                  ))}
                </div>
                <BookingTrigger className={styles.priceCta}>{t.prices.book}</BookingTrigger>
              </article>
            )
          })}

          <div className={styles.priceAccent}>
            <span className={styles.priceAccentIcon} aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 4 L15.2 10.5 L21 8 L18.5 13 L24 14 L18.5 15 L21 20 L15.2 17.5 L14 24 L12.8 17.5 L7 20 L9.5 15 L4 14 L9.5 13 L7 8 L12.8 10.5 L14 4Z" />
              </svg>
            </span>
            <div className={styles.priceAccentCopy}>
              <p className={styles.priceAccentTitle}>{t.prices.accentTitle}</p>
              <p className={styles.priceAccentSub}>{t.prices.accentSub}</p>
            </div>
            <BookingTrigger className={styles.priceAccentBtn}>{t.prices.accentBtn}</BookingTrigger>
          </div>
        </div>

        <p className={styles.priceDisclaimer}>{t.prices.note}</p>
      </div>
    </section>
  )
}
