'use client'

import { t } from '../../copy'
import { SectionHeading } from './SectionHeading'
import styles from './sections.module.css'

const ICONS = [
  <svg key="0" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z"/></svg>,
  <svg key="1" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  <svg key="2" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg key="3" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
  <svg key="4" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>,
  <svg key="5" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
]

export default function WhyUsSection() {
  return (
    <section id="why-us" className={`${styles.section} ${styles.sectionGlow} ${styles.sectionGlowLeft}`}>
      <div className={styles.inner}>
        <SectionHeading
          title={<>{t.whyUs.titleBefore}<em>{t.whyUs.titleEm}</em></>}
          lead={t.whyUs.lead}
        />

        <div className={styles.benefitsGrid}>
          {t.whyUs.items.map((item, i) => (
            <article key={item.title} className={styles.benefitCard}>
              <span className={styles.benefitIcon} aria-hidden="true">{ICONS[i]}</span>
              <h3 className={styles.benefitTitle}>{item.title}</h3>
              <p className={styles.benefitText}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
