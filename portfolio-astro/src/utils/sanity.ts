import { sanityClient } from 'sanity:client';

// ─── Queries GROQ ───

const SETTINGS_QUERY = /* groq */ `*[_id == "siteSettings"][0]{
  seo { title, description },
  hero { greeting, title, subtitle, ctaLabel },
  contact { tagline, description, email, ctaLabel },
  footer { copyright, navLinks[] { _key, label, href } },
  socialLinks[] { _key, platform, url }
}`;

const PROJECTS_QUERY = /* groq */ `*[_type == "project"] | order(order asc) {
  _id,
  title,
  description,
  tags,
  link,
  order,
  featured
}`;

// ─── Tipos ───

export interface SiteSettings {
  seo?: { title?: string; description?: string };
  hero?: { greeting?: string; title?: string; subtitle?: string; ctaLabel?: string };
  contact?: { tagline?: string; description?: string; email?: string; ctaLabel?: string };
  footer?: { copyright?: string; navLinks?: { _key: string; label: string; href: string }[] };
  socialLinks?: { _key: string; platform: string; url: string }[];
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  order?: number;
  featured?: boolean;
}

export interface SiteData {
  settings: SiteSettings;
  projects: Project[];
}

// ─── Funciones de Fetching ───

export async function getSettings(): Promise<SiteSettings | null> {
  return await sanityClient.fetch(SETTINGS_QUERY);
}

export async function getProjects(): Promise<Project[]> {
  return await sanityClient.fetch(PROJECTS_QUERY);
}

/**
 * Obtiene todos los datos iniciales necesarios para el sitio,
 * aplicando valores por defecto donde sea necesario.
 */
export async function getSiteData(): Promise<SiteData> {
  const [rawSettings, projects] = await Promise.all([
    getSettings(),
    getProjects()
  ]);

  const settings: SiteSettings = {
    hero: {
      greeting: rawSettings?.hero?.greeting ?? '¡Hola! Soy Lucas,',
      title: rawSettings?.hero?.title ?? 'Frontend Developer',
      subtitle: rawSettings?.hero?.subtitle ?? 'especializado en UI/UX.',
      ctaLabel: rawSettings?.hero?.ctaLabel ?? 'Proyectos',
    },
    seo: {
      title: rawSettings?.seo?.title ?? 'Home',
      description: rawSettings?.seo?.description ?? 'Frontend Developer Portfolio',
    },
    contact: {
      tagline: rawSettings?.contact?.tagline ?? 'Hagamos equipo',
      description: rawSettings?.contact?.description ?? 'Estoy con disponibilidad para sumarme a nuevos proyectos. Ya sea que tengas una idea en mente o simplemente quieras charlar sobre código o diseño, ¡escribime!',
      email: rawSettings?.contact?.email ?? 'lucasaraya19@hotmail.com',
      ctaLabel: rawSettings?.contact?.ctaLabel ?? 'HABLEMOS',
    },
    footer: {
      copyright: rawSettings?.footer?.copyright ?? 'Lucas Araya. All rights reserved.',
      navLinks: rawSettings?.footer?.navLinks ?? [
        { _key: 'about', label: 'Sobre mí', href: '#about' },
        { _key: 'projects', label: 'Proyectos', href: '#projects' },
        { _key: 'contact', label: 'Contacto', href: '#contact' },
      ],
    },
    socialLinks: rawSettings?.socialLinks ?? [
      { _key: 'linkedin', platform: 'linkedin', url: 'https://www.linkedin.com/in/lucasaraya' },
      { _key: 'gmail', platform: 'gmail', url: 'mailto:lucasaraya19@hotmail.com' },
      { _key: 'instagram', platform: 'instagram', url: 'https://www.instagram.com/_lucasaraya/' },
      { _key: 'github', platform: 'github', url: 'https://github.com/LucasA21' },
    ],
  };

  return {
    settings,
    projects: projects.length > 0 ? projects : [
      { _id: '1', title: 'Eco Flow', description: 'Una guía minimalista para una vida consciente. Desarrollada con Astro y Tailwind puro, optimizada cien por ciento para rendimiento brutal y accesibilidad total.', tags: ['Astro', 'Tailwind', 'UX Design'] },
      { _id: '2', title: 'Serene Space', description: 'Dashboard para una app de mindfulness. Arquitectura de estados globales complejos manteniendo la fluidez en cada micro-interacción de la interfaz.', tags: ['React', 'Framer Motion'] },
      { _id: '3', title: 'Quiet Commerce', description: 'E-commerce planteado para reducir la fricción visual y la carga cognitiva. Escalamos la conversión en ventas en un ambiente libre de ruidos innecesarios.', tags: ['Next.js', 'Stripe'] },
    ],
  };
}
