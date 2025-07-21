
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Variedades from "./pages/Variedades";
import ClientesB2B from "./pages/ClientesB2B";
import Contacto from "./pages/Contacto";
import Galeria from "./pages/Galeria";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/nosotros" element={<PageTransition><Nosotros /></PageTransition>} />
        <Route path="/variedades" element={<PageTransition><Variedades /></PageTransition>} />
        <Route path="/clientes-b2b" element={<PageTransition><ClientesB2B /></PageTransition>} />
        <Route path="/contacto" element={<PageTransition><Contacto /></PageTransition>} />
        <Route path="/galeria" element={<PageTransition><Galeria /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
