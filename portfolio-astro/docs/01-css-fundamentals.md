# Fundamentos de CSS en tu Portfolio

Este documento recopila las bases de CSS y Tailwind utilizando como ejemplo los desarrollos reales de tu portfolio.

## 1. El Box Model — La base de todo en CSS

Cada elemento HTML es un **rectángulo** (una "caja"). Esta caja tiene 4 capas, de adentro hacia afuera:

```text
┌─────────────────────────────── margin (espacio exterior) ──┐
│  ┌──────────────────────── border (el borde visible) ──┐   │
│  │  ┌─────────────── padding (espacio interior) ───┐   │   │
│  │  │                                              │   │   │
│  │  │           CONTENIDO (texto, imagen)           │   │   │
│  │  │                                              │   │   │
│  │  └──────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘
```

### Ejemplo real — Padding y Borders
```html
<button class="px-8 py-2.5 rounded-full border border-stroke">Projects</button>
```
- `px-8`: Padding horizontal (32px totales internos a los lados).
- `py-2.5`: Padding vertical (10px totales internos arriba/abajo).
- `border border-stroke`: Agrega la capa visible de borde con nuestro color de token.

## 2. Color y Herencia

### Herencia CSS
Propiedades como `color` y `font-family` se **heredan** de padres a hijos. Si definís el texto oscuro en el `body`, todos los hijos lo adoptan.

```css
/* global.css */
html, body {
    color: var(--color-text-dark); /* #2D2424 — cálido oscuro */
}
```
Para destacar palabras, usamos clases específicas que sobreescriben la herencia: `<span class="text-accent-brown">Hi!</span>`.

## 3. Tipografía

El control del texto dicta gran parte del diseño minimalista:

- **Font Weight (`font-medium`, `font-normal`)**: Controla el grosor. Combinar color marrón con weights más pesados (semibold) crea un doble énfasis visual.
- **Font Size (`text-xl`, `text-3xl`)**: Crea jerarquía. Ojo a dónde mira el usuario primero.
- **Line Height (`leading-none`, `leading-[150%]`)**: Espacio entre líneas. `leading-none` junta líneas para logotipos (como el header "Lucas Araya"), mientras que `150%` da aire a los párrafos de las cards.
- **Letter Spacing (`tracking-wider`)**: Separa caracteres. Agrega una sensación de elegancia, usando 5% como indicaba el Figma.

## 4. Disposición (Layouts): Flexbox vs CSS Grid

### Flexbox (flujo unidimensional)
Ideal para alinear elementos sueltos en fila o columna (Ej: Íconos del header).

```html
<header class="flex justify-between items-center">
```
- `justify-between`: Separa al máximo en el eje principal.
- `items-center`: Centra en el eje cruzado.

### CSS Grid (flujo bidimensional)
Ideal para cuadrículas estructuradas (Ej: Grid de Proyectos).

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```
Usa los breakpoints de Tailwind (`md:`, `lg:`) para cambiar las columnas según la pantalla.

## 5. Posicionamiento (Relative y Absolute)

Una táctica clave para poner adornos "flotantes" sobre una escena (como la nube de iconos `avion`, `chat`, etc.) implica re-jugar las físicas del navegador usando posicionamiento:

- **Contenedor Padre (`relative`)**: Declarar tu marco base limitador (ejemplo: un `div` invisible que encierra el texto).
- **Adornos Hijos (`absolute`)**: Estos elementos renuncian al flujo tradicional estricto del espacio físico; la página pasa a tratarlos como "fantasmas" y puedes anclarlos dándoles coordenadas numéricas fijas atadas siempre a su padre (`-top-4`, `-left-10`, `bottom-2`).

Al combinarlos con las variables de rotación `rotate-12` emulamos dispersión "al azar" de ilustraciones, rompiendo la aburrida matemática binaria en pantalla.

## 6. Unidades CSS

| Unidad | Significado | Uso |
|--------|-------------|-----|
| `px` | Píxel absoluto | Tamaños exactos de diseño. |
| `em` | Relativo al font-size del elemento | Letter-spacing, márgenes proporcionales. |
| `rem` | Relativo al font-size del root (`html`) | Tailwind basa casi todo en `rem` por **accesibilidad** (se adapta si el usuario hace zoom en su navegador). |

## 7. Tailwind CSS v4 y Desing Tokens

En la v4 de Tailwind, las variables dentro de `@theme` se convierten en clases automáticas:

```css
@theme {
    --color-accent-brown: #531F1F;
}
```
Esto nos regala: `text-accent-brown`, `bg-accent-brown`, `border-accent-brown`, todo de manera nativa sin configurar un `tailwind.config.mjs`.
