
import { useState } from "react";
import { Home, Settings, Users, FileText, BarChart3, Plus } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Inicio", url: "/", icon: Home },
  { title: "Usuarios", url: "/usuarios", icon: Users },
  { title: "Documentos", url: "/documentos", icon: FileText },
  { title: "Reportes", url: "/reportes", icon: BarChart3 },
];

const settingsItems = [
  { title: "Configuración", url: "/configuracion", icon: Settings },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100";

  return (
    <Sidebar
      className={collapsed ? "w-16" : "w-64"}
      collapsible
    >
      <SidebarContent className="bg-gray-50">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600 font-medium">
            Navegación Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-3 h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600 font-medium">
            Configuración
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-3 h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mt-auto p-4">
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-medium text-gray-900 mb-2">¿Necesitas ayuda?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Consulta la documentación o contacta al soporte.
              </p>
              <button className="w-full bg-primary text-white text-sm py-2 px-3 rounded-md hover:bg-primary/90 transition-colors">
                Ver documentación
              </button>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
