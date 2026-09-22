'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useBooking, scrollToBooking } from '../../booking'
import { SERVICE_COPY, t } from '../../copy'
import { getServiceById } from '../../data/siteContent'
import styles from './ServiceModal.module.css'

export default function ServiceModal() {
  const { activeServiceId, closeServiceModal, setService } = useBooking()
  const dialogRef = useRef<HTMLDivElement>(null)
  const service = activeServiceId ? getServiceById(activeServiceId) : null
  const copy = activeServiceId ? SERVICE_COPY[activeServiceId] : null

  useEffect(() => {
    if (service) dialogRef.current?.focus()
  }, [service])

  if (!service || !copy) return null

  const handleBook = () => {
    setService(service.id)
    closeServiceModal()
    scrollToBooking()
  }

  return (
    <div className={styles.overlay} onClick={closeServiceModal} role="presentation">
      <div
        ref={dialogRef}
        className={styles.sheet}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.handle} aria-hidden="true" />
        <div className={styles.header}>
          <Image src={service.image} alt="" fill sizes="640px" className={styles.headerImg} />
          <div className={styles.headerOverlay} aria-hidden="true" />
          <button type="button" className={styles.closeBtn} onClick={closeServiceModal} aria-label={t.serviceModal.close}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M4 4 L14 14 M14 4 L4 14" />
            </svg>
          </button>
          <div className={styles.headerText}>
            <span className={styles.priceTag}>{t.serviceModal.quote}</span>
            <h2 id="service-modal-title" className={styles.title}>{copy.title}</h2>
          </div>
        </div>

        <div className={styles.body}>
          <div>
            <h3 className={styles.sectionTitle}>{t.serviceModal.includes}</h3>
            <ul className={styles.list}>
              {service.includes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className={styles.quoteBox}>
            <h3 className={styles.sectionTitle}>{t.serviceModal.quote}</h3>
            <p className={styles.quoteText}>{t.serviceModal.quoteText}</p>
          </div>
          {service.note && <p className={styles.note}>{service.note}</p>}
        </div>

        <div className={styles.footer}>
          <button type="button" className={styles.bookBtn} onClick={handleBook}>
            {t.serviceModal.book}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 12 L12 2 M5 2 H12 V9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
