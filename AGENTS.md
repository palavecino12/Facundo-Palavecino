# Guía del repositorio

## Estructura del proyecto y organización de módulos

Este es un portfolio de una sola página construido con React, TypeScript, Vite y Tailwind CSS 4. El punto de entrada es `src/main.tsx`; `src/App.tsx` ensambla las secciones de la página. Los estilos compartidos y tokens de diseño están en `src/styles/globals.css`.

Ubicá las secciones de página en `components/` (por ejemplo, `components/projects.tsx`). Los componentes reutilizables de interfaz pertenecen a `components/ui/`. Conservá el contenido estático del portfolio, los datos del perfil, proyectos y habilidades en `lib/data.ts`; las utilidades compartidas van en `lib/utils.ts`. Los archivos estáticos se sirven desde `public/`, como `public/profile.png` y `public/CV-Facundo-Palavecino.pdf`.

El sitio tiene una única ruta: `/`. La navegación interna usa IDs de sección y enlaces con hash (`#sobre-mi`, `#proyectos`), por lo que deben conservarse al editar secciones o navegación.

## Comandos de compilación, pruebas y desarrollo

- `npm install`: instala las dependencias definidas en `package-lock.json`.
- `npm run dev`: inicia el servidor de desarrollo de Vite.
- `npm run build`: verifica los tipos con TypeScript y genera el bundle de producción en `dist/`.
- `npm run preview`: sirve localmente el bundle de producción tras ejecutar el build.

Actualmente no hay un ejecutor de pruebas ni un script de lint. Ejecutá siempre `npm run build` antes de abrir un pull request e incorporá pruebas específicas al agregar lógica que requiera cobertura automatizada.

## Estilo de código y convenciones de nombres

Usá TypeScript y componentes funcionales de React. Respetá la indentación de dos espacios, comillas simples, estilo sin punto y coma y comas finales en JSX o llamadas multilínea. Nombrá archivos de componentes en kebab-case minúscula (`section-heading.tsx`), componentes exportados en PascalCase (`SectionHeading`) y variables o funciones en camelCase.

Usá el alias `@/` para imports desde la raíz, clases utilitarias de Tailwind para estilos y `cn()` de `lib/utils.ts` al combinar clases condicionalmente. No modifiques los tokens visuales de `src/styles/globals.css` salvo que el cambio de diseño sea intencional.

## Commits y pull requests

Los commits recientes usan descripciones breves en español y minúscula, como `nueva bio` o `nav transparente`. Mantené los commits enfocados y directos; preferí un resumen imperativo que describa un único cambio.

Los pull requests deben explicar el impacto visible, detallar las verificaciones realizadas —normalmente `npm run build`— e incluir capturas de pantalla para cambios visuales. Vinculá los issues relacionados cuando existan e indicá claramente cambios de contenido, assets o navegación.

## Configuración y assets

No confirmes `.env*.local`, `node_modules/` ni la salida generada en `dist/`. Mantené estables los nombres de assets públicos referenciados desde `lib/data.ts`. La metadata del sitio y las fuentes externas se configuran en `index.html`.
