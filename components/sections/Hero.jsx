'use client'

import { content } from '@/lib/i18n/content'
import { Spotlight } from '@/components/ui/spotlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { ShimmerButton } from '@/components/ui/shimmer-button'

export function Hero({ locale, onViewPortfolio, onQuickChat }) {
  const t = content[locale].hero

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-800 pt-32 pb-20 px-4 relative overflow-hidden">
      <Spotlight className="top-0 left-1/4" fill="#818cf8" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto mb-16 animate-fade-in-down">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse"></span>
            <span className="text-indigo-300 text-sm font-bold uppercase tracking-widest">{t.eyebrow}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t.headline}<span className="gradient-text">{t.headlineHighlight}</span>{t.headlineEnd}
          </h1>

          <TextGenerateEffect
            words={t.subheadline}
            duration={1.5}
            className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed font-light"
          />

          <div className="flex flex-col md:flex-row gap-4 mb-16">
            <ShimmerButton
              onClick={onViewPortfolio}
              background="linear-gradient(110deg, #4f46e5, #9333ea)"
              shimmerColor="#ffffff"
              className="px-8 py-4 text-lg font-bold shadow-xl"
            >
              <span className="text-white">{t.ctaPrimary}</span>
            </ShimmerButton>
            <ShimmerButton
              onClick={onQuickChat}
              background="rgba(255, 255, 255, 0.1)"
              shimmerColor="#f59e0b"
              className="px-8 py-4 text-lg font-bold border-2 border-indigo-400 backdrop-blur"
            >
              <span className="text-white">{t.ctaSecondary}</span>
            </ShimmerButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white border-opacity-10">
            {t.stats.map((stat, i) => (
              <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-slate-400 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
