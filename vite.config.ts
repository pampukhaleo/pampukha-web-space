import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "vite-plugin-prerender";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    // Static prerender for production build only — generates full HTML
    // for crawlers / social previews while keeping SPA behavior in browser.
    mode === 'production' && prerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes: ['/'],
      postProcess(renderedRoute: { html: string; route: string }) {
        // Strip noscript fallbacks the renderer may inject and keep title clean
        renderedRoute.html = renderedRoute.html.replace(
          /<script (.*?)>/g,
          '<script $1 defer>'
        );
        return renderedRoute;
      },
      rendererOptions: {
        renderAfterDocumentEvent: 'render-event',
        maxConcurrentRoutes: 1,
        headless: true,
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
