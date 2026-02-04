import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ConsultationButton from '@/components/ConsultationButton'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KaushalyaTech - Building Digital Products for Startups & Businesses',
  description: 'Professional web and mobile app development agency in India. We build scalable digital products using React, Node.js, Firebase, and AI technologies.',
  keywords: 'web development, app development, startup mvp, india, react, nodejs, firebase',
  author: 'KaushalyaTech',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="your-verification-code" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "KaushalyaTech",
              "description": "Building Digital Products for Startups & Businesses",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "MH",
                "addressCountry": "IN"
              },
              "telephone": "+91-9876543210",
              "openingHours": "Mo-Fr 09:00-18:00"
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ConsultationButton />
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}