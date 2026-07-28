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

### Listas

- Los elementos precedidos por `-` deben convertirse en listas no ordenadas (`<ul><li>`).
- Mantén correctamente la jerarquía de las listas cuando existan subniveles.

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

### Semántica

Utiliza etiquetas semánticas cuando sea apropiado:

- `<main>`
- `<section>`
- `<article>`
- `<header>`
- `<nav>` (si procede)
- `<footer>` (si procede)

### Requisitos adicionales

- No inventes contenido.
- Conserva exactamente todos los textos proporcionados.
- Corrige únicamente errores de presentación derivados de la conversión.
- Escapa correctamente caracteres especiales de HTML.
- Devuelve únicamente el código HTML completo.
- No añadas explicaciones fuera del código.

---

## Contenido a convertir

[Pega aquí el contenido del temario]