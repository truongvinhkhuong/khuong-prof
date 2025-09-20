import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Khuong Truong - Portfolio',
  description: 'Aspiring Developer & Automation Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
