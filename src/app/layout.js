import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  metadataBase: new URL('https://oaklandplumbingexperts.com'),
  title: {
    default: 'Oakland Plumbing Experts | 24/7 Emergency Plumber in Oakland, CA',
    template: '%s | Oakland Plumbing Experts',
  },
  description:
    'Oakland Plumbing Experts — licensed, insured plumbers serving Oakland, CA. 24/7 emergency plumbing, drain cleaning, water heater repair & more. Call (510) 555-0199.',
  keywords: ['plumber Oakland', 'emergency plumber Oakland', 'drain cleaning Oakland', 'water heater repair Oakland'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Oakland Plumbing Experts',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
