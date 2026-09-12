import { content } from '@/lib/i18n/content'
import { HoverEffect } from '@/components/ui/card-hover-effect'

export function Team({ locale }) {
  const t = content[locale].team

  const items = t.members.map((member) => ({
    title: member.name,
    description: `${member.role} — ${member.desc}. ${member.bio}`,
    // HoverEffect uses `link` as the React key, so each entry must be unique
    // (a shared '#' for every card causes a duplicate-key warning/render bug).
    link: `#team-${member.name.toLowerCase().replace(/\s+/g, '-')}`,
  }))

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">{t.eyebrow}</span>
          <h2 className="text-5xl md:text-6xl font-bold text-dark mt-4 mb-6">{t.heading}</h2>
        </div>

        <HoverEffect items={items} />
      </div>
    </section>
  )
}
