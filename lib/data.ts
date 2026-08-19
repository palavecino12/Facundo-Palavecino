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
  name: 'Facundo',
  role: '< Desarrollador Full Stack />',
  location: 'Mendoza, Argentina',
  email: 'facundopalavecino054@gmail.com',
  bio: 'Desarrollador enfocado en crear soluciones web escalables, mantenibles y de alto rendimiento. Transformo requerimientos en arquitecturas sólidas y limpias, priorizando el trabajo en equipo, las buenas prácticas y una excelente experiencia de usuario.',
  bioExtra:
    'Actualmente busco proyectos donde pueda aportar en el frontend y el backend, aprender de gente con experiencia y seguir creciendo como profesional.',
  photo: '/profile.png',
  socials: {
    github: 'https://github.com/palavecino12',
    linkedin: 'https://www.linkedin.com/in/facundo-palavecino-886979377/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYr2mCHxAT0yvMKMFrVEFLg%3D%3D',
  },
}

// Para agregar un proyecto nuevo, solo copia un objeto y agregalo al arreglo.
export const projects: Project[] = [
  {
    slug: 'dooria',
    title: 'Dooria',
    description:
      'Aplicación web de control de acceso residencial mediante reconocimiento facial. Permite gestionar residentes y permisos de acceso, realizar reconocimiento facial en tiempo real y visualizar remotamente el dispositivo de ingreso mediante comunicación en tiempo real y transmisión de video. Proyecto personal.',
    image: '/project-1.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Zod', 'MongoDB', 'face-api.js', 'WebRTC', 'Socket.IO'],
    demoUrl: 'https://lnkd.in/p/deyXTix8',
    repoUrl: 'https://github.com/palavecino12/Dooria',
    year: '2026',
  },
  {
    slug: 'zapi',
    title: 'Zapi',
    description:
      'Aplicación web de autoservicio para un kiosco que permite escanear productos, gestionar el carrito y realizar compras de forma autónoma. Desarrollé el backend con Node.js y Express e integré Mercado Pago para procesar las ventas, validar stock y actualizar las operaciones de forma segura. Proyecto grupal desarrollado bajo metodología Scrum, donde también desempeñé el rol de Scrum Master. Proyecto actualmente en uso.',
    image: '/project-2.png',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'MySQL', 'Zod', 'Mercado Pago'],
    demoUrl: '#',
    repoUrl: 'https://github.com/palavecino12/Zapi',
    year: '2026',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Zod'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'Prisma', 'MySQL', 'MongoDB', 'Zod'],
  },
  {
    category: 'Herramientas',
    skills: ['Git', 'GitHub', 'Postman', 'Figma', 'Trello'],
  },
]
