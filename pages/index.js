import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900 text-white flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">ICFScope</h1>
      <p className="text-gray-400 mb-6">AI-powered ICF & CMU Takeoffs in Minutes</p>
      <Link href="/login">
        <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition">
          Get Started
        </button>
      </Link>
    </div>
  )
}
