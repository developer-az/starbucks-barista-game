import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Starbucks Barista Training Game',
  description: 'Interactive training game for Starbucks baristas. Learn recipes, perfect techniques, and become a coffee expert through gamified learning experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen" suppressHydrationWarning={true}>
        <nav className="nav">
          <div className="container nav-content">
            <div className="nav-brand">
              <span>☕</span>
              <span>Barista Training</span>
            </div>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/learning">Learning</a>
              <a href="/game">Game</a>
              <a href="/recipes">Recipes</a>
            </div>
          </div>
        </nav>
        <main className="container py-8">
          {children}
        </main>
      </body>
    </html>
  )
}