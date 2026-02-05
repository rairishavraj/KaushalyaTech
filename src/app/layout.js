import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KaushalyaTech - Building Digital Products for Startups & Businesses',
  description: 'Professional web and mobile app development agency in India.',
  keywords: 'web development, app development, startup mvp, india',
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
