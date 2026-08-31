
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import CasePage from "./pages/CasePage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import { SERVICES } from "./data/services";
import { CASES } from "./data/cases";
import {
  DEFAULT_LANG,
  LANGS,
  casePath,
  contactPath,
  homePath,
  isLang,
  pricingPath,
  servicePath,
  type Lang,
} from "./lib/i18n-routes";

// Import i18n configuration
import "./i18n/i18n";

const queryClient = new QueryClient();

/** Scrolls to the hash target after navigation, otherwise to the top. */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const scroll = () =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      const timer = window.setTimeout(scroll, 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

/** Legacy "/" and "/?lang=xx" entries redirect to the prefixed home page. */
const RootRedirect = () => {
  const { search } = useLocation();
  const param = new URLSearchParams(search).get("lang");
  const stored =
    typeof window !== "undefined" ? window.localStorage.getItem("i18nextLng") : null;
  const browser =
    typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : null;

  const lang: Lang = isLang(param ?? undefined)
    ? (param as Lang)
    : isLang(stored?.slice(0, 2))
      ? (stored!.slice(0, 2) as Lang)
      : isLang(browser ?? undefined)
        ? (browser as Lang)
        : DEFAULT_LANG;

  return <Navigate to={homePath(lang)} replace />;
};

const App = () => (
  <ThemeProvider defaultTheme="dark" attribute="class">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollManager />
          <Routes>
            <Route path="/" element={<RootRedirect />} />

            {LANGS.map((lang) => (
              <Route
                key={`home-${lang}`}
                path={homePath(lang)}
                element={<Index lang={lang} />}
              />
            ))}

            {LANGS.map((lang) => (
              <Route
                key={`pricing-${lang}`}
                path={pricingPath(lang)}
                element={<PricingPage lang={lang} />}
              />
            ))}

            {LANGS.map((lang) => (
              <Route
                key={`contact-${lang}`}
                path={contactPath(lang)}
                element={<ContactPage lang={lang} />}
              />
            ))}

            {LANGS.flatMap((lang) =>
              SERVICES.map((service) => (
                <Route
                  key={`service-${lang}-${service.id}`}
                  path={servicePath(lang, service.slug[lang])}
                  element={<ServicePage lang={lang} serviceId={service.id} />}
                />
              )),
            )}

            {LANGS.flatMap((lang) =>
              CASES.map((study) => (
                <Route
                  key={`case-${lang}-${study.slug}`}
                  path={casePath(lang, study.slug)}
                  element={<CasePage lang={lang} slug={study.slug} />}
                />
              )),
            )}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
