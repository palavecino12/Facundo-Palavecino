export type Project = {
  slug: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  repoUrl?: string
  year: string
}

export type SkillGroup = {
  category: string
  skills: string[]
}

// Datos del perfil. Edita estos valores con tu informacion.
export const profile = {
  name: 'Tu Nombre',
  role: 'Desarrollador de Software',
  location: 'Ciudad, Pais',
  email: 'hola@tucorreo.com',
  bio: 'Desarrollador enfocado en crear productos web rapidos, accesibles y bien construidos. Me gusta transformar ideas en interfaces claras y sistemas escalables, cuidando tanto el detalle visual como la calidad del codigo.',
  bioExtra:
    'Actualmente busco proyectos donde pueda aportar en el frontend y el backend, aprender de gente con experiencia y seguir creciendo como profesional.',
  photo: '/profile.png',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
}

// Para agregar un proyecto nuevo, solo copia un objeto y agregalo al arreglo.
export const projects: Project[] = [
  {
    slug: 'dashboard-analytics',
    title: 'Panel de Analiticas',
    description:
      'Dashboard interactivo para visualizar metricas en tiempo real, con graficas, filtros dinamicos y modo oscuro. Enfocado en rendimiento y una experiencia de usuario fluida.',
    image: '/project-1.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    demoUrl: '#',
    repoUrl: '#',
    year: '2025',
  },
  {
    slug: 'gestor-tareas',
    title: 'Gestor de Tareas',
    description:
      'Aplicacion para organizar tareas y proyectos con arrastrar y soltar, recordatorios y sincronizacion. Disenada mobile-first con una interfaz limpia y minimalista.',
    image: '/project-2.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma'],
    demoUrl: '#',
    repoUrl: '#',
    year: '2024',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST APIs'],
  },
  {
    category: 'Herramientas',
    skills: ['Git', 'GitHub', 'Figma', 'Vercel', 'Docker'],
  },
]
