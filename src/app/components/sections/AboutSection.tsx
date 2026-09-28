'use client'

import Image from 'next/image'
import { BRAND } from '../../brand'
import { BookingTrigger } from '../../booking'
import { t } from '../../copy'
import { SectionHeading } from './SectionHeading'
import styles from './sections.module.css'

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.aboutLayout}>
          <div className={styles.aboutCopy}>
            <SectionHeading
              title={<>{t.about.titleBefore}<em>{t.about.titleEm}</em></>}
            />
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <div className={styles.aboutActions}>
              <BookingTrigger className={styles.aboutBtn}>{t.about.ctaBtn}</BookingTrigger>
              <p className={styles.aboutTrust}>{t.about.ctaNote}</p>
            </div>
          </div>
          <div className={styles.aboutMedia}>
            <Image
              src={BRAND.aboutTeam}
              alt={t.about.teamImageAlt}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 420px"
              quality={75}
              className={styles.aboutImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
