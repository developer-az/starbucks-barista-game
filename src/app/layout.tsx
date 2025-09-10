import type { Metadata, Viewport } from 'next'
import './globals.css'
import MobileNavigation from '@/components/MobileNavigation'
import PWAInstaller from '@/components/PWAInstaller'

export const metadata: Metadata = {
  title: 'Starbucks Barista Training Game',
  description: 'Interactive training game for Starbucks baristas. Learn recipes, perfect techniques, and become a coffee expert through gamified learning experiences.',
  manifest: '/manifest.json'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#006241'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen" suppressHydrationWarning={true}>
        <MobileNavigation />
        <main className="container py-8" style={{ paddingTop: '6rem' }}>
          {children}
        </main>
        <PWAInstaller />
      </body>
    </html>
  )
}