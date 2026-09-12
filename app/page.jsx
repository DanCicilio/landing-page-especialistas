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
      <Hero locale="pt" onViewPortfolio={scrollToPortfolio} onQuickChat={() => setIsContactOpen(true)} />
      <Services locale="pt" />
      <GoogleBusiness locale="pt" onQuickChat={() => setIsContactOpen(true)} />
      <Portfolio locale="pt" forwardedRef={portfolioRef} onQuickChat={() => setIsContactOpen(true)} />
      <Team locale="pt" />
      <CtaFinal locale="pt" onScheduleChat={() => setIsContactOpen(true)} />
      <SiteFooter locale="pt" onOpenChat={() => setIsContactOpen(true)} />
      <ContactModal locale="pt" isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
    </>
  )
}
