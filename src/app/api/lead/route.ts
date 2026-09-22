import { NextResponse } from 'next/server'
import type { LeadPayload } from '../../lib/lead'
import { formatLeadMessage, sendTelegramMessage } from '../../lib/telegram'

function clean(value: unknown, max = 500) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

function phoneDigits(value: string) {
  return value.replace(/\D/g, '')
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadPayload>

    const source = body.source
    if (source !== 'contact' && source !== 'quick-booking') {
      return NextResponse.json({ error: 'Invalid source' }, { status: 400 })
    }

    const name = clean(body.name, 120)
    const phone = clean(body.phone, 40)
    const email = clean(body.email, 120)
    const zip = clean(body.zip, 10)
    const service = clean(body.service, 120)
    const comment = clean(body.comment, 2000)

    if (name.length < 2) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    if (phoneDigits(phone).length < 10) {
      return NextResponse.json({ error: 'Valid phone is required' }, { status: 400 })
    }

    if (source === 'contact') {
      if (!/^\d{5}$/.test(zip)) {
        return NextResponse.json({ error: 'Valid ZIP is required' }, { status: 400 })
      }
      if (!service) {
        return NextResponse.json({ error: 'Service is required' }, { status: 400 })
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
      }
    }

    const payload: LeadPayload = {
      source,
      name,
      phone,
      ...(email && { email }),
      ...(zip && { zip }),
      ...(service && { service }),
      ...(comment && { comment }),
    }

    await sendTelegramMessage(formatLeadMessage(payload))

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Lead submission failed:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
