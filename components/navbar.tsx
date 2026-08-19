'use client'

import { useEffect, useRef, useState } from 'react'
import { User, Code2, FolderKanban, Mail, type LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NavLink {
  href: string
  label: string
  icon: LucideIcon
}

const links: NavLink[] = [
  { href: '#sobre-mi', label: 'Sobre mí', icon: User },
  { href: '#habilidades', label: 'Habilidades', icon: Code2 },
  { href: '#proyectos', label: 'Proyectos', icon: FolderKanban },
  { href: '#contacto', label: 'Contacto', icon: Mail },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState(links[0].href)

  const isManualScroll = useRef(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  // Detecta el scroll para añadir fondo/borde al header en Desktop
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // IntersectionObserver para activar la sección correspondiente
  useEffect(() => {
    const sectionIds = links.map((link) => link.href.replace('#', ''))

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(
        (section): section is HTMLElement => section !== null,
      )

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      if (isManualScroll.current) return

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(`#${entry.target.id}`)
        }
      })
    }, observerOptions)

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()

    setActiveTab(href)
    isManualScroll.current = true

    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Desktop: 768px o más
      const isDesktop = window.matchMedia(
        '(min-width: 768px)',
      ).matches

      // En desktop descontamos solamente la altura del navbar.
      // En mobile no necesitamos ningún offset superior.
      const headerHeight = headerRef.current?.offsetHeight ?? 0
      const offset = isDesktop ? headerHeight : 0

      // Posición actual de la sección respecto al viewport
      const elementPosition =
        targetElement.getBoundingClientRect().top

      // Posición absoluta que debe alcanzar el scroll
      const offsetPosition =
        elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      isManualScroll.current = false
    }, 1000)
  }

  return (
    <>
      {/* Header Desktop */}
      <header
        ref={headerRef}
        className={cn(
          'fixed inset-x-0 top-0 z-50 hidden transition-all duration-300 md:block',
          scrolled
            ? 'border-b border-border bg-background/80 shadow-sm backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
          <ul className="flex items-center gap-1 rounded-full border border-border/60 bg-secondary/40 p-1 backdrop-blur-sm">
            {links.map((link) => {
              const isActive = activeTab === link.href
              const Icon = link.icon

              return (
                <li
                  key={link.href}
                  className="relative"
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      'relative z-10 flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200',
                      isActive
                        ? 'text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <Icon className="size-4 shrink-0" />
                    <span>{link.label}</span>
                  </a>

                  {isActive && (
                    <motion.div
                      layoutId="active-pill-desktop"
                      className="absolute inset-0 z-0 rounded-full bg-primary shadow-sm"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </header>

      {/* Navigation Mobile */}
      <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 md:hidden">
        <nav className="w-full max-w-md rounded-full border border-border/80 bg-background/90 p-1.5 shadow-lg backdrop-blur-md">
          <ul className="flex items-center justify-around">
            {links.map((link) => {
              const isActive = activeTab === link.href
              const Icon = link.icon

              return (
                <li
                  key={link.href}
                  className="relative flex-1"
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-label={link.label}
                    className={cn(
                      'relative z-10 flex flex-col items-center justify-center py-2 text-xs font-medium transition-colors duration-200',
                      isActive
                        ? 'text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <Icon className="size-5 shrink-0" />
                  </a>

                  {isActive && (
                    <motion.div
                      layoutId="active-pill-mobile"
                      className="absolute inset-0 z-0 rounded-full bg-primary shadow-sm"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}