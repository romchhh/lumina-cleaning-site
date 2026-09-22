'use client'
import Link from 'next/link'
import { BRAND } from '../brand'
import { t } from '../copy'
import { BrandName } from './BrandName'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.brand}>
        <BrandName variant="footer" />
      </Link>

      <div className={styles.top}>
        <nav className={styles.links} aria-label={t.footer.navLabel}>
          {t.footer.links.map((label, i) => (
            <a key={label} href={t.footer.linkTargets[i]}>{label}</a>
          ))}
        </nav>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>{t.footer.hours}</h3>
            <p>{t.footer.hoursWeek}</p>
            <p>{t.footer.hoursWeekend}</p>
          </div>

          <div className={styles.col}>
            <h3>{t.footer.contactsTitle}</h3>
            <p>{BRAND.address}<br />{BRAND.city}</p>
            <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phone}</a>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>

          <div className={`${styles.col} ${styles.colPolicies}`}>
            <h3>{t.footer.policiesTitle}</h3>
            <div className={styles.policyList}>
              {t.footer.legal.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} {BRAND.name}. {t.footer.rights}</span>
        <a
          href={t.footer.craftedByUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.craftedBy}
        >
          <span>{t.footer.craftedBy}</span>
          <strong>{t.footer.craftedByName}</strong>
        </a>
      </div>
    </footer>
  )
}
