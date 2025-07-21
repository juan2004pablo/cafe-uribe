
// Constantes globales del proyecto
export const APP_CONFIG = {
  name: "Mi Proyecto",
  version: "1.0.0",
  description: "Base de proyecto React con TypeScript y Tailwind CSS",
};

export const ROUTES = {
  HOME: "/",
  USERS: "/usuarios",
  DOCUMENTS: "/documentos",
  REPORTS: "/reportes",
  SETTINGS: "/configuracion",
} as const;

export const API_ENDPOINTS = {
  BASE_URL: process.env.NODE_ENV === "production" ? "" : "http://localhost:3000",
  USERS: "/api/users",
  DOCUMENTS: "/api/documents",
  REPORTS: "/api/reports",
} as const;

export const STORAGE_KEYS = {
  USER_PREFERENCES: "user_preferences",
  THEME: "theme",
  SIDEBAR_STATE: "sidebar_state",
} as const;
