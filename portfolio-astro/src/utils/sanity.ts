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

// ─── Funciones de Fetching ───

export async function getSettings(): Promise<SiteSettings | null> {
  return await sanityClient.fetch(SETTINGS_QUERY);
}

export async function getProjects(): Promise<Project[]> {
  return await sanityClient.fetch(PROJECTS_QUERY);
}
