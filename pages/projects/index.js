import { useState, useEffect } from 'react'
import Link from 'next/link'
import api from '../../utils/api'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [newName, setNewName] = useState('')

  useEffect(() => {
    api.get('/projects').then(res => setProjects(res.data))
  }, [])

  const createProject = async () => {
    if (!newName) return
    const res = await api.post('/projects', { name: newName })
    setProjects([...projects, res.data])
    setNewName('')
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="mb-6 flex space-x-2">
        <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="New project name"
          className="px-3 py-2 rounded bg-gray-700 text-white flex-1" />
        <button onClick={createProject} className="bg-blue-600 px-4 py-2 rounded">Add</button>
      </div>
      <ul className="space-y-2">
        {projects.map(p => (
          <li key={p.id} className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">
            <Link href={`/projects/${p.id}/plans`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
