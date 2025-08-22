import { useState } from 'react'
import { useRouter } from 'next/router'
import api from '../../../utils/api'

export default function Plans() {
  const router = useRouter()
  const { id } = router.query
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState(null)

  const handleUpload = async () => {
    if (!file) return
    const init = await api.post('/plans/upload/init', { project_id: id, filename: file.name })
    const { upload_url, plan_id } = init.data
    await fetch(upload_url, { method: 'PUT', body: file })
    const job = await api.post('/takeoff/start', { project_id: id, plan_id })
    setStatus(`Job ${job.data.job_id} started`)
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Upload Plan</h1>
      <input type="file" onChange={e => setFile(e.target.files[0])} className="mb-4" />
      <button onClick={handleUpload} className="bg-blue-600 px-4 py-2 rounded">Upload & Start Takeoff</button>
      {status && <p className="mt-4 text-green-400">{status}</p>}
    </div>
  )
}
