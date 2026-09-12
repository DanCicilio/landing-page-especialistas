import { content } from '@/lib/i18n/content'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'
import { BorderBeam } from '@/components/ui/border-beam'
import { DomainIcon, SeoIcon, GoogleBusinessIcon, SocialIcon } from '@/components/icons/PillarIcons'

const GRADIENTS = ['from-primary to-secondary', 'from-emerald-500 to-cyan-600', 'from-pink-500 to-red-600', 'from-blue-500 to-cyan-600']
const ICONS = [DomainIcon, SeoIcon, GoogleBusinessIcon, SocialIcon]

// BentoCard unconditionally renders `<Icon />`; the brief's template omits an icon
// per service, so a no-op fallback is needed to avoid a "type is invalid" crash.
const NoIcon = () => null

export function Services({ locale }) {
  const t = content[locale].services

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">{t.eyebrow}</span>
          <h2 className="text-5xl md:text-6xl font-bold text-dark mt-4 mb-6">{t.heading}</h2>
        </div>

        <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((service, i) => {
            const PillarIcon = ICONS[i]
            return (
              <BentoCard
                key={i}
                name={service.title}
                description={service.desc}
                className="relative col-span-1 overflow-hidden rounded-2xl bg-white p-8 shadow-lg"
                background={
                  <div className={`absolute top-0 right-0 w-14 h-14 bg-gradient-to-br ${GRADIENTS[i]} rounded-xl m-8 flex items-center justify-center`}>
                    <PillarIcon className="w-7 h-7 text-white" />
                  </div>
                }
                href={undefined}
                cta={undefined}
                Icon={NoIcon}
              >
                <BorderBeam size={80} duration={8} colorFrom="#4f46e5" colorTo="#9333ea" />
              </BentoCard>
            )
          })}
        </BentoGrid>
      </div>
    </section>
  )
}
