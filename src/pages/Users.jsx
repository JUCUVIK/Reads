import { useEffect, useState } from 'react'
import { fetchUsers } from '../services/api'

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch(() => setError('No se pudieron cargar los usuarios.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="page">
      <h1>Usuarios</h1>
      <p>Datos obtenidos desde JSONPlaceholder.</p>
      {loading && <p className="muted">Cargando...</p>}
      {error && <p className="form__error">{error}</p>}
      {!loading && !error ? (
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <span className="muted">{user.company?.name}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
