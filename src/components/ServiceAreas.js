import Link from 'next/link'

const areas = [
  {
    city: 'Oakland',
    slug: 'oakland',
    desc: 'Our home base — fastest response times in all Oakland neighborhoods.',
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=80',
  },
  {
    city: 'Berkeley',
    slug: 'berkeley',
    desc: 'Full plumbing services for Berkeley residents and businesses.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  },
  {
    city: 'Alameda',
    slug: 'alameda',
    desc: 'Island-wide coverage for all Alameda plumbing needs.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80',
  },
  {
    city: 'San Leandro',
    slug: 'san-leandro',
    desc: 'Reliable plumbing service throughout San Leandro.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80',
  },
  {
    city: 'Emeryville',
    slug: 'emeryville',
    desc: 'Serving Emeryville homes and commercial properties.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  },
]

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="section-title">Areas We Serve</h2>
        <p className="section-sub">Oakland-based plumbers serving the entire East Bay Area</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {areas.map((a) => (
            <Link
              key={a.slug}
              href={`/service-areas/${a.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-blue-100 hover:border-blue-400 hover:shadow-md transition-all hover:-translate-y-1 duration-200"
            >
              {/* City image */}
              <div className="h-28 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${a.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors text-sm">
                  {a.city}, CA
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">{a.desc}</p>
                <span className="text-blue-600 text-xs font-semibold group-hover:underline">
                  View Area →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
