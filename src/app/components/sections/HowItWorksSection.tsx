'use client'

import { t } from '../../copy'
import { SectionHeading } from './SectionHeading'
import styles from './sections.module.css'

const STEP_THEMES = ['stepBlue', 'stepGold', 'stepGlow'] as const

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className={`${styles.section} ${styles.sectionSurface} ${styles.sectionGlow}`}>
      <div className={styles.inner}>
        <SectionHeading
          title={<>{t.howItWorks.titleBefore}<em>{t.howItWorks.titleEm}</em></>}
          lead={t.howItWorks.lead}
          centered
        />

        <div className={styles.stepsGrid}>
          {t.howItWorks.steps.map((step, index) => (
            <article
              key={step.title}
              className={`${styles.stepCard} ${styles[STEP_THEMES[index]]}`}
            >
              <div className={styles.stepTop}>
                <span className={styles.stepNum}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.stepBadge}>Step {index + 1}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
