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
  const [activeTab, setActiveTab] = useState(links[0].href)

  const isManualScroll = useRef(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const desktopNavRef = useRef<HTMLElement>(null)

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

      // En desktop el nav flota arriba, así que igual conviene dejarle
      // un margen para que la sección no quede pegada al borde.
      const navHeight = desktopNavRef.current?.offsetHeight ?? 0
      const offset = isDesktop ? navHeight + 24 : 0

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
      {/* Navigation Desktop: flotante arriba, con texto */}
      <div className="fixed inset-x-0 top-4 z-50 hidden justify-center px-4 md:flex">
        <nav
          ref={desktopNavRef}
          className="rounded-full border border-border/80 bg-background/10 p-1.5 shadow-lg backdrop-blur-md"
        >
          <ul className="flex items-center gap-1">
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
      </div>

      {/* Navigation Mobile: flotante abajo, solo íconos */}
      <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 md:hidden">
        <nav className="w-full max-w-md rounded-full border border-border/80 bg-background/10 p-1.5 shadow-lg backdrop-blur-md">
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