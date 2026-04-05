import Link from 'next/link'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata = {
  title: 'Plumbing Services in Oakland, CA | Oakland Plumbing Experts',
  description: 'Browse all plumbing services offered by Oakland Plumbing Experts. Emergency plumbing, drain cleaning, water heater repair, leak detection & more in Oakland, CA.',
}

const services = [
  { image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80', title: 'Emergency Plumbing', desc: '24/7 emergency response in 30 minutes or less.', href: '/services/emergency-plumbing' },
  { image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80', title: 'Drain Cleaning', desc: 'Hydro-jetting and professional drain clearing.', href: '/services/drain-cleaning' },
  { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', title: 'Water Heater Repair', desc: 'All brands repaired or replaced same day.', href: '/services/water-heater-repair' },
  { image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80', title: 'Leak Detection', desc: 'Non-invasive technology to find hidden leaks.', href: '/services/leak-detection' },
  { image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', title: 'Sewer Line Repair', desc: 'Trenchless sewer repair with minimal disruption.', href: '/services/sewer-line-repair' },
  { image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80', title: 'Pipe Repair', desc: 'Burst, cracked, or corroded pipes fixed fast.', href: '/services/pipe-repair' },
  { image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', title: 'Toilet Repair', desc: 'Running toilets, clogs, and full replacements.', href: '/services/toilet-repair' },
  { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', title: 'Commercial Plumbing', desc: 'Full-service plumbing for Oakland businesses.', href: '/services/commercial-plumbing' },
]

export default function ServicesPage() {
  return (
    <>
      <SchemaOrg breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }]} />

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Plumbing Services in Oakland, CA</h1>
          <p className="text-blue-200 text-lg mb-6">Licensed, insured plumbers serving Oakland and the East Bay — available 24/7</p>
          <a href="tel:5105550199" className="btn-primary text-lg py-4 px-8 inline-block">📞 Call (510) 555-0199</a>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-200 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <div className="h-44 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${s.image}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{s.title}</h2>
                  <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
                  <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
