
// Tipos TypeScript globales para el proyecto
export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "moderator";
  createdAt: Date;
  updatedAt: Date;
  avatar?: string;
}

export interface Document {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  status: "draft" | "published" | "archived";
  tags?: string[];
}

export interface Report {
  id: string;
  title: string;
  type: "analytics" | "sales" | "usage" | "custom";
  data: any;
  createdAt: Date;
  generatedBy: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface FormError {
  field: string;
  message: string;
}

export interface Toast {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message?: string;
  duration?: number;
}
