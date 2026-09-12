'use client'

import { useRef, useState } from 'react'
import { ContactModal } from '@/components/ContactModal'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { GoogleBusiness } from '@/components/sections/GoogleBusiness'
import { Portfolio } from '@/components/sections/Portfolio'
import { Team } from '@/components/sections/Team'
import { CtaFinal } from '@/components/sections/CtaFinal'
import { SiteFooter } from '@/components/sections/SiteFooter'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const portfolioRef = useRef(null)

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Hero locale="en" onViewPortfolio={scrollToPortfolio} onQuickChat={() => setIsContactOpen(true)} />
      <Services locale="en" />
      <GoogleBusiness locale="en" onQuickChat={() => setIsContactOpen(true)} />
      <Portfolio locale="en" forwardedRef={portfolioRef} onQuickChat={() => setIsContactOpen(true)} />
      <Team locale="en" />
      <CtaFinal locale="en" onScheduleChat={() => setIsContactOpen(true)} />
      <SiteFooter locale="en" onOpenChat={() => setIsContactOpen(true)} />
      <ContactModal locale="en" isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
    </>
  )
}
