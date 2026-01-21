import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../store/AuthContext'

export default function Login() {
  const { user, login, logout } = useContext(AuthContext)
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const redirectTo = location.state?.from || '/dashboard'

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const ok = login(form.username.trim(), form.password)
    if (ok) {
      setError('')
      navigate(redirectTo, { replace: true })
    } else {
      setError('Credenciales inválidas. Usa el usuario admin.')
    }
  }

  if (user) {
    return (
      <section className="page">
        <h1>Sesión iniciada</h1>
        <p>Ya estás dentro como {user.name}. Puedes cerrar sesión o ir al dashboard.</p>
        <div className="actions">
          <button className="button" type="button" onClick={() => navigate('/dashboard')}>
            Ir al Dashboard
          </button>
          <button className="button button--ghost" type="button" onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="page">
      <h1>Login simulado</h1>
      <p>Introduce admin para entrar. No se valida la contraseña.</p>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__field">
          <span>Usuario</span>
          <input
            required
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="admin"
            autoComplete="username"
          />
        </label>
        <label className="form__field">
          <span>Contraseña</span>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="cualquiera"
            autoComplete="current-password"
          />
        </label>
        {error ? <p className="form__error">{error}</p> : null}
        <button className="button" type="submit">
          Entrar
        </button>
      </form>
    </section>
  )
}
