'use client'

import { t } from '../copy'
import styles from './MarqueeBand.module.css'

const TRACK = [...t.marquee.items, ...t.marquee.items]

export default function MarqueeBand() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {TRACK.map((item, i) => (
          <span key={`${item}-${i}`} className={styles.item}>
            <span className={styles.spark} aria-hidden="true">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
