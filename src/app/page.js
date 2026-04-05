import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import FAQ from '@/components/FAQ'
import ServiceAreas from '@/components/ServiceAreas'
import SchemaOrg from '@/components/SchemaOrg'
import Link from 'next/link'
import { ShieldCheck, Zap, Award, DollarSign, Mail } from 'lucide-react'

const services = [
  { image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80', title: 'Emergency Plumbing', description: 'Burst pipes, flooding, or any plumbing crisis — we arrive in 30 minutes or less, 24/7.', href: '/services/emergency-plumbing' },
  { image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80', title: 'Drain Cleaning', description: 'Clogged drains cleared fast using hydro-jetting and professional-grade equipment.', href: '/services/drain-cleaning' },
  { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', title: 'Water Heater Repair', description: 'No hot water? We repair and replace all water heater brands same day.', href: '/services/water-heater-repair' },
  { image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80', title: 'Leak Detection', description: 'Advanced leak detection technology to find hidden leaks before they cause major damage.', href: '/services/leak-detection' },
  { image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', title: 'Sewer Line Repair', description: 'Trenchless sewer repair and replacement with minimal disruption to your property.', href: '/services/sewer-line-repair' },
  { image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80', title: 'Pipe Repair', description: 'Cracked, corroded, or burst pipes repaired or replaced with lasting solutions.', href: '/services/pipe-repair' },
  { image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', title: 'Toilet Repair', description: 'Running toilets, clogs, and full replacements handled quickly and affordably.', href: '/services/toilet-repair' },
  { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', title: 'Commercial Plumbing', description: 'Full-service commercial plumbing for Oakland businesses, restaurants, and offices.', href: '/services/commercial-plumbing' },
]

const trustBadges = [
  { Icon: ShieldCheck, label: 'Licensed & Insured', sub: 'CA State Licensed' },
  { Icon: Zap, label: '30-Min Response', sub: 'Emergency Guarantee' },
  { Icon: Award, label: 'Certified Plumbers', sub: '15+ Years Experience' },
  { Icon: DollarSign, label: 'Upfront Pricing', sub: 'No Hidden Fees' },
]

const whyUs = [
  { image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80', title: '30-Minute Response', desc: 'We guarantee arrival within 30 minutes for emergencies anywhere in Oakland.' },
  { image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=400&q=80', title: 'Local Oakland Experts', desc: 'Born and raised in Oakland — we know every neighborhood and local code.' },
  { image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80', title: 'Upfront Pricing', desc: 'No hidden fees. You get a clear quote before any work begins.' },
  { image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80', title: 'Warranty-Backed Work', desc: 'All repairs come with a written warranty for your peace of mind.' },
]

const faqs = [
  { q: 'How fast can you arrive for an emergency?', a: 'We guarantee a 30-minute response time for plumbing emergencies in Oakland and surrounding areas. Our trucks are strategically stationed throughout the East Bay for the fastest possible response.' },
  { q: 'Do you offer 24/7 emergency plumbing services?', a: 'Yes! We are available 24 hours a day, 7 days a week, 365 days a year — including holidays. Plumbing emergencies don\'t wait, and neither do we.' },
  { q: 'How much does plumbing service cost in Oakland?', a: 'Costs vary by job type. A drain cleaning typically starts at $99, while larger repairs depend on scope. We always provide a free, upfront estimate before starting any work — no surprises.' },
  { q: 'Do you provide free estimates?', a: 'Absolutely. We offer free estimates for all plumbing services. Call us at (510) 555-0199 or fill out our contact form and we\'ll get back to you within 30 minutes.' },
]

export default function HomePage() {
  return (
    <>
      <SchemaOrg breadcrumbs={[{ name: 'Home', href: '/' }]} />

      <Hero
        title="24/7 Emergency Plumbing Services in Oakland"
        subtitle="Fast response, licensed plumbers serving Oakland, CA and the entire East Bay. Call now — we arrive in 30 minutes."
        showBadges
        singleCta
        image="/plumbing_bg.jpg"
        image="/plumbing_bg.jpg"
      />

      {/* Trust Badges */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map(({ Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{label}</p>
                  <p className="text-xs text-gray-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="section-title">Our Plumbing Services in Oakland</h2>
          <p className="section-sub">From emergency repairs to routine maintenance — we handle it all</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((s) => <ServiceCard key={s.href} {...s} />)}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-base font-bold py-4 px-10 rounded-2xl text-white transition-all duration-200 shadow-2xl hover:scale-105 hover:shadow-orange-500/40"
              style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)', boxShadow: '0 8px 32px rgba(249,115,22,0.45)' }}
            >
              View All Services
              <span className="bg-white/20 rounded-lg px-2 py-0.5 text-sm">8 Services</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why Oakland Trusts Us</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Oakland Plumbing Experts has been the East Bay's most trusted plumbing company for over 15 years. We combine local expertise with professional-grade equipment to deliver fast, reliable, and affordable plumbing solutions.
              </p>
              <div className="space-y-4">
                {whyUs.map((w) => (
                  <div key={w.title} className="flex gap-4 items-center">
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${w.image}')` }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-0.5">{w.title}</h3>
                      <p className="text-gray-500 text-sm">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Need a Plumber Now */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-[320px] flex items-center justify-center p-8">
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 320" fill="none">
                <rect x="0" y="60" width="120" height="16" rx="8" fill="white"/>
                <rect x="104" y="60" width="16" height="80" rx="8" fill="white"/>
                <rect x="104" y="124" width="80" height="16" rx="8" fill="white"/>
                <rect x="168" y="60" width="16" height="80" rx="8" fill="white"/>
                <rect x="168" y="60" width="100" height="16" rx="8" fill="white"/>
                <rect x="252" y="60" width="16" height="120" rx="8" fill="white"/>
                <rect x="252" y="164" width="148" height="16" rx="8" fill="white"/>
                <rect x="280" y="20" width="16" height="56" rx="8" fill="white"/>
                <circle cx="280" cy="16" r="10" fill="white"/>
                <rect x="60" y="200" width="200" height="16" rx="8" fill="white"/>
                <rect x="60" y="200" width="16" height="80" rx="8" fill="white"/>
                <rect x="60" y="264" width="100" height="16" rx="8" fill="white"/>
                <circle cx="164" cy="208" r="8" fill="white"/>
              </svg>
              <div className="relative text-center text-white z-10">
                <div className="w-20 h-20 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center mx-auto mb-5">
                  <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="10" r="6" fill="white"/>
                    <path d="M14 28c0-5.5 4.5-10 10-10s10 4.5 10 10v4H14v-4z" fill="white"/>
                    <path d="M32 30l6 6-2 2-6-6v-2h2z" fill="white" fillOpacity="0.7"/>
                    <rect x="28" y="26" width="6" height="3" rx="1.5" transform="rotate(45 28 26)" fill="white" fillOpacity="0.7"/>
                    <rect x="17" y="32" width="5" height="10" rx="2.5" fill="white"/>
                    <rect x="26" y="32" width="5" height="10" rx="2.5" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold mb-3">Need a Plumber Now?</h3>
                <p className="text-blue-200 mb-5">We're standing by 24/7 for Oakland plumbing emergencies</p>
                <div className="flex justify-center gap-6 text-sm">
                  {[{ val: '28', unit: 'Min', label: 'Avg Response' }, { val: '15+', unit: 'Yrs', label: 'Experience' }, { val: '24/7', unit: '', label: 'Available' }].map((s, i) => (
                    <div key={i} className="text-center">
                      <p className="text-2xl font-extrabold text-orange-400">{s.val}<span className="text-sm">{s.unit}</span></p>
                      <p className="text-blue-300 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceAreas />

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <p className="section-sub text-center">Everything you need to know about our Oakland plumbing services</p>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title">Get a Free Plumbing Estimate</h2>
          <p className="text-gray-600 mb-8">Fill out our contact form and we'll respond within 30 minutes. For immediate emergencies, call us directly.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-lg font-bold py-4 px-10 rounded-xl transition-all duration-200 shadow-xl"
            style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)', color: '#fff', boxShadow: '0 8px 32px rgba(249,115,22,0.45)' }}
          >
            <Mail size={20} /> Contact Us — Free Estimate
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice" fill="none">
          <rect x="0" y="40" width="300" height="12" rx="6" fill="white"/>
          <rect x="340" y="40" width="200" height="12" rx="6" fill="white"/>
          <rect x="580" y="40" width="350" height="12" rx="6" fill="white"/>
          <rect x="970" y="40" width="230" height="12" rx="6" fill="white"/>
          <rect x="0" y="150" width="180" height="12" rx="6" fill="white"/>
          <rect x="220" y="150" width="400" height="12" rx="6" fill="white"/>
          <rect x="660" y="150" width="200" height="12" rx="6" fill="white"/>
          <rect x="900" y="150" width="300" height="12" rx="6" fill="white"/>
          <rect x="294" y="40" width="12" height="122" rx="6" fill="white"/>
          <rect x="574" y="40" width="12" height="122" rx="6" fill="white"/>
          <rect x="214" y="150" width="12" height="122" rx="6" fill="white"/>
          <circle cx="300" cy="40" r="10" fill="white"/>
          <circle cx="580" cy="40" r="10" fill="white"/>
          <circle cx="220" cy="150" r="10" fill="white"/>
          <rect x="120" y="34" width="24" height="24" rx="4" fill="white"/>
          <rect x="750" y="144" width="24" height="24" rx="4" fill="white"/>
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-orange-500/20 blur-3xl rounded-full" />
        <div className="relative max-w-3xl mx-auto px-4 z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Zap size={14} /> Available 24/7 — No Extra Charge
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Call Now for Emergency
            <span className="block" style={{ background: 'linear-gradient(90deg,#f97316,#fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Plumbing in Oakland
            </span>
          </h2>
          <p className="text-slate-300 text-lg mb-8">Licensed plumbers ready to respond in 30 minutes. Available 24/7, 365 days a year.</p>
          <div className="flex justify-center gap-8">
            {[{ val: '30', unit: 'Min', label: 'Response Time' }, { val: '15+', unit: 'Yrs', label: 'Experience' }, { val: '24/7', unit: '', label: 'Always Open' }].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-extrabold text-orange-400">{s.val}<span className="text-base ml-0.5 text-orange-300">{s.unit}</span></p>
                <p className="text-slate-400 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
