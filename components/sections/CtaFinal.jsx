import { content } from '@/lib/i18n/content'
import { Meteors } from '@/components/ui/meteors'
import { ShimmerButton } from '@/components/ui/shimmer-button'

export function CtaFinal({ locale, onScheduleChat }) {
  const t = content[locale].ctaFinal

  return (
    <section className="py-32 px-4 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      <Meteors number={20} />

      <div className="max-w-2xl mx-auto text-center relative z-10 animate-fade-in-up">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">{t.heading}</h2>
        <p className="text-xl text-white text-opacity-95 mb-10 leading-relaxed">{t.description}</p>
        <ShimmerButton
          onClick={onScheduleChat}
          background="#ffffff"
          shimmerColor="#f59e0b"
          className="px-10 py-4 text-lg font-bold shadow-2xl"
        >
          <span className="text-primary">{t.cta}</span>
        </ShimmerButton>
      </div>
    </section>
  )
}
