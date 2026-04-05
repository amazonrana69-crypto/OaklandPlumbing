import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import ServiceAreas from '@/components/ServiceAreas'
import SchemaOrg from '@/components/SchemaOrg'
import { Zap, ShieldCheck, DollarSign, BadgeCheck } from 'lucide-react'

const relatedServices = [
  { label: 'Emergency Plumbing', href: '/services/emergency-plumbing', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' },
  { label: 'Drain Cleaning', href: '/services/drain-cleaning', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80' },
  { label: 'Water Heater Repair', href: '/services/water-heater-repair', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { label: 'Leak Detection', href: '/services/leak-detection', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&q=80' },
  { label: 'Sewer Line Repair', href: '/services/sewer-line-repair', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80' },
  { label: 'Pipe Repair', href: '/services/pipe-repair', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80' },
  { label: 'Toilet Repair', href: '/services/toilet-repair', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80' },
  { label: 'Commercial Plumbing', href: '/services/commercial-plumbing', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80' },
]

export default function ServicePageTemplate({ slug, data }) {
  return (
    <>
      <SchemaOrg
        service={{ name: data.title, description: data.metaDesc }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: data.defaultService, href: `/services/${slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 py-3 px-4 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>›</span>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <span>›</span>
          <span className="text-gray-900 font-semibold">{data.defaultService}</span>
        </div>
      </nav>

      {/* Hero */}
      <Hero title={data.title} subtitle={data.subtitle} image={data.image} />

      {/* Description + Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.defaultService} in Oakland, CA</h2>
            <p className="text-gray-600 leading-relaxed">{data.description}</p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-5">What's Included</h3>
            <ul className="space-y-3">
              {data.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="relative py-10 text-white overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 100" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="20" width="200" height="10" rx="5" fill="white"/>
          <rect x="240" y="20" width="300" height="10" rx="5" fill="white"/>
          <rect x="580" y="20" width="250" height="10" rx="5" fill="white"/>
          <rect x="870" y="20" width="330" height="10" rx="5" fill="white"/>
          <rect x="0" y="70" width="150" height="10" rx="5" fill="white"/>
          <rect x="190" y="70" width="400" height="10" rx="5" fill="white"/>
          <rect x="630" y="70" width="200" height="10" rx="5" fill="white"/>
          <rect x="870" y="70" width="330" height="10" rx="5" fill="white"/>
          <rect x="234" y="20" width="10" height="60" rx="5" fill="white"/>
          <rect x="574" y="20" width="10" height="60" rx="5" fill="white"/>
          <rect x="864" y="20" width="10" height="60" rx="5" fill="white"/>
          <circle cx="239" cy="20" r="7" fill="white"/>
          <circle cx="579" cy="20" r="7" fill="white"/>
          <circle cx="869" cy="70" r="7" fill="white"/>
          <rect x="100" y="14" width="20" height="20" rx="3" fill="white"/>
          <rect x="700" y="64" width="20" height="20" rx="3" fill="white"/>
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-16 bg-orange-500/20 blur-2xl rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center z-10">
          {[
            { Icon: Zap, label: '30-Min Response' },
            { Icon: ShieldCheck, label: 'Licensed & Insured' },
            { Icon: DollarSign, label: 'Upfront Pricing' },
            { Icon: BadgeCheck, label: 'Warranty Included' },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-orange-400/30 flex items-center justify-center">
                <Icon size={22} className="text-orange-400" />
              </div>
              <p className="font-bold text-sm text-white">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreas />

      {/* Related Services — image cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Plumbing Services in Oakland</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {relatedServices
              .filter((s) => s.href !== `/services/${slug}`)
              .map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all hover:-translate-y-1 duration-200"
                >
                  <div
                    className="h-24 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${s.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-2 left-0 right-0 text-center text-white text-xs font-bold px-2">{s.label}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">{data.defaultService} FAQs</h2>
          <p className="text-gray-600 text-center mb-8">Common questions about our {data.defaultService.toLowerCase()} services in Oakland</p>
          <FAQ items={data.faqs} />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request {data.defaultService} Service</h2>
            <p className="text-gray-600 mb-6">Get a free estimate for {data.defaultService.toLowerCase()} in Oakland. We respond within 30 minutes.</p>
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-1">Need immediate help?</p>
              <p className="text-blue-200 text-sm">Call us now — we're available 24/7</p>
            </div>
          </div>
          <ContactForm defaultService={data.defaultService} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-14 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Need {data.defaultService} in Oakland?</h2>
          <p className="text-blue-200">Licensed plumbers ready now. 30-minute response guaranteed.</p>
        </div>
      </section>
    </>
  )
}
