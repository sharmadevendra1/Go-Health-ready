import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Go Health — Find the right care, near you.',
  description: "A simple guide to India's public healthcare system.",
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}