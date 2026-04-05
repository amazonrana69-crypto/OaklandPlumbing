import Link from 'next/link'
import { Phone, Calendar, ShieldCheck, Zap, Award, DollarSign } from 'lucide-react'

const badges = [
  { Icon: ShieldCheck, label: 'Licensed & Insured' },
  { Icon: Zap, label: '30-Min Response' },
  { Icon: Award, label: 'Certified Plumbers' },
  { Icon: DollarSign, label: 'Upfront Pricing' },
]

export default function Hero({ title, subtitle, showBadges, singleCta, image }) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${image}')` }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <Zap size={14} /> Available 24/7 — Emergency Plumbing Oakland
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fed7aa 55%, #f97316 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 2px 16px rgba(249,115,22,0.4))' }}>
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className={`flex ${singleCta ? 'justify-center' : 'flex-col sm:flex-row gap-4 justify-center'}`}>
          <a
            href="tel:+15105550199"
            className="inline-flex items-center gap-2 text-lg font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-xl"
            style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)', color: '#fff', boxShadow: '0 8px 32px rgba(249,115,22,0.45)' }}
          >
            <Phone size={20} /> Call Now — (510) 555-0199
          </a>

          {!singleCta && (
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-lg font-bold py-4 px-8 rounded-xl border-2 border-white/40 bg-white/10 hover:bg-white/20 transition-all duration-200"
            >
              <Calendar size={20} /> Book Online
            </Link>
          )}
        </div>

        {showBadges && (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {badges.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
                <Icon size={16} className="text-orange-400" />
                {label}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
