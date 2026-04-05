import ContactForm from '@/components/ContactForm'
import SchemaOrg from '@/components/SchemaOrg'
import { MapPin, Clock, Phone, Mail, ShieldCheck, Zap } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | Oakland Plumbing Experts | (510) 555-0199',
  description: 'Contact Oakland Plumbing Experts for fast, reliable plumbing service. Call (510) 555-0199 or fill out our form. 24/7 emergency service available.',
}

const contactDetails = [
  { Icon: Phone, label: 'Phone', value: '(510) 555-0199', href: 'tel:5105550199' },
  { Icon: MapPin, label: 'Location', value: 'Oakland, California, USA' },
  { Icon: Clock, label: 'Hours', value: '24/7 — Always Open' },
  { Icon: Mail, label: 'Email', value: 'info@oaklandplumbingexperts.com' },
]

const trustItems = [
  { Icon: Zap, title: '30-Min Response', desc: 'We guarantee arrival within 30 minutes for any emergency in Oakland.' },
  { Icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Fully licensed by the State of California and fully insured for your protection.' },
]

export default function ContactPage() {
  return (
    <>
      <SchemaOrg breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />

      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden min-h-[320px] flex items-center">
        {/* Dark base */}
        <div className="absolute inset-0 bg-slate-900" />
        {/* Pipe grid SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice" fill="none">
          <rect x="0" y="50" width="250" height="12" rx="6" fill="white"/>
          <rect x="290" y="50" width="180" height="12" rx="6" fill="white"/>
          <rect x="510" y="50" width="300" height="12" rx="6" fill="white"/>
          <rect x="860" y="50" width="340" height="12" rx="6" fill="white"/>
          <rect x="284" y="50" width="12" height="110" rx="6" fill="white"/>
          <rect x="504" y="50" width="12" height="110" rx="6" fill="white"/>
          <rect x="854" y="50" width="12" height="110" rx="6" fill="white"/>
          <rect x="0" y="160" width="290" height="12" rx="6" fill="white"/>
          <rect x="330" y="160" width="530" height="12" rx="6" fill="white"/>
          <rect x="910" y="160" width="290" height="12" rx="6" fill="white"/>
          <rect x="324" y="160" width="12" height="110" rx="6" fill="white"/>
          <rect x="854" y="160" width="12" height="110" rx="6" fill="white"/>
          <rect x="0" y="270" width="330" height="12" rx="6" fill="white"/>
          <rect x="370" y="270" width="490" height="12" rx="6" fill="white"/>
          <rect x="900" y="270" width="300" height="12" rx="6" fill="white"/>
          <circle cx="290" cy="50" r="9" fill="white"/>
          <circle cx="510" cy="50" r="9" fill="white"/>
          <circle cx="860" cy="50" r="9" fill="white"/>
          <circle cx="330" cy="160" r="9" fill="white"/>
          <circle cx="860" cy="160" r="9" fill="white"/>
          <circle cx="370" cy="270" r="9" fill="white"/>
          <rect x="100" y="44" width="22" height="22" rx="4" fill="white"/>
          <rect x="650" y="154" width="22" height="22" rx="4" fill="white"/>
          <rect x="1050" y="264" width="22" height="22" rx="4" fill="white"/>
        </svg>
        {/* Orange glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-40 bg-orange-500/15 blur-3xl rounded-full" />
        {/* Left blue glow */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full" />

        <div className="relative w-full max-w-3xl mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fed7aa 60%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 2px 12px rgba(234,88,12,0.35))' }}
          >
            Contact Oakland Plumbing Experts
          </h1>
          <p className="text-slate-300 text-lg">Get a free estimate or request emergency service — we respond within 30 minutes.</p>
        </div>
      </section>

      {/* Main content */}
      <section className="relative py-16 overflow-hidden">
        {/* UI background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-100" />
        {/* Subtle pipe pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" fill="none">
          <rect x="0" y="80" width="200" height="10" rx="5" fill="#1e40af"/>
          <rect x="240" y="80" width="300" height="10" rx="5" fill="#1e40af"/>
          <rect x="234" y="80" width="10" height="120" rx="5" fill="#1e40af"/>
          <rect x="234" y="190" width="400" height="10" rx="5" fill="#1e40af"/>
          <circle cx="239" cy="80" r="8" fill="#1e40af"/>
          <circle cx="239" cy="195" r="8" fill="#1e40af"/>
          <rect x="800" y="120" width="400" height="10" rx="5" fill="#1e40af"/>
          <rect x="800" y="120" width="10" height="150" rx="5" fill="#1e40af"/>
          <rect x="800" y="260" width="250" height="10" rx="5" fill="#1e40af"/>
          <circle cx="805" cy="125" r="8" fill="#1e40af"/>
          <rect x="400" y="400" width="500" height="10" rx="5" fill="#1e40af"/>
          <rect x="890" y="400" width="10" height="200" rx="5" fill="#1e40af"/>
          <rect x="700" y="590" width="200" height="10" rx="5" fill="#1e40af"/>
          <circle cx="895" cy="405" r="8" fill="#1e40af"/>
          <rect x="50" y="500" width="10" height="200" rx="5" fill="#1e40af"/>
          <rect x="50" y="690" width="300" height="10" rx="5" fill="#1e40af"/>
          <circle cx="55" cy="505" r="8" fill="#1e40af"/>
          <rect x="120" y="74" width="18" height="18" rx="3" fill="#1e40af"/>
          <rect x="950" y="254" width="18" height="18" rx="3" fill="#1e40af"/>
          <rect x="450" y="394" width="18" height="18" rx="3" fill="#1e40af"/>
        </svg>
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/40 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start z-10">

          {/* Left — contact info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>

            <div className="space-y-4 mb-8">
              {contactDetails.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{label}</p>
                    {href ? (
                      <a href={href} className="font-bold text-blue-700 hover:underline">{value}</a>
                    ) : (
                      <p className="font-bold text-gray-900">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust items */}
            <div className="space-y-4">
              {trustItems.map(({ Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Oakland Plumbing Experts Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.33596!3d37.8044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857e2f7d3a8b0b%3A0x5a1b2c3d4e5f6a7b!2sOakland%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-12 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold mb-2">Need Emergency Plumbing Right Now?</h2>
          <p className="text-blue-200 mb-4">Skip the form — call us directly for immediate response.</p>
          <a href="tel:5105550199" className="inline-flex items-center gap-2 bg-white text-blue-700 font-extrabold text-lg py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
            <Phone size={20} /> (510) 555-0199
          </a>
        </div>
      </section>
    </>
  )
}
