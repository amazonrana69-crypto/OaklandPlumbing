'use client'
import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

const serviceOptions = [
  'Emergency Plumbing', 'Drain Cleaning', 'Water Heater Repair',
  'Leak Detection', 'Sewer Line Repair', 'Pipe Repair',
  'Toilet Repair', 'Commercial Plumbing', 'Other',
]

export default function ContactForm({ defaultService = '' }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', service: defaultService, message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => { e.preventDefault(); setSubmitted(true) }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <CheckCircle2 size={52} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Request Received!</h3>
        <p className="text-green-700">We'll call you back within 30 minutes. For immediate help, call <a href="tel:5105550199" className="font-bold underline">(510) 555-0199</a>.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Estimate</h3>
      <p className="text-gray-500 text-sm mb-4">We respond within 30 minutes — guaranteed.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { name: 'name', label: 'Full Name *', placeholder: 'John Smith', required: true },
          { name: 'phone', label: 'Phone Number *', placeholder: '(510) 000-0000', type: 'tel', required: true },
          { name: 'email', label: 'Email Address', placeholder: 'you@email.com', type: 'email' },
          { name: 'city', label: 'City *', placeholder: 'Oakland', required: true },
        ].map((f) => (
          <div key={f.name}>
            <label className="block text-sm font-semibold text-gray-700 mb-1">{f.label}</label>
            <input
              required={f.required} name={f.name} value={form[f.name]}
              onChange={handle} placeholder={f.placeholder} type={f.type || 'text'}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed *</label>
        <select required name="service" value={form.service} onChange={handle} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
          <option value="">Select a service...</option>
          {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Describe Your Issue</label>
        <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Tell us what's happening..." className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
      </div>

      <button type="submit" className="w-full btn-primary text-base py-3.5 inline-flex items-center justify-center gap-2">
        <Send size={16} /> Send My Request — Free Estimate
      </button>

      <p className="text-center text-xs text-gray-400">Or call us directly: <a href="tel:5105550199" className="text-blue-600 font-semibold">(510) 555-0199</a></p>
    </form>
  )
}
