
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import Index from './pages/Index';
import Nosotros from './pages/Nosotros';
import Variedades from './pages/Variedades';
import Contacto from './pages/Contacto';
import Galeria from './pages/Galeria';
import ClientesB2B from './pages/ClientesB2B';
import NotFound from './pages/NotFound';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/variedades" element={<Variedades />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/clientes-b2b" element={<ClientesB2B />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
