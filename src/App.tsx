
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useAnalytics } from "@/hooks/useAnalytics";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Variedades from "./pages/Variedades";
import ClientesB2B from "./pages/ClientesB2B";
import Contacto from "./pages/Contacto";
import PropuestaComercial from "./pages/PropuestaComercial";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const AnalyticsProvider = () => {
  useAnalytics();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsProvider />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/variedades" element={<Variedades />} />
        <Route path="/clientes-b2b" element={<ClientesB2B />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/propuesta-comercial" element={<PropuestaComercial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
