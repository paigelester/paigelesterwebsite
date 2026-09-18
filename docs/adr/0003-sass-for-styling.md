# Sass (SCSS) for styling, not Tailwind

Styles are written in SCSS: one global stylesheet (`app/globals.scss`) for the reset and theme variables, and a CSS Module (`*.module.scss`) next to each component. Tailwind CSS, which `create-next-app` sets up by default, is removed. Utility classes crowd the markup and the generated stylesheet was hard to read. The site is a single, hand-designed page, so dedicated stylesheets with variables, nesting and component-scoped class names suit it better. Next.js supports Sass and CSS Modules natively once the `sass` package is installed, so no PostCSS setup is needed.

## Considered Options

- **Sass with CSS Modules** (chosen): readable, component-scoped styles; markup stays clean.
- **Tailwind CSS**: the generator default and popular with hiring managers, but it puts styling into class strings.
- **Plain CSS Modules**: works, but has no variables or mixins at build time.
