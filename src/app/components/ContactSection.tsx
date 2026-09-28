'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BRAND } from '../brand'
import { useBooking } from '../booking'
import { getServiceOptions, getServiceTitle, t } from '../copy'
import { isZipServed, normalizeZip } from '../data/zipCodes'
import { submitLead } from '../lib/lead'
import { trackFormStartOnce, trackLead } from '../lib/metaPixel'
import { SectionHeading } from './sections/SectionHeading'
import styles from './ContactSection.module.css'

type FormState = {
  name: string
  phone: string
  email: string
  comment: string
  consent: boolean
}
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactSection() {
  const { zip, setZip, service, setService } = useBooking()
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', comment: '', consent: false })
  const [status, setStatus] = useState<Status>('idle')
  const [zipError, setZipError] = useState('')

  useEffect(() => {
    setZipError('')
  }, [zip])

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const val = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setForm(f => ({ ...f, [k]: val }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.consent) return
    const normalized = normalizeZip(zip)
    if (!/^\d{5}$/.test(normalized)) {
      setZipError(t.contact.zipFormatError)
      return
    }
    if (!isZipServed(normalized)) {
      setZipError(t.contact.zipError)
      return
    }
    setStatus('loading')
    const ok = await submitLead({
      source: 'contact',
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      zip: normalized,
      service: getServiceTitle(service),
      comment: form.comment.trim() || undefined,
    })
    if (ok) {
      trackLead('contact')
      setStatus('success')
    } else {
      setStatus('error')
    }
  }

  const handleFormStart = () => trackFormStartOnce('contact')

  const serviceOptions = getServiceOptions()

  return (
    <section id="book" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <SectionHeading
            title={<>{t.contact.heading}<br /><em>{t.contact.headingEm}</em></>}
            lead={t.contact.lead}
            centered
          />
        </div>

        <div className={styles.panel}>
          <div className={styles.visual}>
            <Image
              src={BRAND.contactImage}
              alt={t.contact.visualAlt}
              fill
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 48vw"
              quality={75}
              className={styles.img}
            />
            <div className={styles.visualOverlay} aria-hidden="true" />
            <div className={styles.visualContent}>
              <p className={styles.visualLabel}>{t.contact.visualLabel}</p>
              <p className={styles.visualText}>{t.contact.visualText}</p>
              <div className={styles.visualContacts}>
                <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phone}</a>
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            {status === 'success' ? (
              <div className={styles.success}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="24" cy="24" r="20"/>
                  <path d="M14 24 L21 31 L34 18"/>
                </svg>
                <h3>{t.contact.successTitle}</h3>
                <p>{t.contact.successText}</p>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                onInput={handleFormStart}
                onChange={handleFormStart}
              >
                <p className={styles.formTitle}>{t.contact.formTitle}</p>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">{t.contact.name}</label>
                    <input id="name" type="text" autoComplete="name" placeholder={t.contact.namePh} value={form.name} onChange={set('name')} required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">{t.contact.phone}</label>
                    <input id="phone" type="tel" autoComplete="tel" placeholder={t.contact.phonePh} value={form.phone} onChange={set('phone')} required />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="email">{t.contact.email}</label>
                    <input id="email" type="email" autoComplete="email" placeholder={t.contact.emailPh} value={form.email} onChange={set('email')} required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="zip">{t.contact.zip}</label>
                    <input
                      id="zip"
                      type="text"
                      inputMode="numeric"
                      autoComplete="postal-code"
                      maxLength={5}
                      placeholder={t.contact.zipPh}
                      value={zip}
                      onChange={(e) => {
                        setZip(e.target.value.replace(/\D/g, '').slice(0, 5))
                        if (zipError) setZipError('')
                      }}
                      required
                      aria-invalid={Boolean(zipError)}
                    />
                    {zipError && <span className={styles.fieldError}>{zipError}</span>}
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="service">{t.contact.service}</label>
                  <div className={styles.selectWrap}>
                    <select id="service" value={service} onChange={(e) => setService(e.target.value)} required>
                      <option value="">{t.contact.servicePh}</option>
                      {serviceOptions.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
                    </select>
                    <svg className={styles.chevron} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--stone)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 6 L8 11 L13 6"/>
                    </svg>
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="comment">{t.contact.comment}</label>
                  <textarea id="comment" placeholder={t.contact.commentPh} rows={3} value={form.comment} onChange={set('comment')} />
                </div>
                <label className={styles.consent}>
                  <input type="checkbox" checked={form.consent} onChange={set('consent')} required />
                  <span>{t.contact.consent}</span>
                </label>
                {status === 'error' && <p className={styles.fieldError}>{t.contact.submitError}</p>}
                <button type="submit" className={styles.submit} disabled={!form.consent || status === 'loading'}>
                  {status === 'loading' ? t.contact.submitting : t.contact.submit}
                  {status !== 'loading' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 14 L14 2 M6 2 H14 V10"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
