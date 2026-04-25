import type { StructureResolver } from 'sanity/structure';
import { CogIcon, ProjectsIcon } from '@sanity/icons';

// Tipos de documentos singleton (no aparecen como lista)
const SINGLETONS = ['siteSettings'];

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      // 1. Singleton: Configuración del Sitio
      S.listItem()
        .title('Configuración del Sitio')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Configuración del Sitio'),
        ),

      S.divider(),

      // 2. Colección: Proyectos
      S.documentTypeListItem('project')
        .title('Proyectos')
        .icon(ProjectsIcon),

      S.divider(),

      // 3. Resto de documentos (filtrados para excluir singletons)
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !SINGLETONS.includes(listItem.getId() as string) &&
          listItem.getId() !== 'project',
      ),
    ]);
