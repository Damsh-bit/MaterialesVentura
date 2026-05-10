# Materiales Ventura

![Materiales Ventura Hero](/public/fotos/0559b63a-1031-4458-8219-09f93c70451f.webp)

Materiales Ventura es una aplicación web moderna diseñada para un proveedor de suministros de construcción en Houston, Texas. Especializada en madera estructural, revestimientos y sistemas de techo para contratistas y proyectos comerciales.

## Tecnologías Utilizadas

- **Frontend:** React + TypeScript
- **Estilos:** Tailwind CSS v4 con variables CSS nativas
- **Animaciones:** Motion (Framer Motion)
- **Internacionalización:** Contexto personalizado (Español / Inglés)
- **Ruteo:** React Router DOM
- **Íconos:** Lucide React
- **Build Tool:** Vite

## Estructura del Sitio

1. **Home:** Sección principal con video de fondo, productos destacados, vista previa del portfolio e información de contacto.
2. **Products (Catálogo):** Inventario detallado de materiales categorizados, incluyendo opciones de compra por volumen.
3. **Gallery (Portafolio):** Galería interactiva con filtro por categorías y un lightbox para ver las fotos en detalle.
4. **Pricing:** Precios actualizados del mercado, tablas informativas e inscripción a compras por volumen.
5. **Values (Nosotros):** La misión, estadísticas clave y la cultura de servicio que diferencia a Ventura.
6. **Contact (Contacto):** Formulario de consulta de proyectos, hub operativo en Houston y horarios.

## Internacionalización (i18n)

El sitio es completamente bilingüe. El sistema de idiomas está implementado mediante un `TranslationContext` personalizado en `src/contexts/TranslationContext.tsx`. Todos los textos del sitio se almacenan centralizadamente en `src/locales/translations.ts` y cambian instantáneamente sin recargar la página.

## Ejecución Local

Para correr este proyecto en tu entorno de desarrollo:

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre la URL local (usualmente `http://localhost:5173`) en tu navegador.

## SEO e Identidad

El sitio está optimizado para motores de búsqueda (SEO) y accesibilidad:
- Archivo `index.html` con meta descripciones, keywords, Open Graph y favicon dinámico.
- Estructura semántica de encabezados (`h1`, `h2`, `h3`) en cada página.
- Clases utilitarias (`cursor-pointer`) aplicadas a elementos interactivos para una respuesta visual adecuada.
