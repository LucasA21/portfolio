# Animaciones y Micro-interacciones

Detalles sobre cómo añadimos movimiento profesional al portfolio.

## 1. CSS Puro vs Librerías de Animación

Para animaciones simples (como un rebote continuo o un hover de carta), **CSS puro** (`@keyframes` o `transition`) es la opción más liviana y profesional. Las librerías como Framer Motion o GSAP se reservan para animaciones secuenciales complejas (montajes cinematográficos, drag & drop, etc), usar librerías pesadas para un botón es una mala práctica de rendimiento.

## 2. `@keyframes` y `animation`

`@keyframes` define los "fotogramas clave" de un ciclo:

```css
@keyframes bounce-down {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(4px); }
}
```

Para aplicarlo a un elemento, usamos la propiedad `animation`:

```css
.btn-projects-arrow {
    animation: bounce-down 1.5s ease-in-out infinite;
}
```

- **Duración (1.5s)**: Lo que tarda en dar una vuelta.
- **Timing (ease-in-out)**: Suaviza la entrada y salida, eliminando la robotización del movimiento lineal.
- **Transform**: Mover (`translateY`), rotar o escalar, es altamente performante porque la computadora lo procesa directo en la GPU (Tarjeta Gráfica), no recalculando el layout general.

## 3. Micro-interacciones Avanzadas de Tailwind (El selector `group`)

El uso de estados `:hover` en botones es estándar, pero en diseño moderno, a veces necesitamos que **al hacer hover en el contenedor**, *los elementos de adentro interactúen*.

Para eso de utiliza la clase `group` de Tailwind en el contenedor padre, y el modificador `group-hover:` en el contenedor hijo:

```html
<a class="group hover:-translate-y-2 ... h-full">
  <h3 class="... group-hover:opacity-80">Proyecto 1</h3>
  <div class="... group-hover:rotate-45">
    Icono flecha
  </div>
</a>
```

Como ves en la `ProjectCard`, al pasar el mouse por encima del div grande:
- El div grande se eleva (`hover:-translate-y-2`).
- El texto del título baja su opacidad (`group-hover:opacity-80`).
- La flechita gira animadamente (`group-hover:rotate-45`).

## 4. CurrentColor y SVGs Inline

El botón Projects dejó de usar una "flecha de texto" para usar un SVG en código directamente en el HTML (SVG Inline).

```html
<svg fill="none" stroke="currentColor" ...>
```

Esta técnica nos permite dos cosas únicas:
1. Poder animar y escalar el ícono independientemente al texto que lo acompaña.
2. Hacer uso de `currentColor`. Una propiedad de CSS nativo que fuerza al SVG a heredar el color establecido para el texto en ese div, evitando tener colores harcodeados difíciles de mantener.
