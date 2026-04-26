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
  "mainImage": mainImage.asset->url,
  "gallery": gallery[].asset->url,
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
  mainImage?: string;
  gallery?: string[];
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
      description: rawSettings?.seo?.description ?? 'Frontend Developer especializado en crear interfaces modernas, minimalistas y altamente performantes. Explora mis proyectos y descubre cómo trabajo.',
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
      { 
        _id: '1', 
        title: 'Eco Flow', 
        description: 'Una guía minimalista para una vida consciente. Desarrollada con Astro y Tailwind puro, optimizada cien por ciento para rendimiento brutal y accesibilidad total. El diseño se centra en la calma visual utilizando una paleta neutra y tipografías elegantes que invitan a la lectura pausada.', 
        tags: ['Astro', 'Tailwind', 'UX Design', 'Minimalism', 'Performance'],
        link: 'https://eco-flow.demo',
        mainImage: 'https://images.unsplash.com/photo-1542241193-41c304d53894?auto=format&fit=crop&q=80&w=1200',
        gallery: [
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800'
        ]
      },
      { 
        _id: '2', 
        title: 'Serene Space', 
        description: 'Dashboard para una app de mindfulness. Arquitectura de estados globales complejos manteniendo la fluidez en cada micro-interacción de la interfaz. Implementamos gráficas interactivas que visualizan el progreso del usuario de manera orgánica y no estresante.', 
        tags: ['React', 'Framer Motion', 'State Mgmt', 'UI Design'],
        link: 'https://serene-space.demo',
        mainImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200'
      },
      { 
        _id: '3', 
        title: 'Quiet Commerce', 
        description: 'E-commerce planteado para reducir la fricción visual y la carga cognitiva. Escalamos la conversión en ventas en un ambiente libre de ruidos innecesarios. El proceso de checkout fue rediseñado totalmente bajo principios de psicología cognitiva.', 
        tags: ['Next.js', 'Stripe', 'Cognitive Psychology'],
        link: 'https://quiet-commerce.demo',
        mainImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200'
      },
    ],
  };
}
