# Glosario Web Rápido

Consulta rápida sobre la jerga tratada en diseño y código en tu proyecto.

| Concepto | Explicación base |
|----------|-------------|
| **Box Model** | Las 4 capas de todo elemento: content → padding → border → margin. |
| **Herencia CSS** | Propiedades como `color` y `font` se transmiten desde el padre superior (`<body>`) hacia los hijos automáticamente, eliminando declaraciones redundantes. |
| **Flexbox** | Sistema de layout unidimensional (una fila o columna a la vez). |
| **CSS Grid** | Sistema de layout bidimensional (capacidad de mapeo de filas y columnas simultáneamente). |
| **Breakpoint** | Punto de quiebre para diseño de pantallas (Ej Tailwind: `md:` = 768px para arriba = Todo en tabletas y computadoras). |
| **Design Token** | Variable de diseño centralizada para consistencia visual (ej: Variables de colores en CSS). |
| **Clase utilitaria** | Clase CSS que aplica de forma estricta una sola propiedad (ej: `p-4`, `text-center`), la gran fortaleza base de librerías como Tailwind. |
| **Valor arbitrario** | Valor exacto incrustado en código Tailwind utilizando corchetes `[]` cuando el diseño en Figma se distancia de opciones matemáticas tradicionales (ej: `text-[48px]`). |
| **Componente Astro** | Bloque de reutilización en HTML/JS (`.astro`). |
| **Layout** | Componente envolvente, establece fondos y cargas HTML base (`<html>` / `<head>`). |
| **`<slot />`** | "Hueco" virtual vacío presente en los `Layouts` aguardando a que se le inyecte el contenido principal del desarrollo. |
| **Props** | La información (datos dinámicos) que una página le escupe como requerimiento a un componente reutilizable para que logre cobrar su forma (ej: Textos y tags de una ProjectCard). |
| **Integración** | Plugins oficiales orientados a las extensiones veloces en Astro. |
| **Módulo virtual** | Archivos construidos sobre memoria ram efímera en momentos de compilación interna, en lugar de residir como chatarra permanente dentro del disco. Utilizado por integraciones limpias como `astro-icon`. |
| **SVG Fill/Stroke** | Atributos propios del vector. Fill (Pintar cuerpo interno del fondo libre interno) - Stroke (Color para los trazados duros o bordes exteriores). |
| **Unidad REM** | Medida relativa apuntando a lo establecido internamente como base del `<html>`, es la gran bandera nativa del navegador para mantener tamaños inclusivos escalados. |
| **Margen Negativo** | Utilizado para acercar elementos a fuerza en CSS, robándole área propia a la separación tradicional (ej: `-mt-2`). |
| **Jerarquía visual** | La estructuración intencional de opacidades, márgenes o colores vibrantes guiando psicológicamente el enfoque mental o lector de un usuario. |
| **Cards Tipográficas** | Diseños que huyen intencionalmente de la fotografía o recursos realistas cediendo lugar puramente al aire entre hermosas fuentes, espaciados minimalistas estrictos o vectores puros. |
| **`@keyframes`** | Función nativa de CSS donde residen los "fotogramas claves" preestablecidos para armar o planificar una animación cuadro a cuadro. |
| **`currentColor`** | Palabra mágica del CSS que forza un archivo gráfico vectorial HTML (SVG Inline) a colorearse estrictamente acatando lo instruido o heredado por sus cajas padres o contornos cercanos de texto, esquivando variables estáticas duras. |
| **La clase `group`** | Selector rey en interactividad Tailwind moderno, permitiendo que CSS interno y descendiente entienda cuándo su bloque general gigante fue tocado / accionado (hover de contenedor), y no estrictamente accionar de forma individual. |
