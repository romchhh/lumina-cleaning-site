'use client'

import { BookingProvider } from '../booking'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
  children: React.ReactNode
  navTransparent?: boolean
}

export default function SiteShell({ children, navTransparent = false }: Props) {
  return (
    <BookingProvider>
      <Navbar transparent={navTransparent} />
      <main id="main-content">{children}</main>
      <Footer />
    </BookingProvider>
  )
}
