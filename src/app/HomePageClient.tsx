'use client'

import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HomeSections from './components/HomeSections'
import Navbar from './components/Navbar'
import TrustBar from './components/TrustBar'
import { BookingProvider } from './booking'

export default function HomePageClient() {
  return (
    <BookingProvider>
      <Navbar transparent />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <HomeSections />
        <ContactSection />
      </main>
      <Footer />
    </BookingProvider>
  )
}
