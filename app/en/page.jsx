'use client'

import { useRef, useState } from 'react'

function ContactModal({ isOpen, setIsOpen }) {
  return (
    <>
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3 md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all button"
        >
          Chat
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-dark">Let's Talk?</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-gray-400 hover:text-dark transition"
              >
                ✕
              </button>
            </div>

            <p className="text-gray-600 mb-6">Reach out to us through any of these channels:</p>

            <div className="space-y-3">
              <a href="https://linkedin.com/in/dancicilio" target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition button">💼 LinkedIn</a>
              <a href={`https://wa.me/55${process.env.NEXT_PUBLIC_DAN_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition button">💬 Dan - WhatsApp</a>
              <a href={`mailto:${process.env.NEXT_PUBLIC_DAN_EMAIL}`} className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-bold hover:bg-red-700 transition button">📧 Dan - Email</a>
              <a href={`https://wa.me/55${process.env.NEXT_PUBLIC_PRI_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition button">💬 Pri - WhatsApp</a>
              <a href={`mailto:${process.env.NEXT_PUBLIC_PRI_EMAIL}`} className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-bold hover:bg-red-700 transition button">📧 Pri - Email</a>
              <a href="https://instagram.com/dancicilio" target="_blank" rel="noopener noreferrer" className="block w-full bg-pink-600 text-white text-center py-3 rounded-lg font-bold hover:bg-pink-700 transition button">📸 Instagram</a>
            </div>

            <button onClick={() => setIsOpen(false)} className="w-full mt-6 bg-gray-200 text-dark py-3 rounded-lg font-bold hover:bg-gray-300 transition">Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const portfolioRef = useRef(null)

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-800 pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full opacity-10 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full opacity-10 -ml-48 -mb-48"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto mb-16 animate-fade-in-down">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full animate-pulse"></span>
              <span className="text-indigo-300 text-sm font-bold uppercase tracking-widest">Web Design Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Websites that <span className="gradient-text">convert</span> your customers
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed font-light">
              Premium design, optimized performance, and digital strategy for businesses that want to grow. We create web experiences that sell.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-16">
              <button
                onClick={scrollToPortfolio}
                className="button px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl"
              >
                View Portfolio
              </button>
              <button
                onClick={() => setIsContactOpen(true)}
                className="button px-8 py-4 bg-white bg-opacity-10 border-2 border-indigo-400 text-white rounded-xl font-bold text-lg backdrop-blur hover:bg-opacity-20"
              >
                Quick Chat
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white border-opacity-10">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-600 bg-clip-text text-transparent">15+</div>
                <p className="text-slate-400 text-sm mt-2">Projects Delivered</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-600 bg-clip-text text-transparent">99%</div>
                <p className="text-slate-400 text-sm mt-2">Client Satisfaction</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">25+</div>
                <p className="text-slate-400 text-sm mt-2">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-32 px-4 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-indigo-600 text-sm font-bold uppercase tracking-widest">Our Expertise</span>
            <h2 className="text-5xl md:text-6xl font-bold text-dark mt-4 mb-6">
              Everything you need to grow online
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Premium Design', desc: 'Modern, intuitive interfaces aligned with your brand identity', color: 'from-indigo-600 to-purple-600' },
              { title: 'Performance', desc: 'Fast, optimized websites that convert visitors into customers', color: 'from-emerald-500 to-cyan-600' },
              { title: 'Strategy', desc: 'Development focused on measurable results and exponential growth', color: 'from-pink-500 to-red-600' },
              { title: 'Google My Business', desc: 'Optimization, insertion, updates and complete profile management', color: 'from-blue-500 to-cyan-600' },
            ].map((service, i) => (
              <div
                key={i}
                className="service-card p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl mb-6`}></div>
                <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE MY BUSINESS SECTION */}
      <section className="py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">Specialists in</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark my-4">Google My Business</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get your company showing up in local search results. We manage insertion, updates and complete optimization of your profile for maximum visibility and conversion.
              </p>

              <div className="space-y-4 mb-8">
                {['Complete Insertion', 'Regular Updates', 'Review Management', 'Analytics & Reports'].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-bold text-dark">{item}</h4>
                      <p className="text-sm text-gray-600">
                        {item === 'Complete Insertion' && 'Creation and optimization of your profile with all essential information'}
                        {item === 'Regular Updates' && 'Constant maintenance with updated data and fresh content'}
                        {item === 'Review Management' && 'Strategic monitoring and response to comments and ratings'}
                        {item === 'Analytics & Reports' && 'Tracking of views, clicks and monthly conversions'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-10 text-white shadow-2xl">
                <div className="text-6xl font-bold mb-4">73%</div>
                <p className="text-lg mb-8 leading-relaxed">Of local searches result in physical visits</p>

                <div className="bg-white bg-opacity-15 rounded-2xl p-6 backdrop-blur mb-6">
                  <p className="font-bold mb-4">Proven Benefits:</p>
                  <ul className="space-y-3 text-sm">
                    <li>📍 Show up on Google Maps</li>
                    <li>⭐ Increase ratings and credibility</li>
                    <li>📞 More calls and messages</li>
                    <li>🏪 More physical visits</li>
                    <li>💰 Better ROI on local marketing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <ContactModal isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
    </>
  )
}
