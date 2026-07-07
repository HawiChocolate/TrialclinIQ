// Ambient type declarations that don't depend on the Next.js TypeScript
// plugin being loaded (that plugin only activates if VS Code is using the
// workspace TypeScript version — see README). This guarantees plain CSS
// side-effect imports like `import "./globals.css"` always type-check,
// regardless of editor configuration.
declare module "*.css";