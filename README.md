# Portfolio - Lucas Araya

Este es mi portfolio personal, desarrollado con tecnologías modernas enfocadas en el rendimiento, la accesibilidad y una experiencia de usuario (UI/UX) cuidada. El proyecto utiliza una arquitectura de Headless CMS para la gestión dinámica de contenidos y un despliegue optimizado para la web.

## Tecnologías Utilizadas

- **Astro**: Framework principal orientado al rendimiento y la entrega de contenido estático.
- **React**: Implementación de componentes interactivos y lógica compleja de UI.
- **Sanity.io**: CMS para la gestión de contenidos (proyectos, configuraciones y textos).
- **Tailwind CSS**: Estilizado mediante utilidades para un diseño consistente y escalable.
- **Vercel**: Alojamiento y despliegue continuo, aprovechando funciones de servidor y analíticas.

## Estructura del Proyecto

El repositorio está organizado siguiendo las convenciones de Astro:

- `/src/components`: Componentes de UI (Astro y React).
- `/src/layouts`: Plantillas base para las diferentes páginas.
- `/src/pages`: Definición de rutas y vistas principales.
- `/src/sanity`: Configuración del cliente, esquemas de datos y scripts de carga.
- `/public`: Activos estáticos como iconos, fuentes e imágenes globales.

## Configuración Local

Para ejecutar este proyecto en un entorno local, asegúrese de tener instalado [Node.js](https://nodejs.org/) y [pnpm](https://pnpm.io/).

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/LucasA21/portfolio.git
   ```
2. Instalar las dependencias:
   ```bash
   pnpm install
   ```
3. Configurar variables de entorno:
   Cree un archivo `.env` en la raíz basándose en el archivo `.env.sample` e ingrese los valores correspondientes:
   ```bash
   cp .env.sample .env
   ```
4. Iniciar el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

## Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo en `localhost:4321`.
- `pnpm build`: Compila el proyecto para producción en la carpeta `/dist`.
- `pnpm preview`: Previsualiza la build de producción localmente.
- `pnpm astro check`: Realiza una validación de tipos de TypeScript y estructura de archivos `.astro`.

## Seguridad y Despliegue

Este proyecto utiliza variables de entorno para la comunicación con servicios externos. El archivo `.env` está excluido del control de versiones mediante `.gitignore`. Para despliegues en producción (Vercel), asegúrese de configurar las variables correspondientes en el panel de control del proyecto.
