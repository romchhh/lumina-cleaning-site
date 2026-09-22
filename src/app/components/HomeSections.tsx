'use client'

import dynamic from 'next/dynamic'
import ServiceModal from './modals/ServiceModal'

const AboutSection = dynamic(() => import('./sections/AboutSection'), { loading: () => null })
const MarqueeBand = dynamic(() => import('./MarqueeBand'), { loading: () => null })
const ServicesSection = dynamic(() => import('./sections/ServicesSection'), { loading: () => null })
const HowItWorksSection = dynamic(() => import('./sections/HowItWorksSection'), { loading: () => null })
const WhyUsSection = dynamic(() => import('./sections/WhyUsSection'), { loading: () => null })
const PricesSection = dynamic(() => import('./sections/PricesSection'), { loading: () => null })
const AreasSection = dynamic(() => import('./sections/AreasSection'), { loading: () => null })
const ReviewsSection = dynamic(() => import('./sections/ReviewsSection'), { loading: () => null })
const FaqSection = dynamic(() => import('./sections/FaqSection'), { loading: () => null })
const CtaBannerSection = dynamic(() => import('./sections/CtaBannerSection'), { loading: () => null })

export default function HomeSections() {
  return (
    <>
      <AboutSection />
      <MarqueeBand />
      <ServicesSection />
      <HowItWorksSection />
      <WhyUsSection />
      <PricesSection />
      <AreasSection />
      <ReviewsSection />
      <FaqSection />
      <CtaBannerSection />
      <ServiceModal />
    </>
  )
}
