'use client'

import { useRef, useState } from 'react'
import { ContactModal } from '@/components/ContactModal'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { GoogleBusiness } from '@/components/sections/GoogleBusiness'
import { Portfolio } from '@/components/sections/Portfolio'
import { Team } from '@/components/sections/Team'

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

      {/* CTA SECTION */}
      <section className="py-32 px-4 bg-gradient-to-r from-indigo-600 to-pink-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-10 -ml-48 -mb-48"></div>

        <div className="max-w-2xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-white text-opacity-95 mb-10 leading-relaxed">
            Let's create a website that not only presents but sells. Strategy, premium design and guaranteed performance.
          </p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="button px-10 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl"
          >
            Schedule a Chat
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white border-opacity-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dan Cicilio</h3>
              <p className="text-indigo-400 mb-4">Web Design Specialists for SMEs</p>
              <div className="flex gap-3">
                {[
                  { label: 'LinkedIn', url: 'https://linkedin.com/in/dancicilio' },
                  { label: 'GitHub', url: 'https://github.com/dancicilio' },
                  { label: 'Instagram', url: 'https://instagram.com/dancicilio' },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-900 rounded-lg text-sm hover:bg-indigo-800 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition">Web Design</a></li>
                <li><a href="#" className="hover:text-white transition">Performance</a></li>
                <li><a href="#" className="hover:text-white transition">Google My Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Portfolio</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="https://seluma.eng.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Seluma.eng.br</a></li>
                <li><a href="https://surbi.eng.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Surbi.eng.br</a></li>
                <li><a href="https://trustlygo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">TrustlyGo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-300 mb-4">Let's talk about your next project!</p>
              <button
                onClick={() => setIsContactOpen(true)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-bold transition"
              >
                Chat
              </button>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 Dan Cicilio, Pri Martins & Pietro Cicilio. All rights reserved.</p>
            <p>Designed with precision • Built with passion</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal locale="en" isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
    </>
  )
}
