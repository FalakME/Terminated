import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Terminated | Falak',
  description: 'Website Terminated',
  generator: 'falak.me',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
