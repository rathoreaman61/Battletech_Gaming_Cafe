import { Suspense, lazy, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ClickEffect from "@/components/ui/ClickEffect";
import GlobalUiSound from "@/components/ui/GlobalUiSound";

const Index = lazy(() => import("./pages/Index"));
const SetupsPage = lazy(() => import("./pages/Setups"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const basename = "/";

const RouteLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center bg-background">
    <div className="ui-panel px-6 py-5">
      <p className="font-heading text-[0.68rem] tracking-[0.34em] text-white/48">
        LOADING PAGE
      </p>
      <div className="mt-3 h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  </div>
);

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <ScrollToTop />
          <ScrollProgress />
          <Navbar />
          <GlobalUiSound />
          <ClickEffect />
          <main id="main-content">
            <Suspense fallback={<RouteLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/setups" element={<SetupsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <BackToTop />
          <FloatingWhatsApp />
        </BrowserRouter>
      </TooltipProvider>
    </MotionConfig>
  </QueryClientProvider>
);

export default App;
