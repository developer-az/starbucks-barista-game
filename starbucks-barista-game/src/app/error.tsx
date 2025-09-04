'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-8xl text-red-500">⚠️</div>
        <h1 className="text-4xl font-bold text-starbucks-darkgreen">
          Something went wrong!
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Don't worry, even the best baristas make mistakes. Let's get you back to brewing!
        </p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="btn-primary text-lg px-8 py-4"
          >
            Try again
          </button>
          <div className="text-sm text-gray-500">
            <Link href="/" className="text-starbucks-green hover:underline">
              Back to Home
            </Link>
            {' • '}
            <Link href="/recipes" className="text-starbucks-green hover:underline">
              Browse Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
