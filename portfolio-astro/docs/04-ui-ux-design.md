# UX / UI y Decisiones de Diseño Web

Analizamos las decisiones puramente estéticas y de la Experiencia de Usuario implementadas.

## 1. Minimalismo y Consistencia Estética

### SVG Fill y Color Monocromático
El trabajo vectorizado de los trazos finos (líneas SVG) venía originalmente en color negro. Intervinimos directamente el código XML de la imagen vectorial (`Imagen-pegada.svg` y `hero-illustration.svg`) modificando el atributo base `fill="#000000"` por el color particular marrón del portfolio `#531F1F`.

### La Ausencia de Imágenes -> Cards Tipográficas
Cuando se construye una estética muy particular y monocromática (fondo beige, líneas finas dibujadas), la inclusión de capturas de pantallas web o fotografías complejas a todo color arruina automáticamente la armonía visual.

En la lista de proyectos, para compensar la falta de elementos visuales se construyeron diseñaron las llamadas **Cards Tipográficas**:
1. Se elevó el tamaño exagerado de los bordes redondeados (`rounded-[32px]`).
2. Se usó un encabezado en muy alta jerarquía (`text-3xl`).
3. Se le dio gran aire o respiro interno al pad (`p-8`).

La filosofía indica: Si una imagen no suma explícitamente al concepto y, peor aún, lo debilita, elimínala y delega el esfuerzo en espaciados vacíos interactuando con letras hermosas.

## 2. Jerarquía de Interfaz

### Colores Neutros vs Colores de Acción (Call to Action)
Usar el `"negro absoluto"` (#000000) agota la vista del lector por su brutal contraste sobre fondos claros, así que el color referenciado fue un casi-negro ligeramente cálido (`--color-text-dark`), equilibrado con un marrón potente (`--color-accent-brown`).
Pintar absolutamente cada elemento de color marrón elimina por completo el propósito del color: el enfatizar las acciones o palabras claves, diluyendo la llamada de atención general (jerarquía).

### El Footer
A simple vista, puede parecer buena idea pintar el gran bloque final que cierra abajo la web utilizando la tonalidad colorida que identifica la página, sin embargo la teoría de UI estipula que el Footer es el área de **jerarquía natural más baja** en toda experiencia base. Su propósito es brindar información final de forma absolutamente discreta sin competir con el resto.
Es por esto que se disminuyó agresivamente su opacidad utilizando grises traslúcidos y recién frente al "hover" del puntero reaviva sus matices y colores.

## 3. Botones Primarios y Secundarios (Llamados a la Acción)

Existen múltiples maneras de diseñar botones para dirigir al usuario, pero es vital no hacerlos todos iguales.
- **Botón Secundario (Botón "Projects")**: Tiene un estilo "Ghost" o de borde. Su color de fondo es el mismo translúcido que las tarjetas (`bg-glass-card`), haciéndolo amigable pero no urgente. Es una invitación amable para seguir navegando e inspeccionando.
- **Botón Primario o "Call to Action" Fuerte (Botón "CONTACT ME")**: Es la meta definitiva de tu portfolio. Es por eso que en la sección de contacto el botón es una masa **sólida de color marrón** (`bg-accent-brown text-white`). Visualmente este bloque tan denso y relleno captura la vista inmediatamente, empujando al usuario inevitablemente a interactuar con él tras terminar de convencerse al ver los proyectos previos.
