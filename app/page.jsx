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
      <Hero locale="pt" onViewPortfolio={scrollToPortfolio} onQuickChat={() => setIsContactOpen(true)} />

      <Services locale="pt" />

      <GoogleBusiness locale="pt" onQuickChat={() => setIsContactOpen(true)} />

      <Portfolio locale="pt" forwardedRef={portfolioRef} onQuickChat={() => setIsContactOpen(true)} />

      <Team locale="pt" />

      {/* CTA SECTION */}
      <section className="py-32 px-4 bg-gradient-to-r from-indigo-600 to-pink-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-10 -ml-48 -mb-48"></div>

        <div className="max-w-2xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-white text-opacity-95 mb-10 leading-relaxed">
            Vamos criar um website que não apenas apresenta, mas vende. Estratégia, design premium e performance garantida.
          </p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="button px-10 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl"
          >
            Agende uma Conversa
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white border-opacity-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dan Cicilio</h3>
              <p className="text-indigo-400 mb-4">Especialistas em Design Web para PMEs</p>
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
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition">Design Web</a></li>
                <li><a href="#" className="hover:text-white transition">Performance</a></li>
                <li><a href="#" className="hover:text-white transition">Google Meus Negócios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Portfólio</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="https://seluma.eng.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Seluma.eng.br</a></li>
                <li><a href="https://surbi.eng.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Surbi.eng.br</a></li>
                <li><a href="https://trustlygo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">TrustlyGo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <p className="text-gray-300 mb-4">Vamos conversar sobre seu próximo projeto!</p>
              <button
                onClick={() => setIsContactOpen(true)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-bold transition"
              >
                Conversar
              </button>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 Dan Cicilio, Pri Martins & Pietro Cicilio. Todos os direitos reservados.</p>
            <p>Designed with precision • Built with passion</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal locale="pt" isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
    </>
  )
}
