'use client'
import Image from 'next/image'
import { BRAND } from '../brand'
import { t } from '../copy'
import { BookingTrigger } from '../booking'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src={BRAND.hero}
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          className={styles.bgImage}
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.body}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            {t.hero.lines.map((line, i) => {
              const accent = t.hero.accent
              const idx = line.toLowerCase().indexOf(accent.toLowerCase())
              return (
                <span key={line}>
                  {i > 0 && <br />}
                  {idx >= 0 ? (
                    <>
                      {line.slice(0, idx)}
                      <span className={styles.accent}>{line.slice(idx, idx + accent.length)}</span>
                      {line.slice(idx + accent.length)}
                    </>
                  ) : (
                    line
                  )}
                </span>
              )
            })}
          </h1>

          <p className={styles.meta}>
            {t.hero.subtitle}
            <span className={styles.metaSep} aria-hidden="true"> · </span>
            {t.hero.pillars.join(' · ')}
          </p>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.contact}>
            <a href={`tel:${BRAND.phoneTel}`} className={styles.phone}>{BRAND.phone}</a>
            <span className={styles.address}>{BRAND.address}<br />{BRAND.city}</span>
          </div>

          <div className={styles.actions}>
            <BookingTrigger className={styles.card}>
              <div className={styles.cardText}>
                <p className={styles.cardLabel}>{t.hero.cardLabel}</p>
                <p className={styles.cardTitle}>{t.hero.cardTitle}</p>
                <p className={styles.cardSub}>
                  {t.hero.cardSub.split('\n').map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              <div className={styles.cardArrow}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 14 L14 2 M6 2 H14 V10" />
                </svg>
              </div>
            </BookingTrigger>
            <a href="#services" className={styles.secondaryBtn}>{t.hero.ctaSecondary}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
