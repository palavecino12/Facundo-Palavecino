import { profile } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Todos los derechos
          reservados.
        </p>
        <p className="font-mono text-xs">
          Hecho con Next.js y Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
