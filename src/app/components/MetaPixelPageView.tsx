'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { trackPageView } from '../lib/metaPixel'

/** Fires PageView on client-side navigations (initial PageView is in MetaPixel script). */
export default function MetaPixelPageView() {
  const pathname = usePathname()
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    trackPageView()
  }, [pathname])

  return null
}
