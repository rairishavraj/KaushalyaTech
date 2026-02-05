'use client'

export default function PortfolioCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
