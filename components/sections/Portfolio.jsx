import { content } from '@/lib/i18n/content'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'

export function Portfolio({ locale, forwardedRef, onQuickChat }) {
  const t = content[locale].portfolio

  return (
    <section ref={forwardedRef} className="py-32 px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-800 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-indigo-300 text-sm font-bold uppercase tracking-widest">{t.eyebrow}</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-4">{t.heading}</h2>
          <p className="text-indigo-200 max-w-2xl mx-auto">{t.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.plans.map((plan, i) => (
            <CardContainer key={i} className="inter-var">
              <CardBody
                className={`relative rounded-3xl p-8 min-h-[26rem] w-full h-full flex flex-col text-white border ${
                  plan.tag ? 'bg-gradient-to-br from-secondary to-primary border-transparent' : 'bg-white/5 border-white/10'
                }`}
              >
                {plan.tag && (
                  <CardItem
                    translateZ="30"
                    className="absolute -top-3 right-8 bg-accent text-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  >
                    {plan.tag}
                  </CardItem>
                )}
                <CardItem translateZ="50" className="text-2xl font-bold mb-2">
                  {plan.name}
                </CardItem>
                <CardItem as="p" translateZ="40" className="text-white/80 mb-6">
                  {plan.summary}
                </CardItem>
                <CardItem translateZ="30" className="flex-1 space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex gap-2 items-start text-sm text-white text-opacity-90">
                      <span>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardItem>
                <CardItem translateZ="60" className="w-full">
                  <button
                    onClick={onQuickChat}
                    className="w-full bg-accent hover:bg-accent-dark text-dark py-3 rounded-xl font-bold transition"
                  >
                    {t.cta}
                  </button>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  )
}
