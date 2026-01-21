# SPA React (Routing, Auth, Lazy, API)

Aplicación práctica de 2 sesiones con React Router, login simulado, rutas privadas, lazy loading y consumo de JSONPlaceholder.

## Requisitos
- Node.js 18+
- npm

## Instalación y ejecución
```bash
npm install        # instala dependencias
npm run dev        # servidor dev en http://localhost:5173
npm run build      # build de producción en dist/
npm run preview    # sirve la build para comprobarla
```

## Estructura clave
- src/pages: vistas Home, Login, Dashboard (lazy), Users
- src/router: AppRouter, Layout con menú, PrivateRoute (protege Dashboard)
- src/store: AuthContext (estado y funciones login/logout)
- src/services: api.js (cliente axios y fetchUsers)
- src/App.jsx: monta AuthProvider + AppRouter

## Cómo funciona
- Navegación SPA: BrowserRouter + Routes en AppRouter.
- Login simulado: AuthContext expone `login('admin')` y `logout()`; guarda usuario en memoria.
- Ruta privada: PrivateRoute redirige a /login si no hay usuario y recuerda la página previa.
- Lazy loading: Dashboard se importa con `lazy` y se muestra bajo Suspense.
- Datos remotos: Users llama a JSONPlaceholder (`/users`) con axios y renderiza la lista.

## Flujo rápido
1) Ir a /login y entrar con usuario `admin` (password libre).
2) Acceder a /dashboard (solo si hay usuario).
3) Ver /users para cargar los usuarios externos.

## Control de versiones
- Para añadir cambios: `git add README.md`
- Para confirmar cambios: `git commit -m "Descripción del cambio"`
- Para subir cambios: `git push origin main`
