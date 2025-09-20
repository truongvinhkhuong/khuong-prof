import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars'

export const metadata: Metadata = {
  title: 'Vinh Khuong Truong',
  description: 'Aspiring Developer & Automation Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StarsBackground />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
