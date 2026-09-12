import { content } from '@/lib/i18n/content'

export function SiteFooter({ locale, onOpenChat }) {
  const t = content[locale].footer
  const plans = content[locale].portfolio.plans

  return (
    <footer className="bg-dark text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white border-opacity-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t.brand}</h3>
            <p className="text-indigo-400 mb-4">{t.tagline}</p>
            <div className="flex gap-3">
              {[
                { label: 'LinkedIn', url: 'https://linkedin.com/in/dancicilio' },
                { label: 'GitHub', url: 'https://github.com/dancicilio' },
                { label: 'Instagram', url: 'https://instagram.com/dancicilio' },
              ].map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-indigo-900 rounded-lg text-sm hover:bg-indigo-800 transition">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t.servicesLabel}</h4>
            <ul className="space-y-2 text-gray-300">
              {t.services.map((service, i) => (
                <li key={i}><a href="#" className="hover:text-white transition">{service}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t.portfolioLabel}</h4>
            <ul className="space-y-2 text-gray-300">
              {plans.map((plan, i) => (
                <li key={i}><button onClick={onOpenChat} className="hover:text-white transition text-left">{plan.name}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t.contactLabel}</h4>
            <p className="text-gray-300 mb-4">{t.contactText}</p>
            <button onClick={onOpenChat} className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-lg font-bold transition">
              {t.contactCta}
            </button>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>{t.copyright}</p>
          <p>{t.signature}</p>
        </div>
      </div>
    </footer>
  )
}
