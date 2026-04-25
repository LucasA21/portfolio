# Astro JS en el Desarrollo

Conceptos claves del Framework Astro usados en este proyecto.

## 1. Módulos Virtuales y Astro-Icon

Para usar iconos modernos en Astro no instalamos de a un SVG por separado, usamos una librería llamada `astro-icon` junto al ecosistema estándar `Iconify`.

```astro
---
import { Icon } from "astro-icon/components";
---
<Icon name="simple-icons:gmail" size={18} />
```

Para que esto funcione agregamos la integración de Icon en `astro.config.mjs`. Esto lanza un "Módulo Virtual". 
> Un Módulo Virtual son pedazos de código que Astro genera temporalmente en la memoria durante la compilación, uniendo dependencias sin dejar un rastro sucio de archivos físicos en tu carpeta raíz.

## 2. Layouts y Slots (`<slot />`)

Astro se apoya en inyecciones de código HTML para englobar el proyecto en plantillas. Por eso nuestro archivo `src/layouts/Layout.astro` tiene todo el `<html>`, la inyección de fuentes de Google Fonts, y las etiquetas meta globales.

Dentro del Layout existe una etiqueta especial `<slot />`. Cuando desde otra página llamas al componente general `<Layout title="...">` y escribís adentro, todo tu código se inyecta justamente donde hayas posicionado ese `slot`.

## 3. Componentes Reutilizables y Datos Dinámicos (Props)

Para componentes complejos pero repetitivos (como una tarjeta de proyecto) se busca el minimalismo de código reutilizable. 
En `ProjectCard.astro` definimos los **Props** que esperamos recibir a través del frontmatter (los guiones superiores):

```ts
---
interface Props {
  title: string;
  description: string;
  tags?: string[];
  link?: string;
}

const { title, description, tags = [], link = "#" } = Astro.props;
---
```
A través del uso de TypeScript establecemos explícitamente los datos que el componente necesita para formarse (Título y descripción), y datos opcionales agregándoles el símbolo `?` (tags o link de redirección).

Al invocar los componentes listados en el `index.astro`, lo hacemos emitiendo esas variables:
```astro
<ProjectCard 
  title="Eco Flow" 
  description="Lórem ipsúm simple."
  tags={["Astro", "Tailwind"]}
/>
```
Esto crea elementos HTML en el navegador usando plantillas ordenadas.
