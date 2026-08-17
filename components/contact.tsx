import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/data'

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/2 -z-0 size-[400px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
          />

          <div className="relative z-10 mx-auto max-w-xl">
            <p className="font-mono text-sm text-primary">04 — Contacto</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              Estoy abierto a colaboraciones, oportunidades laborales o
              simplemente a charlar sobre tecnología. Escríbeme y te respondo
              pronto.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>

            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:bg-secondary"
              >
                <GithubIcon className="size-4" />
                GitHub
                <ArrowUpRight className="size-3.5 text-muted-foreground" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:bg-secondary"
              >
                <LinkedinIcon className="size-4" />
                LinkedIn
                <ArrowUpRight className="size-3.5 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
