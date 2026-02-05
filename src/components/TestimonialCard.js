'use client'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="text-gray-600 mb-4">“{testimonial.content}”</p>
      <h4 className="font-semibold">{testimonial.name}</h4>
      <p className="text-sm text-gray-500">{testimonial.role}</p>
    </div>
  )
}
