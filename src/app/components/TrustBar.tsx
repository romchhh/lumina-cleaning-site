'use client'

import { t } from '../copy'
import styles from './TrustBar.module.css'

export default function TrustBar() {
  return (
    <section className={styles.bar} aria-label="Company highlights">
      <div className={styles.inner}>
        {t.trust.items.map((item) => (
          <div key={item.label} className={styles.item}>
            <strong className={styles.value}>{item.value}</strong>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
