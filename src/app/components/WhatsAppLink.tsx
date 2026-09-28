'use client'

import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { BRAND } from '../brand'
import { trackWhatsAppContact } from '../lib/metaPixel'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string
}

export default function WhatsAppLink({ href = BRAND.whatsapp, onClick, ...props }: Props) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackWhatsAppContact()
    onClick?.(event)
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} {...props} />
}
