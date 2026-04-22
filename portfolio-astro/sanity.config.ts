import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'lucas-portfolio',
  title: 'Lucas Portfolio',
  projectId: 'TU_ID_AQUÍ',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [
      /* Aquí iremos agregando los modelos de datos como 'project' */
    ],
  },
});