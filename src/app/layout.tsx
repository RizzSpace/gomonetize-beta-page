import './globals.css'
import { Inter } from 'next/font/google'
import { bebas_neue } from '@/utils/fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gomonetize Beta',
  description: 'Redefining the way of influencer marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bebas_neue.className}>{children}</body>
    </html>
  )
}
