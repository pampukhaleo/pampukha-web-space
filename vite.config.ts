import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";

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
    // so crawlers and social previews see real content, while the SPA
    // hydrates and behaves normally in the browser.
    mode === 'production' && prerender({
      routes: ['/'],
      renderer: new PuppeteerRenderer({
        renderAfterDocumentEvent: 'render-event',
        headless: true,
        maxConcurrentRoutes: 1,
      }),
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
