'use client'

import { useEffect, useRef, useState } from 'react'
import { useBooking } from '../../booking'
import { getServiceTitle, t } from '../../copy'
import { submitLead } from '../../lib/lead'
import { resetFormStartTracking, trackFormStartOnce, trackLead } from '../../lib/metaPixel'
import WhatsAppLink from '../WhatsAppLink'
import styles from './BookingModal.module.css'

type FormState = { name: string; phone: string; email: string }
type Status = 'idle' | 'loading' | 'success' | 'error'

const emptyForm = (): FormState => ({ name: '', phone: '', email: '' })

function SubmitArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 14 L14 2 M6 2 H14 V10" />
    </svg>
  )
}

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const { zip, service } = useBooking()
  const dialogRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState<FormState>(emptyForm)
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    if (!isOpen) {
      setStatus('idle')
      setForm(emptyForm())
      resetFormStartTracking('quick-booking')
      return
    }
    dialogRef.current?.focus()
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const digits = form.phone.replace(/\D/g, '')
    if (digits.length < 10) {
      setStatus('error')
      return
    }
    setStatus('loading')
    const ok = await submitLead({
      source: 'quick-booking',
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || undefined,
      zip: zip.trim() || undefined,
      service: service ? getServiceTitle(service) : undefined,
    })
    if (ok) {
      trackLead('quick-booking')
      setStatus('success')
    } else {
      setStatus('error')
    }
  }

  const handleFormStart = () => trackFormStartOnce('quick-booking')

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        ref={dialogRef}
        className={styles.sheet}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.handle} aria-hidden="true" />

        {status === 'success' ? (
          <div className={styles.success}>
            <svg width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="24" cy="24" r="20" />
              <path d="M14 24 L21 31 L34 18" />
            </svg>
            <h2 id="booking-modal-title" className={styles.title}>{t.booking.successTitle}</h2>
            <p className={styles.successText}>{t.booking.successText}</p>
            <button type="button" className={styles.submit} onClick={onClose}>
              <span className={styles.submitLabel}>{t.booking.close}</span>
              <span className={styles.submitIcon}><SubmitArrowIcon /></span>
            </button>
          </div>
        ) : (
          <>
            <h2 id="booking-modal-title" className={styles.title}>{t.booking.modalTitle}</h2>
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              onInput={handleFormStart}
              onChange={handleFormStart}
              noValidate
            >
              <input
                type="text"
                className={styles.input}
                placeholder={t.booking.namePh}
                value={form.name}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                  if (status === 'error') setStatus('idle')
                }}
                required
                autoComplete="name"
                maxLength={120}
              />
              <input
                type="tel"
                className={styles.input}
                placeholder={t.booking.phonePh}
                value={form.phone}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, phone: e.target.value }))
                  if (status === 'error') setStatus('idle')
                }}
                required
                autoComplete="tel"
                inputMode="tel"
              />
              <input
                type="email"
                className={styles.input}
                placeholder={t.booking.emailPh}
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                autoComplete="email"
                maxLength={120}
              />
              {status === 'error' && (
                <p className={styles.error}>
                  {form.phone.replace(/\D/g, '').length < 10 ? t.booking.error : t.booking.submitError}
                </p>
              )}
              <button type="submit" className={styles.submit} disabled={status === 'loading'}>
                <span className={styles.submitLabel}>
                  {status === 'loading' ? t.booking.submitting : t.booking.submit}
                </span>
                <span className={styles.submitIcon}><SubmitArrowIcon /></span>
              </button>
              <p className={styles.consent}>{t.booking.consent}</p>
            </form>
            <div className={styles.altContact}>
              <span className={styles.or}>{t.booking.or}</span>
              <p className={styles.socialLine}>
                <span>{t.booking.socialLead}</span>
                <WhatsAppLink className={styles.socialLink}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.32 13.53c-.22.62-1.28 1.18-1.76 1.25-.45.07-.98.1-1.58-.1-.36-.12-.83-.3-1.43-.58-2.52-1.09-4.16-3.64-4.28-3.81-.12-.17-1.02-1.36-1.02-2.59 0-1.23.64-1.84.87-2.09.22-.25.49-.31.65-.31.16 0 .33 0 .47.01.15.01.35-.06.55.42.2.48.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.13.24.58.96 1.25 1.55.86.76 1.58 1 1.82 1.11.24.11.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.16 1.2z" />
                  </svg>
                  {t.booking.whatsapp}
                </WhatsAppLink>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
