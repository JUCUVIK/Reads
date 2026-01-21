import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../store/AuthContext'

export default function Layout() {
  const { user, logout } = useContext(AuthContext)

  return (
    <div className="app-shell">
      <nav className="nav">
        <div className="nav__brand">React SPA</div>
        <div className="nav__links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
            Login
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
            Dashboard
          </NavLink>
          <NavLink to="/users" className={({ isActive }) => (isActive ? 'active' : '')}>
            Usuarios
          </NavLink>
        </div>
        <div className="nav__auth">
          {user ? (
            <>
              <span className="nav__user">Hola, {user.name}</span>
              <button type="button" className="link-button" onClick={logout}>
                Salir
              </button>
            </>
          ) : (
            <span className="nav__status">Sesión no iniciada</span>
          )}
        </div>
      </nav>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
