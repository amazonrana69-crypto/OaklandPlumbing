import Link from 'next/link'
import Logo from '@/components/Logo'
import { MapPin, Clock, Home, Phone } from 'lucide-react'

const cols = [
  {
    title: 'Services',
    links: [
      { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
      { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
      { label: 'Water Heater Repair', href: '/services/water-heater-repair' },
      { label: 'Leak Detection', href: '/services/leak-detection' },
      { label: 'Sewer Line Repair', href: '/services/sewer-line-repair' },
      { label: 'Pipe Repair', href: '/services/pipe-repair' },
      { label: 'Toilet Repair', href: '/services/toilet-repair' },
      { label: 'Commercial Plumbing', href: '/services/commercial-plumbing' },
    ],
  },
  {
    title: 'Service Areas',
    links: [
      { label: 'Oakland, CA', href: '/service-areas/oakland' },
      { label: 'Berkeley, CA', href: '/service-areas/berkeley' },
      { label: 'Alameda, CA', href: '/service-areas/alameda' },
      { label: 'San Leandro, CA', href: '/service-areas/san-leandro' },
      { label: 'Emeryville, CA', href: '/service-areas/emeryville' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/#faq' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <Logo size={40} />
            <span className="font-extrabold text-white text-lg">Oakland Plumbing Experts</span>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Licensed & insured plumbers serving Oakland, CA and surrounding areas. Available 24/7 for all plumbing emergencies.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={14} className="text-orange-400 flex-shrink-0" />
              <span>Oakland, California, USA</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Phone size={14} className="text-orange-400 flex-shrink-0" />
              <span>(510) 555-0199</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock size={14} className="text-orange-400 flex-shrink-0" />
              <span>24/7 — Always Open</span>
            </div>
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">{col.title}</h3>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm hover:text-blue-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Oakland Plumbing Experts. All rights reserved. | Oakland, California, USA
      </div>
    </footer>
  )
}
