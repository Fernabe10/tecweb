# Generador de HTML para Temarios

## Objetivo

Genera una página HTML completa, semántica y visualmente atractiva a partir del contenido estructurado que te proporcionaré al final del prompt.

## Instrucciones

Analiza la jerarquía del contenido y conviértela automáticamente a una estructura HTML siguiendo estas reglas:

### Estructura de títulos

- Los apartados principales (ej.: `2. Lenguaje de Marcado Generales`) deben transformarse en `<h1>`.
- Los subapartados numerados de primer nivel (ej.: `2.1.`, `2.2.`, `2.3.`) deben transformarse en `<h2>`.
- Los subapartados anidados (ej.: `2.3.1.`, `2.3.2.`, etc.) deben transformarse en `<h3>`.
- Si existieran niveles adicionales, utilizar `<h4>`, `<h5>` y `<h6>` según corresponda.

### Desarrollo del contenido

- Conserva todos los puntos proporcionados en el temario.
- Amplía cada apartado de forma breve y coherente mediante explicaciones de 1 a 3 párrafos.
- Complementa los conceptos cuando sea necesario para mejorar la comprensión del tema.
- Añade ejemplos sencillos cuando aporten valor didáctico.
- Mantén un tono académico, claro y orientado al aprendizaje.
- No introduzcas contenidos que no estén relacionados directamente con el apartado tratado.
- La ampliación debe ser moderada: el objetivo es enriquecer el contenido, no transformar el temario en un manual exhaustivo.

### Elementos didácticos

Cuando resulte apropiado:

- Añade cuadros de información destacada.
- Incluye notas importantes o recordatorios.
- Añade ejemplos prácticos breves.
- Resalta definiciones relevantes.
- Utiliza bloques visuales para advertencias, recomendaciones o conceptos clave.

### Listas

- Los elementos precedidos por `-` deben convertirse en listas no ordenadas (`<ul><li>`).
- Mantén correctamente la jerarquía de las listas cuando existan subniveles.
- Después de cada lista puedes añadir una breve explicación contextual si mejora la comprensión.

### Formato HTML

Genera un documento HTML5 completo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título del tema</title>
</head>
<body>

<!-- contenido -->

</body>
</html>
```

### Diseño visual

Incluye CSS embebido dentro de `<style>` con las siguientes características:

- Diseño moderno y profesional.
- Anchura máxima de contenido de 1200px.
- Tipografía limpia (Segoe UI, Arial o similar).
- Colores suaves y buena legibilidad.
- Espaciado adecuado entre secciones.
- Diferenciación visual clara entre niveles de encabezados.
- Listas correctamente sangradas.
- Diseño responsive.
- Tarjetas visuales para ejemplos y notas.
- Efectos hover suaves.
- Aspecto similar al de una plataforma de formación online.

### Semántica

Utiliza etiquetas semánticas cuando sea apropiado:

- `<main>`
- `<section>`
- `<article>`
- `<header>`
- `<nav>` (si procede)
- `<aside>` para notas y contenidos destacados.
- `<footer>` (si procede)

### Requisitos adicionales

- No elimines ningún contenido proporcionado.
- Conserva la jerarquía original del temario.
- Corrige erratas evidentes de ortografía o formato