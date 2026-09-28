export type LeadFormId = 'contact' | 'quick-booking'

declare global {
  interface Window {
    fbq?: (
      action: 'track' | 'trackCustom' | 'init',
      eventName: string,
      params?: Record<string, string>,
    ) => void
  }
}

function fbqTrack(event: string, params?: Record<string, string>) {
  if (typeof window === 'undefined') return
  window.fbq?.('track', event, params)
}

function fbqTrackCustom(event: string, params?: Record<string, string>) {
  if (typeof window === 'undefined') return
  window.fbq?.('trackCustom', event, params)
}

export function trackPageView() {
  fbqTrack('PageView')
}

export function trackBookClick() {
  fbqTrackCustom('BookClick')
}

const formStartSent = new Set<LeadFormId>()

export function trackFormStartOnce(formId: LeadFormId) {
  if (formStartSent.has(formId)) return
  formStartSent.add(formId)
  fbqTrackCustom('FormStart', { form_id: formId })
}

export function resetFormStartTracking(formId: LeadFormId) {
  formStartSent.delete(formId)
}

export function trackLead(formId: LeadFormId) {
  fbqTrack('Lead', { content_name: formId })
}

export function trackWhatsAppContact() {
  fbqTrack('Contact')
}
