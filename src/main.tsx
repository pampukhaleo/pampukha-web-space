import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

// Signal the prerender (puppeteer) that the app has finished mounting,
// so it captures the fully-rendered HTML snapshot. No-op in normal browsers.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.dispatchEvent(new Event('render-event'));
  });
});
