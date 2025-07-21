
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSidebar}
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Mi Proyecto</h1>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          Configuración
        </Button>
      </div>
    </header>
  );
};
