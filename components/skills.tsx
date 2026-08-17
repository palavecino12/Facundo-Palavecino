import { skillGroups } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function Skills() {
  return (
    <section id="habilidades" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="02 — Habilidades"
          title="Tecnologías con las que trabajo"
          description="Herramientas y lenguajes que uso para llevar una idea desde el diseño hasta producción."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <h3 className="font-display text-lg font-semibold">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 font-mono text-sm text-secondary-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
