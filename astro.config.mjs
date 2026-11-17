import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import domainRoutes from "./src/integrations/domain-routes.mjs";

// Sitio de la empresa (velocitylab.com.ar). Datos propios en la base: site = 'velocity'.
export default defineConfig({
  site: "https://velocitylab.com.ar/",
  base: "/",
  trailingSlash: "ignore",
  output: "static",
  redirects: {
    "/disertaciones": "/es/disertaciones/",
  },
  server: { open: "/" },
  integrations: [
    tailwind(),
    domainRoutes(),
    sitemap({
      filter: (page) =>
        !/\/404(\/|$)/.test(page) &&
        // La raiz es un espejo de /es/servicios/ (su canonical).
        new URL(page).pathname !== "/",
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
