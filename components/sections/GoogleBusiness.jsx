import { content } from '@/lib/i18n/content'

export function GoogleBusiness({ locale, onQuickChat }) {
  const t = content[locale].googleBusiness

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">{t.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark my-4">{t.heading}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t.description}</p>

            <div className="space-y-4 mb-8">
              {t.problems.map((problem, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold flex-shrink-0 mt-1">!</div>
                  <p className="text-gray-700 leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-10 text-white shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-100 mb-6">{t.rankingLabel}</p>

              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-blue-100 mb-1">{t.rankingBefore.label}</p>
                  <p className="text-4xl font-bold text-blue-200 line-through decoration-2">{t.rankingBefore.pos}</p>
                </div>
                <div className="text-3xl px-2">→</div>
                <div className="text-right">
                  <p className="text-sm text-blue-100 mb-1">{t.rankingAfter.label}</p>
                  <p className="text-5xl font-bold text-white">{t.rankingAfter.pos}</p>
                </div>
              </div>

              <div className="bg-white bg-opacity-15 rounded-2xl p-6 backdrop-blur mb-6">
                <p className="font-bold mb-4">{t.afterHeading}</p>
                <ul className="space-y-3 text-sm">
                  {t.after.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onQuickChat}
                className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition"
              >
                {t.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
