import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Starbucks Barista Training Game',
  description: 'Interactive training game for Starbucks baristas - learn recipes, techniques, and master the art of coffee making',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-starbucks-cream">
        <header className="bg-starbucks-green text-white shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-starbucks-green font-bold text-xl">☕</span>
                </div>
                <h1 className="text-2xl font-bold">Starbucks Barista Training</h1>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="/" className="hover:text-starbucks-gold transition-colors">Home</a>
                <a href="/game" className="hover:text-starbucks-gold transition-colors">Training Game</a>
                <a href="/recipes" className="hover:text-starbucks-gold transition-colors">Recipes</a>
                <a href="/leaderboard" className="hover:text-starbucks-gold transition-colors">Leaderboard</a>
              </nav>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-6 py-8">
          {children}
        </main>
        <footer className="bg-starbucks-darkgreen text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2024 Starbucks Barista Training Game. Educational purposes only.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
