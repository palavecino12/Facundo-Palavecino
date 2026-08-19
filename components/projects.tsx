import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { projects } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function Projects() {
  return (
    <section
      id="proyectos"
      className="pt-8 pb-20 md:pt-10 md:pb-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 — Proyectos"
          title="Proyectos destacados"
          description="Una selección de las cosas que he construido. Cada uno con su enfoque, retos y decisiones técnicas."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-video overflow-hidden border-b border-border">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`Vista previa de ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">
                    {project.title}
                  </h3>

                  <span className="font-mono text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-4">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80"
                    >
                      Ver detalles y video
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : null}

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <GithubIcon className="size-4" />
                      Código
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}