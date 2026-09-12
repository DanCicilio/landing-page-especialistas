'use client'

import { useRef, useState } from 'react'
import { ContactModal } from '@/components/ContactModal'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { GoogleBusiness } from '@/components/sections/GoogleBusiness'

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

      {/* PORTFOLIO SECTION */}
      <section ref={portfolioRef} className="py-32 px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-800 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full opacity-10 -mr-48 -mt-48"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-indigo-300 text-sm font-bold uppercase tracking-widest">Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Projects that transformed businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Seluma Engineering',
                desc: 'Professional website with interactive project portfolio and integrated contact system',
                url: 'https://seluma.eng.br',
                gradient: 'from-purple-600 to-pink-600',
              },
              {
                title: 'Surbi Engineering',
                desc: 'Modern platform showcasing technical expertise with online proposal system',
                url: 'https://surbi.eng.br',
                gradient: 'from-pink-600 to-red-600',
              },
              {
                title: 'TrustlyGo',
                desc: 'Innovative solution with intuitive interface and cutting-edge scalable architecture',
                url: 'https://trustlygo.com',
                gradient: 'from-cyan-500 to-blue-600',
              },
            ].map((project, i) => (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-card bg-gradient-to-br ${project.gradient} rounded-3xl p-8 min-h-64 flex flex-col justify-between text-white hover:text-white no-underline group`}
              >
                <div>
                  <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white text-opacity-90 leading-relaxed">{project.desc}</p>
                </div>
                <div className="text-lg font-bold group-hover:translate-x-2 transition-transform">
                  Explore Project →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-32 px-4 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-indigo-600 text-sm font-bold uppercase tracking-widest">Specialists</span>
            <h2 className="text-5xl md:text-6xl font-bold text-dark mt-4 mb-6">
              The team behind your success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dan Cicilio',
                role: 'Marketer & Founder',
                desc: 'Graduated in 1999 • 25+ Years of Experience',
                bio: 'Digital marketing strategist with extensive experience. Leads strategic vision, positioning and growth of digital businesses.',
                gradient: 'from-purple-600 to-pink-600',
              },
              {
                name: 'Pri Martins',
                role: 'Sales Executive',
                desc: 'Business Relationship Specialist',
                bio: 'Expert in business relationships and deal closing. Connects strategic solutions with ideal customers seeking growth.',
                gradient: 'from-pink-600 to-red-600',
              },
              {
                name: 'Pietro Cicilio',
                role: 'Creative Intern',
                desc: 'Creative in Training',
                bio: 'Emerging creative, bringing fresh and innovative ideas. Works on executing concepts into impactful visual solutions.',
                gradient: 'from-cyan-500 to-blue-600',
              },
            ].map((member, i) => (
              <div key={i} className="team-member text-center">
                <div className={`team-avatar w-40 h-40 bg-gradient-to-br ${member.gradient} rounded-3xl mx-auto mb-8 shadow-lg`}></div>
                <h3 className="text-2xl font-bold text-dark mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-bold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4">{member.desc}</p>
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
