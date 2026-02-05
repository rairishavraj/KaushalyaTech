'use client'

import Link from 'next/link'

export default function ConsultationButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-24 right-6 z-40 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
    >
      Free Consultation
    </Link>
  )
}
