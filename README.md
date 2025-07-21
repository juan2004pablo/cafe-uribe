
# Mi Proyecto React + TypeScript + Tailwind

Base de proyecto React con TypeScript y Tailwind CSS, preparada para desarrollo escalable.

## 🚀 Características

- **React 18** con TypeScript
- **Tailwind CSS** para estilos
- **Shadcn/ui** para componentes
- **React Router** para navegación
- **React Query** para manejo de estado
- **Sidebar responsive** con navegación
- **Estructura modular** y escalable

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/          # Componentes de layout (Header, Sidebar, etc.)
│   └── ui/             # Componentes UI reutilizables
├── pages/              # Páginas de la aplicación
├── hooks/              # Custom hooks
├── utils/              # Utilidades y helpers
├── types/              # Tipos TypeScript
└── lib/                # Configuraciones de librerías
```

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## 📝 Guía de Uso

### Agregar una nueva página

1. Crear el componente en `src/pages/`
2. Agregar la ruta en `src/App.tsx`
3. Actualizar la navegación en `src/components/layout/AppSidebar.tsx`

### Crear un nuevo componente

1. Crear el archivo en `src/components/ui/` o una subcarpeta apropiada
2. Exportar el componente
3. Importar donde sea necesario

### Utilidades disponibles

- `formatDate()` - Formatear fechas
- `formatNumber()` - Formatear números
- `debounce()` - Función debounce
- `copyToClipboard()` - Copiar al portapapeles
- `isValidEmail()` - Validar email
- `truncateText()` - Truncar texto

### Tipos TypeScript

Los tipos principales están definidos en `src/types/index.ts`:
- `User` - Usuario del sistema
- `Document` - Documento
- `Report` - Reporte
- `ApiResponse<T>` - Respuesta de API
- `PaginatedResponse<T>` - Respuesta paginada

## 🎨 Personalización

### Colores y tema

Los colores se definen en `src/index.css` usando variables CSS.

### Componentes UI

Usa los componentes de Shadcn/ui disponibles en `src/components/ui/`.

### Sidebar

Modifica `src/components/layout/AppSidebar.tsx` para agregar/quitar elementos de navegación.

## 📱 Responsive Design

El proyecto está optimizado para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🔧 Configuración adicional

### Variables de entorno

Crea un archivo `.env.local`:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Mi Proyecto
```

### Rutas

Las rutas están definidas en `src/utils/constants.ts` para facilitar el mantenimiento.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
