import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-8xl text-starbucks-green">☕</div>
        <h1 className="text-4xl font-bold text-starbucks-darkgreen">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Oops! It looks like this recipe page got lost in the coffee grinder.
        </p>
        <div className="space-y-4">
          <Link 
            href="/" 
            className="btn-primary text-lg px-8 py-4 inline-block"
          >
            Back to Home
          </Link>
          <div className="text-sm text-gray-500">
            <Link href="/recipes" className="text-starbucks-green hover:underline">
              Browse Recipes
            </Link>
            {' • '}
            <Link href="/game" className="text-starbucks-green hover:underline">
              Play Training Game
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
