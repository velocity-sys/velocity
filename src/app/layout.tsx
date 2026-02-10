import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Velocity Systems',
  description: 'Advanced energy infrastructure solutions for American enterprise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">
        {children}
      </body>
    </html>
  )
}
