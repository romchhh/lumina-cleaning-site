export type LeadSource = 'contact' | 'quick-booking'

export type LeadPayload = {
  source: LeadSource
  name: string
  phone: string
  email?: string
  zip?: string
  service?: string
  comment?: string
}

export async function submitLead(payload: LeadPayload): Promise<boolean> {
  const response = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  return response.ok
}
