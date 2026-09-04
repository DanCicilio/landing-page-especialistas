'use client'

import { useRef } from 'react'
import { ContactModal } from '@/components/ContactModal'

export default function Home() {
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
              <span className="text-indigo-300 text-sm font-bold uppercase tracking-widest">Soluções de Design Web</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Websites que <span className="gradient-text">convertem</span> seus clientes
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed font-light">
              Design premium, performance otimizada e estratégia digital para empresas que querem crescer. Criamos experiências web que vendem.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-16">
              <button
                onClick={scrollToPortfolio}
                className="button px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl"
              >
                Ver Portfólio
              </button>
              <button
                onClick={() => document.querySelector('[data-contact]')?.click()}
                className="button px-8 py-4 bg-white bg-opacity-10 border-2 border-indigo-400 text-white rounded-xl font-bold text-lg backdrop-blur hover:bg-opacity-20"
              >
                Conversa Rápida
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white border-opacity-10">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-600 bg-clip-text text-transparent">15+</div>
                <p className="text-slate-400 text-sm mt-2">Projetos Entregues</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-600 bg-clip-text text-transparent">99%</div>
                <p className="text-slate-400 text-sm mt-2">Satisfação do Cliente</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">25+</div>
                <p className="text-slate-400 text-sm mt-2">Desde 1999</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-32 px-4 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-indigo-600 text-sm font-bold uppercase tracking-widest">Nossa Expertise</span>
            <h2 className="text-5xl md:text-6xl font-bold text-dark mt-4 mb-6">
              Tudo que você precisa para crescer online
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Design Premium', desc: 'Interfaces modernas, intuitivas e alinhadas com sua marca', color: 'from-indigo-600 to-purple-600' },
              { title: 'Performance', desc: 'Sites rápidos, otimizados e que convertem visitantes em clientes', color: 'from-emerald-500 to-cyan-600' },
              { title: 'Estratégia', desc: 'Desenvolvimento focado em resultados mensuráveis e crescimento exponencial', color: 'from-pink-500 to-red-600' },
              { title: 'Google Meus Negócios', desc: 'Otimização, inserção, atualização e gestão completa do seu perfil', color: 'from-blue-500 to-cyan-600' },
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

      {/* GOOGLE MEUS NEGÓCIOS SECTION */}
      <section className="py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">Especialistas em</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark my-4">Google Meus Negócios</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sua empresa aparecendo nos resultados de busca local. Gerenciamos inserção, atualização e otimização completa do seu perfil para máxima visibilidade e conversão.
              </p>

              <div className="space-y-4 mb-8">
                {['Inserção Completa', 'Atualização Regular', 'Gestão de Avaliações', 'Analytics & Relatórios'].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-bold text-dark">{item}</h4>
                      <p className="text-sm text-gray-600">
                        {item === 'Inserção Completa' && 'Criação e otimização do seu perfil com todas informações essenciais'}
                        {item === 'Atualização Regular' && 'Manutenção constante com dados atualizados e conteúdo fresco'}
                        {item === 'Gestão de Avaliações' && 'Monitoramento e resposta estratégica a comentários e ratings'}
                        {item === 'Analytics & Relatórios' && 'Acompanhamento de visualizações, cliques e conversões mensais'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-10 text-white shadow-2xl">
                <div className="text-6xl font-bold mb-4">73%</div>
                <p className="text-lg mb-8 leading-relaxed">Das buscas locais resultam em visita presencial</p>

                <div className="bg-white bg-opacity-15 rounded-2xl p-6 backdrop-blur mb-6">
                  <p className="font-bold mb-4">Benefícios Comprovados:</p>
                  <ul className="space-y-3 text-sm">
                    <li>📍 Aparecer no mapa do Google</li>
                    <li>⭐ Aumentar avaliações e credibilidade</li>
                    <li>📞 Mais ligações e mensagens</li>
                    <li>🏪 Mais visitas presenciais</li>
                    <li>💰 Maior ROI em marketing local</li>
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
            <span className="text-indigo-300 text-sm font-bold uppercase tracking-widest">Portfólio</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Projetos que transformaram negócios
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Seluma Engenharia',
                desc: 'Website profissional com portfólio de projetos interativo e sistema de contato integrado',
                url: 'https://seluma.eng.br',
                gradient: 'from-purple-600 to-pink-600',
              },
              {
                title: 'Surbi Engenharia',
                desc: 'Plataforma moderna com showcasing de expertise técnica e sistema de propostas online',
                url: 'https://surbi.eng.br',
                gradient: 'from-pink-600 to-red-600',
              },
              {
                title: 'TrustlyGo',
                desc: 'Solução inovadora com interface intuitiva e arquitetura escalável de última geração',
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
                  Explorar Projeto →
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
            <span className="text-indigo-600 text-sm font-bold uppercase tracking-widest">Especialistas</span>
            <h2 className="text-5xl md:text-6xl font-bold text-dark mt-4 mb-6">
              O time por trás do seu sucesso
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dan Cicilio',
                role: 'Marketeer & Fundador',
                desc: 'Formado em 1999 • 25+ Anos de Experiência',
                bio: 'Estrategista de marketing digital com vasta experiência. Lidera a visão estratégica, posicionamento e crescimento dos negócios digitais.',
                gradient: 'from-purple-600 to-pink-600',
              },
              {
                name: 'Pri Martins',
                role: 'Executiva de Vendas',
                desc: 'Especialista em Relacionamento Comercial',
                bio: 'Especialista em relacionamento comercial e fechamento de negócios. Conecta soluções estratégicas com clientes ideais que buscam crescimento.',
                gradient: 'from-pink-600 to-red-600',
              },
              {
                name: 'Pietro Cicilio',
                role: 'Estagiário de Criação',
                desc: 'Criativo em Formação',
                bio: 'Criativo em formação, trazendo ideias frescas e inovadoras. Trabalha na execução de conceitos em soluções visuais impactantes.',
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
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-white text-opacity-95 mb-10 leading-relaxed">
            Vamos criar um website que não apenas apresenta, mas vende. Estratégia, design premium e performance garantida.
          </p>
          <button
            onClick={() => document.querySelector('[data-contact]')?.click()}
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
                onClick={() => document.querySelector('[data-contact]')?.click()}
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
      <div data-contact style={{ display: 'none' }}></div>
      <ContactModal />
    </>
  )
}
