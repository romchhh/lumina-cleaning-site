'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import dynamic from 'next/dynamic'
import ScrollBookingPrompt from './components/booking/ScrollBookingPrompt'
import { trackBookClick } from './lib/metaPixel'
import { useBodyScrollLock } from './lib/useBodyScrollLock'

const BookingModal = dynamic(() => import('./components/booking/BookingModal'), { ssr: false })

type BookingContextValue = {
  zip: string
  setZip: (zip: string) => void
  service: string
  setService: (service: string) => void
  openBookingModal: () => void
  closeBookingModal: () => void
  isBookingModalOpen: boolean
  openServiceModal: (serviceId: string) => void
  closeServiceModal: () => void
  activeServiceId: string | null
}

const BookingContext = createContext<BookingContextValue | null>(null)
const PROMPT_DISMISSED_KEY = 'royalglow-booking-prompt-dismissed'

export function BookingProvider({ children }: { children: ReactNode }) {
  const [zip, setZip] = useState('')
  const [service, setService] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null)
  const [promptVisible, setPromptVisible] = useState(false)
  const [promptDismissed, setPromptDismissed] = useState(false)

  const openBookingModal = useCallback(() => {
    trackBookClick()
    setIsOpen(true)
  }, [])
  const closeBookingModal = useCallback(() => setIsOpen(false), [])
  const openServiceModal = useCallback((serviceId: string) => {
    setActiveServiceId(serviceId)
    setService(serviceId)
  }, [])
  const closeServiceModal = useCallback(() => setActiveServiceId(null), [])

  const dismissPrompt = useCallback(() => {
    setPromptDismissed(true)
    setPromptVisible(false)
    sessionStorage.setItem(PROMPT_DISMISSED_KEY, '1')
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem(PROMPT_DISMISSED_KEY) === '1') {
      setPromptDismissed(true)
    }
  }, [])

  useEffect(() => {
    if (promptDismissed) return
    const onScroll = () => setPromptVisible(window.scrollY > 380)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [promptDismissed])

  useBodyScrollLock(isOpen || Boolean(activeServiceId))

  useEffect(() => {
    if (!isOpen && !activeServiceId) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (activeServiceId) closeServiceModal()
        if (isOpen) closeBookingModal()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, activeServiceId, closeBookingModal, closeServiceModal])

  const value = useMemo(
    () => ({
      zip,
      setZip,
      service,
      setService,
      openBookingModal,
      closeBookingModal,
      isBookingModalOpen: isOpen,
      openServiceModal,
      closeServiceModal,
      activeServiceId,
    }),
    [zip, service, isOpen, activeServiceId, openBookingModal, closeBookingModal, openServiceModal, closeServiceModal],
  )

  return (
    <BookingContext.Provider value={value}>
      {children}
      {!promptDismissed && (
        <ScrollBookingPrompt
          visible={promptVisible && !isOpen && !activeServiceId}
          onBook={openBookingModal}
          onDismiss={dismissPrompt}
        />
      )}
      {isOpen ? <BookingModal isOpen={isOpen} onClose={closeBookingModal} /> : null}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}

export function BookingTrigger({
  className,
  children,
  onClick,
}: {
  className?: string
  children: ReactNode
  onClick?: () => void
}) {
  const { openBookingModal } = useBooking()
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.()
        openBookingModal()
      }}
    >
      {children}
    </button>
  )
}

export function scrollToBooking() {
  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
