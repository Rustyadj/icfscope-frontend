import { useState } from 'react'
import { useRouter } from 'next/router'
import api from '../utils/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await api.post('/auth/login', { email, password })
      localStorage.setItem('token', res.data.access_token)
      router.push('/projects')
    } catch (err) {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-400 mb-2">{error}</p>}
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
          className="w-full mb-3 px-3 py-2 rounded bg-gray-700 text-white" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
          className="w-full mb-3 px-3 py-2 rounded bg-gray-700 text-white" />
        <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-500">Login</button>
      </form>
    </div>
  )
}
