import rss from '@astrojs/rss';
import { getProjects } from '../utils/sanity';
import { toHTML } from '@portabletext/to-html';

export async function GET(context: any) {
  const projects = await getProjects();
  
  return rss({
    title: 'Lucas Araya | Frontend Developer',
    description: 'Portafolio de Lucas Araya, Frontend Developer especializado en interfaces modernas y minimalistas.',
    site: context.site,
    items: projects.map((project) => ({
      title: project.title,
      pubDate: project._createdAt ? new Date(project._createdAt) : new Date(),
      description: project.description,
      link: `/#projects`, // Single page portfolio
      content: project.content ? toHTML(project.content) : project.description,
    })),
    customData: `<language>es-AR</language>`,
  });
}
