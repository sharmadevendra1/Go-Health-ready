import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Go Health — Find the right care, near you.',
  description: "A simple, source-aware guide to India's public healthcare system.",
  manifest: '/manifest.webmanifest',
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body>{children}</body></html>
}
