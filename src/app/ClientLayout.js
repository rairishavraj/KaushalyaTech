'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import ConsultationButton from '../components/ConsultationButton'
import { Toaster } from 'react-hot-toast'

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
      <ConsultationButton />
      <Toaster position="bottom-right" />

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
    </>
  )
}
