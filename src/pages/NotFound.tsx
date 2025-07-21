
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Página no encontrada
          </h2>
          <p className="text-gray-600 max-w-md">
            La página que estás buscando no existe o ha sido movida a otra ubicación.
          </p>
        </div>

        <div className="flex gap-4">
          <Button onClick={() => window.history.back()} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver atrás
          </Button>
          <Button asChild>
            <a href="/">
              <Home className="h-4 w-4 mr-2" />
              Ir al inicio
            </a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
