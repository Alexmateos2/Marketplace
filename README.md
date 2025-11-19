# 🛒 Marketplace Frontend

Frontend de **Tekia**, plataforma de e-commerce construida con **React 19**.  
Incluye usuarios, administración, carrito de compras, productos y pedidos.

---

## 🎯 Propósito

Proveer una SPA con roles diferenciados:

- Público (no autenticado)
- Usuario autenticado
- Administrador

Este documento resume la **arquitectura**, **stack tecnológico**, **rutas**, **estado**, **integraciones externas** y **flujo de desarrollo**.

---

## 🏗 Arquitectura General

- SPA construida con React 19 y Tailwind CSS
- **Providers jerárquicos**:
  - `CartProvider` → estado global del carrito
  - `ToastContainer` → notificaciones
  - `ScrollToTop` → scroll correcto al cambiar de ruta
- **Rutas**:
  - Público: Home, Productos, Carrito, Login/Signup, Categorías
  - Perfil: Perfil, Historial de pedidos (solo usuarios autenticados)
  - Admin: CRUD Productos, Usuarios, Pedidos, Dashboard analítico

**Fuentes:** `src/App.jsx` (31-125)

---

## 🛠 Stack Tecnológico

| Categoría         | Tecnología       | Versión  | Propósito                       |
| ----------------- | ---------------- | -------- | ------------------------------- |
| ⚛️ Framework      | React            | 19.1.1   | UI component library            |
| 🏗 Build Tool      | Vite             | 7.1.7    | Dev server y bundler            |
| 🖋 CSS             | Tailwind CSS     | 4.1.15   | Utility-first CSS               |
| 🌐 Routing        | React Router DOM | 7.9.4    | Navegación cliente              |
| 📸 Imágenes       | Cloudinary React | 1.14.3   | CDN y optimización de imágenes  |
| 🔔 Notificaciones | React Toastify   | 11.0.5   | Feedback visual                 |
| 🧪 Testing        | Vitest           | 4.0.9    | Unit & integration testing      |
| ⬇️ Drag & Drop    | React Dropzone   | 14.3.8   | Subida de archivos              |
| 🔢 Paginación     | React Paginate   | 8.3.0    | Listado paginado                |
| 🎨 Animaciones    | Framer Motion    | 12.23.24 | Transiciones y efectos visuales |
| 🖼 Icons           | Lucide React     | 0.552.0  | Librería de íconos              |

---

## 📂 Estructura de Proyecto

```text
src/
├── App.jsx                    # Root y rutas
├── pages/                     # Feature pages
│   ├── Home/                  # Página de inicio
│   ├── Products/              # Listado de productos
│   ├── Product/               # Detalle de producto
│   ├── Cart/                  # Carrito de compras
│   ├── Login/                 # Autenticación
│   ├── Profile/               # Perfil de usuario
│   ├── Admin/                 # Panel de administración
│   ├── Categories/            # Categorias de productos
│   ├── SignUp/                # Pagina de registro
│   ├── HistoryOrders/         # Historial de pedidos
│   ├── OrderDetails/          # Detalles de pedido
│   ├── New/                   # Nuevos productos
│   ├── AboutUs/               # Informacion sobre Tekia
│   ├── Add-Product/           # Crear producto
|   └── ...
|
├── shared/
│   ├── components/            # Componentes reutilizables
│   ├── hooks/                 # Hooks (CartProvider)
│   └── utils/                 # Utilities (ProtectedRoute, ScrollToTop)
└── ...

```

---

## 🛠️ Instalación

Para la instalación de este proyecto necesitarás también la instalación del repositorio backend:

 - [Backend](https://github.com/Alexmateos2/Marketplace-Backend)
 
Después simplemente:

```
git clone https://github.com/Alexmateos2/Marketplace.git

npm install

npm run (dev o build dependiendo del uso)
```




---