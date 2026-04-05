import Link from 'next/link'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata = {
  title: 'Plumbing Tips & Blogs | Oakland Plumbing Experts',
  description: 'Read expert plumbing tips, guides, and advice from Oakland Plumbing Experts. Learn how to prevent plumbing emergencies and maintain your home.',
}

const posts = [
  {
    slug: 'signs-you-need-emergency-plumber',
    title: '7 Signs You Need an Emergency Plumber Right Now',
    excerpt: 'Don\'t ignore these warning signs — a small leak can turn into a flood. Learn when to call an emergency plumber in Oakland immediately.',
    date: 'January 15, 2025',
    category: 'Emergency Plumbing',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
  },
  {
    slug: 'how-to-unclog-drain',
    title: 'How to Unclog a Drain: DIY Tips vs. When to Call a Pro',
    excerpt: 'Some clogs you can handle yourself — others need professional hydro-jetting. Here\'s how to tell the difference and avoid making it worse.',
    date: 'January 22, 2025',
    category: 'Drain Cleaning',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
  },
  {
    slug: 'water-heater-maintenance-tips',
    title: 'Water Heater Maintenance: 6 Tips to Extend Its Life',
    excerpt: 'A well-maintained water heater lasts 12+ years. Follow these simple steps to avoid costly replacements and keep hot water flowing.',
    date: 'February 3, 2025',
    category: 'Water Heater',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    slug: 'hidden-water-leak-signs',
    title: 'Hidden Water Leaks: 8 Warning Signs in Your Oakland Home',
    excerpt: 'Hidden leaks cost Oakland homeowners thousands every year. Spot these early warning signs before they become a major problem.',
    date: 'February 14, 2025',
    category: 'Leak Detection',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80',
  },
  {
    slug: 'trenchless-sewer-repair-guide',
    title: 'Trenchless Sewer Repair: What Oakland Homeowners Need to Know',
    excerpt: 'Trenchless technology lets us fix your sewer line without digging up your yard. Here\'s how it works and why it\'s the smarter choice.',
    date: 'February 28, 2025',
    category: 'Sewer Line',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    slug: 'when-to-repipe-your-home',
    title: 'When Should You Repipe Your Oakland Home?',
    excerpt: 'Galvanized pipes in older Oakland homes corrode over time. Learn the signs that it\'s time for a full repipe and what to expect.',
    date: 'March 10, 2025',
    category: 'Pipe Repair',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
  },
]

export default function BlogsPage() {
  return (
    <>
      <SchemaOrg breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Blogs', href: '/blogs' }]} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-16 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="relative max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Plumbing Tips & Guides</h1>
          <p className="text-blue-200 text-lg">Expert advice from Oakland's trusted plumbers — keep your home safe and your pipes flowing.</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 group">
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                </div>

                <div className="p-6">
                  {/* Category + read time */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-blue-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-14 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Have a Plumbing Problem Right Now?</h2>
          <p className="text-blue-200">Don't wait — our Oakland plumbers are available 24/7 for emergencies.</p>
        </div>
      </section>
    </>
  )
}
