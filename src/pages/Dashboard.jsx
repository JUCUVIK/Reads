import { useContext } from 'react'
import { AuthContext } from '../store/AuthContext'

export default function Dashboard() {
  const { user } = useContext(AuthContext)

  return (
    <section className="page">
      <h1>Dashboard</h1>
      <p>Bienvenido, {user?.name}. Esta ruta está protegida.</p>
      <div className="cards">
        <article className="card">
          <h2>Estado</h2>
          <p>La ruta se carga con lazy loading y requiere un usuario activo.</p>
        </article>
        <article className="card">
          <h2>Siguiente paso</h2>
          <p>Ve a la página de Usuarios para consultar datos remotos.</p>
        </article>
      </div>
    </section>
  )
}
