'use client'

import { useState } from 'react'
import { t } from '../../copy'
import { SectionHeading } from './SectionHeading'
import styles from './sections.module.css'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className={`${styles.section} ${styles.sectionGlow}`}>
      <div className={styles.inner}>
        <SectionHeading
          title={<>{t.faq.titleBefore}<em>{t.faq.titleEm}</em></>}
          lead={t.faq.lead}
          centered
        />

        <div className={styles.faqList}>
          {t.faq.items.map((item, index) => {
            const open = openIndex === index
            return (
              <div key={item.q} className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                >
                  <span>{item.q}</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d={open ? 'M4 9 H14' : 'M9 4 V14 M4 9 H14'} />
                  </svg>
                </button>
                {open && <p className={styles.faqAnswer}>{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
