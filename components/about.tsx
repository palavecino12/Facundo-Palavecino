import Image from 'next/image'
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/data'

export function About() {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden pt-8 pb-20 md:pt-40 md:pb-28"
    >
      {/* Resplandor decorativo de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-[1fr_auto] md:items-center">
        {/* Contenido */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-green-600" />
            Listo para nuevos desafíos
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl">
            Hola, soy {profile.name}
          </h1>

          <p className="mt-3 font-display text-xl text-primary md:text-2xl">
            {profile.role}
          </p>

          {/* Imagen - solamente mobile */}
          <div className="mt-8 flex justify-center md:hidden">
            <div className="relative w-fit">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl border border-primary/40"
              />

              <Image
                src={profile.photo || '/placeholder.svg'}
                alt={`Foto de ${profile.name}`}
                width={260}
                height={320}
                priority
                className="h-[280px] w-[240px] rounded-3xl object-cover"
              />
            </div>
          </div>

          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/CV-Facundo-Palavecino.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Consultar CV
              <Download className="size-4" />
            </a>

            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Ver proyectos
              <ArrowDown className="size-4" />
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Contactar
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <GithubIcon className="size-5" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <LinkedinIcon className="size-5" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Correo"
                className="rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Imagen - solamente desktop */}
        <div className="hidden md:block">
          <div className="relative mx-auto w-fit">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl border border-primary/40"
            />

            <Image
              src={profile.photo || '/placeholder.svg'}
              alt={`Foto de ${profile.name}`}
              width={320}
              height={400}
              priority
              className="h-[420px] w-[340px] rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}