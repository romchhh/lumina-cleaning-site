'use client'

import { useState } from 'react'
import { BRAND } from '../../brand'
import { t } from '../../copy'
import { CITIES_BY_COUNTY, SERVICE_COUNTIES, type CountyId } from '../../data/areasByCounty'
import { isZipServed, normalizeZip } from '../../data/zipCodes'
import { SectionHeading } from './SectionHeading'
import styles from './sections.module.css'

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  )
}

export default function AreasSection() {
  const [activeCounty, setActiveCounty] = useState<CountyId>('monmouth')
  const [zip, setZip] = useState('')

  const zipStatus = (() => {
    const normalized = normalizeZip(zip)
    if (!normalized) return null
    if (!/^\d{5}$/.test(normalized)) return 'invalid'
    return isZipServed(normalized) ? 'ok' : 'bad'
  })()

  const cities = CITIES_BY_COUNTY[activeCounty]

  return (
    <section id="areas" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          title={<>{t.areas.titleBefore}<em>{t.areas.titleEm}</em></>}
          lead={t.areas.lead}
          centered
        />

        <div className={styles.areasBlock}>
          <div className={styles.areasTabs} role="tablist" aria-label={t.areas.tabsLabel}>
            {SERVICE_COUNTIES.map((county) => (
              <button
                key={county.id}
                type="button"
                role="tab"
                aria-selected={activeCounty === county.id}
                className={`${styles.areasTab} ${activeCounty === county.id ? styles.areasTabActive : ''}`}
                onClick={() => setActiveCounty(county.id)}
              >
                {county.label}
              </button>
            ))}
          </div>

          <div
            className={styles.areasTags}
            role="tabpanel"
            aria-label={SERVICE_COUNTIES.find((c) => c.id === activeCounty)?.label}
          >
            {cities.map((city) => (
              <span key={city} className={styles.areaTag}>
                <PinIcon />
                {city}
              </span>
            ))}
          </div>

          <div className={styles.areasZip}>
            <label htmlFor="zip-check" className={styles.areasZipLabel}>{t.areas.zipLabel}</label>
            <div className={styles.areasZipRow}>
              <input
                id="zip-check"
                type="text"
                inputMode="numeric"
                maxLength={5}
                placeholder={t.areas.zipPh}
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
              />
              {zipStatus === 'ok' && <p className={`${styles.zipStatus} ${styles.zipOk}`}>{t.areas.zipOk}</p>}
              {zipStatus === 'bad' && <p className={`${styles.zipStatus} ${styles.zipBad}`}>{t.areas.zipBad}</p>}
              {zipStatus === 'invalid' && <p className={`${styles.zipStatus} ${styles.zipBad}`}>{t.areas.zipInvalid}</p>}
            </div>
            <p className={styles.areasZipHint}>
              {t.areas.zipHint}{' '}
              <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phone}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
