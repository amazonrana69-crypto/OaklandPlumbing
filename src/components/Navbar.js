'use client'
import { useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { Phone, MapPin, ChevronDown, Menu, X, BookOpen, Mail } from 'lucide-react'

const services = [
  { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
  { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
  { label: 'Water Heater Repair', href: '/services/water-heater-repair' },
  { label: 'Leak Detection', href: '/services/leak-detection' },
  { label: 'Sewer Line Repair', href: '/services/sewer-line-repair' },
  { label: 'Pipe Repair', href: '/services/pipe-repair' },
  { label: 'Toilet Repair', href: '/services/toilet-repair' },
  { label: 'Commercial Plumbing', href: '/services/commercial-plumbing' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [areaOpen, setAreaOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-sm py-2 text-center border-b border-blue-800/40">
        <span className="text-slate-300 mr-4 inline-flex items-center gap-1.5">
          <MapPin size={13} className="text-orange-400" /> Serving Oakland & Surrounding Areas
        </span>
        <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/40 text-orange-300 font-bold px-3 py-0.5 rounded-full">
          <Phone size={12} /> (510) 555-0199 — Available 24/7
        </span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <Logo size={40} />
          <span className="font-extrabold text-blue-700 text-lg leading-tight">
            Oakland<br />
            <span className="text-gray-800 text-base font-bold">Plumbing Experts</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5 text-sm font-semibold text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>

          <div className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
            <button className="hover:text-blue-600 transition-colors flex items-center gap-1">
              Services <ChevronDown size={14} />
            </button>
            {dropOpen && (
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl py-2 w-60 border border-gray-100 z-50">
                <Link href="/services" className="block px-4 py-2 text-xs font-bold text-blue-600 uppercase tracking-wide border-b border-gray-100 mb-1 hover:bg-blue-50">
                  All Services →
                </Link>
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setAreaOpen(true)} onMouseLeave={() => setAreaOpen(false)}>
            <button className="hover:text-blue-600 transition-colors flex items-center gap-1">
              Service Areas <ChevronDown size={14} />
            </button>
            {areaOpen && (
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl py-2 w-48 border border-gray-100 z-50">
                {[
                  { label: 'Oakland', href: '/service-areas/oakland' },
                  { label: 'Berkeley', href: '/service-areas/berkeley' },
                  { label: 'Alameda', href: '/service-areas/alameda' },
                  { label: 'San Leandro', href: '/service-areas/san-leandro' },
                  { label: 'Emeryville', href: '/service-areas/emeryville' },
                ].map((a) => (
                  <Link key={a.href} href={a.href} className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm">
                    {a.label}, CA
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blogs" className="hover:text-blue-600 transition-colors flex items-center gap-1">
            <BookOpen size={14} /> Blogs
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors flex items-center gap-1">
            <Mail size={14} /> Contact
          </Link>

          <a href="tel:5105550199" className="btn-primary text-sm py-2 px-5 flex-shrink-0 inline-flex items-center gap-1.5">
            <Phone size={14} /> Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 rounded-md text-gray-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-5">
          <Link href="/" className="block py-2.5 font-semibold text-gray-800 border-b border-gray-100" onClick={() => setOpen(false)}>Home</Link>
          <p className="pt-3 pb-1 font-bold text-xs text-blue-600 uppercase tracking-wide">Services</p>
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="block py-2 pl-2 text-gray-700 hover:text-blue-600 text-sm" onClick={() => setOpen(false)}>
              {s.label}
            </Link>
          ))}
          <div className="border-t border-gray-100 mt-2 pt-2 space-y-0.5">
            <p className="pt-1 pb-1 font-bold text-xs text-blue-600 uppercase tracking-wide">Service Areas</p>
            {[
              { label: 'Oakland', href: '/service-areas/oakland' },
              { label: 'Berkeley', href: '/service-areas/berkeley' },
              { label: 'Alameda', href: '/service-areas/alameda' },
              { label: 'San Leandro', href: '/service-areas/san-leandro' },
              { label: 'Emeryville', href: '/service-areas/emeryville' },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="block py-2 pl-2 text-gray-700 hover:text-blue-600 text-sm" onClick={() => setOpen(false)}>
                {a.label}, CA
              </Link>
            ))}
            <Link href="/blogs" className="flex items-center gap-2 py-2.5 font-semibold text-gray-800" onClick={() => setOpen(false)}><BookOpen size={15} /> Blogs</Link>
            <Link href="/contact" className="flex items-center gap-2 py-2.5 font-semibold text-gray-800" onClick={() => setOpen(false)}><Mail size={15} /> Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
