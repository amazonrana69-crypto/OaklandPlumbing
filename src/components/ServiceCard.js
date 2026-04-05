import Link from 'next/link'

export default function ServiceCard({ image, title, description, href }) {
  return (
    <Link href={href} className="group block bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-200 overflow-hidden transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="h-44 overflow-hidden relative">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
        <span className="text-blue-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn More →
        </span>
      </div>
    </Link>
  )
}
