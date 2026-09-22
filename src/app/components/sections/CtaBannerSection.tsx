'use client'

import { BRAND } from '../../brand'
import { t } from '../../copy'
import { BookingTrigger } from '../../booking'
import styles from './sections.module.css'

export default function CtaBannerSection() {
  return (
    <section className={styles.ctaBanner}>
      <div className={styles.ctaBannerInner}>
        <div className={styles.ctaBannerCopy}>
          <h2 className={styles.ctaBannerTitle}>{t.ctaBanner.title}</h2>
          <p className={styles.ctaBannerText}>{t.ctaBanner.text}</p>
          <ul className={styles.ctaBannerTrust}>
            {t.ctaBanner.trust.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.ctaBannerActions}>
          <BookingTrigger className={styles.ctaBannerBtn}>{t.ctaBanner.btn}</BookingTrigger>
          <a href={`tel:${BRAND.phoneTel}`} className={styles.ctaBannerPhone}>
            {t.ctaBanner.phone} · {BRAND.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
