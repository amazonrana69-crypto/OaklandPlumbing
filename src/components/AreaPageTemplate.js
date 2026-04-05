import Link from 'next/link'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import SchemaOrg from '@/components/SchemaOrg'
import { Zap, ShieldCheck, DollarSign, BadgeCheck, Mail } from 'lucide-react'

const allServices = [
  { label: 'Emergency Plumbing', href: '/services/emergency-plumbing', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' },
  { label: 'Drain Cleaning', href: '/services/drain-cleaning', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80' },
  { label: 'Water Heater Repair', href: '/services/water-heater-repair', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { label: 'Leak Detection', href: '/services/leak-detection', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&q=80' },
  { label: 'Sewer Line Repair', href: '/services/sewer-line-repair', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80' },
  { label: 'Pipe Repair', href: '/services/pipe-repair', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80' },
  { label: 'Toilet Repair', href: '/services/toilet-repair', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80' },
  { label: 'Commercial Plumbing', href: '/services/commercial-plumbing', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80' },
]

const otherAreas = [
  { label: 'Oakland', href: '/service-areas/oakland' },
  { label: 'Berkeley', href: '/service-areas/berkeley' },
  { label: 'Alameda', href: '/service-areas/alameda' },
  { label: 'San Leandro', href: '/service-areas/san-leandro' },
  { label: 'Emeryville', href: '/service-areas/emeryville' },
]

export default function AreaPageTemplate({ slug, data }) {
  return (
    <>
      <SchemaOrg
        service={{ name: `Plumbing Services in ${data.city}`, description: data.metaDesc }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Service Areas', href: '/#service-areas' },
          { name: data.city, href: `/service-areas/${slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 py-3 px-4 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>›</span>
          <Link href="/#service-areas" className="hover:text-blue-600">Service Areas</Link>
          <span>›</span>
          <span className="text-gray-900 font-semibold">{data.city}, CA</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[480px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${data.image}')` }} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative w-full max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 max-w-4xl mx-auto">
            <span style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fed7aa 60%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 2px 12px rgba(234,88,12,0.35))' }}>
              {data.headline}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto drop-shadow">
            {data.subtitle}
          </p>
          <Link href="/#contact" className="btn-secondary text-lg py-4 px-10 inline-flex items-center justify-center gap-2"
            style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)', color: '#fff', boxShadow: '0 8px 32px rgba(249,115,22,0.45)', border: 'none' }}
          >
            <Mail size={20} /> Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-blue-700 py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { Icon: Zap, label: '30-Min Response' },
            { Icon: ShieldCheck, label: 'Licensed & Insured' },
            { Icon: DollarSign, label: 'Upfront Pricing' },
            { Icon: BadgeCheck, label: 'Warranty Included' },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center">
                <Icon size={20} className="text-white" />
              </div>
              <p className="font-bold text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About + Neighborhoods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Plumbing Services in {data.city}, {data.state}
            </h2>
            <p className="text-gray-600 leading-relaxed">{data.about}</p>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            {/* Dark UI background */}
            <div className="absolute inset-0 bg-slate-900" />
            {/* Pipe SVG pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 500 280" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="30" width="140" height="10" rx="5" fill="white"/>
              <rect x="180" y="30" width="120" height="10" rx="5" fill="white"/>
              <rect x="340" y="30" width="160" height="10" rx="5" fill="white"/>
              <rect x="174" y="30" width="10" height="80" rx="5" fill="white"/>
              <rect x="174" y="100" width="200" height="10" rx="5" fill="white"/>
              <rect x="364" y="30" width="10" height="140" rx="5" fill="white"/>
              <rect x="0" y="160" width="370" height="10" rx="5" fill="white"/>
              <rect x="60" y="160" width="10" height="80" rx="5" fill="white"/>
              <rect x="60" y="230" width="180" height="10" rx="5" fill="white"/>
              <rect x="230" y="100" width="10" height="70" rx="5" fill="white"/>
              <circle cx="179" cy="30" r="7" fill="white"/>
              <circle cx="369" cy="30" r="7" fill="white"/>
              <circle cx="179" cy="105" r="7" fill="white"/>
              <circle cx="65" cy="165" r="7" fill="white"/>
              <rect x="80" y="24" width="18" height="18" rx="3" fill="white"/>
              <rect cx="290" y="154" width="18" height="18" rx="3" fill="white"/>
            </svg>
            {/* Orange glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/15 blur-3xl rounded-full" />

            {/* Content */}
            <div className="relative p-8 z-10">
              <h3 className="text-xl font-bold text-white mb-5">
                Neighborhoods We Serve in {data.city}
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.neighborhoods.map((n) => (
                  <span key={n} className="bg-white/10 border border-white/20 text-white font-semibold text-sm px-3 py-1.5 rounded-lg hover:bg-white/20 transition-colors">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Our Services in {data.city}</h2>
          <p className="text-gray-500 text-center mb-10">Full-service plumbing for {data.city} homes and businesses</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all hover:-translate-y-1 duration-200"
              >
                <div
                  className="h-28 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${s.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <p className="absolute bottom-2 left-0 right-0 text-center text-white text-xs font-bold px-2">{s.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Other Areas We Serve</h2>
          <div className="flex flex-wrap gap-3">
            {otherAreas
              .filter((a) => a.href !== `/service-areas/${slug}`)
              .map((a) => (
                <Link key={a.href} href={a.href} className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-lg border border-blue-200 transition-colors text-sm">
                  {a.label}, CA
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Plumbing FAQs for {data.city}</h2>
          <p className="text-gray-500 text-center mb-8">Common questions from {data.city} residents</p>
          <FAQ items={data.faqs} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get a Free Estimate in {data.city}</h2>
            <p className="text-gray-600 mb-6">
              We serve {data.city}, {data.state} and respond within 30 minutes. Fill out the form or call us now.
            </p>
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-1">Available 24/7 in {data.city}</p>
              <p className="text-blue-200 text-sm">Call us now for immediate help</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-14 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Need a Plumber in {data.city}?</h2>
          <p className="text-blue-200">Licensed, insured, and ready in 30 minutes — call Oakland Plumbing Experts now.</p>
        </div>
      </section>
    </>
  )
}
