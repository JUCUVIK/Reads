import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="page">
      <header className="page__header">
        <h1>React SPA</h1>
        <p>Routing, autenticación básica, lazy loading y consumo de API REST.</p>
      </header>
      <div className="cards">
        <article className="card">
          <h2>Sesión 1</h2>
          <p>Routing entre páginas, navegación sin recarga y estructura limpia.</p>
          <div className="chip-list">
            <span className="chip">React Router</span>
            <span className="chip">Home</span>
            <span className="chip">Login</span>
          </div>
          <Link className="button" to="/login">
            Ir a Login
          </Link>
        </article>
        <article className="card">
          <h2>Sesión 2</h2>
          <p>Autenticación simulada, rutas privadas, lazy loading y datos remotos.</p>
          <div className="chip-list">
            <span className="chip">PrivateRoute</span>
            <span className="chip">Lazy</span>
            <span className="chip">API REST</span>
          </div>
          <Link className="button button--ghost" to="/dashboard">
            Abrir Dashboard
          </Link>
        </article>
      </div>
    </section>
  )
}
