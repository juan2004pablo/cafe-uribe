
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatsCard } from "@/components/ui/StatsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, BarChart3, Plus, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <PageHeader
        title="Dashboard Principal"
        description="Bienvenido a tu proyecto. Aquí tienes un resumen de la actividad reciente."
        actions={
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo elemento
          </Button>
        }
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Usuarios"
          value="1,234"
          icon={Users}
          trend={{ value: "+12% vs mes anterior", isPositive: true }}
          color="blue"
        />
        <StatsCard
          title="Documentos"
          value="456"
          icon={FileText}
          trend={{ value: "+5% vs mes anterior", isPositive: true }}
          color="green"
        />
        <StatsCard
          title="Reportes Generados"
          value="89"
          icon={BarChart3}
          trend={{ value: "-2% vs mes anterior", isPositive: false }}
          color="purple"
        />
        <StatsCard
          title="Crecimiento"
          value="23%"
          icon={TrendingUp}
          trend={{ value: "+8% vs mes anterior", isPositive: true }}
          color="orange"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
            <CardDescription>
              Resumen de las últimas acciones en tu proyecto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Nuevo usuario registrado", time: "Hace 2 minutos", type: "user" },
                { action: "Documento actualizado", time: "Hace 15 minutos", type: "document" },
                { action: "Reporte generado", time: "Hace 1 hora", type: "report" },
                { action: "Configuración modificada", time: "Hace 3 horas", type: "settings" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">{item.action}</span>
                  </div>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
            <CardDescription>
              Tareas comunes que puedes realizar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Gestionar usuarios
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Crear documento
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="h-4 w-4 mr-2" />
                Ver reportes
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Agregar contenido
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Start Guide */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Guía de Inicio Rápido</CardTitle>
          <CardDescription>
            Pasos para comenzar a usar tu proyecto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="font-medium mb-2">Configurar tu proyecto</h3>
              <p className="text-sm text-gray-600">
                Personaliza la configuración según tus necesidades
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="font-medium mb-2">Agregar contenido</h3>
              <p className="text-sm text-gray-600">
                Importa o crea nuevo contenido para tu aplicación
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="font-medium mb-2">Invitar usuarios</h3>
              <p className="text-sm text-gray-600">
                Comparte el acceso con tu equipo de trabajo
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Index;
